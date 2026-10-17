// Estilos compartidos de tarjetas. Ninguna clase toca opacity: la tarjeta es siempre visible.
// La entrada (.card-enter, en globals.css) anima transform; la interacción usa translate/scale
// y box-shadow, que son propiedades separadas, así no se pisan entre sí.

const base =
  'group relative isolate overflow-hidden rounded-2xl border card-enter ' +
  'transition-[translate,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
  'interact:-translate-y-2 motion-reduce:interact:translate-y-0 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ' +
  // Reflejo fino en el borde superior, como el canto de un vidrio
  'before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px ' +
  'before:bg-linear-to-r before:from-transparent before:to-transparent'

export const glassCard = {
  /** Sobre fondos oscuros (video de la home) */
  dark:
    `${base} bg-black/30 backdrop-blur-xl border-white/10 before:via-white/40 ` +
    'interact:border-amber-300/30 interact:bg-black/40 ' +
    'interact:shadow-[0_0_0_1px_rgb(252_211_77/0.12),0_24px_60px_-12px_rgb(245_158_11/0.40),0_12px_48px_-16px_rgb(168_85_247/0.45)]',
  /** Sobre fondos claros */
  light:
    `${base} bg-white/60 backdrop-blur-xl border-black/[0.06] shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(0_0_0/0.08)] before:via-white ` +
    'interact:border-amber-200 interact:bg-white/80 ' +
    'interact:shadow-[0_0_0_1px_rgb(251_191_36/0.25),0_24px_60px_-12px_rgb(245_158_11/0.35),0_12px_48px_-16px_rgb(168_85_247/0.30)]',
}

/** Burbuja de ícono: gradiente sutil y pulso con halo dorado al interactuar con la tarjeta */
export const iconBubble = {
  dark:
    'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ' +
    'bg-linear-to-br from-amber-300/20 to-purple-500/25 text-amber-100 ring-1 ring-white/15 ' +
    'transition-colors duration-500 group-interact:text-white group-interact:animate-icon-pulse motion-reduce:group-interact:animate-none',
  light:
    'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ' +
    'bg-linear-to-br from-brand-900 to-brand-700 text-amber-100 ring-1 ring-black/5 ' +
    'transition-colors duration-500 group-interact:text-amber-300 group-interact:animate-icon-pulse motion-reduce:group-interact:animate-none',
}

/** Manchas de color difuminadas detrás de las tarjetas, para que el vidrio tenga qué esmerilar */
export const colorBlobs = {
  amber: 'pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl',
  purple: 'pointer-events-none absolute -z-10 h-80 w-80 rounded-full bg-purple-400/25 blur-3xl',
}
