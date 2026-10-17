import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiciosGrid from '@/components/ServiciosGrid'
import MediosDePago from '@/components/MediosDePago'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Fotografía de producto, sesiones, reels, edición de video, diseño gráfico y marketing digital para marcas que quieren destacar.',
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiciosGrid />

        <MediosDePago />

        <section className="py-20 md:py-24 bg-brand-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-medium">¿No sabés qué servicio necesitás?</h2>
            <p className="mt-4 text-white/70">
              Contanos tu objetivo y armamos una propuesta a medida, combinando lo que tu marca realmente necesita.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Pedir propuesta a medida
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
