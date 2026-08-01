import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiciosGrid from '@/components/ServiciosGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Descubre todos los servicios de En Escena: fotografía, video, reels, diseño gráfico y marketing digital para marcas uruguayas.',
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Qué hacemos</p>
            <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Nuestros servicios</h1>
            <p className="mt-4 text-brand-500 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad de crear algo extraordinario. Elegí el servicio que necesitás o armamos un paquete a medida.
            </p>
          </div>
        </div>
        <ServiciosGrid />
      </main>
      <Footer />
    </>
  )
}