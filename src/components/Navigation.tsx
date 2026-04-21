'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-burgundy font-playfair"
          whileHover={{ scale: 1.05 }}
        >
          K
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Work', id: 'work' },
            { label: 'Process', id: 'process' },
            { label: 'About', id: 'about' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-800 hover:text-burgundy transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('cta')}
          className="bg-burgundy text-cream px-6 py-2 rounded-full text-sm font-semibold hover:bg-cognac transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </motion.button>
      </div>
    </motion.nav>
  )
}
