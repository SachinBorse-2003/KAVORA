'use client'

import { motion } from 'framer-motion'

export default function CTABand() {
  return (
    <section id="cta" className="bg-burgundy text-cream py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-playfair font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to turn content into growth?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's build a strategy that works.
        </motion.p>

        <motion.button
          className="bg-cream text-burgundy px-12 py-4 text-lg font-semibold hover:bg-blush transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          Book a Call
        </motion.button>
      </div>
    </section>
  )
}
