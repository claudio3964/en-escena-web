// Artículos del blog. El cuerpo se escribe como bloques simples (párrafo, subtítulo, lista, cita)
// para mantener un diseño consistente sin depender de un CMS. Para sumar un artículo, agregá
// una entrada nueva: la página, el sitemap y la vista previa se generan solos.

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export type BlogPost = {
  slug: string
  titulo: string
  extracto: string
  categoria: 'Video' | 'Diseño' | 'Redes sociales'
  /** Fecha de publicación, formato AAAA-MM-DD */
  fecha: string
  cover: string
  coverAlt: string
  autor: string
  body: BlogBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: 'el-poder-del-video-marketing-en-uruguay',
    titulo: 'El poder del video marketing en el mercado uruguayo',
    extracto:
      'En un país donde todos se conocen, la confianza vende. Por qué el video es la forma más rápida de generarla y cómo empezar a producirlo con criterio.',
    categoria: 'Video',
    fecha: '2026-10-08',
    cover: '/images/hero-foto3.jpeg',
    coverAlt: 'El equipo de En Escena durante una producción audiovisual',
    autor: 'Equipo En Escena',
    body: [
      {
        type: 'p',
        text: 'Uruguay es un mercado chico, y eso cambia las reglas del juego. Acá la gente le compra a quien conoce, a quien le recomendaron o a quien ya vio en algún lado. El boca a boca sigue siendo el canal de ventas más poderoso, solo que ahora también pasa por Instagram, por los estados de WhatsApp y por los videos que se comparten en grupos de amigos y de trabajo.',
      },
      {
        type: 'p',
        text: 'En ese contexto, el video no es un lujo ni una moda: es la manera más directa de que alguien sienta que ya te conoce antes de escribirte.',
      },
      { type: 'h2', text: 'Por qué el video funciona tan bien en un mercado chico' },
      {
        type: 'p',
        text: 'Una foto muestra cómo es tu producto. Un video muestra cómo trabajás, quién está detrás y qué se siente comprarte. Esa diferencia, que parece sutil, es la que convierte a un seguidor en un cliente. Cuando ves la cara de quien atiende, escuchás su voz y entendés su proceso, la desconfianza baja.',
      },
      {
        type: 'p',
        text: 'Además, en un mercado donde muchas marcas ofrecen algo parecido, el video es la herramienta que mejor transmite personalidad. Dos cafeterías pueden tener el mismo menú; la que logra mostrar su ambiente, su gente y su forma de hacer las cosas es la que se recuerda.',
      },
      { type: 'h2', text: 'Qué videos conviene producir primero' },
      {
        type: 'p',
        text: 'No hace falta arrancar con una gran campaña. Estos formatos funcionan bien para casi cualquier marca y se pueden producir en una misma jornada de rodaje:',
      },
      {
        type: 'ul',
        items: [
          'Presentación de marca: un video corto que cuente quiénes son, qué hacen y por qué lo hacen.',
          'Detrás de escena: el proceso, el taller, la cocina, la oficina. Lo que normalmente no se ve.',
          'Producto o servicio en uso: menos características técnicas y más situaciones reales.',
          'Testimonios: clientes contando su experiencia con sus propias palabras.',
          'Reels educativos: respuestas a las preguntas que tus clientes te hacen siempre.',
        ],
      },
      { type: 'h2', text: 'Cómo planificar sin un gran presupuesto' },
      {
        type: 'p',
        text: 'Más que el equipo técnico, lo que define un buen video es la claridad de la idea. Antes de filmar, conviene responder tres preguntas: a quién le hablo, qué quiero que sienta y qué quiero que haga después de verlo.',
      },
      {
        type: 'ul',
        items: [
          'Un mensaje por pieza. Si un video intenta decir todo, no dice nada.',
          'Cuidá los primeros segundos: ahí se decide si alguien sigue mirando o pasa de largo.',
          'Subtitulá siempre. Mucha gente mira videos sin sonido, en el ómnibus o en el trabajo.',
          'Pensá en vertical: es el formato natural del celular y de las redes donde está tu público.',
          'Filmá varias piezas por jornada. Planificar en lote ahorra tiempo y presupuesto.',
        ],
      },
      { type: 'h2', text: 'Medí lo que de verdad importa' },
      {
        type: 'p',
        text: 'Las reproducciones son una métrica fácil de mirar, pero no siempre dicen mucho. Para una marca uruguaya suele ser más útil fijarse en cuántas personas guardan o comparten el contenido, cuánto tiempo se quedan mirando y, sobre todo, cuántas consultas llegan por mensaje directo o por WhatsApp después de publicar.',
      },
      {
        type: 'quote',
        text: 'Un video hermoso que no vende es arte; uno que vende pero no transmite nada es ruido. El objetivo es encontrar el punto donde las dos cosas se encuentran.',
      },
      {
        type: 'p',
        text: 'El video marketing no se trata de volverse viral. Se trata de que, cuando alguien necesite lo que ofrecés, ya sepa quién sos y confíe en vos. Y en un país como el nuestro, esa confianza vale más que cualquier algoritmo.',
      },
    ],
  },
  {
    slug: 'como-estructurar-la-identidad-visual-de-tu-marca',
    titulo: 'Cómo estructurar la identidad visual de tu marca',
    extracto:
      'Una identidad visual no es solo un logo. Es un sistema de decisiones que hace que tu marca se reconozca en cualquier lugar. Te contamos cómo armarla paso a paso.',
    categoria: 'Diseño',
    fecha: '2026-09-24',
    cover: '/images/hero-foto2.jpeg',
    coverAlt: 'Retrato del equipo de En Escena con dirección de arte',
    autor: 'Equipo En Escena',
    body: [
      {
        type: 'p',
        text: 'Muchas marcas empiezan por el logo y ahí se quedan. El resultado es conocido: cada publicación tiene un estilo distinto, los colores cambian según quién diseñe y nadie sabe muy bien qué tipografía usar. La identidad visual es justamente lo que ordena todo eso.',
      },
      {
        type: 'p',
        text: 'Pensala como un sistema: un conjunto de reglas que hace que tu marca se reconozca en una tarjeta, en un reel, en la vidriera o en un cartel, aunque no aparezca el logo.',
      },
      { type: 'h2', text: '1. Empezá por la estrategia, no por el diseño' },
      {
        type: 'p',
        text: 'Antes de abrir cualquier programa de diseño, definí quién sos, a quién le hablás y qué te hace diferente. Un ejercicio útil es elegir tres adjetivos que describan la personalidad de tu marca: cercana, elegante, divertida, técnica, cálida. Cada decisión visual que venga después tiene que poder justificarse con esas palabras.',
      },
      { type: 'h2', text: '2. Logo y sus variantes' },
      {
        type: 'p',
        text: 'Un buen logo funciona grande y chico, en color y en blanco y negro. Por eso conviene tener una versión principal, una secundaria para espacios angostos y un isotipo para usos mínimos, como el perfil de redes o el ícono de una web.',
      },
      { type: 'h2', text: '3. Paleta de color' },
      {
        type: 'p',
        text: 'Elegí uno o dos colores principales que identifiquen a la marca, algunos secundarios para acompañar y neutros para fondos y textos. Definí los códigos exactos para pantalla e impresión, y verificá que haya buen contraste: un color lindo que no se lee no sirve.',
      },
      { type: 'h2', text: '4. Tipografías' },
      {
        type: 'p',
        text: 'Con dos familias alcanza: una con personalidad para títulos y otra muy legible para textos largos. Sumar más tipografías casi siempre resta coherencia.',
      },
      { type: 'h2', text: '5. Estilo de fotografía y video' },
      {
        type: 'p',
        text: 'Esta es la parte que más se olvida y la que más pesa en redes. Definí cómo es la luz de tus imágenes, qué encuadres usás, qué tratamiento de color tienen y qué tipo de personas o escenas aparecen. Cuando el estilo audiovisual es coherente, el contenido se reconoce en el feed antes de leer el nombre de la cuenta.',
      },
      { type: 'h2', text: '6. Manual de marca y plantillas' },
      {
        type: 'p',
        text: 'Todo lo anterior tiene que quedar documentado en un manual simple, pensado para usarse, no para guardarse. Y para el día a día, nada mejor que plantillas listas para historias, publicaciones y presentaciones, así cualquier persona del equipo puede producir contenido sin romper la identidad.',
      },
      { type: 'h2', text: 'Errores que conviene evitar' },
      {
        type: 'ul',
        items: [
          'Copiar la estética de una marca grande que no tiene nada que ver con tu público.',
          'Cambiar colores o estilo cada pocos meses porque "ya aburre".',
          'Usar demasiados recursos a la vez: muchos colores, muchas tipografías, muchos efectos.',
          'Diseñar sin pensar en el celular, que es donde la mayoría va a ver tu marca.',
        ],
      },
      {
        type: 'quote',
        text: 'La coherencia construye reconocimiento, y el reconocimiento construye confianza.',
      },
      {
        type: 'p',
        text: 'Una identidad visual bien estructurada no limita la creatividad: le da un marco. Y con ese marco, cada pieza que publiques suma a la misma historia en lugar de empezar de cero.',
      },
    ],
  },
  {
    slug: 'tendencias-de-contenido-para-redes-sociales',
    titulo: 'Tendencias de contenido para redes sociales',
    extracto:
      'Lo auténtico le gana a lo perfecto, el video corto necesita historia y lo local es un diferencial. Las tendencias que vemos funcionar y cómo aplicarlas sin quemarte.',
    categoria: 'Redes sociales',
    fecha: '2026-09-10',
    cover: '/images/hero-foto1.jpeg',
    coverAlt: 'Integrantes del equipo de En Escena en una sesión de contenido',
    autor: 'Equipo En Escena',
    body: [
      {
        type: 'p',
        text: 'Las redes cambian rápido, pero algunas ideas se repiten en las marcas que mejor conectan con su público. Más que perseguir cada formato nuevo, conviene entender qué está buscando la gente cuando abre Instagram o TikTok. Estas son las tendencias que vemos funcionar en el día a día con las marcas con las que trabajamos.',
      },
      { type: 'h2', text: 'Lo auténtico le gana a lo perfecto' },
      {
        type: 'p',
        text: 'El contenido demasiado producido empieza a parecer publicidad, y la publicidad se saltea. Mostrar el detrás de escena, las caras del equipo y el proceso real genera más cercanía que una pieza impecable pero fría. Esto no significa descuidar la calidad: significa que la producción tiene que estar al servicio de la historia, no al revés.',
      },
      { type: 'h2', text: 'Video corto, pero con historia' },
      {
        type: 'p',
        text: 'Los reels y videos cortos siguen siendo el formato con más alcance, pero el público ya no se queda solo por un efecto o una canción de moda. Los que funcionan tienen una estructura clara: un gancho que despierta curiosidad, un desarrollo que aporta algo y un cierre que invita a hacer algo.',
      },
      { type: 'h2', text: 'Series y formatos que se repiten' },
      {
        type: 'p',
        text: 'Tener secciones fijas ayuda a que la audiencia sepa qué esperar y vuelva. Puede ser un consejo semanal, una pregunta frecuente respondida en video o un "un día en" que muestre distintas partes del negocio. Además, simplifica mucho la planificación.',
      },
      { type: 'h2', text: 'Contenido que se guarda y se comparte' },
      {
        type: 'p',
        text: 'Las publicaciones que más valor aportan son las que la gente guarda para después o le manda a alguien. Carruseles con guías paso a paso, listas de recomendaciones o respuestas claras a dudas comunes funcionan muy bien porque resuelven un problema concreto.',
      },
      { type: 'h2', text: 'Comunidad y conversación' },
      {
        type: 'p',
        text: 'Publicar es la mitad del trabajo; la otra mitad es responder. Contestar comentarios, abrir preguntas en historias y llevar las consultas a mensajes directos o a WhatsApp convierte la interacción en ventas. En Uruguay, donde la atención personalizada se valora tanto, esta parte hace una gran diferencia.',
      },
      { type: 'h2', text: 'Lo local como diferencial' },
      {
        type: 'p',
        text: 'Hablar como habla tu público, con el voseo y las referencias que todos entienden, genera una identificación inmediata. Mostrar lugares, situaciones y costumbres reconocibles hace que el contenido se sienta propio y no una copia de lo que se ve afuera.',
      },
      { type: 'h2', text: 'Cómo aplicarlo sin quemarte' },
      {
        type: 'ul',
        items: [
          'Armá un calendario mensual con pocos formatos fijos en lugar de improvisar cada día.',
          'Producí en lotes: una jornada bien planificada puede resolver contenido para varias semanas.',
          'Reutilizá: un video largo puede convertirse en varios reels, citas y carruseles.',
          'Revisá los resultados una vez por mes y ajustá, en lugar de cambiar todo cada semana.',
        ],
      },
      {
        type: 'quote',
        text: 'La constancia le gana a la intensidad: es mejor publicar bien todas las semanas que mucho durante un mes y después desaparecer.',
      },
      {
        type: 'p',
        text: 'Las tendencias sirven como brújula, pero lo que realmente sostiene una cuenta es tener algo para decir y decirlo con una voz propia. Si eso está claro, cualquier formato nuevo se puede adaptar a tu marca.',
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

/** Minutos de lectura estimados (~200 palabras por minuto). */
export function readingTime(post: BlogPost) {
  const text = post.body
    .map((block) => (block.type === 'ul' ? block.items.join(' ') : block.text))
    .join(' ')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

const dateFormatter = new Intl.DateTimeFormat('es-UY', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatDate(fecha: string) {
  return dateFormatter.format(new Date(`${fecha}T00:00:00Z`))
}
