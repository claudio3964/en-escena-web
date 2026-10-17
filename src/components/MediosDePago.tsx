import { cardText, colorBlobs, glassCard, iconBubble } from '@/lib/cardStyles'

const medios = [
  {
    title: 'Mercado Pago',
    desc: 'Pagá con tu cuenta, saldo o cuotas con link de pago seguro.',
    icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 0v18M4 7.5l8 4.5 8-4.5',
  },
  {
    title: 'Tarjetas de crédito y débito',
    desc: 'Aceptamos las principales tarjetas, con opción de pago en cuotas.',
    icon: 'M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 3h18M7 15h3',
  },
  {
    title: 'Transferencia bancaria',
    desc: 'Te enviamos los datos de la cuenta junto con la propuesta.',
    icon: 'M3 10l9-6 9 6M5 10v8m4.67-8v8m4.66-8v8M19 10v8M3 20h18',
  },
]

const t = cardText.dark

/**
 * @param overlay true cuando la sección va sobre el fondo de fotos de la home (ScrollVisual):
 * sin fondo propio, el título y las tarjetas de vidrio flotan sobre las imágenes.
 */
export default function MediosDePago({ overlay = false }: { overlay?: boolean }) {
  return (
    <section
      aria-labelledby="medios-de-pago"
      className={`relative isolate overflow-clip w-full py-20 md:py-28 ${overlay ? 'bg-transparent' : 'bg-brand-900'}`}
    >
      {!overlay && (
        <>
          {/* top-32: el blur (≈64px) tiene que disiparse antes del borde superior; si no,
              overflow-clip lo corta en seco y se marca una línea con la sección anterior */}
          <div aria-hidden="true" className={`${colorBlobs.dark.amber} -left-20 top-32`} />
          <div aria-hidden="true" className={`${colorBlobs.dark.purple} -right-24 -bottom-24`} />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${overlay ? 'text-white/70' : 'text-white/50'}`}>Medios de pago</p>
          <h2 id="medios-de-pago" className="text-3xl md:text-4xl font-medium tracking-tight text-white">
            Pagá como te quede más cómodo
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${overlay ? 'text-white/80' : 'text-white/60'}`}>
            Presupuesto cerrado, sin sorpresas. Coordinamos el pago al confirmar la propuesta.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {medios.map((medio, index) => (
            <li key={medio.title} className={`flex flex-col p-8 ${glassCard.dark}`}>
              <div className="flex items-start justify-between">
                <span className={iconBubble.dark}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={medio.icon} />
                  </svg>
                </span>
                <span aria-hidden="true" className={t.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className={`mt-8 ${t.title}`}>{medio.title}</h3>
              <p className={`mt-2 ${t.body}`}>{medio.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
