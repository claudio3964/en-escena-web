import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'

export const ogSize = { width: 1200, height: 630 }
// JPEG en vez del PNG que genera ImageResponse: con una foto de fondo el PNG pesa >1 MB,
// y WhatsApp no muestra vistas previas tan pesadas.
export const ogContentType = 'image/jpeg'

/**
 * Tarjeta de vista previa para WhatsApp y redes: foto del estudio de fondo,
 * velo oscuro con degradado y la marca en primer plano.
 */
export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  image = 'hero-foto1.jpeg',
}: {
  eyebrow: string
  title: string
  subtitle: string
  image?: string
}) {
  const photo = await readFile(join(process.cwd(), 'public', 'images', image))
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

  const png = new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', backgroundColor: '#121212' }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse no usa next/image */}
        <img src={photoSrc} alt="" width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            // Satori (next/og) no soporta "inset": posición y tamaño explícitos
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundImage: 'linear-gradient(100deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 45%, rgba(10,10,10,0.3) 100%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'white', fontSize: 30, letterSpacing: -0.5 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: '#fbbf24' }} />
            En Escena
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760 }}>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 22, letterSpacing: 6, textTransform: 'uppercase', marginBottom: 20 }}>
              {eyebrow}
            </div>
            <div style={{ color: 'white', fontSize: 68, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 28, lineHeight: 1.4, marginTop: 24 }}>{subtitle}</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  )

  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer()

  return new Response(new Uint8Array(jpeg), {
    headers: { 'Content-Type': ogContentType, 'Cache-Control': 'public, max-age=31536000, immutable' },
  })
}
