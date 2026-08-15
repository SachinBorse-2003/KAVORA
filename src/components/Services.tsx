'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'
import { services } from '@/content/site'

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="section">
      <div className="shell">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">What we do</p>
            </Reveal>
            <MaskText text="Four ways in. One system out." className="display-lg text-oxblood" />
          </div>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <p className="body">
              Take one or take all four. They are built to stack — the strategy
              from one feeds the shoot list of the next.
            </p>
          </Reveal>
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
      </div>
    </section>
  )
}
