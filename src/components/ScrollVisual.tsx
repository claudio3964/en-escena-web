'use client'

import React from 'react'

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

export default function ScrollVisual({ children }: ScrollVisualProps) {
  return (
    <div className="relative">
      {visuals.map((visual, index) => (
        <section
          key={visual.src}
          className="relative min-h-screen overflow-hidden"
        >
          {/* Fondo visual */}
          <div className="absolute inset-0">
            {visual.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/hero-video-poster.jpg"
              >
                <source src={visual.src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${visual.src})`,
                }}
              />
            )}

            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Contenido */}
          <div className="relative z-10 min-h-screen">
            {children[index]}
          </div>
        </section>
      ))}
    </div>
  )
}
