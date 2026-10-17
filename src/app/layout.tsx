import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/motion/MotionProvider'
import WhatsAppButton from '@/components/WhatsAppButton'
import { site, siteUrl } from '@/lib/site'

// Tipografía de la marca, autoalojada por next/font (sin pedidos a Google en runtime).
// next/font ajusta las métricas de la fuente de respaldo, así el texto no salta al cargar.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

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
  verification: {
    google: '_so52SQLsy4N7VapWUVGYRriiUrcsWjlMXV1yrEpMVs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  )
}