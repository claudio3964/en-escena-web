import Link from 'next/link'
import { servicios } from '@/lib/servicios'

const styles = {
  light: {
    eyebrow: 'text-brand-400',
    title: 'text-brand-900',
    lead: 'text-brand-500',
    card: 'bg-white border-brand-100 hover:border-brand-300 hover:shadow-xl',
    cardTitle: 'text-brand-900 group-hover:text-brand-700',
    cardText: 'text-brand-500',
    tag: 'bg-brand-100 text-brand-700',
    arrow: 'text-brand-400 group-hover:text-brand-900',
  },
  dark: {
    eyebrow: 'text-white/60',
    title: 'text-white',
    lead: 'text-white/75',
    card: 'bg-black/35 border-white/15 backdrop-blur-md hover:bg-black/50 hover:border-white/35',
    cardTitle: 'text-white',
    cardText: 'text-white/75',
    tag: 'bg-white/10 text-white/90',
    arrow: 'text-white/50 group-hover:text-white',
  },
}

export default function ServiciosGrid({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const s = styles[variant]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${s.eyebrow}`}>Qué hacemos</p>
          <h2 className={`text-3xl md:text-4xl font-medium ${s.title}`}>Servicios que impulsan tu marca</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${s.lead}`}>
            Cada proyecto es una oportunidad de crear algo extraordinario. Elegí el servicio que necesitás o armamos un paquete a medida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <Link
              key={servicio.slug}
              href={`/servicios/${servicio.slug}`}
              className={`group flex flex-col p-8 rounded-2xl border transition-all duration-300 ${s.card}`}
            >
              <h3 className={`text-lg font-medium transition-colors ${s.cardTitle}`}>
                {servicio.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${s.cardText}`}>{servicio.desc}</p>
              <div className="mt-auto pt-5 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {servicio.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${s.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span aria-hidden="true" className={`transition-all duration-300 group-hover:translate-x-1 ${s.arrow}`}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
