'use client'

import Link from 'next/link'
import Image from 'next/image'
import { contact } from '@/content/site'
import { SocialIcon, socials } from '@/components/SocialIcons'

// Mirrors the header: the two folders flattened, plus About
const navLinks = [
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/40 bg-choco px-6 py-20 text-cream md:px-10">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brand/kavora-wordmark-cream.png"
              alt="Kavora"
              width={1000}
              height={249}
              className="mb-8 h-10 w-auto object-contain"
            />
            <p className="max-w-sm font-serif text-base leading-relaxed text-cream/70">
              A marketing studio for brands that would rather be recognised than
              merely seen.
            </p>
          </div>

          <nav className="md:col-span-2 md:col-start-7">
            <p className="mb-5 font-sans text-[0.625rem] font-medium uppercase tracking-eyebrow text-cream/55">
              Menu
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="mb-5 font-sans text-[0.625rem] font-medium uppercase tracking-eyebrow text-cream/55">
              Follow
            </p>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 font-sans text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    <SocialIcon
                      name={social.icon}
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 font-sans text-[0.625rem] font-medium uppercase tracking-eyebrow text-cream/55">
              Contact
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="block break-all font-sans text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {contact.email}
            </a>
            <p className="mt-3 font-serif text-sm text-cream/55">{contact.address}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-gold/30 pt-8 font-sans text-[0.6875rem] uppercase tracking-wide text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Kavora</p>
          {/* Attribution is a condition of Skiper UI's free components */}
          <p>
            Motion components by{' '}
            <a
              href="https://skiper-ui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 underline-offset-4 transition-colors hover:text-cream"
            >
              Skiper UI
            </a>
          </p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
