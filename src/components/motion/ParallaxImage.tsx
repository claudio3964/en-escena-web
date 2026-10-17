'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Imagen de portada a pantalla completa que se desplaza más lento que el scroll
 * (parallax) y hace un leve zoom de entrada. Llena a su contenedor posicionado.
 */
export default function ParallaxImage({ src, alt = '' }: { src: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '25%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={reduceMotion ? false : { scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={src} alt={alt} fill preload sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  )
}
