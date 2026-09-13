'use client'

import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'
import { differentiators } from '@/content/site'

export default function WhyKavora() {
  return (
    <section className="block-maroon section relative overflow-hidden">
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

        <div className="grid gap-px bg-gold/40 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative overflow-hidden bg-maroon p-8 md:p-10"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-choco transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="relative">
                <p className="stat mb-8 text-sm">
                  {item.number}
                </p>
                <h3 className="mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cream md:text-3xl">
                  {item.title}
                </h3>
                <p className="font-serif text-base leading-relaxed text-cream/75">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
