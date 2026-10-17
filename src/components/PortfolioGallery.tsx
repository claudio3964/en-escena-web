'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { categorias, portfolio, type PortfolioCategoria, type PortfolioItem } from '@/lib/portfolio'

type Filtro = 'Todo' | PortfolioCategoria

const ease = [0.22, 1, 0.36, 1] as const

const aspectClass: Record<PortfolioItem['aspect'], string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
}

export default function PortfolioGallery() {
  const [filtro, setFiltro] = useState<Filtro>('Todo')
  const [activo, setActivo] = useState<PortfolioItem | null>(null)
  const reduceMotion = useReducedMotion()

  // Solo mostramos filtros de categorías con contenido
  const filtros: Filtro[] = ['Todo', ...categorias.filter((c) => portfolio.some((p) => p.categoria === c))]
  const items = filtro === 'Todo' ? portfolio : portfolio.filter((p) => p.categoria === filtro)

  useEffect(() => {
    if (!activo) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActivo(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activo])

  return (
    <>
      <div role="tablist" aria-label="Filtrar por categoría" className="flex flex-wrap justify-center gap-2 mb-12">
        {filtros.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filtro === f}
            onClick={() => setFiltro(f)}
            className={`relative px-5 py-2 text-sm rounded-full transition-colors ${
              filtro === f ? 'text-white' : 'text-brand-500 hover:text-brand-900'
            }`}
          >
            {filtro === f && (
              <motion.span
                layoutId="filtro-activo"
                className="absolute inset-0 rounded-full bg-brand-900"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease }}
              className="mb-6 break-inside-avoid"
            >
              <button
                onClick={() => setActivo(item)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-brand-100 text-left"
                aria-label={`Ver ${item.title}`}
              >
                <motion.div layoutId={`media-${item.id}`} className={`relative ${aspectClass[item.aspect]}`}>
                  <Image
                    src={item.poster ?? item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70">{item.categoria}</p>
                  <p className="mt-1 text-lg font-medium text-white">{item.title}</p>
                </div>
                {item.type === 'video' && (
                  <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-4 h-4 text-brand-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {activo && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activo.title}
          >
            <button
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setActivo(null)}
              aria-label="Cerrar"
            />
            <motion.div
              layoutId={`media-${activo.id}`}
              className="relative w-full max-w-5xl max-h-full overflow-hidden rounded-2xl"
              transition={{ duration: 0.5, ease }}
            >
              {activo.type === 'video' ? (
                <video src={activo.src} poster={activo.poster} controls autoPlay playsInline className="w-full max-h-[85vh] bg-black" />
              ) : (
                <div className="relative w-full h-[85vh]">
                  <Image src={activo.src} alt={activo.alt} fill sizes="100vw" className="object-contain" />
                </div>
              )}
            </motion.div>
            <button
              onClick={() => setActivo(null)}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
