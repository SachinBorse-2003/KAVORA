'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal, MaskText, ParallaxImage } from '@/components/Motion'
import { services } from '@/content/site'

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="section">
      <div className="shell">
        {/* items-center, not items-end: the grid row is as tall as the photo, so
            end-alignment dropped the text to the bottom and left a hole above it */}
        <div className="mb-12 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow mb-4">What we do</p>
            </Reveal>
            <MaskText text="Four ways in. One system out." className="text-oxblood" />
            <Reveal delay={0.15}>
              <p className="body mt-8 max-w-[42ch]">
                Take one or take all four. They are built to stack — the strategy
                from one feeds the shoot list of the next.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative rule">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group relative grid cursor-default gap-5 overflow-hidden border-b border-oxblood/15 py-10 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              {/* Dark red fills the row from the left on hover */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left bg-oxblood"
                initial={false}
                animate={{ scaleX: hovered === index ? 1 : 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />

              <p
                className={`relative font-sans text-xs font-semibold tracking-wide transition-colors duration-300 md:col-span-1 ${
                  hovered === index ? 'text-cream/60' : 'text-ember'
                }`}
              >
                {service.number}
              </p>

              <h3
                className={`display-md relative transition-all duration-500 md:col-span-5 ${
                  hovered === index ? 'translate-x-3 text-cream' : 'text-oxblood'
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`relative font-sans text-base font-light leading-relaxed transition-colors duration-300 md:col-span-4 ${
                  hovered === index ? 'text-cream/75' : 'text-oxblood/65'
                }`}
              >
                {service.description}
              </p>

              <ul className="relative flex flex-wrap gap-x-4 gap-y-1 md:col-span-2 md:flex-col md:gap-1.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className={`font-sans text-[0.6875rem] uppercase tracking-wide transition-colors duration-300 ${
                      hovered === index ? 'text-cream/60' : 'text-oxblood/45'
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* The homepage carries the summary; /services carries the detail */}
        <Reveal>
          <Link
            href="/services"
            className="group mt-12 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/60 transition-colors hover:text-oxblood"
          >
            All four services in detail
            <span className="h-px w-8 bg-oxblood/40 transition-all duration-300 group-hover:w-12 group-hover:bg-ember" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
