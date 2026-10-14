'use client'

import Image from 'next/image'
import { Reveal, MaskText, ParallaxImage } from '@/components/Motion'
import StatsCounter from '@/components/ui/stats-counter'

// Counted up on scroll (Vengeance UI stats counter). `prefix` holds the
// leading zero so "01" keeps its two-digit mono look.
const stats = [
  { value: 360, prefix: '', suffix: '°', label: 'Strategy through distribution' },
  { value: 1, prefix: '0', suffix: '', label: 'Team across the whole pipeline' },
  { value: 18, prefix: '', suffix: '+', label: 'Months refining the system' },
]

export default function AboutUs() {
  return (
    <section id="studio" className="section rule">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ParallaxImage className="aspect-[4/5] w-full" distance={40}>
              <div className="relative h-full w-full">
                <Image
                  src="/KAV.JPG"
                  alt="Kavlin, founder of Kavora"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ParallaxImage>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-4">The studio</p>
            </Reveal>
            <MaskText text="Small team. Short distance." className="mb-8 font-display font-semibold text-cream" />

            <Reveal delay={0.15}>
              <p className="body-lg mb-6">
                Kavora started with one creator&apos;s obsession with why some
                brands are impossible to ignore. It has grown into a repeatable
                system for getting there.
              </p>
              <p className="body mb-10">
                We stay small on purpose. The person who sets the strategy is on
                the shoot, and in the edit. Nothing gets diluted on the way
                through — and if you are not in our city, we will either travel
                to you or hand you direction precise enough to shoot it
                yourself.
              </p>
            </Reveal>

            <div className="rule grid grid-cols-1 gap-8 pt-10 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.1}>
                  <p className="stat mb-2 text-4xl md:text-5xl">
                    <StatsCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </p>
                  <p className="font-sans text-[0.6875rem] uppercase tracking-wide text-cream/55">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12">
                <p className="quote text-4xl text-cream">Kavlin</p>
                <p className="mt-1 font-sans text-[0.6875rem] uppercase tracking-wide text-cream/55">
                  Founder, Kavora
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
