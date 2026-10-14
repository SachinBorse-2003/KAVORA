'use client'

import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'
import { Skiper16 } from '@/components/ui/skiper-ui/skiper16'
import { differentiators } from '@/content/site'

export default function WhyKavora() {
  return (
    <section className="block-maroon section relative overflow-clip">
      {/* Oversized wordmark bleeding off the edge, slowly drifting */}
      <motion.p
        aria-hidden
        className="pointer-events-none absolute -right-10 top-8 select-none font-display text-[22vw] font-bold leading-none tracking-display text-cream/[0.04]"
        animate={{ x: [0, -24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        Kavora
      </motion.p>

      <div className="shell relative">
        <div className="mb-12 max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">
              Why Kavora
            </p>
          </Reveal>
          <MaskText text="Not your usual agency" className="display-lg text-cream" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-cream/80 md:text-xl">
              Most agencies sell output. We sell the thing that makes output
              worth paying for — a reason for every frame to exist.
            </p>
          </Reveal>
        </div>

        {/* Skiper UI sticky card stack: each reason pins and the next slides
            over it, the ones underneath easing back as you scroll */}
        <Skiper16
          cardClassName="max-w-5xl border border-gold/40 bg-choco"
          items={differentiators.map((item) => (
            <div
              key={item.number}
              className="grid h-[24rem] content-between gap-8 p-8 md:h-[22rem] md:grid-cols-12 md:content-stretch md:p-14"
            >
              <p className="stat text-5xl md:col-span-3 md:text-7xl">{item.number}</p>
              <div className="md:col-span-8 md:col-start-5 md:self-end">
                <h3 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-display text-cream md:text-5xl">
                  {item.title}
                </h3>
                <p className="max-w-[48ch] font-serif text-base leading-relaxed text-cream/75 md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  )
}
