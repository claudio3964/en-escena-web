// Datos de contacto centralizados. El número de WhatsApp se configura con
// NEXT_PUBLIC_WHATSAPP_NUMBER en formato internacional, solo dígitos (ej: 59899123456).

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '')

export const site = {
  name: 'En Escena',
  email: 'contacto@enescena.uy',
  instagram: {
    handle: '@enescena.uy',
    url: 'https://instagram.com/enescena.uy',
  },
  whatsapp: {
    number: whatsappNumber,
    enabled: whatsappNumber.length >= 10,
  },
}

/** Link de WhatsApp con mensaje precargado. Si no hay número configurado, cae al formulario. */
export function whatsappUrl(message = 'Hola En Escena! Quiero consultar por un proyecto.') {
  if (!site.whatsapp.enabled) return '/contacto'
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

/** Formatea 59899123456 como +598 99 123 456. */
export function whatsappDisplay() {
  const n = site.whatsapp.number
  if (!site.whatsapp.enabled) return 'Escribinos'
  if (n.startsWith('598') && n.length === 11) {
    return `+598 ${n.slice(3, 5)} ${n.slice(5, 8)} ${n.slice(8)}`
  }
  return `+${n}`
}
