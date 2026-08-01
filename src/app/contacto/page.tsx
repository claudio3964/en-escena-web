'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectar con API route /api/contact
    setSent(true)
  }

  return (
    <>
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Contacto</h1>
            <p className="mt-4 text-brand-500">
              Contanos qué necesitás y te respondemos en menos de 24 horas.
            </p>

            {sent ? (
              <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-emerald-800 font-medium">¡Mensaje enviado!</p>
                <p className="text-emerald-600 text-sm mt-1">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1">Servicio de interés</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent bg-white"
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
                  <label className="block text-sm font-medium text-brand-700 mb-1">Mensaje</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent resize-none"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 text-base font-medium text-white bg-brand-900 rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-brand-100">
              <p className="text-sm text-brand-500">O escribinos directo:</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a href="https://wa.me/598XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-700 hover:text-brand-900 underline">
                  WhatsApp
                </a>
                <a href="mailto:contacto@enescena.uy" className="text-sm text-brand-700 hover:text-brand-900 underline">
                  contacto@enescena.uy
                </a>
                <a href="https://instagram.com/enescena.uy" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-700 hover:text-brand-900 underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}