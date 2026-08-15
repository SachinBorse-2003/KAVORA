'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

/** Fade + rise as the element enters the viewport. The workhorse. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Splits a string on spaces and wipes each word up from behind a mask.
 * Used for the big Auralux headlines — the reveal is what makes them land.
 */
export function MaskText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = 'h2',
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'p'
}) {
  const words = text.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={word + index} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: delay + index * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/** Vertical parallax driven by the element's own scroll progress. */
export function useParallax(distance = 60): {
  ref: React.RefObject<HTMLDivElement>
  y: MotionValue<number>
  progress: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  return { ref, y, progress: scrollYProgress }
}

/** Image that drifts and un-scales as it passes through the viewport. */
export function ParallaxImage({
  children,
  className,
  distance = 50,
}: {
  children: ReactNode
  className?: string
  distance?: number
}) {
  const { ref, y, progress } = useParallax(distance)
  const scale = useTransform(progress, [0, 0.5, 1], [1.12, 1, 1.12])

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div style={{ y, scale }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}

/** Thin rule that draws itself in from the left as it enters view. */
export function DrawRule({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
      className={`h-px origin-left bg-oxblood/20 ${className ?? ''}`}
    />
  )
}
