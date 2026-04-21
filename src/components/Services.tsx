'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    number: '01',
    title: 'Social Media Management',
    description: 'Strategic content calendars and community engagement that drive real results.',
  },
  {
    number: '02',
    title: 'Content Production',
    description: 'Professional-quality content creation tailored to your brand voice.',
  },
  {
    number: '03',
    title: 'Podcast Production & Repurposing',
    description: 'Full-service podcast production with multi-platform content strategy.',
  },
  {
    number: '04',
    title: 'Personal Branding',
    description: 'Build and amplify your personal brand into a growth engine.',
  },
]

function ServiceCard({
  number,
  title,
  description,
  delay,
}: {
  number: string
  title: string
  description: string
  delay: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group border-2 border-burgundy p-8 hover-lift cursor-pointer relative overflow-hidden"
    >
      {/* Hover underline effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-burgundy width-0"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="text-5xl font-playfair font-bold text-cognac mb-4">
          {number}
        </div>
        <h3 className="text-2xl font-playfair font-bold text-burgundy mb-3">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 px-6 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-burgundy mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl">
            Strategy-first approach to content and growth.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
