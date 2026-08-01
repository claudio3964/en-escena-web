import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'En Escena | Marketing Digital, Fotografía y Video',
    template: '%s | En Escena',
  },
  description: 'Agencia creativa especializada en marketing digital, fotografía de producto, video, reels, diseño gráfico y dirección de arte.',
  keywords: ['marketing digital', 'fotografía', 'video', 'reels', 'diseño gráfico', 'dirección de arte', 'Uruguay'],
  authors: [{ name: 'En Escena' }],
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: 'https://enescena.uy',
    siteName: 'En Escena',
    title: 'En Escena | Marketing Digital, Fotografía y Video',
    description: 'Agencia creativa especializada en marketing digital, fotografía de producto, video, reels y diseño gráfico.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En Escena | Marketing Digital, Fotografía y Video',
    description: 'Agencia creativa especializada en marketing digital, fotografía de producto, video, reels y diseño gráfico.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}