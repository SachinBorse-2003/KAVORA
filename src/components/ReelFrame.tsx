'use client'

import Image from 'next/image'
import PhoneFrame from '@/components/PhoneFrame'
import { reelCover, reelUrl, type Reel } from '@/content/site'

/**
 * A reel in the device. Instagram's embed can't play inline — it renders a
 * cover and sends clicks to instagram.com — so the frame shows the reel's own
 * 9:16 cover (saved to `public/reels/`) and links out. Give a reel a local
 * `video` and it plays here instead, muted and looping.
 */
export default function ReelFrame({
  reel,
  maxWidth = '15rem',
  className,
}: {
  reel: Reel
  maxWidth?: string
  className?: string
}) {
  return (
    <PhoneFrame maxWidth={maxWidth} className={className}>
      <a
        href={reelUrl(reel.shortcode)}
        target="_blank"
        rel="noopener noreferrer"
        className="group/reel absolute inset-0 block bg-choco"
        aria-label={reel.label ? `${reel.label} — watch on Instagram` : 'Watch reel on Instagram'}
      >
        {reel.video ? (
          <video
            src={reel.video}
            poster={reelCover(reel.shortcode)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={reelCover(reel.shortcode)}
            alt={reel.label ?? 'Kavora reel'}
            fill
            sizes="(min-width: 1024px) 17rem, (min-width: 768px) 40vw, 60vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover/reel:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-choco/85 via-transparent to-choco/25" />

        {/* Play affordance — the cover is a still, so it has to say so */}
        {!reel.video && (
          <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-cream/60 transition-colors duration-300 group-hover/reel:border-cream group-hover/reel:bg-cream/15">
            <svg className="ml-0.5 h-4 w-4 fill-cream" viewBox="0 0 12 14" aria-hidden>
              <path d="M0 0l12 7-12 7z" />
            </svg>
          </span>
        )}

        <span className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-2 p-3 pb-5 font-sans text-[0.5625rem] font-semibold uppercase tracking-eyebrow text-cream/80 transition-colors group-hover/reel:text-cream">
          <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse-dot rounded-full bg-gold" />
          {reel.label ?? 'Watch on Instagram'}
        </span>
      </a>
    </PhoneFrame>
  )
}
