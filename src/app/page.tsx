import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiciosGrid from '@/components/ServiciosGrid'
import Equipo from '@/components/Equipo'
import ScrollVisual from '@/components/ScrollVisual'
import MotionLink from '@/components/motion/MotionLink'
import { Reveal } from '@/components/motion/Reveal'
import ScrollText from '@/components/motion/ScrollText'
import JsonLd from '@/components/JsonLd'
import { homeSchema } from '@/lib/schema'

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema()} />
      <Header overlay />

      <main>
        <ScrollVisual>
          <Hero />

          <ServiciosGrid variant="dark" />

          <Equipo variant="dark" />

          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <Reveal>
                <p className="text-sm tracking-[0.2em] uppercase text-white/60">
                  Nuestra mirada
                </p>
              </Reveal>

              <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                <ScrollText text="Creamos imágenes que cuentan historias" />
              </h2>
            </div>
          </div>

          {/* Cierre: la home termina en la acción principal, no en el footer */}
          <div className="min-h-screen flex items-center justify-center px-4">
            <Reveal className="text-center text-white max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">¿Tu marca es la próxima?</h2>
              <p className="mt-4 text-lg text-white/75">
                Contanos tu idea y te enviamos una propuesta en menos de 24 horas.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <MotionLink
                  href="/contacto"
                  className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
                >
                  Pedir presupuesto
                </MotionLink>
                <MotionLink
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                >
                  Ver portfolio
                </MotionLink>
              </div>
            </Reveal>
          </div>
        </ScrollVisual>
      </main>

      <Footer />
    </>
  )
}
