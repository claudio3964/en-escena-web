import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const team = [
  {
    name: 'Tamara',
    role: 'Edición · Video · Fotografía · Diseño gráfico',
    desc: 'Especialista en post-producción audiovisual y diseño visual. Transforma conceptos en piezas gráficas y videos que conectan emocionalmente con la audiencia.',
    initial: 'T',
    initialBg: 'bg-sky-600',
  },
  {
    name: 'Camilla',
    role: 'Marketing digital',
    desc: 'Estratega de contenidos y growth. Diseña campañas digitales que posicionan marcas y generan resultados medibles en redes sociales y publicidad pagada.',
    initial: 'C',
    initialBg: 'bg-emerald-600',
  },
  {
    name: 'Jamyla',
    role: 'Fotografía · Dirección de arte',
    desc: 'Directora de arte y fotógrafa con ojo estético impecable. Crea universos visuales únicos donde cada detalle cuenta una historia.',
    initial: 'J',
    initialBg: 'bg-violet-600',
  },
]

const styles = {
  light: {
    eyebrow: 'text-brand-400',
    title: 'text-brand-900',
    lead: 'text-brand-500',
    role: 'text-brand-400',
    text: 'text-brand-500',
  },
  dark: {
    eyebrow: 'text-white/60',
    title: 'text-white',
    lead: 'text-white/75',
    role: 'text-white/60',
    text: 'text-white/75',
  },
}

export default function Equipo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const s = styles[variant]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${s.eyebrow}`}>El equipo</p>
          <h2 className={`text-3xl md:text-4xl font-medium ${s.title}`}>Tres mujeres, una visión</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${s.lead}`}>
            Combinamos estrategia, arte y técnica para que tu marca no pase desapercibida.
          </p>
        </Reveal>
        <Stagger gap={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <StaggerItem key={member.name} className="group text-center">
              <div className={`w-24 h-24 mx-auto rounded-full ${member.initialBg} flex items-center justify-center text-3xl font-medium text-white shadow-lg ring-1 ring-white/0 ring-offset-4 ring-offset-transparent transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:ring-white/40`}>
                {member.initial}
              </div>
              <h3 className={`mt-6 text-xl font-medium ${s.title}`}>{member.name}</h3>
              <p className={`mt-2 text-sm font-medium tracking-wide ${s.role}`}>{member.role}</p>
              <p className={`mt-4 text-sm leading-relaxed max-w-xs mx-auto ${s.text}`}>
                {member.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}