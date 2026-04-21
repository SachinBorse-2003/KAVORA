'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import Process from '@/components/Process'
import Founder from '@/components/Founder'
import WhyKavora from '@/components/WhyKavora'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Marquee />
      <Services />
      <OurWork />
      <Process />
      <Founder />
      <WhyKavora />
      <CTABand />
      <Footer />
    </main>
  )
}
