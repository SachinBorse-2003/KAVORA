'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'

export default function CTABand() {
  return (
    <section className="block-maroon section relative overflow-hidden">
      {/* Slow drifting rule pair, just enough movement to feel alive */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-1/3 h-px bg-gold/40"
        animate={{ scaleX: [0.3, 1, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="shell relative grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <p className="eyebrow mb-6">
              Next step
            </p>
          </Reveal>
          <MaskText text="Tell us what is not working" className="display-lg max-w-[13ch] text-cream" />
        </div>

        <Reveal delay={0.2} className="md:col-span-4">
          <div className="flex flex-col items-start gap-6 md:items-end">
            <p className="font-serif text-base leading-relaxed text-cream/75 md:text-right">
              One conversation, no deck. We will tell you whether we are the
              right people for it.
            </p>
            <Link href="/contact" className="btn-solid w-full md:w-auto">
              Work with us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
