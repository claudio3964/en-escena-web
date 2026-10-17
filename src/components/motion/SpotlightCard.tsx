'use client'

import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

type SpotlightCardProps = React.ComponentProps<typeof Link> & {
  /** Color del halo que sigue al cursor */
  glow?: string
}

/**
 * Tarjeta-link con halo de luz que sigue al cursor.
 * La tarjeta en sí no usa Framer Motion: su visibilidad nunca depende de JS ni de eventos.
 * Framer solo mueve el halo (un fondo decorativo encima de la tarjeta).
 */
export default function SpotlightCard({
  glow = 'rgba(255,255,255,0.12)',
  className,
  children,
  ...props
}: SpotlightCardProps) {
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
    <Link {...props} onPointerMove={handleMove} className={className}>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-interact:opacity-100"
        style={{ background }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </Link>
  )
}
