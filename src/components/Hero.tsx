'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullHeadline = 'We engineer growth.'
  const subtext = 'We don\'t create content. We engineer growth.'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullHeadline.length) {
        setDisplayedText(fullHeadline.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Floating K Icon with Sparkles */}
      <motion.div
        className="absolute top-32 right-10 text-6xl md:text-8xl font-playfair text-burgundy opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        K
      </motion.div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-8xl font-playfair font-bold text-burgundy mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span>{displayedText}</span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Sparkle Accents */}
        <motion.div
          className="flex justify-center gap-4 mb-8 text-2xl"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className="bg-burgundy text-cream px-8 py-4 rounded-none text-lg font-semibold hover:bg-cognac transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(97, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.button>
          <motion.button
            className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-none text-lg font-semibold hover:bg-burgundy hover:text-cream transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-burgundy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
