import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiciosGrid from '@/components/ServiciosGrid'
import FadeToDark from '@/components/FadeToDark'
import MediosDePago from '@/components/MediosDePago'
import MotionLink from '@/components/motion/MotionLink'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = pageMetadata({
  title: 'Producción de Video, Fotos y Gestión de Redes',
  description:
    'Servicios de En Escena, estudio creativo en Uruguay: producción de video y reels, fotografía de producto, edición, diseño gráfico y gestión de redes sociales.',
  path: '/servicios',
})

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiciosGrid headingAs="h1" />

        {/* La grilla clara termina en to-amber-50/40 (lightSectionBg) sobre blanco */}
        <FadeToDark from="color-mix(in srgb, var(--color-amber-50) 40%, #ffffff)" />

        <MediosDePago />

        <section className="py-20 md:py-24 bg-brand-900 text-white text-center border-t border-white/10">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-medium">¿No sabés qué servicio necesitás?</h2>
            <p className="mt-4 text-white/70">
              Contanos tu objetivo y armamos una propuesta a medida, combinando lo que tu marca realmente necesita.
            </p>
            <MotionLink
              href="/contacto"
              className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Pedir propuesta a medida
            </MotionLink>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
