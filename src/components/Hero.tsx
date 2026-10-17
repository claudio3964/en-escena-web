'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import MotionLink from '@/components/motion/MotionLink'
import { easeOutExpo } from '@/lib/motion'

const intro: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: easeOutExpo } },
}

// El párrafo es el elemento más grande del hero (candidato a LCP): solo se desplaza,
// sin arrancar en opacity 0, para que el navegador lo cuente como pintado desde el HTML inicial.
const riseVisible: Variants = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 1.1, ease: easeOutExpo } },
}

// Cada línea del título sube desde detrás de una máscara (efecto "título de cine")
const lineMask: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1.2, ease: easeOutExpo } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax de salida: el contenido sube un poco más lento que el scroll y se desvanece
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center">
      <motion.div
        style={{ y, opacity }}
        variants={intro}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p variants={rise} className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-4">
          Agencia creativa · Uruguay
        </motion.p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineMask} className="block">
              Tu marca, en el centro
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineMask} className="block text-white/80">
              de la escena
            </motion.span>
          </span>
        </h1>

        <motion.p variants={riseVisible} className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
          Transformamos ideas en contenido visual que vende. Fotografía, video, diseño gráfico
          y estrategia digital para marcas que quieren destacar.
        </motion.p>

        <motion.div variants={rise} className="mt-10 flex flex-wrap justify-center gap-4">
          <MotionLink
            href="/servicios"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Ver servicios
          </MotionLink>

          <MotionLink
            href="/contacto"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            Solicitar presupuesto
          </MotionLink>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: cueOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-white"
            animate={reduceMotion ? undefined : { y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  )
}
