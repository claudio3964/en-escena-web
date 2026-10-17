import { ogContentType, ogSize, renderOgImage } from '@/lib/og'
import { getServicio, servicios } from '@/lib/servicios'

export const alt = 'Servicio de En Escena, agencia audiovisual en Uruguay'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return servicios.map((servicio) => ({ slug: servicio.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const servicio = getServicio((await params).slug)

  return renderOgImage({
    eyebrow: servicio ? `${servicio.title} · Uruguay` : 'Agencia audiovisual · Uruguay',
    title: servicio?.headline ?? 'Tu marca, en el centro de la escena',
    subtitle: 'En Escena · Estudio creativo audiovisual',
    image: servicio?.image.split('/').pop(),
  })
}
