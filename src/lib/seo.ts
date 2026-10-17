import type { Metadata } from 'next'
import { site } from '@/lib/site'

type PageSeo = {
  /** Título de la página (se completa con " | En Escena" por el template del layout) */
  title: string
  description: string
  /** Ruta canónica, ej: "/servicios" */
  path: string
  /**
   * Usar la imagen general del sitio (/opengraph-image). Hace falta declararla: si una página
   * define su propio openGraph, Next no hereda la imagen de la raíz. Las rutas con su propio
   * archivo opengraph-image (ej: /servicios/[slug]) pasan false.
   */
  defaultImage?: boolean
  /** Para artículos del blog: og:type "article" con fecha y sección */
  article?: { publishedTime: string; section: string; authors: string[] }
}

const defaultOgImage = { url: '/opengraph-image', width: 1200, height: 630, alt: 'En Escena, agencia audiovisual y estudio creativo en Uruguay' }

/**
 * Metadatos consistentes por página: canonical, OpenGraph y Twitter Card.
 * Las imágenes de vista previa salen de los archivos opengraph-image / twitter-image.
 */
export function pageMetadata({ title, description, path, defaultImage = true, article }: PageSeo): Metadata {
  const fullTitle = `${title} | ${site.name}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(article ? { type: 'article', ...article } : { type: 'website' }),
      locale: 'es_UY',
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      ...(defaultImage && { images: [defaultOgImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(defaultImage && { images: [{ ...defaultOgImage, url: '/twitter-image' }] }),
    },
  }
}
