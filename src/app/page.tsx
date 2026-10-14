import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import WhyKavora from '@/components/WhyKavora'
import Testimonials from '@/components/Testimonials'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'
import IntroLoader from '@/components/IntroLoader'

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navigation />
      {/* overflow-x-clip, not hidden: hidden makes <main> a scroll container
          and breaks the sticky card stack in WhyKavora */}
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Services />
        <WhyKavora />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
