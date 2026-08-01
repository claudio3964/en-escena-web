import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiciosGrid from '@/components/ServiciosGrid'
import Equipo from '@/components/Equipo'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiciosGrid />
        <Equipo />
      </main>
      <Footer />
    </>
  )
}