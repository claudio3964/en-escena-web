import type { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'
import { servicios } from '@/lib/servicios'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const paginas: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contacto', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/sobre-nosotras', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  ]

  return [
    ...paginas.map(({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...servicios.map((servicio) => ({
      url: `${siteUrl}/servicios/${servicio.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.fecha}T00:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
