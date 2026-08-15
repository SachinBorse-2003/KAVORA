'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const pillars = [
  { title: 'Strategy-first', icon: '⚡' },
  { title: 'Growth-focused', icon: '📈' },
  { title: 'System-driven', icon: '⚙️' },
  { title: 'Personal brand expertise', icon: '⭐' },
  { title: 'End-to-end', icon: '🎯' },
]

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-auralux font-bold text-burgundy mb-4">
            About Kavora
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-auralux">
            A framework for turning attention into outcomes.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-20">
          {/* Left: Creative Image Layout */}
          <div className="hidden lg:block relative h-96 col-span-1">
            {/* Image 1 */}
            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-lg overflow-hidden shadow-lg border-4 border-burgundy/20"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ zIndex: 20 }}
            >
              <Image
                src="/new logo-1.png"
                alt="Kavora"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-burgundy/20"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 8 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ zIndex: 10 }}
            >
              <Image
                src="/new logo-3.png"
                alt="Kavora design"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Center: Founder Story */}
          <div className="lg:col-span-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-4xl md:text-5xl font-auralux font-bold text-burgundy mb-4">
                  Meet <span className="font-gasthony text-3xl italic">Kav</span>
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed font-auralux">
                Kavlin is 21—a creator and entrepreneur building Kavora to prove that content, when paired with strategy, becomes a growth engine.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-auralux">
                In 18 months, Kav went from creating one-off content to systematizing the process for creators and brands across India.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-auralux">
                Every project is rooted in data, brand psychology, and relentless execution.
              </p>

              <motion.div
                className="text-5xl font-gasthony text-burgundy pt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Kavlin
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Creative Image Layout */}
          <div className="hidden lg:block relative h-96 col-span-1">
            {/* Image 1 */}
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-burgundy/20"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 8 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ zIndex: 10 }}
            >
              <Image
                src="/brand identity kavora.png"
                alt="Kavora brand"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="absolute bottom-0 left-0 w-52 h-52 rounded-lg overflow-hidden shadow-2xl border-4 border-burgundy/20"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ zIndex: 20 }}
            >
              <Image
                src="/KAV.JPG"
                alt="Kavora founder"
                width={208}
                height={208}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Why Kavora Pillars */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-auralux font-bold text-burgundy mb-8">
            Why Kavora
          </h3>
          <p className="text-xl text-gray-700 font-auralux">
            Bold brands trust us to build systems that scale.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="flex flex-wrap gap-4 justify-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="px-6 py-4 bg-white border-2 border-burgundy text-burgundy font-auralux font-semibold rounded-full text-center shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.08, backgroundColor: '#610000', color: '#FEF8ED' }}
            >
              <span className="text-2xl mr-2">{pillar.icon}</span>
              {pillar.title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
