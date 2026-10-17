'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type Visual = {
  type: 'video' | 'image'
  src: string
  /** Opacidad según el progreso de scroll. Los valores deben quedar entre 0 y 1:
   *  Framer acelera estas animaciones con ScrollTimeline, que no acepta offsets fuera de rango. */
  fade: { input: number[]; output: number[] }
}

// Cada visual hace crossfade con el siguiente en la franja de scroll indicada.
const visuals: Visual[] = [
  { type: 'video', src: '/videos/hero-reel.mp4', fade: { input: [0.12, 0.32], output: [1, 0] } },
  { type: 'image', src: '/images/hero-foto1.jpeg', fade: { input: [0.12, 0.32, 0.38, 0.58], output: [0, 1, 1, 0] } },
  { type: 'image', src: '/images/hero-foto2.jpeg', fade: { input: [0.38, 0.58, 0.64, 0.84], output: [0, 1, 1, 0] } },
  { type: 'image', src: '/images/hero-foto3.jpeg', fade: { input: [0.64, 0.84], output: [0, 1] } },
]

type ScrollVisualProps = {
  children: React.ReactNode[]
}

export default function ScrollVisual({ children }: ScrollVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Las fotos se montan cuando el navegador está libre o al primer scroll,
  // así no compiten con el video por el ancho de banda de la carga inicial.
  const [imagesReady, setImagesReady] = useState(false)

  useEffect(() => {
    if (imagesReady) return
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500))
    const cancel = window.cancelIdleCallback ?? window.clearTimeout
    const id = idle(() => setImagesReady(true))
    return () => cancel(id)
  }, [imagesReady])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!imagesReady && progress > 0.01) setImagesReady(true)
  })

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="sticky top-0 z-0 h-screen -mb-[100vh] overflow-hidden pointer-events-none bg-black"
      >
        {visuals.map((visual) => (
          <VisualLayer
            key={visual.src}
            visual={visual}
            progress={scrollYProgress}
            mounted={visual.type === 'video' || imagesReady}
          />
        ))}

        <div className="absolute inset-0 bg-black/45" />
        {/* Viñeta cinematográfica */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10">
        {children.map((child, index) => (
          <section key={visuals[index]?.src ?? index} className="relative min-h-screen">
            {child}
          </section>
        ))}
      </div>
    </div>
  )
}

function VisualLayer({
  visual,
  progress,
  mounted,
}: {
  visual: Visual
  progress: MotionValue<number>
  mounted: boolean
}) {
  const reduceMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const { input, output } = visual.fade
  // Ventana en la que la capa está visible: desde que empieza a entrar hasta que termina de salir
  const visibleFrom = output[0] === 1 ? 0 : input[0]
  const visibleTo = output[output.length - 1] === 1 ? 1 : input[input.length - 1]

  const opacity = useTransform(progress, input, output)
  // Ken Burns: zoom lento hacia atrás mientras la capa está en escena. Solo transform → GPU.
  const scale = useTransform(progress, [visibleFrom, visibleTo], reduceMotion ? [1, 1] : [1.12, 1])

  // El video deja de decodificar cuando ya no se ve
  useMotionValueEvent(opacity, 'change', (value) => {
    const video = videoRef.current
    if (!video) return
    if (value <= 0.01 && !video.paused) video.pause()
    else if (value > 0.01 && video.paused) video.play().catch(() => {})
  })

  if (!mounted) return null

  return (
    <motion.div className="absolute inset-0" style={{ opacity, scale }}>
      {visual.type === 'video' ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={visual.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={visual.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
    </motion.div>
  )
}
