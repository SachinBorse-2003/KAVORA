import type { ReactNode } from 'react'

/**
 * iPhone-shaped shell for vertical media. Bezel is `ink` rather than generic
 * black so the device reads as part of the brand palette. Uses rings and
 * borders instead of box-shadows — drop shadows were cut from this design.
 */
export default function PhoneFrame({
  children,
  className,
  maxWidth = '15rem',
}: {
  children: ReactNode
  className?: string
  /** Constrains the device so tall frames don't blow out a grid row. */
  maxWidth?: string
}) {
  return (
    <div
      className={`relative mx-auto w-full ${className ?? ''}`}
      style={{ maxWidth }}
    >
      {/* Side buttons */}
      <span
        aria-hidden
        className="absolute -left-[2px] top-[16%] h-7 w-[2px] rounded-l-sm bg-ink/60"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[25%] h-12 w-[2px] rounded-l-sm bg-ink/60"
      />
      <span
        aria-hidden
        className="absolute -right-[2px] top-[22%] h-16 w-[2px] rounded-r-sm bg-ink/60"
      />

      {/* Bezel */}
      <div className="relative rounded-[2.1rem] bg-ink p-[0.45rem] ring-1 ring-inset ring-cream/10">
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem] bg-ink">
          {children}

          {/* Dynamic island */}
          <span
            aria-hidden
            className="absolute left-1/2 top-[0.55rem] z-30 h-[1.05rem] w-[32%] -translate-x-1/2 rounded-full bg-ink"
          />

          {/* Home indicator */}
          <span
            aria-hidden
            className="absolute bottom-[0.45rem] left-1/2 z-30 h-[3px] w-[28%] -translate-x-1/2 rounded-full bg-cream/60"
          />
        </div>
      </div>
    </div>
  )
}
