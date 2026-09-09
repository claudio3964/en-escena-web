'use client'

import React, { useEffect, useRef } from 'react'

const visuals = [
  {
    type: 'video',
    src: '/videos/hero-reel.mp4',
  },
  {
    type: 'image',
    src: '/images/hero-foto1.jpeg',
  },
  {
    type: 'image',
    src: '/images/hero-foto2.jpeg',
  },
  {
    type: 'image',
    src: '/images/hero-foto3.jpeg',
  },
]

type ScrollVisualProps = {
  children: React.ReactNode[]
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)

const fade = (progress: number, start: number, end: number) =>
  clamp((progress - start) / (end - start))

export default function ScrollVisual({ children }: ScrollVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const visualRefs = useRef<(HTMLVideoElement | HTMLImageElement | null)[]>([])

  useEffect(() => {
    let animationFrame: number | null = null

    const updateVisuals = () => {
      animationFrame = null

      const container = containerRef.current
      if (!container) return

      const scrollRange = container.offsetHeight - window.innerHeight
      const progress = scrollRange > 0
        ? clamp(-container.getBoundingClientRect().top / scrollRange)
        : 0

      const videoToFirst = fade(progress, 0.12, 0.32)
      const firstToSecond = fade(progress, 0.38, 0.58)
      const secondToThird = fade(progress, 0.64, 0.84)
      const opacities = [
        1 - videoToFirst,
        videoToFirst * (1 - firstToSecond),
        firstToSecond * (1 - secondToThird),
        secondToThird,
      ]

      visualRefs.current.forEach((visual, index) => {
        if (visual) visual.style.opacity = String(opacities[index])
      })
    }

    const scheduleUpdate = () => {
      if (animationFrame !== null) return
      animationFrame = window.requestAnimationFrame(updateVisuals)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="sticky top-0 z-0 h-screen -mb-[100vh] overflow-hidden pointer-events-none"
      >
        {visuals.map((visual, index) =>
          visual.type === 'video' ? (
            <video
              key={visual.src}
              ref={(element) => {
                visualRefs.current[index] = element
              }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover will-change-opacity"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <source src={visual.src} type="video/mp4" />
            </video>
          ) : (
            <img
              key={visual.src}
              ref={(element) => {
                visualRefs.current[index] = element
              }}
              src={visual.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover will-change-opacity"
              style={{ opacity: 0 }}
            />
          ),
        )}

        <div className="absolute inset-0 bg-black/45" />
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
