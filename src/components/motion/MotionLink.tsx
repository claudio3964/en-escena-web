'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { springSnappy } from '@/lib/motion'

const MotionNextLink = motion.create(Link)

type MotionLinkProps = Omit<React.ComponentProps<typeof MotionNextLink>, 'children'> & {
  children: React.ReactNode
  /** Atracción magnética hacia el cursor, en px máximos */
  magnetic?: number
}

/**
 * Link con micro-interacción: leve atracción al cursor, escala al hover y "press" al click.
 * Solo anima transform, así que corre en el compositor sin tocar el layout.
 */
export default function MotionLink({ magnetic = 6, className, children, ...props }: MotionLinkProps) {
  const x = useSpring(useMotionValue(0), springSnappy)
  const y = useSpring(useMotionValue(0), springSnappy)

  const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2 * magnetic)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 2 * magnetic)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionNextLink
      {...props}
      className={className}
      style={{ x, y }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={springSnappy}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </MotionNextLink>
  )
}
