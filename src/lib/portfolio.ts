// Proyectos del portfolio. Para sumar trabajos, agregá la imagen o video en /public
// (o una URL de Cloudinary) y una entrada nueva acá.

export type PortfolioCategoria = 'Fotografía' | 'Video' | 'Diseño'

export type PortfolioItem = {
  id: string
  title: string
  categoria: PortfolioCategoria
  type: 'image' | 'video'
  src: string
  /** Imagen fija para mostrar en la grilla cuando el item es un video */
  poster?: string
  alt: string
  /** Proporción para la grilla: vertical, horizontal o cuadrada */
  aspect: 'portrait' | 'landscape' | 'square'
}

export const categorias: PortfolioCategoria[] = ['Fotografía', 'Video', 'Diseño']

export const portfolio: PortfolioItem[] = [
  {
    id: 'reel-en-escena',
    title: 'Reel de marca',
    categoria: 'Video',
    type: 'video',
    src: '/videos/hero-reel.mp4',
    poster: '/images/hero-foto1.jpeg',
    alt: 'Reel de presentación de En Escena',
    aspect: 'landscape',
  },
  {
    id: 'sesion-01',
    title: 'Sesión editorial',
    categoria: 'Fotografía',
    type: 'image',
    src: '/images/hero-foto1.jpeg',
    alt: 'Fotografía editorial de En Escena',
    aspect: 'portrait',
  },
  {
    id: 'sesion-02',
    title: 'Dirección de arte',
    categoria: 'Fotografía',
    type: 'image',
    src: '/images/hero-foto2.jpeg',
    alt: 'Fotografía con dirección de arte de En Escena',
    aspect: 'square',
  },
  {
    id: 'sesion-03',
    title: 'Contenido para redes',
    categoria: 'Fotografía',
    type: 'image',
    src: '/images/hero-foto3.jpeg',
    alt: 'Fotografía de contenido para redes de En Escena',
    aspect: 'portrait',
  },
]
