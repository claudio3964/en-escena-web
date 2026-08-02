import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-4">
          Agencia creativa · Uruguay
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
          Tu marca, en el centro<br />
          <span className="text-white/80">de la escena</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
          Transformamos ideas en contenido visual que vende. Fotografía, video, diseño gráfico
          y estrategia digital para marcas que quieren destacar.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/servicios"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Ver servicios
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            Solicitar presupuesto
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-px h-8 bg-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  )
}