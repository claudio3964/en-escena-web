import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Equipo from '@/components/Equipo'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

export const metadata: Metadata = pageMetadata({
  title: 'Nosotras: el Estudio Creativo',
  description:
    'Conocé a Tamara, Camilla y Jamyla: el equipo de En Escena, agencia audiovisual uruguaya de video, fotografía, diseño y marketing digital.',
  path: '/sobre-nosotras',
})

export default function SobreNosotrasPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Reveal className="mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-400 mb-3">Nuestra historia</p>
            <h1 className="text-3xl md:text-4xl font-medium text-brand-900">Sobre nosotras</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-brand-600 leading-relaxed">
              En Escena nació de la convicción de que cada marca tiene una historia que merece ser contada 
              con excelencia visual. Somos tres mujeres uruguayas que unimos nuestras especialidades 
              para ofrecer una propuesta integral: desde la estrategia digital hasta la entrega final 
              del contenido.
            </p>
            <p className="text-brand-500 leading-relaxed mt-6">
              No creemos en las soluciones genéricas. Cada proyecto comienza con una conversación genuina 
              para entender qué necesitás, a quién querés llegar y qué te hace diferente. A partir de ahí, 
              diseñamos un plan creativo a medida.
            </p>
            <p className="text-brand-500 leading-relaxed mt-6">
              Nuestro enfoque combina la obsesión por los detalles estéticos con una mirada estratégica 
              orientada a resultados. Porque un video hermoso que no vende es arte, y una campaña que vende 
              pero es fea es ruido. Nosotras buscamos el punto exacto donde ambas cosas se encuentran.
            </p>
          </Reveal>

          <Stagger gap={0.1} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="text-center p-6 bg-brand-50 rounded-2xl">
              <div className="text-3xl font-medium text-brand-900">50+</div>
              <div className="text-sm text-brand-500 mt-1">Proyectos realizados</div>
            </StaggerItem>
            <StaggerItem className="text-center p-6 bg-brand-50 rounded-2xl">
              <div className="text-3xl font-medium text-brand-900">3</div>
              <div className="text-sm text-brand-500 mt-1">Especialistas</div>
            </StaggerItem>
            <StaggerItem className="text-center p-6 bg-brand-50 rounded-2xl">
              <div className="text-3xl font-medium text-brand-900">100%</div>
              <div className="text-sm text-brand-500 mt-1">Compromiso</div>
            </StaggerItem>
          </Stagger>
        </div>
        <Equipo />
      </main>
      <Footer />
    </>
  )
}