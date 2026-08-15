'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

import { contact } from '@/content/site'
import SocialLinks from '@/components/SocialIcons'

type NavLink = { label: string; href: string }
type NavItem = NavLink & { children?: NavLink[] }

/**
 * Two flat links and two folders. Collaborate holds what we sell — the services
 * list and the portfolio (selected work). Connect holds every way to reach us.
 */
const links: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Collaborate',
    href: '/work',
    children: [
      { label: 'Our Services', href: '/services' },
      { label: 'Portfolio', href: '/work' },
    ],
  },
  {
    label: 'Connect',
    href: '/contact',
    children: [
      { label: 'Work with us', href: '/contact' },
      { label: 'Book a call', href: '/contact#book' },
      { label: 'Instagram', href: contact.instagram },
    ],
  },
]

const isExternal = (href: string) => href.startsWith('http')

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't leave the page scrollable behind an open mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled && !isOpen
            ? 'border-b border-oxblood/15 bg-cream/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        {/* Brand red strip riding above the bar — the only dark red on the
            page until the first block, so it holds the top edge. */}
        <div aria-hidden className="h-1.5 w-full bg-oxblood md:h-2" />

        <nav className="shell flex items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="relative z-[60] flex items-center">
            <Image
              src={isOpen ? '/brand/kavora-wordmark-cream.png' : '/brand/kavora-wordmark-oxblood.png'}
              alt="Kavora"
              width={1000}
              height={249}
              className="h-7 w-auto object-contain md:h-8"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {links.map((link) =>
              link.children ? (
                // Opens on hover and, for keyboard, on focus anywhere inside —
                // which is why the panel is a sibling of the trigger, not a portal.
                <div key={link.label} className="group relative">
                  <span className="relative flex cursor-default items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/70 transition-colors group-hover:text-oxblood group-focus-within:text-oxblood">
                    {link.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className="h-[5px] w-[9px] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
                  </span>

                  <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="min-w-[14rem] border border-oxblood/15 bg-cream">
                      {link.children.map((child) =>
                        isExternal(child.href) ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border-b border-oxblood/10 px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/70 transition-colors last:border-b-0 hover:bg-oxblood hover:text-cream"
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block border-b border-oxblood/10 px-6 py-4 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/70 transition-colors last:border-b-0 hover:bg-oxblood hover:text-cream"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/70 transition-colors hover:text-oxblood"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {/* Bare glyphs, kept off the md bar so four nav items plus the
                button don't crowd it */}
            <SocialLinks variant="bare" className="hidden lg:flex" />
            <span aria-hidden className="hidden h-4 w-px bg-oxblood/20 lg:block" />

            <Link href="/contact" className="btn-solid !px-6 !py-3">
              Work with us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative z-[60] flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px transition-all duration-300 ${isOpen ? 'w-6 translate-y-[3.5px] rotate-45 bg-cream' : 'w-6 bg-oxblood'}`}
            />
            <span
              className={`h-px transition-all duration-300 ${isOpen ? 'w-6 -translate-y-[3.5px] -rotate-45 bg-cream' : 'w-4 bg-oxblood'}`}
            />
          </button>
        </nav>

        {/* Scroll position, drawn along the bottom edge of the header */}
        <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-ember" />
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Four items with two open folders can outgrow a small screen, so
            // the sheet scrolls instead of clipping.
            className="block-dark fixed inset-0 z-50 flex flex-col justify-center overflow-y-auto px-6 py-28 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                  className="border-b border-cream/20"
                >
                  {link.children ? (
                    // No accordion on mobile — the folder is two items, so both
                    // stay open under their heading.
                    <div className="py-5">
                      <p className="display-md text-cream/45">{link.label}</p>
                      <div className="mt-3 flex flex-col gap-2 pl-5">
                        {link.children.map((child) =>
                          isExternal(child.href) ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="font-sans text-sm font-semibold uppercase tracking-wide text-cream/80"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="font-sans text-sm font-semibold uppercase tracking-wide text-cream/80"
                            >
                              {child.label}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="display-md block py-5 text-cream"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-10"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-solid-invert w-full">
                Work with us
              </Link>

              <SocialLinks tone="dark" className="mt-8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
