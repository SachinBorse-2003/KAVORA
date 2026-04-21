'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Marquee() {
  const marqueeRef = useRef(null)
  const [animationDuration, setAnimationDuration] = useState(20)

  useEffect(() => {
    if (marqueeRef.current) {
      const width = (marqueeRef.current as HTMLElement).scrollWidth
      setAnimationDuration(width / 50)
    }
  }, [])

  const keywords = [
    'Personal Branding',
    'Podcast Production',
    'Social Media',
    'Content Strategy',
    'Personal Branding',
    'Podcast Production',
    'Social Media',
    'Content Strategy',
  ]

  return (
    <section className="bg-burgundy text-cream py-8 overflow-hidden">
      <motion.div
        ref={marqueeRef}
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [-100, -100 - 2000] }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="text-xl md:text-3xl font-playfair font-bold flex-shrink-0 italic"
          >
            {keyword} ·
          </span>
        ))}
      </motion.div>
    </section>
  )
}
