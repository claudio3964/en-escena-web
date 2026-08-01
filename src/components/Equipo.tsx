const team = [
  {
    name: 'Tamara',
    role: 'Edición · Video · Fotografía · Diseño gráfico',
    desc: 'Especialista en post-producción y diseño visual. Transforma ideas en piezas gráficas y videos que conectan.',
    color: 'bg-sky-100 text-sky-800',
    initial: 'T',
    initialBg: 'bg-sky-600',
  },
  {
    name: 'Camilla',
    role: 'Marketing digital',
    desc: 'Estratega de contenidos y redes. Diseña campañas que posicionan marcas y generan resultados medibles.',
    color: 'bg-emerald-100 text-emerald-800',
    initial: 'C',
    initialBg: 'bg-emerald-600',
  },
  {
    name: 'Jamyla',
    role: 'Fotografía · Dirección de arte',
    desc: 'Directora de arte y fotógrafa. Crea universos visuales únicos con un ojo estético impecable.',
    color: 'bg-violet-100 text-violet-800',
    initial: 'J',
    initialBg: 'bg-violet-600',
  },
]

export default function Equipo() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-brand-900">El equipo</h2>
          <p className="mt-3 text-brand-500">Tres mujeres, una visión: tu marca en el centro</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className={`w-20 h-20 mx-auto rounded-full ${member.initialBg} flex items-center justify-center text-2xl font-medium text-white`}>
                {member.initial}
              </div>
              <h3 className="mt-4 text-lg font-medium text-brand-900">{member.name}</h3>
              <p className={`mt-1 text-xs font-medium inline-block px-2 py-1 rounded-md ${member.color}`}>
                {member.role}
              </p>
              <p className="mt-3 text-sm text-brand-500 leading-relaxed max-w-xs mx-auto">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}