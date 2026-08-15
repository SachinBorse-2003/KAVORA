'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Founder() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-burgundy mb-6">
              Meet <span className="italic">Kav</span>
            </h2>

            <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
              <p>
                Kavlin is 21—a creator and entrepreneur building Kavora to prove that content, when paired with strategy, becomes a growth engine.
              </p>
              <p>
                In 18 months, Kav went from creating one-off content to systematizing the process for creators and brands across India. Kavora isn't just an agency. It's a framework for turning attention into outcomes.
              </p>
              <p>
                Every project is rooted in data, brand psychology, and relentless execution.
              </p>
            </div>

            {/* Signature */}
            <motion.div
              className="text-4xl font-dancing text-burgundy"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Kavlin
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="mx-auto max-w-md overflow-hidden border border-burgundy/10 bg-[#f4ead9] shadow-[0_20px_60px_rgba(97,0,0,0.08)]">
              <Image
                src="/KAV.JPG"
                alt="Kavlin, founder of Kavora"
                width={4032}
                height={3024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Decorative sparkles */}
            <motion.div
              className="absolute -top-4 -right-4 text-4xl"
              animate={{ opacity: [0.3, 1, 0.3], rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ★
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-3xl"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ★
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
