import type { Transition, Variants } from 'framer-motion'

// Curvas y tiempos compartidos para que toda la web se mueva con el mismo "pulso".
export const easeOutExpo = [0.16, 1, 0.3, 1] as const
export const easeOutQuint = [0.22, 1, 0.36, 1] as const

export const springSoft: Transition = { type: 'spring', stiffness: 260, damping: 26, mass: 0.8 }
export const springSnappy: Transition = { type: 'spring', stiffness: 420, damping: 30 }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  // El delay solo se declara si existe: un delay explícito pisaría el escalonado de <Stagger>
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo, ...(delay ? { delay } : {}) },
  }),
}

/**
 * Variantes de entrada para tarjetas interactivas. Cada tarjeta decide su propio estado
 * con useReveal (no hereda variantes del contenedor ni depende de gestos), y una vez
 * en "show" no vuelve a "hidden". El escalonado se logra con el delay por índice.
 */
export const cardVariants = (index = 0, gap = 0.08): Variants => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    // index % 3: el escalonado sigue las columnas de la grilla, en mobile no acumula espera
    transition: { duration: 0.9, ease: easeOutExpo, delay: (index % 3) * gap },
  },
})

/** Hover/press de tarjetas en CSS: en Tailwind 4 translate y scale son propiedades
 *  separadas de transform, así que no compiten con la animación de entrada de Framer. */
export const cardHoverClass =
  'transition-[translate,scale,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 active:scale-[0.985] motion-reduce:hover:translate-y-0'

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})
