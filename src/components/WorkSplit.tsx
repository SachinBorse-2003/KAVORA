'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal, MaskText } from '@/components/Motion'
import { projects, services } from '@/content/site'

const EASE = [0.16, 1, 0.3, 1] as const

type Half = {
  number: string
  eyebrow: string
  title: string
  description: string
  items: string[]
  image: string
  cta: string
  href: string
  /** The portfolio half is a dark red block; the services half stays on cream. */
  dark?: boolean
}

const halves: Half[] = [
  {
    number: '01',
    eyebrow: 'Our services',
    title: 'What we do',
    description:
      'Four disciplines built to stack — the strategy from one feeds the shoot list of the next.',
    items: services.map((service) => service.title),
    image: '/KAV.JPG',
    cta: 'Explore services',
    href: '/#services',
  },
  {
    number: '02',
    eyebrow: 'Portfolio',
    title: 'Selected work',
    description:
      'Every project started as a business problem, not a shot list. Open one to see what we were solving.',
    items: projects.slice(0, 4).map((project) => project.category),
    image: '/brand identity kavora.png',
    cta: 'View the work',
    href: '/work',
    dark: true,
  },
]

function SplitHalf({ half, index }: { half: Half; index: number }) {
  const dark = half.dark ?? false

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: EASE }}
      className={dark ? 'block-dark' : 'bg-cream'}
    >
      <Link
        href={half.href}
        className="group flex h-full flex-col px-6 py-16 md:px-12 md:py-20 lg:px-16"
      >
        <div className="flex items-baseline gap-5">
          <span
            className={`font-sans text-[0.6875rem] font-semibold tracking-wide ${
              dark ? 'text-cream/50' : 'text-ember'
            }`}
          >
            {half.number}
          </span>
          <span
            className={`font-sans text-[0.6875rem] font-semibold uppercase tracking-eyebrow ${
              dark ? 'text-cream/60' : 'text-ember'
            }`}
          >
            {half.eyebrow}
          </span>
        </div>

        <h3 className={`display-md mt-6 ${dark ? 'text-cream' : 'text-oxblood'}`}>{half.title}</h3>

        <p
          className={`mt-6 max-w-[38ch] font-sans text-base font-light leading-relaxed ${
            dark ? 'text-cream/70' : 'text-oxblood/65'
          }`}
        >
          {half.description}
        </p>

        {/* The image sits between the pitch and the index, so each half reads as
            one column: claim, proof, contents. */}
        <div className="relative mt-10 aspect-[16/10] overflow-hidden">
          <Image
            src={half.image}
            alt={half.title}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <span
            aria-hidden
            className={`absolute inset-0 transition-opacity duration-500 ${
              dark ? 'bg-ink/40 group-hover:bg-ink/20' : 'bg-oxblood/25 group-hover:bg-oxblood/10'
            }`}
          />
        </div>

        <ul className={`mt-10 border-t ${dark ? 'border-cream/20' : 'border-oxblood/15'}`}>
          {half.items.map((item) => (
            <li
              key={item}
              className={`border-b py-3 font-sans text-sm font-light ${
                dark ? 'border-cream/20 text-cream/75' : 'border-oxblood/15 text-oxblood/70'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <span
          className={`mt-10 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide ${
            dark ? 'text-cream' : 'text-oxblood'
          }`}
        >
          {half.cta}
          <span className="relative block h-px w-10 overflow-hidden">
            <span
              className={`absolute inset-0 h-px w-10 transition-transform duration-500 ease-out group-hover:translate-x-full ${
                dark ? 'bg-cream' : 'bg-oxblood'
              }`}
            />
            <span
              className={`absolute inset-0 h-px w-10 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${
                dark ? 'bg-cream' : 'bg-oxblood'
              }`}
            />
          </span>
        </span>
      </Link>
    </motion.div>
  )
}

/**
 * Homepage entry to the two halves of "Our Work" — services on cream, portfolio
 * on dark red. The full portfolio lives on /work; this only points at it.
 */
export default function WorkSplit() {
  return (
    <section id="work" className="rule bg-sand">
      <div className="shell px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">Our work</p>
            </Reveal>
            <MaskText text="Two ways in" className="display-lg text-oxblood" />
          </div>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <p className="body">
              Start with what you need built, or with what we have already built.
              Both lead to the same conversation.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Side by side from md up; stacked below, portfolio first-class either way */}
      <div className="grid border-t border-oxblood/15 md:grid-cols-2">
        {halves.map((half, index) => (
          <SplitHalf key={half.number} half={half} index={index} />
        ))}
      </div>
    </section>
  )
}
