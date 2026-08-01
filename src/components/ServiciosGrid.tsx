import Link from 'next/link'

const servicios = [
  {
    slug: 'fotografia-producto',
    title: 'Fotografía de producto',
    desc: 'Imágenes profesionales para e-commerce, catálogos y redes sociales. Edición y entrega en alta resolución.',
    tags: ['Fotografía'],
  },
  {
    slug: 'sesiones-fotograficas',
    title: 'Sesiones fotográficas',
    desc: 'Retratos, moda, eventos y corporativas. Con dirección de arte incluida para resultados únicos.',
    tags: ['Fotografía', 'Arte'],
  },
  {
    slug: 'reels-video',
    title: 'Reels y video corto',
    desc: 'Contenido para Instagram, TikTok y YouTube Shorts. Guión, filmación y edición profesional.',
    tags: ['Video'],
  },
  {
    slug: 'edicion-video',
    title: 'Edición de video',
    desc: 'Post-producción completa: color grading, sonido, motion graphics y entrega en múltiples formatos.',
    tags: ['Video'],
  },
  {
    slug: 'diseno-grafico',
    title: 'Diseño gráfico',
    desc: 'Identidad visual, branding, piezas para redes sociales, flyers y material corporativo.',
    tags: ['Diseño'],
  },
  {
    slug: 'marketing-digital',
    title: 'Marketing digital',
    desc: 'Estrategia de contenidos, gestión de redes, campañas pagas y análisis de métricas.',
    tags: ['Marketing'],
  },
]

export default function ServiciosGrid() {
  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-brand-900">Nuestros servicios</h2>
          <p className="mt-3 text-brand-500">Soluciones creativas a medida para tu marca</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group block p-6 bg-white rounded-xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-medium text-brand-900 group-hover:text-brand-700 transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-500 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-brand-100 text-brand-700"
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