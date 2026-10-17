'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

type RevealProps = HTMLMotionProps<'div'> & {
  /** Retraso en segundos antes de animar */
  delay?: number
}

/** Fade-in + slide-up cuando el bloque entra en pantalla (una sola vez). */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = HTMLMotionProps<'div'> & {
  gap?: number
  delay?: number
}

/** Contenedor que revela a sus <StaggerItem> en cascada. */
export function Stagger({ gap = 0.1, delay = 0, children, ...props }: StaggerProps) {
  return (
    <motion.div
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  )
}
