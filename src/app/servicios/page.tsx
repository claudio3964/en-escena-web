import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiciosGrid from '@/components/ServiciosGrid'
import Equipo from '@/components/Equipo'
import ScrollVisual from '@/components/ScrollVisual'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <ScrollVisual>
          <Hero />

          <ServiciosGrid />

          <Equipo />

          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm tracking-[0.2em] uppercase text-white/60">
                Nuestra mirada
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-medium">
                Creamos imágenes que cuentan historias
              </h2>
            </div>
          </div>
        </ScrollVisual>
      </main>

      <Footer />
    </>
  )
}