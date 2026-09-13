'use client'

const items = [
  'Social Media Management',
  'Content Production',
  'Podcast Repurposing',
  'Personal Branding',
  'Art Direction',
  'Brand Strategy',
]

export default function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly
  const track = [...items, ...items]

  return (
    <div className="block-maroon overflow-hidden border-y border-gold/40 py-6">
      <div className="pause-on-hover overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {track.map((item, index) => (
            <span
              key={item + index}
              className="flex items-center whitespace-nowrap font-sans text-sm font-medium uppercase tracking-eyebrow md:text-base"
            >
              {item}
              <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
