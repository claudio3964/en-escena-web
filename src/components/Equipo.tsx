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

export default function Equipo() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">El equipo</p>
          <h2 className="text-3xl md:text-4xl font-medium text-brand-900">Tres mujeres, una visión</h2>
          <p className="mt-4 text-brand-500 max-w-2xl mx-auto">
            Combinamos estrategia, arte y técnica para que tu marca no pase desapercibida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className={`w-24 h-24 mx-auto rounded-full ${member.initialBg} flex items-center justify-center text-3xl font-medium text-white shadow-lg`}>
                {member.initial}
              </div>
              <h3 className="mt-6 text-xl font-medium text-brand-900">{member.name}</h3>
              <p className="mt-2 text-sm text-brand-400 font-medium tracking-wide">{member.role}</p>
              <p className="mt-4 text-sm text-brand-500 leading-relaxed max-w-xs mx-auto">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}