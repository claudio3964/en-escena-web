import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGallery from '@/components/PortfolioGallery'
import MotionLink from '@/components/motion/MotionLink'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = pageMetadata({
  title: 'Portfolio de Producción Audiovisual',
  description:
    'Trabajos de video, fotografía y diseño de En Escena, agencia audiovisual en Uruguay. Mirá cómo contamos la historia de cada marca.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center py-12 md:py-16">
              <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-medium text-brand-900 tracking-tight">
                Historias que ya contamos
              </h1>
              <p className="mt-6 text-lg text-brand-500 max-w-2xl mx-auto">
                Una selección de proyectos de fotografía, video y diseño. Cada pieza nace de entender a la marca y a su público.
              </p>
            </Reveal>

            <PortfolioGallery />
          </div>
        </section>

        <section className="py-20 md:py-24 bg-brand-900 text-white text-center">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-medium">¿Tu marca es la próxima?</h2>
            <p className="mt-4 text-white/70">Contanos tu idea y te enviamos una propuesta en menos de 24 horas.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MotionLink
                href="/contacto"
                className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
              >
                Pedir presupuesto
              </MotionLink>
              <MotionLink
                href="/servicios"
                className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                Ver servicios
              </MotionLink>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
