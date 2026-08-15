import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import WhyKavora from '@/components/WhyKavora'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import InstagramFeed from '@/components/InstagramFeed'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Services />
        <OurWork />
        <WhyKavora />
        <Testimonials />
        <AboutUs />
        <InstagramFeed />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
