import { Reveal } from '@/components/motion/Reveal'
import SpotlightCard from '@/components/motion/SpotlightCard'
import { colorBlobs, glassCard, iconBubble } from '@/lib/cardStyles'
import { servicios } from '@/lib/servicios'

// Íconos de línea (24x24) por servicio
const iconos: Record<string, string> = {
  'fotografia-producto':
    'M3 8.5A2.5 2.5 0 015.5 6h1.6l1.4-2h7l1.4 2h1.6A2.5 2.5 0 0121 8.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-9zM12 16.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z',
  'sesiones-fotograficas': 'M12 12a4 4 0 100-8 4 4 0 000 8zM5 21a7 7 0 0114 0',
  'reels-video': 'M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM10.5 9.5v5l4-2.5-4-2.5z',
  'edicion-video': 'M4 4h16v16H4zM8 4v16M16 4v16M4 9h4M4 15h4M16 9h4M16 15h4',
  'diseno-grafico': 'M12 20l7-7 2 2-7 7-2-2zM17 14l-1.5-7.5L3 3l3.5 12.5L14 17M3 3l7.5 7.5M12 13a2 2 0 100-4 2 2 0 000 4z',
  'marketing-digital': 'M3 17l6-6 4 4 8-8M15 7h6v6',
}

const styles = {
  light: {
    eyebrow: 'text-brand-400',
    title: 'text-brand-900',
    lead: 'text-brand-500',
    card: glassCard.light,
    icon: iconBubble.light,
    glow: 'rgba(245,158,11,0.10)',
    cardTitle: 'text-brand-900',
    cardText: 'text-brand-500',
    tag: 'bg-brand-900/5 text-brand-700 ring-1 ring-brand-900/10',
    arrow: 'text-brand-400 group-interact:text-amber-500',
  },
  dark: {
    eyebrow: 'text-white/60',
    title: 'text-white',
    lead: 'text-white/75',
    card: glassCard.dark,
    icon: iconBubble.dark,
    glow: 'rgba(251,191,36,0.14)',
    cardTitle: 'text-white',
    cardText: 'text-white/75',
    tag: 'bg-white/10 text-white/90 ring-1 ring-white/10',
    arrow: 'text-white/50 group-interact:text-amber-300',
  },
}

export default function ServiciosGrid({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const s = styles[variant]

  return (
    <section className="relative isolate overflow-clip py-20 md:py-28">
      {variant === 'light' && (
        <>
          <div aria-hidden="true" className={`${colorBlobs.amber} -left-24 top-1/3`} />
          <div aria-hidden="true" className={`${colorBlobs.purple} -right-24 bottom-10`} />
        </>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${s.eyebrow}`}>Qué hacemos</p>
          <h2 className={`text-3xl md:text-4xl font-medium ${s.title}`}>Servicios que impulsan tu marca</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${s.lead}`}>
            Cada proyecto es una oportunidad de crear algo extraordinario. Elegí el servicio que necesitás o armamos un paquete a medida.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <SpotlightCard
              key={servicio.slug}
              href={`/servicios/${servicio.slug}`}
              glow={s.glow}
              className={`p-8 ${s.card}`}
            >
              <span className={s.icon}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={iconos[servicio.slug]} />
                </svg>
              </span>
              <h3 className={`mt-6 text-lg font-medium ${s.cardTitle}`}>{servicio.title}</h3>
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
                <span
                  aria-hidden="true"
                  className={`transition-[translate,color] duration-500 group-interact:translate-x-1 ${s.arrow}`}
                >
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
