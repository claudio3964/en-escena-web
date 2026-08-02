import Link from 'next/link'

const servicios = [
  {
    slug: 'fotografia-producto',
    title: 'Fotografía de producto',
    desc: 'Imágenes que convierten visitantes en compradores. Iluminación profesional, edición de alta gama y entrega optimizada para e-commerce y redes sociales.',
    tags: ['Fotografía'],
  },
  {
    slug: 'sesiones-fotograficas',
    title: 'Sesiones fotográficas',
    desc: 'Retratos corporativos, editoriales de moda y cobertura de eventos con dirección de arte incluida. Cada toma cuenta una historia.',
    tags: ['Fotografía', 'Arte'],
  },
  {
    slug: 'reels-video',
    title: 'Reels y video corto',
    desc: 'Contenido diseñado para detener el scroll. Guión, filmación y edición profesional para Instagram, TikTok y YouTube Shorts que generan engagement real.',
    tags: ['Video'],
  },
  {
    slug: 'edicion-video',
    title: 'Edición de video',
    desc: 'Post-producción que eleva el nivel de cualquier material. Color grading, sound design, motion graphics y entrega en formatos adaptados a cada plataforma.',
    tags: ['Video'],
  },
  {
    slug: 'diseno-grafico',
    title: 'Diseño gráfico',
    desc: 'Identidad visual coherente y memorable. Desde el logo hasta el manual de marca, creamos sistemas visuales que comunican quién sos.',
    tags: ['Diseño'],
  },
  {
    slug: 'marketing-digital',
    title: 'Marketing digital',
    desc: 'Estrategia basada en datos. Gestión de redes, campañas publicitarias con retorno medible y análisis de métricas para escalar resultados.',
    tags: ['Marketing'],
  },
]

export default function ServiciosGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Qué hacemos</p>
          <h2 className="text-3xl md:text-4xl font-medium text-brand-900">Servicios que impulsan tu marca</h2>
          <p className="mt-4 text-brand-500 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad de crear algo extraordinario. Elegí el servicio que necesitás o armamos un paquete a medida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group block p-8 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-brand-900 group-hover:text-brand-700 transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-brand-500 leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}