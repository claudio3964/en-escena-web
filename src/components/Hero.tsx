'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setScrollY(window.scrollY)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 500)
  const scale = 1 + scrollY / 2000
  const translateY = scrollY * 0.4

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fondo con video o imagen — reemplazar src por el video/imagen real */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {/* Opción A: Video de fondo (descomentar cuando tengan el video) */}
        {/*
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        */}

        {/* Opción B: Imagen de fondo (usar hasta tener el video) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-4">
          Agencia creativa · Uruguay
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
          Tu marca, en el centro<br />
          <span className="text-white/80">de la escena</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
          Transformamos ideas en contenido visual que vende. Fotografía, video, diseño gráfico
          y estrategia digital para marcas que quieren destacar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/servicios"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-brand-900 bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Ver servicios
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-bounce" />
      </div>
    </section>
  )
}