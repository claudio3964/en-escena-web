# En Escena — Sitio Web

Agencia creativa especializada en marketing digital, fotografía, video, diseño gráfico y dirección de arte.

## Equipo
- **Tamara** — Edición · Video · Fotografía · Diseño gráfico
- **Camilla** — Marketing digital
- **Jamyla** — Fotografía · Dirección de arte

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Mercado Pago** (pagos)
- **Resend** (emails)
- **Vercel** (hosting)

## Estructura de URLs (SEO)
- `/` — Inicio
- `/servicios` — Listado
- `/servicios/[slug]` — Detalle por servicio
- `/portfolio` — Galería
- `/sobre-nosotras` — Equipo
- `/blog` — Contenido SEO
- `/contacto` — Formulario + WhatsApp
- `/contratar` — Brief + checkout

## Instalación
```bash
npm install
npm run dev
```

## Variables de entorno
Copiar `.env.example` a `.env.local` y completar.

## Deploy
Conectá el repo a Vercel. El deploy es automático en cada push a `main`.

## Próximos pasos
1. Comprar dominio `enescena.uy` o similar
2. Configurar cuenta de Mercado Pago y obtener credenciales
3. Subir imágenes del portfolio a Cloudinary
4. Crear posts iniciales en el blog (SEO)
5. Conectar Google Analytics + Search Console
