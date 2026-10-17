'use client'

import { motion } from 'framer-motion'
import { site, whatsappUrl } from '@/lib/site'
import { easeOutExpo } from '@/lib/motion'

/**
 * Botón flotante de WhatsApp. Discreto: círculo de vidrio oscuro con el ícono,
 * y una etiqueta que se despliega al pasar el mouse o con foco de teclado.
 * z-40: queda debajo del header (z-50) y del lightbox del portfolio (z-60), que lo tapan.
 */
export default function WhatsAppButton() {
  if (!site.whatsapp.enabled) return null

  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ y: 24, scale: 0.9 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: easeOutExpo }}
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-center rounded-full
        bg-zinc-900/80 backdrop-blur-md border border-white/10 ring-1 ring-white/5
        inset-shadow-[0_1px_0_0_rgb(255_255_255/0.08)] shadow-xl shadow-black/25
        p-3.5 text-white transition-[box-shadow,border-color,background-color] duration-500
        interact:bg-zinc-900/90 interact:border-emerald-400/30 interact:shadow-2xl interact:shadow-emerald-500/20
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      <span
        aria-hidden="true"
        className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0
          transition-[max-width,opacity,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-interact:max-w-40 group-interact:opacity-100 group-interact:px-2"
      >
        ¿Hablamos?
      </span>
      <svg className="h-6 w-6 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 01-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 012.76 6.68c0 5.2-4.24 9.44-9.44 9.44zm8.04-17.48A11.3 11.3 0 0012.05.7C5.78.7.68 5.8.68 12.07c0 2 .52 3.96 1.52 5.68L.58 23.7l6.08-1.6a11.33 11.33 0 005.39 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.04z" />
      </svg>
    </motion.a>
  )
}
