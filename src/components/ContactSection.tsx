'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { contact } from '@/content/site'

const contactWays = [
  {
    label: 'Email',
    value: 'hello@kavora.in',
    href: 'mailto:hello@kavora.in',
  },
  {
    label: 'Instagram',
    value: '@kavora.in',
    href: 'https://instagram.com/kavora.in',
  },
  {
    label: 'Based in',
    value: 'India',
  },
]

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-burgundy text-cream relative overflow-hidden">
      <motion.div
        className="absolute top-8 right-8 text-7xl text-cream/10"
        animate={{ rotate: [0, 360], y: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        ★
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 text-6xl text-cream/10"
        animate={{ rotate: [0, -360], y: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        ★
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cream/70 mb-4">
              Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-auralux font-bold leading-tight mb-6">
              Let&apos;s turn your next idea into a brand asset
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-cream/85 max-w-2xl mb-10">
              Whether you need strategy, content production, or a sharper personal brand presence, we can build the system with you and make it look unmistakably yours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {contactWays.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  className="border border-cream/30 bg-cream/5 backdrop-blur-sm px-5 py-6 min-h-[120px]"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-cream/60 mb-3">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xl font-semibold hover:text-blush transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xl font-semibold">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <motion.button
                className="bg-cream text-burgundy px-8 py-4 text-lg font-semibold hover:bg-blush transition-all"
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.open(contact.calendarUrl, '_blank', 'noopener,noreferrer')}
              >
                Book a Call
              </motion.button>
              <motion.button
                className="border-2 border-cream text-cream px-8 py-4 text-lg font-semibold hover:bg-cream hover:text-burgundy transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.location.href = 'mailto:hello@kavora.in'}
              >
                Send an Email
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 relative min-h-[420px]"
          >
            <motion.div
              className="absolute top-0 right-0 w-[72%] overflow-hidden rounded-lg border-4 border-cream/20 shadow-2xl"
              initial={{ opacity: 0, y: 30, rotate: 8 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 4 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/brand identity kavora.png"
                alt="Kavora brand identity"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-[52%] overflow-hidden rounded-lg border-4 border-cream/20 shadow-xl"
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -5 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Image
                src="/new logo-5.png"
                alt="Kavora details"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
