import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTABand from '@/components/CTABand'
import WorkGrid from '@/components/WorkGrid'
import { Reveal, MaskText } from '@/components/Motion'
import { projects, services } from '@/content/site'

export const metadata: Metadata = {
  title: 'Selected work | Kavora',
  description:
    'Selected work from Kavora — brand identity, content production, podcast repurposing, and personal branding. Open a project to see what we were solving.',
}

const disciplines = Array.from(new Set(projects.map((project) => project.category)))

const stats = [
  { label: 'Projects', value: String(projects.length).padStart(2, '0') },
  { label: 'Disciplines', value: String(disciplines.length).padStart(2, '0') },
  { label: 'Years', value: '2024 — 25' },
]

export default function WorkPage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        {/* Header */}
        <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-4">Portfolio</p>
            </Reveal>
            
            <div className="rule mt-10 grid gap-10 pt-8 md:grid-cols-12">
              <Reveal className="md:col-span-6">
                <p className="body-lg max-w-[46ch]">
                  Every project here started as a business problem, not a shot
                  list. Open one to see what we were actually solving — the
                  brief, the build, and what came out the other side.
                </p>
              </Reveal>

              <dl className="grid grid-cols-3 gap-6 md:col-span-5 md:col-start-8 md:items-end">
                {stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={0.1 + index * 0.08}>
                    <dt className="mb-2 font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
                      {stat.label}
                    </dt>
                    <dd className="stat text-2xl md:text-3xl">
                      {stat.value}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* The portfolio */}
        <section className="section rule block-maroon">
          <div className="shell">
            <WorkGrid />
          </div>
        </section>

        {/* The other half of the menu — services, for anyone who came in here first */}
        <section className="section rule">
          <div className="shell grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow mb-4">Our services</p>
              <h2 className="display-md mb-4 text-cream">
                Looking for what we actually do?
              </h2>
              <p className="body max-w-[42ch]">
                The work above comes out of four disciplines. Take one or take
                all four — they are built to stack.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <ul className="rule mb-8">
                {services.map((service) => (
                  <li
                    key={service.number}
                    className="flex items-baseline gap-5 border-b border-cream/15 py-4"
                  >
                    <span className="stat text-xs">
                      {service.number}
                    </span>
                    <span className="heading-sm text-cream">{service.title}</span>
                  </li>
                ))}
              </ul>

              <Link href="/services" className="btn-ghost">
                See our services
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
