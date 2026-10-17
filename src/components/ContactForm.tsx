'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { servicios } from '@/lib/servicios'
import { site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-brand-200 focus:outline-hidden focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white placeholder:text-brand-300 disabled:opacity-60'

export default function ContactForm({ defaultServicio = '' }: { defaultServicio?: string }) {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: defaultServicio, mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const startedAt = useRef(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const website = new FormData(e.currentTarget).get('website')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website, startedAt: startedAt.current }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorMessage(data.error ?? 'No pudimos enviar el mensaje. Probá de nuevo.')
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setErrorMessage('Sin conexión. Revisá tu internet y probá de nuevo.')
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl"
          role="status"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-emerald-800 font-medium text-lg">¡Mensaje enviado!</p>
          <p className="text-emerald-700 text-sm mt-2">
            Te respondemos en menos de 24 horas. Mientras tanto, seguinos en{' '}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </a>{' '}
            para ver nuestro trabajo.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Honeypot: invisible para personas, los bots lo completan */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">No completar este campo</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-brand-700 mb-1.5">Nombre</label>
            <input
              id="nombre"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="Tu nombre"
              className={inputClass}
              value={form.nombre}
              disabled={sending}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              placeholder="tu@email.com"
              className={inputClass}
              value={form.email}
              disabled={sending}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-brand-700 mb-1.5">Servicio de interés</label>
            <select
              id="servicio"
              className={inputClass}
              value={form.servicio}
              disabled={sending}
              onChange={(e) => setForm({ ...form, servicio: e.target.value })}
            >
              <option value="">Seleccionar...</option>
              {servicios.map((servicio) => (
                <option key={servicio.slug} value={servicio.slug}>{servicio.title}</option>
              ))}
              <option value="pack">Pack completo</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-brand-700 mb-1.5">Contanos tu proyecto</label>
            <textarea
              id="mensaje"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              placeholder="¿Qué necesitás? ¿Para cuándo? ¿Tenés referencias?"
              className={`${inputClass} resize-none`}
              value={form.mensaje}
              disabled={sending}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            />
          </div>

          <AnimatePresence>
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
                className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
              >
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={sending}
            className="w-full px-6 py-3.5 text-base font-medium text-white bg-brand-900 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            {sending ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
