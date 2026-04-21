'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-playfair font-bold text-burgundy mb-3">
              K
            </h3>
            <p className="text-sm leading-relaxed">
              Engineering growth through premium content strategy and production.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-burgundy">Links</h4>
            <ul className="space-y-2 text-sm">
              {['Services', 'Work', 'Process', 'About'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blush transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-burgundy">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/kavora.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/kavora-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/profile.php?id=61579921170668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors"
                >
                  Facebook ↗
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-burgundy">Contact</h4>
            <a
              href="mailto:kavora.in@gmail.com"
              className="text-sm hover:text-blush transition-colors break-all"
            >
              kavora.in@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>
              © {currentYear} Kavora. All rights reserved.
            </p>
            <p>
              Designed & built with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
