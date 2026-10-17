import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import FadeToDark from '@/components/FadeToDark'
import MediosDePago from '@/components/MediosDePago'
import { getServicio } from '@/lib/servicios'
import { site, whatsappDisplay, whatsappUrl } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = pageMetadata({
  title: 'Contacto: Pedí tu Presupuesto',
  description:
    'Contale tu proyecto a En Escena y recibí un presupuesto sin compromiso en menos de 24 horas. Escribinos por WhatsApp o por el formulario.',
  path: '/contacto',
})

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string | string[] }>
}) {
  const { servicio } = await searchParams
  const defaultServicio = typeof servicio === 'string' && getServicio(servicio) ? servicio : ''

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Contacto</p>
              <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Hablemos de tu proyecto</h1>
              <p className="mt-4 text-brand-500 leading-relaxed">
                Contanos qué tenés en mente. Te respondemos en menos de 24 horas con un presupuesto 
                sin compromiso.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Email</p>
                    <a href={`mailto:${site.email}`} className="text-sm text-brand-500 hover:text-brand-900 transition-colors">{site.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">WhatsApp</p>
                    {site.whatsapp.enabled ? (
                      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:text-brand-900 transition-colors">
                        {whatsappDisplay()}
                      </a>
                    ) : (
                      <p className="text-sm text-brand-500">Próximamente</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Instagram</p>
                    <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:text-brand-900 transition-colors">
                      {site.instagram.handle}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ContactForm defaultServicio={defaultServicio} />
            </Reveal>
          </div>
        </div>
        <FadeToDark />
        <MediosDePago />
      </main>
      <Footer />
    </>
  )
}