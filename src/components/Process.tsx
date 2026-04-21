'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    title: 'Strategy',
    description: 'We audit your brand and craft a data-driven growth plan.',
  },
  {
    title: 'Creation',
    description: 'Premium content production aligned with your strategy.',
  },
  {
    title: 'Distribution',
    description: 'Strategic amplification across all relevant platforms.',
  },
  {
    title: 'Growth',
    description: 'Measure, optimize, and scale what works.',
  },
]

function ProcessStep({
  title,
  description,
  index,
  delay,
}: {
  title: string
  description: string
  index: number
  delay: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      {/* Circle number */}
      <motion.div
        className="w-20 h-20 mx-auto mb-6 bg-burgundy text-cream rounded-full flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-3xl font-playfair font-bold">{index}</span>
      </motion.div>

      <h3 className="text-2xl font-playfair font-bold text-burgundy mb-3">
        {title}
      </h3>
      <p className="text-gray-700 max-w-xs mx-auto">{description}</p>
    </motion.div>
  )
}

export default function Process() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 px-6 bg-blush"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-burgundy mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-700">
            Proven system for consistent growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-burgundy -z-10 transformTranslateY-1/2"></div>

          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              index={index + 1}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
