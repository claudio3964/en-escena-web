import type { Metadata } from 'next'
import './globals.css'
import MotionProvider from '@/components/motion/MotionProvider'
import WhatsAppButton from '@/components/WhatsAppButton'
import { site, siteUrl } from '@/lib/site'

const description =
  'Agencia audiovisual y estudio creativo en Uruguay. Producción de video, reels, fotografía, diseño gráfico y gestión de redes para marcas que quieren destacar.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Agencia Audiovisual en Uruguay | En Escena Estudio Creativo',
    template: '%s | En Escena',
  },
  description,
  applicationName: site.name,
  keywords: [
    'agencia audiovisual Uruguay',
    'producción de video',
    'estudio creativo',
    'gestión de redes',
    'producción audiovisual Uruguay',
    'reels para empresas',
    'fotografía de producto',
    'diseño gráfico',
    'marketing digital Uruguay',
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'Producción audiovisual',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: '/',
    siteName: site.name,
    title: 'Agencia Audiovisual en Uruguay | En Escena Estudio Creativo',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia Audiovisual en Uruguay | En Escena Estudio Creativo',
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
  formatDetection: { telephone: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white">
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  )
}