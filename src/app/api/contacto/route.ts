import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'
import { getServicio } from '@/lib/servicios'

export const runtime = 'nodejs'

// Anti-spam:
// 1. Honeypot: campo oculto "website" que solo completan los bots.
// 2. Tiempo mínimo: el formulario manda cuándo se cargó; menos de 3s es un bot.
// 3. Rate limit por IP (en memoria, por instancia; suficiente para frenar ráfagas).
// 4. Origin: solo se aceptan envíos desde el propio sitio.

const MIN_FILL_MS = 3_000
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1_000

const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)

  if (hits.size > 1_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key)
    }
  }

  return recent.length > RATE_LIMIT
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin) return false
  try {
    return new URL(origin).host === request.headers.get('host')
  } catch {
    return false
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function field(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Respuesta "exitosa" falsa para bots, así no aprenden qué los delató.
const fakeOk = () => NextResponse.json({ ok: true })

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Origen no permitido.' }, { status: 403 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Recibimos muchos mensajes seguidos. Probá de nuevo en unos minutos.' },
      { status: 429 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  if (field(body.website, 200)) return fakeOk()

  const startedAt = Number(body.startedAt)
  const elapsed = Date.now() - startedAt
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FORM_AGE_MS) {
    return fakeOk()
  }

  const nombre = field(body.nombre, 100)
  const email = field(body.email, 200)
  const servicioSlug = field(body.servicio, 60)
  const mensaje = field(body.mensaje, 5_000)

  if (nombre.length < 2 || !EMAIL_RE.test(email) || mensaje.length < 10) {
    return NextResponse.json(
      { error: 'Revisá los datos: nombre, un email válido y un mensaje de al menos 10 caracteres.' },
      { status: 400 },
    )
  }

  const servicio = servicioSlug === 'pack'
    ? 'Pack completo'
    : getServicio(servicioSlug)?.title ?? 'No especificado'

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !from || !to) {
    console.error('[contacto] Faltan RESEND_API_KEY, CONTACT_FROM_EMAIL o CONTACT_TO_EMAIL')
    return NextResponse.json(
      { error: 'El formulario no está disponible en este momento. Escribinos por email o WhatsApp.' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: to.split(',').map((address) => address.trim()),
    replyTo: email,
    subject: `Nueva consulta web: ${nombre} · ${servicio}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nServicio: ${servicio}\n\n${mensaje}`,
    html: `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Servicio:</strong> ${escapeHtml(servicio)}</p>
      <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
    `,
  })

  if (error) {
    console.error('[contacto] Error de Resend:', error)
    return NextResponse.json(
      { error: 'No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
