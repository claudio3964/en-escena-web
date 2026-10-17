// Datos de contacto centralizados. El número de WhatsApp oficial es 098 313 196;
// se puede sobrescribir con NEXT_PUBLIC_WHATSAPP_NUMBER (formato internacional, solo dígitos).

const WHATSAPP_OFICIAL = '59898313196'
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_OFICIAL).replace(/\D/g, '')

export const WHATSAPP_MENSAJE = '¡Hola En Escena! Quisiera pedir un presupuesto para mi proyecto.'

/**
 * URL pública del sitio, para sitemap, robots, canonical y OpenGraph.
 * Prioridad: NEXT_PUBLIC_SITE_URL > dominio de producción que Vercel inyecta en el build
 * (VERCEL_PROJECT_PRODUCTION_URL) > dominio de la marca.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://enescena.uy'
).replace(/\/$/, '')

export const site = {
  name: 'En Escena',
  tagline: 'Agencia audiovisual y estudio creativo en Uruguay',
  email: 'enescena.estudiocreativo@gmail.com',
  instagram: {
    handle: '@enescena.uy',
    url: 'https://instagram.com/enescena.uy',
  },
  whatsapp: {
    number: whatsappNumber,
    enabled: whatsappNumber.length >= 10,
  },
}

/** Link de WhatsApp con mensaje precargado. Si no hay número configurado, cae al formulario. */
export function whatsappUrl(message = WHATSAPP_MENSAJE) {
  if (!site.whatsapp.enabled) return '/contacto'
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

/** Formatea 59899123456 como +598 99 123 456. */
export function whatsappDisplay() {
  const n = site.whatsapp.number
  if (!site.whatsapp.enabled) return 'Escribinos'
  if (n.startsWith('598') && n.length === 11) {
    return `+598 ${n.slice(3, 5)} ${n.slice(5, 8)} ${n.slice(8)}`
  }
  return `+${n}`
}
