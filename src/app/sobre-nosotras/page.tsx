import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Equipo from '@/components/Equipo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nosotras',
  description: 'Conocé al equipo de En Escena: Tamara, Camilla y Jamyla. Especialistas en marketing, fotografía, video y diseño.',
}

export default function SobreNosotrasPage() {
  return (
    <>
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Sobre nosotras</h1>
          <p className="mt-4 text-brand-500 max-w-2xl leading-relaxed">
            En Escena nació de la unión de tres mujeres apasionadas por la comunicación visual. 
            Combinamos estrategia, arte y técnica para que tu marca no pase desapercibida.
          </p>
          <p className="mt-4 text-brand-500 max-w-2xl leading-relaxed">
            Creemos en el trabajo colaborativo, en la escucha activa del cliente y en la obsesión por los detalles. 
            Cada proyecto es una nueva escena que merece ser protagonista.
          </p>
        </div>
        <Equipo />
      </main>
      <Footer />
    </>
  )
}