'use client'

import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'
import ReelFrame from '@/components/ReelFrame'
import { reels, contact } from '@/content/site'

const EASE = [0.16, 1, 0.3, 1] as const

/** Staggered offsets so three devices read as a set, not a row of tiles. */
const offsets = ['md:translate-y-0', 'md:translate-y-10', 'md:-translate-y-6']

export default function InstagramFeed() {
  return (
    <section className="section overflow-hidden">
      <div className="shell mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ember" />
              Live from the studio
            </p>
          </Reveal>
          <MaskText text="The feed" className="display-lg text-oxblood" />
        </div>
        <Reveal delay={0.2}>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/60 transition-colors hover:text-oxblood"
          >
            {contact.instagramHandle}
            <span className="h-px w-8 bg-oxblood/40 transition-all duration-300 group-hover:w-12 group-hover:bg-ember" />
          </a>
        </Reveal>
      </div>

      {/* Real reels, playing in the device they were cut for */}
      <div className="shell grid justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.shortcode}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: EASE }}
            className={`w-full max-w-[15rem] ${offsets[index % offsets.length]}`}
          >
            <ReelFrame reel={reel} maxWidth="100%" />

          </motion.div>
        ))}
      </div>
    </section>
  )
}
