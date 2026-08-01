'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Contacto</p>
              <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Hablemos de tu proyecto</h1>
              <p className="mt-4 text-brand-500 leading-relaxed">
                Contanos qué tenés en mente. Te respondemos en menos de 24 horas con un presupuesto 
                sin compromiso.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Email</p>
                    <p className="text-sm text-brand-500">contacto@enescena.uy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">WhatsApp</p>
                    <a href="https://wa.me/598XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:text-brand-900 transition-colors">
                      +598 XX XXX XXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-900">Instagram</p>
                    <a href="https://instagram.com/enescena.uy" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:text-brand-900 transition-colors">
                      @enescena.uy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {sent ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-emerald-800 font-medium text-lg">¡Mensaje enviado!</p>
                  <p className="text-emerald-600 text-sm mt-2">Nos pondremos en contacto a la brevedad. Mientras tanto, seguinos en Instagram para ver nuestro trabajo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">Servicio de interés</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white"
                      value={form.servicio}
                      onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="fotografia">Fotografía</option>
                      <option value="video">Video / Reels</option>
                      <option value="diseno">Diseño gráfico</option>
                      <option value="marketing">Marketing digital</option>
                      <option value="pack">Pack completo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">Contanos tu proyecto</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="¿Qué necesitás? ¿Para cuándo? ¿Tienes referencias?"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white resize-none"
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 text-base font-medium text-white bg-brand-900 rounded-xl hover:bg-brand-700 transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}