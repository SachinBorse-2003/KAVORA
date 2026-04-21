'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const pillars = [
  'Strategy-first',
  'Growth-focused',
  'System-driven',
  'Personal brand expertise',
  'End-to-end',
]

export default function WhyKavora() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-6 bg-blush">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-burgundy mb-4">
            Why Kavora
          </h2>
          <p className="text-xl text-gray-700">
            The way we work is different.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="px-6 py-3 bg-cream border-2 border-burgundy text-burgundy font-semibold rounded-full text-center"
              whileHover={{ scale: 1.05, backgroundColor: '#610000', color: '#FEF8ED' }}
            >
              {pillar}
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-playfair text-burgundy max-w-2xl mx-auto">
            Bold brands trust us to build systems that scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
