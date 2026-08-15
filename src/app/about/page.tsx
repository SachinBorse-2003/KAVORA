import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTABand from '@/components/CTABand'
import AboutUs from '@/components/AboutUs'
import { Reveal, MaskText } from '@/components/Motion'

export const metadata: Metadata = {
  title: 'About | Kavora',
  description:
    'Kavora is a small studio that keeps strategy, production, and edit in the same room — so nothing gets diluted on the way through.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        {/* Header */}
        <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-4">About</p>
            </Reveal>
            <MaskText as="h1" text="Who you work with" className=" text-oxblood" />

            <div className="rule mt-10 grid gap-10 pt-8 md:grid-cols-12">
              <Reveal className="md:col-span-6">
                <p className="body-lg max-w-[46ch]">
                  One team from the first strategy call to the final export. The
                  person who sets the direction is the person on the shoot.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
                <p className="body">
                  Curious what that looks like in practice?{' '}
                  <Link href="/work" className="text-oxblood underline-offset-4 hover:underline">
                    See the portfolio
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WhyKavora stays on the homepage — it sells, it doesn't introduce */}
        <AboutUs />

        <CTABand />
      </main>

      <Footer />
    </>
  )
}
