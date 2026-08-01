import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, tendencias y guías sobre fotografía, video, diseño gráfico y marketing digital.',
}

const posts = [
  {
    slug: 'como-hacer-reels-para-restaurantes',
    titulo: 'Cómo hacer reels para restaurantes que vendan',
    extracto: 'Estrategias de guión, filmación y edición para crear contenido gastronómico que convierta seguidores en clientes.',
    categoria: 'Video',
    fecha: '2026-07-15',
  },
  {
    slug: 'fotografia-producto-vs-lifestyle',
    titulo: 'Fotografía de producto vs lifestyle: cuál elegir',
    extracto: 'Diferencias clave entre ambos estilos y cómo decidir cuál se adapta mejor a tu marca y presupuesto.',
    categoria: 'Fotografía',
    fecha: '2026-07-08',
  },
  {
    slug: 'identidad-visual-marca',
    titulo: 'Por qué tu marca necesita una identidad visual sólida',
    extracto: 'Más allá del logo: cómo un sistema visual coherente genera confianza y reconocimiento en tu audiencia.',
    categoria: 'Diseño',
    fecha: '2026-06-28',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Recursos</p>
            <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Blog</h1>
            <p className="mt-4 text-brand-500 max-w-2xl mx-auto">
              Conocimiento práctico sobre fotografía, video, diseño y marketing digital.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-100 text-brand-700">
                    {post.categoria}
                  </span>
                  <span className="text-xs text-brand-400">{post.fecha}</span>
                </div>
                <h2 className="text-xl font-medium text-brand-900 group-hover:text-brand-700 transition-colors">
                  {post.titulo}
                </h2>
                <p className="mt-3 text-brand-500 leading-relaxed">{post.extracto}</p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-brand-900 group-hover:underline cursor-pointer">
                    Leer artículo →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-400 text-sm">
              ¿Tenés un tema que te gustaría que tratemos?{' '}
              <a href="/contacto" className="text-brand-900 underline hover:no-underline">Escribinos</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}