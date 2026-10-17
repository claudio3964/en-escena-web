'use client'

import { MotionConfig } from 'framer-motion'

/** Respeta "reducir movimiento" del sistema: desactiva transforms y deja solo opacidad. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
