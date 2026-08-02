export default function ImageSection({
  image,
  children,
  overlay = 'bg-black/50',
}: {
  image: string
  children: React.ReactNode
  overlay?: string
}) {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Fotografía */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay para mantener legibilidad */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}