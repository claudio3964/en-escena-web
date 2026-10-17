/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

// Content Security Policy. Next.js 14 inyecta scripts inline para la hidratación,
// por eso script-src necesita 'unsafe-inline' (en dev también 'unsafe-eval' para HMR).
// Los dominios de Mercado Pago quedan habilitados para el checkout.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://sdk.mercadopago.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://cdn.sanity.io",
  "media-src 'self' https://res.cloudinary.com",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? ' ws:' : ''} https://api.mercadopago.com https://*.mercadopago.com`,
  'frame-src https://*.mercadopago.com https://*.mercadolibre.com',
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
]

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
