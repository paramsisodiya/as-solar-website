import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBand from '@/components/TrustBand'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Pricing from '@/components/Pricing'
import SolarCalculator from '@/components/SolarCalculator'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBand />
      <Services />
      <Projects />
      <Pricing />
      <SolarCalculator />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
