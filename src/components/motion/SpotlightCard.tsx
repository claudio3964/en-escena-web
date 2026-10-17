'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cardHoverClass, cardVariants } from '@/lib/motion'
import { useReveal } from '@/components/motion/useReveal'

const MotionNextLink = motion.create(Link)

type SpotlightCardProps = Omit<React.ComponentProps<typeof MotionNextLink>, 'children'> & {
  children: React.ReactNode
  /** Color del halo que sigue al cursor */
  glow?: string
  /** Posición en la grilla, para escalonar la entrada */
  index?: number
}

/**
 * Tarjeta-link con halo de luz que sigue al cursor y leve elevación al hover.
 * Maneja su propia entrada al hacer scroll (no depende de variantes del contenedor).
 */
export default function SpotlightCard({
  glow = 'rgba(255,255,255,0.12)',
  index = 0,
  className,
  children,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const revealed = useReveal(ref)
  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)
  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 70%)`

  const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <MotionNextLink
      {...props}
      ref={ref}
      data-reveal=""
      variants={cardVariants(index)}
      initial="hidden"
      animate={revealed ? 'show' : 'hidden'}
      onPointerMove={handleMove}
      className={`group relative overflow-hidden ${cardHoverClass} ${className ?? ''}`}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </MotionNextLink>
  )
}
