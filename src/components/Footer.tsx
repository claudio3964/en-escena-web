import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-50 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">En Escena</h3>
            <p className="text-sm text-brand-500">
              Agencia creativa especializada en marketing digital, fotografía, video y diseño gráfico.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Servicios</h4>
            <ul className="space-y-2 text-sm text-brand-500">
              <li><Link href="/servicios/fotografia-producto" className="hover:text-brand-900">Fotografía de producto</Link></li>
              <li><Link href="/servicios/reels-video" className="hover:text-brand-900">Reels y video</Link></li>
              <li><Link href="/servicios/diseno-grafico" className="hover:text-brand-900">Diseño gráfico</Link></li>
              <li><Link href="/servicios/marketing-digital" className="hover:text-brand-900">Marketing digital</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-brand-500">
              <li>contacto@enescena.uy</li>
              <li>
                <a href="https://wa.me/598XXXXXXXX" className="hover:text-brand-900" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/enescena.uy" className="hover:text-brand-900" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-100 text-center text-xs text-brand-400">
          © {new Date().getFullYear()} En Escena. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}