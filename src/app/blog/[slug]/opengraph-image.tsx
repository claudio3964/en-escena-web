import { ogContentType, ogSize, renderOgImage } from '@/lib/og'
import { getPost, posts } from '@/lib/blog'

export const alt = 'Artículo del blog de En Escena, agencia audiovisual en Uruguay'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)

  return renderOgImage({
    eyebrow: post ? `Blog · ${post.categoria}` : 'Blog',
    title: post?.titulo ?? 'Ideas para marcas que quieren destacar',
    subtitle: 'En Escena · Estudio creativo audiovisual',
    image: post?.cover.split('/').pop(),
  })
}
