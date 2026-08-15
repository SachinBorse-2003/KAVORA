import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTABand from '@/components/CTABand'
import { Reveal, MaskText, ParallaxImage } from '@/components/Motion'
import { services } from '@/content/site'

export const metadata: Metadata = {
  title: 'Our services | Kavora',
  description:
    'Social media management, content production, podcast production and repurposing, and personal branding — four disciplines built to stack.',
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        {/* Header */}
        <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-4">Collaborate</p>
            </Reveal>
            
            <div className="rule mt-10 grid gap-10 pt-8 md:grid-cols-12">
              <Reveal className="md:col-span-6">
                <p className="body-lg max-w-[46ch]">
                  Four disciplines, built to stack. Take one and it works on its
                  own; take all four and the strategy from one writes the shot
                  list of the next.
                </p>
              </Reveal>

              {/* Index — jumps down to the block for each service */}
              <nav className="md:col-span-5 md:col-start-8">
                <ul>
                  {services.map((service, index) => (
                    <Reveal key={service.number} delay={0.08 * index}>
                      <li className="border-b border-oxblood/15 first:border-t first:border-oxblood/15">
                        <a
                          href={`#service-${service.number}`}
                          className="group flex items-baseline gap-5 py-3.5 transition-colors hover:text-ember"
                        >
                          <span className="font-sans text-[0.6875rem] font-semibold tracking-wide text-ember">
                            {service.number}
                          </span>
                          <span className="heading-sm text-oxblood transition-transform duration-300 group-hover:translate-x-1">
                            {service.title}
                          </span>
                        </a>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* One block per service, image side alternating down the page */}
        {services.map((service, index) => {
          const flipped = index % 2 === 1

          return (
            <section
              key={service.number}
              id={`service-${service.number}`}
              className={`section rule scroll-mt-28 ${index % 2 === 1 ? 'bg-sand' : ''}`}
            >
              <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-5 ${flipped ? 'lg:order-2 lg:col-start-8' : ''}`}>
                  <ParallaxImage className="h-[20rem] w-full md:h-[26rem]" distance={36}>
                    <div className="relative h-full w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </ParallaxImage>
                </div>

                <div className={`lg:col-span-6 ${flipped ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                  <Reveal>
                    <p className="eyebrow mb-4">{service.number} — Service</p>
                    <h2 className="display-md mb-6 text-oxblood">{service.title}</h2>
                    <p className="body-lg mb-5 max-w-[44ch]">{service.description}</p>
                    <p className="body mb-8 max-w-[46ch]">{service.detail}</p>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="mb-4 font-sans text-[0.625rem] font-semibold uppercase tracking-eyebrow text-oxblood/50">
                      What you get
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="border border-oxblood/25 px-3 py-1.5 font-sans text-[0.625rem] uppercase tracking-wide text-oxblood/70"
                        >
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}

        {/* The other half of Collaborate */}
        <section className="section rule">
          <div className="shell grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">Portfolio</p>
              <h2 className=" mb-4 text-oxblood">See it applied</h2>
              <p className="body max-w-[44ch]">
                Every project in the portfolio came out of one or more of these
                four. Open one to see which.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Link href="/work" className="btn-solid w-full sm:w-auto">
                View selected work
              </Link>
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </>
  )
}
