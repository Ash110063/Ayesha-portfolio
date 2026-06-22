import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import WhyMeSection from '@/components/sections/WhyMeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WorkProcessSection from '@/components/sections/WorkProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import LightRays from '../components/saad/LightRays'


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutPreviewSection />
      <WhyMeSection />
      <ServicesSection />
      <WorkProcessSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
