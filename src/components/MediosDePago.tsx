'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cardHoverClass, cardVariants } from '@/lib/motion'
import { useReveal } from '@/components/motion/useReveal'

const medios = [
  {
    title: 'Mercado Pago',
    desc: 'Pagá con tu cuenta, saldo o cuotas con link de pago seguro.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 0v18M4 7.5l8 4.5 8-4.5" />
    ),
  },
  {
    title: 'Tarjetas de crédito y débito',
    desc: 'Aceptamos las principales tarjetas, con opción de pago en cuotas.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 3h18M7 15h3" />
    ),
  },
  {
    title: 'Transferencia bancaria',
    desc: 'Te enviamos los datos de la cuenta junto con la propuesta.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6M5 10v8m4.67-8v8m4.66-8v8M19 10v8M3 20h18" />
    ),
  },
]

export default function MediosDePago() {
  return (
    <section aria-labelledby="medios-de-pago" className="py-20 md:py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Medios de pago</p>
          <h2 id="medios-de-pago" className="text-3xl md:text-4xl font-medium text-brand-900">
            Pagá como te quede más cómodo
          </h2>
          <p className="mt-4 text-brand-500 max-w-2xl mx-auto">
            Presupuesto cerrado, sin sorpresas. Coordinamos el pago al confirmar la propuesta.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {medios.map((medio, index) => (
            <MedioCard key={medio.title} medio={medio} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function MedioCard({ medio, index }: { medio: (typeof medios)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const revealed = useReveal(ref)

  return (
    <motion.li
      ref={ref}
      data-reveal=""
      variants={cardVariants(index, 0.12)}
      initial="hidden"
      animate={revealed ? 'show' : 'hidden'}
      className={`group p-8 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-xl ${cardHoverClass}`}
    >
      <div className="w-12 h-12 rounded-full bg-brand-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          {medio.icon}
        </svg>
      </div>
      <h3 className="mt-6 text-lg font-medium text-brand-900">{medio.title}</h3>
      <p className="mt-2 text-sm text-brand-500 leading-relaxed">{medio.desc}</p>
    </motion.li>
  )
}
