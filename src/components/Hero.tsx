'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-brand-900 leading-tight">
            Ponemos tu marca <br />
            <span className="text-brand-500">en escena</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-500 leading-relaxed max-w-2xl">
            Marketing digital, fotografía de producto, video, reels, diseño gráfico y dirección de arte. 
            Un equipo de tres mujeres creativas listas para potenciar tu marca.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/servicios"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-brand-900 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Ver servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-brand-900 bg-white border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}