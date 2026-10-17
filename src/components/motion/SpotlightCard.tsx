'use client'

import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { fadeUp, springSoft } from '@/lib/motion'

const MotionNextLink = motion.create(Link)

type SpotlightCardProps = Omit<React.ComponentProps<typeof MotionNextLink>, 'children'> & {
  children: React.ReactNode
  /** Color del halo que sigue al cursor */
  glow?: string
}

/**
 * Tarjeta-link con halo de luz que sigue al cursor y leve elevación al hover.
 * Pensada para usarse dentro de <Stagger> (hereda la variante fadeUp).
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
    <MotionNextLink
      {...props}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={springSoft}
      onPointerMove={handleMove}
      className={`group relative overflow-hidden ${className ?? ''}`}
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
