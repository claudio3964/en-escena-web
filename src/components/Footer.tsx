import Link from 'next/link'
import { servicios } from '@/lib/servicios'
import { site, whatsappUrl } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-3">En Escena</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Agencia creativa uruguaya especializada en marketing digital, fotografía, video y diseño gráfico.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {servicios.map((servicio) => (
                <li key={servicio.slug}>
                  <Link href={`/servicios/${servicio.slug}`} className="hover:text-white transition-colors">
                    {servicio.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                {site.whatsapp.enabled ? (
                  <a href={whatsappUrl()} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                ) : (
                  <Link href="/contacto" className="hover:text-white transition-colors">
                    Formulario de contacto
                  </Link>
                )}
              </li>
              <li>
                <a href={site.instagram.url} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} En Escena. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}