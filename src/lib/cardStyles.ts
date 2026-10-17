// Estilos compartidos de tarjetas. Ninguna clase toca opacity: la tarjeta es siempre visible.
// La entrada (.card-enter, en globals.css) anima transform; la interacción usa translate
// y box-shadow, que son propiedades separadas, así no se pisan entre sí.
// En Tailwind 4 shadow-*, inset-shadow-* y ring-* se combinan en un mismo box-shadow.

const base =
  'group relative isolate overflow-hidden rounded-2xl border card-enter backdrop-blur-md ' +
  'transition-[translate,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
  'interact:-translate-y-2 motion-reduce:interact:translate-y-0 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400'

export const glassCard = {
  /** Vidrio oscuro: sobre el video de la home y sobre bandas oscuras */
  dark:
    `${base} bg-zinc-900/60 border-white/10 ring-1 ring-white/5 ` +
    // Reflejo superior: una línea de luz interna en el canto del vidrio
    'inset-shadow-[0_1px_0_0_rgb(255_255_255/0.08)] shadow-xl shadow-black/20 ' +
    'interact:bg-zinc-900/70 interact:border-white/20 interact:shadow-2xl interact:shadow-amber-500/10',
  /** Vidrio claro: sobre fondos claros con degradado */
  light:
    `${base} bg-white/70 border-white/40 ring-1 ring-white/20 ` +
    'inset-shadow-[0_1px_0_0_rgb(255_255_255/0.9)] shadow-xl shadow-black/5 ' +
    'interact:bg-white/80 interact:border-white/70 interact:shadow-2xl interact:shadow-amber-500/10',
}

/** Jerarquía tipográfica dentro de las tarjetas */
export const cardText = {
  dark: {
    index: 'text-xs font-medium tracking-[0.2em] text-white/40',
    title: 'text-lg font-medium tracking-tight text-white',
    body: 'text-sm leading-relaxed text-zinc-300',
  },
  light: {
    index: 'text-xs font-medium tracking-[0.2em] text-brand-400',
    title: 'text-lg font-medium tracking-tight text-brand-900',
    body: 'text-sm leading-relaxed text-brand-600',
  },
}

/** Burbuja de ícono: pulso con halo dorado al interactuar con la tarjeta */
export const iconBubble = {
  dark:
    'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ' +
    'bg-white/10 text-amber-200 ring-1 ring-white/15 inset-shadow-[0_1px_0_0_rgb(255_255_255/0.12)] ' +
    'transition-colors duration-500 group-interact:text-amber-100 group-interact:animate-icon-pulse motion-reduce:group-interact:animate-none',
  light:
    'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ' +
    'bg-brand-900 text-amber-200 ring-1 ring-black/5 shadow-md shadow-black/10 ' +
    'transition-colors duration-500 group-interact:text-amber-300 group-interact:animate-icon-pulse motion-reduce:group-interact:animate-none',
}

/** Manchas de color difuminadas detrás de las tarjetas, para que el vidrio tenga qué esmerilar */
export const colorBlobs = {
  light: {
    amber: 'pointer-events-none absolute -z-10 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl',
    purple: 'pointer-events-none absolute -z-10 h-96 w-96 rounded-full bg-purple-300/35 blur-3xl',
  },
  dark: {
    amber: 'pointer-events-none absolute -z-10 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl',
    purple: 'pointer-events-none absolute -z-10 h-[28rem] w-[28rem] rounded-full bg-purple-600/25 blur-3xl',
  },
}

/** Fondo claro con degradado sutil (en vez de blanco plano) */
export const lightSectionBg = 'bg-linear-to-b from-stone-50 via-white to-amber-50/40'
