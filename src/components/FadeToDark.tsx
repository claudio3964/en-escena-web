/**
 * Transición suave entre una sección clara y una banda oscura (bg-brand-900).
 * Va entre ambas secciones, nunca detrás de contenido, así los textos y campos de la
 * sección clara quedan siempre sobre fondo claro.
 *
 * El degradado usa varias paradas con curva ease-in-out y tonos cálidos (stone) para que
 * el tramo medio no se vea gris sucio ni haga "escalones", y termina exactamente en
 * #121212 (brand-900) para que no quede costura con la sección siguiente.
 *
 * @param from color exacto con el que termina la sección clara de arriba (por defecto blanco).
 * Si no coincide, se marca una línea en el borde superior del degradado.
 */
export default function FadeToDark({ from = '#ffffff', className = '' }: { from?: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative h-56 md:h-72 overflow-clip ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${from} 0%, #fbfaf9 14%, #f1efed 28%, #d9d5d1 42%, #a8a29e 56%, #6b6560 68%, #3a3633 80%, #1f1d1b 90%, #121212 100%)`,
        }}
      />
      {/* Resplandor dorado tenue en la zona donde el claro se funde con el oscuro. La máscara
          lo apaga arriba y abajo: si llegara con brillo al borde inferior, marcaría una línea
          contra la banda oscura que sigue. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_55%_80%_at_50%_70%,rgb(245_158_11/0.18),transparent_70%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_55%,transparent_100%)]" />
    </div>
  )
}
