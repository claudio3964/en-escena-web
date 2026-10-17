import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import MotionLink from '@/components/motion/MotionLink'
import { Reveal } from '@/components/motion/Reveal'
import { formatDate, getPost, posts, readingTime, type BlogBlock } from '@/lib/blog'
import { cardText, colorBlobs, glassCard, lightSectionBg } from '@/lib/cardStyles'
import { pageMetadata } from '@/lib/seo'
import { site, siteUrl, whatsappUrl } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}

  return pageMetadata({
    title: post.titulo,
    description: post.extracto,
    path: `/blog/${post.slug}`,
    defaultImage: false,
    article: { publishedTime: post.fecha, section: post.categoria, authors: [post.autor] },
  })
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 mb-4 text-2xl font-medium tracking-tight text-brand-900">{block.text}</h2>
    case 'ul':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg text-brand-700 leading-relaxed">
              <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-amber-400 pl-6 text-xl md:text-2xl font-medium leading-snug tracking-tight text-brand-900">
          {block.text}
        </blockquote>
      )
    default:
      return <p className="my-5 text-lg leading-relaxed text-brand-700">{block.text}</p>
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  const otros = posts.filter((p) => p.slug !== post.slug)
  const url = `${siteUrl}/blog/${post.slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.titulo,
          description: post.extracto,
          datePublished: post.fecha,
          dateModified: post.fecha,
          inLanguage: 'es-UY',
          articleSection: post.categoria,
          image: `${url}/opengraph-image`,
          url,
          mainEntityOfPage: url,
          author: { '@type': 'Organization', name: site.name, url: siteUrl },
          publisher: { '@id': `${siteUrl}/#organization`, '@type': 'Organization', name: site.name },
        }}
      />
      <Header />
      <main className={`relative isolate overflow-clip pt-24 ${lightSectionBg}`}>
        <div aria-hidden="true" className={`${colorBlobs.light.amber} -left-32 top-32`} />
        <div aria-hidden="true" className={`${colorBlobs.light.purple} -right-32 bottom-96`} />

        <article className="pb-20 md:pb-28">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 text-center">
            <nav aria-label="Ruta" className="text-sm text-brand-400 mb-8">
              <Link href="/blog" className="hover:text-brand-900 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-brand-600">{post.categoria}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-brand-900">{post.titulo}</h1>
            <p className="mt-6 text-lg md:text-xl text-brand-500 leading-relaxed">{post.extracto}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-brand-500">
              <span className="font-medium text-brand-900">{post.autor}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingTime(post)} min de lectura</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5">
              <Image src={post.cover} alt={post.coverAlt} fill preload sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* Llamado a la acción */}
            <aside className="mt-16 p-8 md:p-10 text-center rounded-2xl border border-white/10 bg-brand-900 ring-1 ring-white/5 inset-shadow-[0_1px_0_0_rgb(255_255_255/0.08)] shadow-2xl shadow-black/15">
              <p className="text-sm tracking-[0.2em] uppercase text-white/50">En Escena</p>
              <p className="mt-3 text-2xl font-medium tracking-tight text-white">¿Querés aplicar esto a tu marca?</p>
              <p className={`mt-3 ${cardText.dark.body}`}>Contanos tu proyecto y te enviamos una propuesta en menos de 24 horas.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MotionLink
                  href="/contacto"
                  className="inline-flex items-center px-7 py-3 text-sm font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
                >
                  Pedir presupuesto
                </MotionLink>
                <a
                  href={whatsappUrl(`¡Hola En Escena! Leí "${post.titulo}" y quisiera pedir un presupuesto para mi proyecto.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-3 text-sm font-medium text-white border border-white/25 rounded-full hover:bg-white/10 transition-colors"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </article>

        {/* Seguí leyendo */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-6">Seguí leyendo</p>
            <div className="grid gap-6 md:grid-cols-2">
              {otros.map((otro) => (
                <Link key={otro.slug} href={`/blog/${otro.slug}`} className={`p-8 ${glassCard.light}`}>
                  <p className="text-xs text-brand-500">
                    {otro.categoria} · {readingTime(otro)} min de lectura
                  </p>
                  <h2 className={`mt-3 ${cardText.light.title}`}>{otro.titulo}</h2>
                  <p className={`mt-2 line-clamp-2 ${cardText.light.body}`}>{otro.extracto}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
