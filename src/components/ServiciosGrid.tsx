import { Reveal } from '@/components/motion/Reveal'
import SpotlightCard from '@/components/motion/SpotlightCard'
import { servicios } from '@/lib/servicios'

const styles = {
  light: {
    eyebrow: 'text-brand-400',
    title: 'text-brand-900',
    lead: 'text-brand-500',
    card: 'bg-white border-brand-100 hover:border-brand-300 hover:shadow-xl',
    glow: 'rgba(18,18,18,0.06)',
    cardTitle: 'text-brand-900',
    cardText: 'text-brand-500',
    tag: 'bg-brand-100 text-brand-700',
    arrow: 'text-brand-400 group-hover:text-brand-900',
  },
  dark: {
    // Sin backdrop-blur: desenfocar sobre un video en reproducción se recalcula en cada frame
    eyebrow: 'text-white/60',
    title: 'text-white',
    lead: 'text-white/75',
    card: 'bg-black/55 border-white/15 hover:border-white/35',
    glow: 'rgba(255,255,255,0.12)',
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
        <Reveal className="text-center mb-16">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${s.eyebrow}`}>Qué hacemos</p>
          <h2 className={`text-3xl md:text-4xl font-medium ${s.title}`}>Servicios que impulsan tu marca</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${s.lead}`}>
            Cada proyecto es una oportunidad de crear algo extraordinario. Elegí el servicio que necesitás o armamos un paquete a medida.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <SpotlightCard
              key={servicio.slug}
              index={index}
              href={`/servicios/${servicio.slug}`}
              glow={s.glow}
              className={`p-8 rounded-2xl border ${s.card}`}
            >
              <h3 className={`text-lg font-medium ${s.cardTitle}`}>{servicio.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${s.cardText}`}>{servicio.desc}</p>
              <span className="mt-auto pt-5 flex items-center justify-between gap-4">
                <span className="flex flex-wrap gap-2">
                  {servicio.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${s.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </span>
                <span aria-hidden="true" className={`transition-transform duration-300 group-hover:translate-x-1 ${s.arrow}`}>
                  →
                </span>
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
