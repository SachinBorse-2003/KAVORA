'use client'

import Link from 'next/link'
import { Reveal, MaskText } from '@/components/Motion'
import WorkGrid from '@/components/WorkGrid'

/**
 * The homepage "Selected work" section. The grid itself is `WorkGrid`, shared
 * with /work — this only wraps it in the section heading so the two can't drift.
 */
export default function OurWork() {
  return (
    <section id="work" className="section bg-sand">
      <div className="shell">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">Selected work</p>
            </Reveal>
            <MaskText text="Watch our work" className="display-lg text-oxblood" />
          </div>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <p className="body">
              Every project here started as a business problem, not a shot list.
              Open one to see what we were actually solving.
            </p>
            <Link
              href="/work"
              className="group mt-6 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-oxblood/60 transition-colors hover:text-oxblood"
            >
              See the full portfolio
              <span className="h-px w-8 bg-oxblood/40 transition-all duration-300 group-hover:w-12 group-hover:bg-ember" />
            </Link>
          </Reveal>
        </div>

        <WorkGrid />
      </div>
    </section>
  )
}
