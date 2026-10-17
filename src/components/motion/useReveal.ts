'use client'

import { useEffect, useState, type RefObject } from 'react'
import { useInView } from 'framer-motion'

const BOTTOM_OFFSET = 50

/**
 * Devuelve true en cuanto el elemento entra en pantalla, y se queda en true.
 *
 * Dos mecanismos independientes, así la visibilidad nunca depende de uno solo:
 * 1. IntersectionObserver (useInView de Framer).
 * 2. Respaldo por posición: en mount y en cada scroll/resize (1 chequeo por frame) revela
 *    si el borde superior ya pasó la línea de entrada, incluso si el elemento quedó por
 *    encima del viewport (scroll restaurado, saltos con ancla, scroll muy rápido).
 */
export function useReveal(ref: RefObject<Element | null>) {
  const inView = useInView(ref, { once: true, amount: 0.1, margin: `0px 0px -${BOTTOM_OFFSET}px 0px` })
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    if (inView || passed) return
    const el = ref.current
    if (!el) return

    let frame = 0
    const check = () => {
      frame = 0
      if (el.getBoundingClientRect().top < window.innerHeight - BOTTOM_OFFSET) setPassed(true)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref, inView, passed])

  return inView || passed
}
