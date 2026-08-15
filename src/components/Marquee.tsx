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
    <div className="block-dark overflow-hidden py-7">
      <div className="pause-on-hover overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {track.map((item, index) => (
            <span
              key={item + index}
              className="flex items-center whitespace-nowrap font-display text-lg uppercase tracking-display md:text-2xl"
            >
              {item}
              <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-cream/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
