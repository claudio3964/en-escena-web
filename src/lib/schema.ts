import { servicios } from '@/lib/servicios'
import { site, siteUrl } from '@/lib/site'

/** Organization + LocalBusiness y WebSite para la Home (Schema.org / JSON-LD). */
export function homeSchema() {
  const orgId = `${siteUrl}/#organization`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': orgId,
        name: site.name,
        alternateName: 'En Escena Estudio Creativo',
        description:
          'Agencia audiovisual y estudio creativo en Uruguay: producción de video, reels, fotografía, diseño gráfico y gestión de redes.',
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/opengraph-image`,
        telephone: `+${site.whatsapp.number}`,
        email: site.email,
        address: { '@type': 'PostalAddress', addressCountry: 'UY' },
        areaServed: { '@type': 'Country', name: 'Uruguay' },
        sameAs: [site.instagram.url],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: `+${site.whatsapp.number}`,
          email: site.email,
          areaServed: 'UY',
          availableLanguage: ['es'],
        },
        knowsAbout: ['Producción audiovisual', 'Producción de video', 'Fotografía', 'Diseño gráfico', 'Gestión de redes sociales'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios',
          itemListElement: servicios.map((servicio) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: servicio.title,
              description: servicio.desc,
              url: `${siteUrl}/servicios/${servicio.slug}`,
              areaServed: { '@type': 'Country', name: 'Uruguay' },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: 'es-UY',
        publisher: { '@id': orgId },
      },
    ],
  }
}
