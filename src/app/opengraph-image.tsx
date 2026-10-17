import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const alt = 'En Escena, agencia audiovisual y estudio creativo en Uruguay'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOgImage({
    eyebrow: 'Agencia audiovisual · Uruguay',
    title: 'Tu marca, en el centro de la escena',
    subtitle: 'Producción de video, fotografía, diseño y gestión de redes.',
  })
}
