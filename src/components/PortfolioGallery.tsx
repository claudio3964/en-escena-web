'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { categorias, portfolio, type PortfolioCategoria, type PortfolioItem } from '@/lib/portfolio'
import { easeOutExpo, springSnappy } from '@/lib/motion'

type Filtro = 'Todo' | PortfolioCategoria

const aspectClass: Record<PortfolioItem['aspect'], string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
}

export default function PortfolioGallery() {
  const [filtro, setFiltro] = useState<Filtro>('Todo')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [cursorVisible, setCursorVisible] = useState(false)

  // Cursor "Ver" que sigue al mouse con un leve retraso elástico
  const cursorX = useSpring(useMotionValue(0), { stiffness: 500, damping: 40 })
  const cursorY = useSpring(useMotionValue(0), { stiffness: 500, damping: 40 })

  // Solo mostramos filtros de categorías con contenido
  const filtros: Filtro[] = ['Todo', ...categorias.filter((c) => portfolio.some((p) => p.categoria === c))]
  const items = filtro === 'Todo' ? portfolio : portfolio.filter((p) => p.categoria === filtro)
  const activo = activeIndex !== null ? items[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setActiveIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, step])

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }

  return (
    <>
      <div role="tablist" aria-label="Filtrar por categoría" className="flex flex-wrap justify-center gap-2 mb-12">
        {filtros.map((f) => (
          <motion.button
            key={f}
            role="tab"
            aria-selected={filtro === f}
            onClick={() => setFiltro(f)}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2 text-sm rounded-full transition-colors ${
              filtro === f ? 'text-white' : 'text-brand-500 hover:text-brand-900'
            }`}
          >
            {filtro === f && (
              <motion.span
                layoutId="filtro-activo"
                className="absolute inset-0 rounded-full bg-brand-900"
                transition={springSnappy}
              />
            )}
            <span className="relative">{f}</span>
          </motion.button>
        ))}
      </div>

      <motion.ul layout className="columns-1 sm:columns-2 lg:columns-3 gap-6" onPointerMove={handlePointerMove}>
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.9, ease: easeOutExpo, delay: (index % 3) * 0.08 }}
              className="mb-6 break-inside-avoid"
            >
              <button
                onClick={() => setActiveIndex(index)}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setCursorVisible(true)}
                onPointerLeave={() => setCursorVisible(false)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-brand-100 text-left md:cursor-none"
                aria-label={`Ver ${item.title}`}
              >
                <motion.div layoutId={`media-${item.id}`} className={`relative ${aspectClass[item.aspect]}`}>
                  <Image
                    src={item.poster ?? item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
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

      {/* Cursor "Ver" (solo mouse, solo desktop) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:flex h-20 w-20 -ml-10 -mt-10 items-center justify-center rounded-full bg-white text-xs font-medium tracking-[0.2em] uppercase text-brand-900 shadow-2xl"
        style={{ x: cursorX, y: cursorY }}
        initial={false}
        animate={{ scale: cursorVisible && !activo ? 1 : 0, opacity: cursorVisible && !activo ? 1 : 0 }}
        transition={springSnappy}
      >
        Ver
      </motion.div>

      <AnimatePresence>
        {activo && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activo.title}
          >
            <button
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={close}
              aria-label="Cerrar"
            />
            <motion.div
              layoutId={`media-${activo.id}`}
              className="relative w-full max-w-5xl max-h-full overflow-hidden rounded-2xl"
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              {activo.type === 'video' ? (
                <video key={activo.id} src={activo.src} poster={activo.poster} controls autoPlay playsInline className="w-full max-h-[80vh] bg-black" />
              ) : (
                <div className="relative w-full h-[80vh]">
                  <Image src={activo.src} alt={activo.alt} fill sizes="100vw" className="object-contain" />
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: easeOutExpo }}
              className="absolute bottom-4 md:bottom-6 inset-x-0 flex items-center justify-center gap-6 text-white pointer-events-none"
            >
              <span className="text-sm text-white/60 tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
              <span className="text-sm">{activo.title}</span>
            </motion.div>

            {items.length > 1 && (
              <>
                <LightboxArrow direction="prev" onClick={() => step(-1)} />
                <LightboxArrow direction="next" onClick={() => step(1)} />
              </>
            )}

            <motion.button
              onClick={close}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={springSnappy}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LightboxArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isNext = direction === 'next'

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: isNext ? 4 : -4 }}
      whileTap={{ scale: 0.9 }}
      transition={springSnappy}
      className={`absolute top-1/2 -translate-y-1/2 ${isNext ? 'right-2 md:right-6' : 'left-2 md:left-6'} w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center`}
      aria-label={isNext ? 'Siguiente' : 'Anterior'}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={isNext ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'} />
      </svg>
    </motion.button>
  )
}
