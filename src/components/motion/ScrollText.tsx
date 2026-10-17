'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

/** Texto que se "enciende" palabra por palabra al ritmo del scroll. */
export default function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 35%'] })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`block ${className ?? ''}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </span>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])

  return (
    <motion.span aria-hidden="true" style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  )
}
