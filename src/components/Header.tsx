'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import MotionLink from '@/components/motion/MotionLink'
import { easeOutExpo, easeOutQuint } from '@/lib/motion'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/sobre-nosotras', label: 'Nosotras' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

/**
 * @param overlay true en páginas con portada oscura: el header arranca transparente
 * con texto claro y se vuelve sólido al scrollear.
 */
export default function Header({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Solo cambia estado al cruzar umbrales, no en cada frame de scroll
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const isScrolled = current > 40
    const shouldHide = current > previous && current > 400
    if (isScrolled !== scrolled) setScrolled(isScrolled)
    if (shouldHide !== hidden) setHidden(shouldHide)
  })

  const solid = !overlay || scrolled || mobileOpen
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !mobileOpen ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: easeOutQuint }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? 'bg-white/85 backdrop-blur-md border-b border-brand-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-lg font-medium tracking-tight transition-colors duration-500 ${solid ? 'text-brand-900' : 'text-white'}`}
          >
            En Escena
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-sm transition-colors duration-300 ${
                  solid
                    ? isActive(link.href) ? 'text-brand-900' : 'text-brand-500 hover:text-brand-900'
                    : isActive(link.href) ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {/* Subrayado que crece desde la izquierda */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px w-full origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  } ${solid ? 'bg-brand-900' : 'bg-white'}`}
                />
              </Link>
            ))}
          </nav>

          <MotionLink
            href="/contacto"
            className={`hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full transition-colors duration-500 ${
              solid ? 'text-white bg-brand-900 hover:bg-brand-700' : 'text-brand-900 bg-white hover:bg-white/90'
            }`}
          >
            Contratar
          </MotionLink>

          <button
            className={`md:hidden p-2 -mr-2 transition-colors ${solid ? 'text-brand-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <motion.path
                strokeLinecap="round"
                strokeWidth={2}
                initial={false}
                animate={{ d: mobileOpen ? 'M6 18L18 6' : 'M4 7L20 7' }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                strokeLinecap="round"
                strokeWidth={2}
                initial={false}
                animate={{ d: mobileOpen ? 'M6 6L18 18' : 'M4 17L20 17' }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className="md:hidden overflow-hidden bg-white border-t border-brand-100 shadow-lg"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="flex flex-col px-4 py-4 gap-1"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    className={`block py-2.5 text-base ${isActive(link.href) ? 'text-brand-900 font-medium' : 'text-brand-600'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <Link
                  href="/contacto"
                  className="mt-3 flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-brand-900 rounded-full active:scale-[0.98] transition-transform"
                  onClick={() => setMobileOpen(false)}
                >
                  Contratar
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
