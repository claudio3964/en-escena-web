import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiciosGrid from '@/components/ServiciosGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Descubre todos los servicios de En Escena: fotografía, video, reels, diseño gráfico y marketing digital.',
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Servicios</h1>
          <p className="mt-4 text-brand-500 max-w-2xl">
            Cada proyecto es único. Elegí el servicio que necesitás o escribinos para armar un paquete a medida.
          </p>
        </div>
        <ServiciosGrid />
      </main>
      <Footer />
    </>
  )
}