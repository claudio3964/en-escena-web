import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MediosDePago from '@/components/MediosDePago'
import { getServicio, servicios } from '@/lib/servicios'
import { site, whatsappUrl } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return servicios.map((servicio) => ({ slug: servicio.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = getServicio((await params).slug)
  if (!servicio) return {}

  return {
    title: servicio.title,
    description: servicio.desc,
    openGraph: { title: `${servicio.title} | En Escena`, description: servicio.desc, images: [servicio.image] },
  }
}

export default async function ServicioPage({ params }: Props) {
  const servicio = getServicio((await params).slug)
  if (!servicio) notFound()

  const otros = servicios.filter((s) => s.slug !== servicio.slug).slice(0, 3)
  const contactoHref = `/contacto?servicio=${servicio.slug}`

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-end overflow-hidden">
          <Image src={servicio.image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/30" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
            <nav aria-label="Ruta" className="text-sm text-white/60 mb-6">
              <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{servicio.title}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight max-w-3xl">
              {servicio.headline}
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">{servicio.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={contactoHref}
                className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
              >
                Pedir presupuesto
              </Link>
              {site.whatsapp.enabled && (
                <a
                  href={whatsappUrl(`Hola En Escena! Quiero consultar por ${servicio.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Por qué funciona</p>
            <h2 className="text-3xl md:text-4xl font-medium text-brand-900 max-w-2xl">
              Lo que gana tu marca
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              {servicio.beneficios.map((beneficio, i) => (
                <div key={beneficio.title} className="border-t border-brand-200 pt-6">
                  <span className="text-sm text-brand-400">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-medium text-brand-900">{beneficio.title}</h3>
                  <p className="mt-3 text-brand-500 leading-relaxed">{beneficio.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye + proceso */}
        <section className="py-20 md:py-28 bg-brand-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-white/50 mb-3">Qué incluye</p>
              <h2 className="text-3xl md:text-4xl font-medium">Todo resuelto, de principio a fin</h2>
              <ul className="mt-10 space-y-4">
                {servicio.incluye.map((linea) => (
                  <li key={linea} className="flex gap-4 text-white/80">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {linea}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-white/50 mb-3">Cómo trabajamos</p>
              <ol className="mt-10 space-y-8">
                {servicio.proceso.map((paso, i) => (
                  <li key={paso.title} className="flex gap-6">
                    <span className="w-10 h-10 shrink-0 rounded-full border border-white/25 flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-medium">{paso.title}</h3>
                      <p className="mt-1 text-sm text-white/65 leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3 text-center">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl font-medium text-brand-900 text-center">Antes de empezar</h2>
            <div className="mt-12 divide-y divide-brand-100 border-y border-brand-100">
              {servicio.faqs.map((faq) => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-lg font-medium text-brand-900">
                    {faq.q}
                    <span aria-hidden="true" className="text-brand-400 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-brand-500 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <MediosDePago />

        {/* CTA final */}
        <section className="py-20 md:py-28 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-900 tracking-tight">
              ¿Arrancamos con tu proyecto?
            </h2>
            <p className="mt-4 text-brand-500">Te respondemos en menos de 24 horas con un presupuesto sin compromiso.</p>
            <Link
              href={contactoHref}
              className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-brand-900 rounded-full hover:bg-brand-700 transition-colors"
            >
              Pedir presupuesto
            </Link>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-left">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-6">Otros servicios</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otros.map((otro) => (
                <Link
                  key={otro.slug}
                  href={`/servicios/${otro.slug}`}
                  className="group p-6 rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-medium text-brand-900">{otro.title}</h3>
                  <p className="mt-2 text-sm text-brand-500 line-clamp-2">{otro.desc}</p>
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
