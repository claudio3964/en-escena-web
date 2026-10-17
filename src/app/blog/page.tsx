import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Reveal } from '@/components/motion/Reveal'
import { formatDate, posts, readingTime, type BlogPost } from '@/lib/blog'
import { cardText, colorBlobs, glassCard, lightSectionBg } from '@/lib/cardStyles'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Blog de Video, Fotografía y Redes Sociales',
  description:
    'Ideas, tendencias y guías prácticas sobre producción de video, fotografía, diseño y gestión de redes para marcas en Uruguay.',
  path: '/blog',
})

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-brand-500">
      <span className="rounded-full bg-brand-900 px-3 py-1 font-medium text-amber-100">{post.categoria}</span>
      <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingTime(post)} min de lectura</span>
    </div>
  )
}

export default function BlogPage() {
  const [destacado, ...resto] = [...posts].sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <>
      <Header />
      <main className={`relative isolate overflow-clip pt-24 ${lightSectionBg}`}>
        <div aria-hidden="true" className={`${colorBlobs.light.amber} -left-24 top-40`} />
        <div aria-hidden="true" className={`${colorBlobs.light.purple} -right-28 top-[40rem]`} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Reveal className="text-center mb-14 md:mb-20">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-900">Ideas para marcas que quieren destacar</h1>
            <p className="mt-5 text-lg text-brand-500 max-w-2xl mx-auto">
              Video, diseño y redes sociales desde la mirada de un estudio creativo uruguayo.
            </p>
          </Reveal>

          {/* Artículo destacado */}
          <Link
            href={`/blog/${destacado.slug}`}
            className={`grid md:grid-cols-2 ${glassCard.light}`}
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-80 overflow-hidden">
              <Image
                src={destacado.cover}
                alt={destacado.coverAlt}
                fill
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-[scale] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-interact:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <PostMeta post={destacado} />
              <h2 className="mt-5 text-2xl md:text-3xl font-medium tracking-tight text-brand-900">{destacado.titulo}</h2>
              <p className={`mt-4 ${cardText.light.body} text-base`}>{destacado.extracto}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-900">
                Leer artículo
                <span aria-hidden="true" className="transition-[translate] duration-500 group-interact:translate-x-1">→</span>
              </span>
            </div>
          </Link>

          {/* Resto de los artículos */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {resto.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={`flex flex-col ${glassCard.light}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-[scale] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-interact:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <PostMeta post={post} />
                  <h2 className={`mt-5 ${cardText.light.title} text-xl`}>{post.titulo}</h2>
                  <p className={`mt-3 ${cardText.light.body}`}>{post.extracto}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-900">
                    Leer artículo
                    <span aria-hidden="true" className="transition-[translate] duration-500 group-interact:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-brand-500">
            ¿Tenés un tema que te gustaría que tratemos?{' '}
            <Link href="/contacto" className="text-brand-900 underline underline-offset-4 hover:no-underline">
              Escribinos
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
