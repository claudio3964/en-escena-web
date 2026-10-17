export type Servicio = {
  slug: string
  title: string
  desc: string
  tags: string[]
  /** Imagen de cabecera para la página de detalle */
  image: string
  headline: string
  intro: string
  beneficios: { title: string; desc: string }[]
  incluye: string[]
  proceso: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

const procesoBase = [
  { title: 'Brief', desc: 'Una charla para entender tu marca, tu público y el objetivo concreto del proyecto.' },
  { title: 'Propuesta', desc: 'Te enviamos un plan creativo con alcance, tiempos y presupuesto cerrado.' },
  { title: 'Producción', desc: 'Ejecutamos con dirección de arte en cada detalle y te mantenemos al tanto.' },
  { title: 'Entrega', desc: 'Material final optimizado para cada plataforma, listo para publicar.' },
]

export const servicios: Servicio[] = [
  {
    slug: 'fotografia-producto',
    title: 'Fotografía de producto',
    desc: 'Imágenes que convierten visitantes en compradores. Iluminación profesional, edición de alta gama y entrega optimizada para e-commerce y redes sociales.',
    tags: ['Fotografía'],
    image: '/images/hero-foto1.jpeg',
    headline: 'Fotos de producto que venden por vos',
    intro: 'En e-commerce y redes, la foto es lo primero que ve tu cliente y muchas veces lo único. Creamos imágenes limpias, consistentes y con intención, pensadas para que tu producto se entienda, se desee y se compre.',
    beneficios: [
      { title: 'Más conversiones', desc: 'Fotos claras y atractivas reducen dudas y aumentan la decisión de compra.' },
      { title: 'Catálogo consistente', desc: 'Misma luz, mismo estilo y misma edición en todo tu catálogo.' },
      { title: 'Listas para publicar', desc: 'Entregamos en los formatos y tamaños de cada plataforma.' },
    ],
    incluye: [
      'Dirección de arte y propuesta de estilo',
      'Fotos en fondo neutro y en contexto (lifestyle)',
      'Retoque y edición profesional',
      'Formatos para e-commerce, Instagram y marketplaces',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿Cuántos productos pueden fotografiar por sesión?', a: 'Depende de la complejidad de cada producto. En el brief armamos un plan realista y te pasamos un presupuesto cerrado.' },
      { q: '¿Necesito llevar los productos al estudio?', a: 'Podemos trabajar en estudio o en tu local, según lo que mejor cuente la historia de tu marca.' },
    ],
  },
  {
    slug: 'sesiones-fotograficas',
    title: 'Sesiones fotográficas',
    desc: 'Retratos corporativos, editoriales de moda y cobertura de eventos con dirección de arte incluida. Cada toma cuenta una historia.',
    tags: ['Fotografía', 'Arte'],
    image: '/images/hero-foto2.jpeg',
    headline: 'Imágenes con dirección de arte, no solo fotos',
    intro: 'Retratos, editoriales y eventos donde cada toma está pensada. Planificamos locación, estilismo y luz para que el resultado transmita exactamente lo que tu marca quiere decir.',
    beneficios: [
      { title: 'Identidad propia', desc: 'Un estilo visual que te diferencia y se reconoce al instante.' },
      { title: 'Dirección en set', desc: 'Te guiamos durante toda la sesión para que te sientas cómodo/a.' },
      { title: 'Material versátil', desc: 'Fotos para web, redes, prensa y campañas en una sola jornada.' },
    ],
    incluye: [
      'Pre-producción: moodboard, locación y estilismo',
      'Dirección de arte durante la sesión',
      'Selección y edición profesional',
      'Entrega en alta resolución y versiones para redes',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿Hacen cobertura de eventos?', a: 'Sí. Cubrimos lanzamientos, eventos corporativos y activaciones de marca.' },
      { q: '¿Cuánto tarda la entrega?', a: 'Te damos una fecha concreta en la propuesta, según el volumen de material.' },
    ],
  },
  {
    slug: 'reels-video',
    title: 'Reels y video corto',
    desc: 'Contenido diseñado para detener el scroll. Guión, filmación y edición profesional para Instagram, TikTok y YouTube Shorts que generan engagement real.',
    tags: ['Video'],
    image: '/images/hero-foto3.jpeg',
    headline: 'Reels que frenan el scroll',
    intro: 'Tenés un segundo para captar atención. Diseñamos reels con un gancho claro, ritmo y una llamada a la acción concreta, para que tu contenido no solo se vea, sino que genere consultas y ventas.',
    beneficios: [
      { title: 'Más alcance', desc: 'Formatos nativos pensados para el algoritmo de cada red.' },
      { title: 'Mensaje claro', desc: 'Guión con gancho, desarrollo y cierre orientado a la acción.' },
      { title: 'Producción ágil', desc: 'Filmamos varias piezas por jornada para tener contenido constante.' },
    ],
    incluye: [
      'Idea y guión de cada pieza',
      'Filmación vertical con equipo profesional',
      'Edición, subtítulos, música y color',
      'Versiones para Instagram, TikTok y YouTube Shorts',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿Tengo que salir yo en cámara?', a: 'No es obligatorio. Armamos el formato según tu comodidad y tu estrategia.' },
      { q: '¿Pueden encargarse también de publicar?', a: 'Sí, combinándolo con nuestro servicio de marketing digital.' },
    ],
  },
  {
    slug: 'edicion-video',
    title: 'Edición de video',
    desc: 'Post-producción que eleva el nivel de cualquier material. Color grading, sound design, motion graphics y entrega en formatos adaptados a cada plataforma.',
    tags: ['Video'],
    image: '/images/hero-foto3.jpeg',
    headline: 'Tu material, con terminación profesional',
    intro: 'Ya tenés el material pero no el tiempo o la técnica para editarlo. Nos encargamos de la post-producción completa para que el resultado final esté a la altura de tu marca.',
    beneficios: [
      { title: 'Look cinematográfico', desc: 'Corrección de color y estética coherente en todas tus piezas.' },
      { title: 'Sonido cuidado', desc: 'Limpieza de audio, música y diseño sonoro.' },
      { title: 'Ahorro de tiempo', desc: 'Vos filmás, nosotras terminamos.' },
    ],
    incluye: [
      'Edición y montaje',
      'Color grading',
      'Sound design y mezcla',
      'Motion graphics y subtítulos',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿Cómo les envío el material?', a: 'Por un link de descarga (Drive, WeTransfer o similar). Te pasamos indicaciones al iniciar.' },
      { q: '¿Cuántas rondas de cambios incluye?', a: 'Lo definimos en la propuesta para que no haya sorpresas.' },
    ],
  },
  {
    slug: 'diseno-grafico',
    title: 'Diseño gráfico',
    desc: 'Identidad visual coherente y memorable. Desde el logo hasta el manual de marca, creamos sistemas visuales que comunican quién sos.',
    tags: ['Diseño'],
    image: '/images/hero-foto2.jpeg',
    headline: 'Una identidad que se recuerda',
    intro: 'Una marca sólida genera confianza antes de decir una palabra. Diseñamos sistemas visuales completos, desde el logo hasta las plantillas para redes, para que todo lo que publiques hable el mismo idioma.',
    beneficios: [
      { title: 'Reconocimiento', desc: 'Una identidad coherente hace que tu marca se identifique al instante.' },
      { title: 'Profesionalismo', desc: 'Una imagen cuidada transmite confianza y justifica tu precio.' },
      { title: 'Autonomía', desc: 'Te entregamos plantillas y manual para que puedas usarlo vos.' },
    ],
    incluye: [
      'Logo y variantes',
      'Paleta de color y tipografías',
      'Manual de marca',
      'Plantillas para redes sociales',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿Pueden rediseñar una marca existente?', a: 'Sí. Partimos de lo que ya tenés y lo llevamos a un nivel más profesional.' },
      { q: '¿En qué formatos entregan?', a: 'Vectoriales y digitales, listos para imprenta y para web.' },
    ],
  },
  {
    slug: 'marketing-digital',
    title: 'Marketing digital',
    desc: 'Estrategia basada en datos. Gestión de redes, campañas publicitarias con retorno medible y análisis de métricas para escalar resultados.',
    tags: ['Marketing', 'Estrategia'],
    image: '/images/hero-foto1.jpeg',
    headline: 'Estrategia que se mide en resultados',
    intro: 'Publicar sin estrategia es ruido. Definimos objetivos, armamos un plan de contenidos y campañas, y medimos todo para invertir donde realmente funciona.',
    beneficios: [
      { title: 'Objetivos claros', desc: 'Cada acción responde a una meta medible: ventas, consultas o alcance.' },
      { title: 'Inversión eficiente', desc: 'Campañas optimizadas para sacar el máximo de cada peso.' },
      { title: 'Reportes simples', desc: 'Te mostramos qué funcionó y qué vamos a hacer después.' },
    ],
    incluye: [
      'Diagnóstico y estrategia de contenidos',
      'Gestión de redes sociales',
      'Campañas en Meta Ads',
      'Reporte mensual de métricas',
    ],
    proceso: procesoBase,
    faqs: [
      { q: '¿La inversión en anuncios está incluida?', a: 'No, el presupuesto de pauta se paga directo a la plataforma. Nosotras lo gestionamos y optimizamos.' },
      { q: '¿Hay permanencia mínima?', a: 'Lo conversamos en la propuesta según los objetivos del proyecto.' },
    ],
  },
]

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug)
}
