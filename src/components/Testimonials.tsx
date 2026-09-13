'use client'

import { Reveal, MaskText } from '@/components/Motion'
import { testimonials, type Testimonial } from '@/content/site'

function Card({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="mx-3 flex w-[min(85vw,29rem)] shrink-0 flex-col justify-between border border-maroon/20 bg-cream p-8 text-choco transition-colors duration-500 hover:bg-maroon hover:text-cream md:p-10">
      {/* Poppins Italic is the guideline's quote voice. Regular weight, not
          SemiBold — the real quotes run long. */}
      <blockquote className="quote text-base leading-relaxed md:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 border-t border-gold/60 pt-6 opacity-75">
        <p className="font-display text-sm font-semibold">{testimonial.name}</p>
        {testimonial.role && (
          <p className="mt-1 font-sans text-[0.6875rem] uppercase tracking-wide">
            {testimonial.role}
          </p>
        )}
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  // Duplicated track so the -50% translate loops without a visible seam
  const track = [...testimonials, ...testimonials]

  return (
    // Cream is the minority surface — this is where the homepage spends it
    <section className="block-cream overflow-hidden py-24 md:py-32">
      <div className="shell mb-10 px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-choco/75">What clients say</p>
        </Reveal>
        <MaskText text="In their words" className="display-lg text-maroon" />
      </div>

      <div className="mask-edges pause-on-hover overflow-hidden">
        <div className="flex w-max animate-marquee-slow items-stretch">
          {track.map((testimonial, index) => (
            <Card key={testimonial.quote + index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
