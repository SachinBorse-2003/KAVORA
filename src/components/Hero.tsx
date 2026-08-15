'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

/** The last line cycles — that rotation is the hook. */
const endings = ['blend in.', 'get scrolled.', 'look the same.', 'get forgotten.']

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const textY = useTransform(scrollYProgress, [0, 1], [0, -110])
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const [endingIndex, setEndingIndex] = useState(0)

  useEffect(() => {
    // Honour reduced-motion: hold the first phrase instead of cycling
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const words = setInterval(() => setEndingIndex((i) => (i + 1) % endings.length), 2600)
    return () => clearInterval(words)
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pb-14 pt-36 md:px-10 md:pb-20 md:pt-44"
    >
      {/* Words on the left, plate on the right — one row, not stacked */}
      <div className="shell grid gap-14 md:grid-cols-12 md:items-start md:gap-10">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="md:col-span-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow mb-10"
          >
            Kavora — Marketing Studio
          </motion.p>

          {/* Slightly tighter clamp than .display-hero — the headline now lives
              in a half-width column, so it has to break at the same three lines. */}
          <h1 className="display-hero text-[clamp(2.875rem,4.5vw,4.5rem)] text-oxblood">
            {['Brands that', 'refuse to'].map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.2 + index * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}

            {/* Rotating final line. Fixed height so nothing below it jumps —
                slightly taller than the line box so glyphs don't clip. */}
            <span className="relative block h-[1.18em] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={endings[endingIndex]}
                  className="block text-ember"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-105%' }}
                  transition={{ duration: 0.75, ease: EASE }}
                >
                  {endings[endingIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            className="mt-10"
          >
            <p className="body-lg max-w-[44ch]">
              You are posting constantly and none of it compounds. We build the
              strategy, shoot the content, and hand back a system your team can
              actually run.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-solid w-full sm:w-auto">
                Work with us
              </Link>
              <Link
                href="/work"
                className="group flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/60 transition-colors hover:text-oxblood"
              >
                Watch our work
                <span className="h-px w-8 bg-oxblood/40 transition-all duration-300 group-hover:w-12 group-hover:bg-ember" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative md:col-span-6 md:col-start-7">
          {/* Wide plate un-masks upward, then parallaxes and slowly drifts.
              Portrait from md up so it stands level with the headline column. */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.3, delay: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[5/4] w-full md:aspect-[4/5] lg:aspect-[5/5.5]"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/Hero.png"
                  alt="Kavora on set"
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
