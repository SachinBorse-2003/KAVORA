'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { contact } from '@/content/site'

export default function Connect() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-burgundy text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 right-10 text-8xl opacity-10"
        animate={{ rotate: 360, y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        ★
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 text-7xl opacity-10"
        animate={{ rotate: -360, y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        ★
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: Image */}
          <div className="hidden lg:block col-span-1 relative h-96">
            <motion.div
              className="absolute top-0 left-0 w-56 h-56 rounded-lg overflow-hidden shadow-2xl border-4 border-cream/20"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ zIndex: 10 }}
            >
              <Image
                src="/new logo-5.png"
                alt="Kavora"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-cream/20"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 8 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ zIndex: 20 }}
            >
              <Image
                src="/brand identity kavora.png"
                alt="Contact"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Center: Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.h2
              className="text-5xl md:text-6xl font-auralux font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let's Build Something Iconic Together
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-4 leading-relaxed font-auralux opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to turn your brand into a growth engine? We're here to design the strategy that works.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-8 leading-relaxed font-auralux opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From personal brands to established agencies, let's engineer your growth story.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 mb-12 justify-center lg:justify-start text-base md:text-lg font-auralux"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <p className="opacity-75 mb-2">Email</p>
                <a href="mailto:hello@kavora.in" className="hover:opacity-100 transition-opacity font-semibold">
                  hello@kavora.in
                </a>
              </div>
              <div>
                <p className="opacity-75 mb-2">Instagram</p>
                <a href="https://instagram.com/kavora.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity font-semibold">
                  @kavora.in ↗
                </a>
              </div>
              <div>
                <p className="opacity-75 mb-2">Location</p>
                <p className="font-semibold">India</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                className="bg-cream text-burgundy px-12 py-4 text-lg font-auralux font-semibold hover:bg-blush transition-all rounded-none"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(contact.calendarUrl, '_blank', 'noopener,noreferrer')}
              >
                Book a Call
              </motion.button>
              <motion.button
                className="border-2 border-cream text-cream px-12 py-4 text-lg font-auralux font-semibold hover:bg-cream hover:text-burgundy transition-all rounded-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:hello@kavora.in'}
              >
                Send an Email
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block col-span-1 relative h-96">
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-cream/20"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 8 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ zIndex: 10 }}
            >
              <Image
                src="/k icon final.png"
                alt="Kavora icon"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-lg overflow-hidden shadow-2xl border-4 border-cream/20"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ zIndex: 20 }}
            >
              <Image
                src="/new logo-1.png"
                alt="Connection"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
