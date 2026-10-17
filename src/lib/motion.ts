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

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})
