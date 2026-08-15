'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import PhoneFrame from '@/components/PhoneFrame'
import ReelFrame from '@/components/ReelFrame'
import { projects, type Project } from '@/content/site'

const EASE = [0.16, 1, 0.3, 1] as const

const ALL = 'All work'

/**
 * Tracks the live column count so the expanded detail panel can be injected at
 * the end of the clicked project's row — which is what makes the interaction
 * read as "the row opened up" rather than "a panel appeared somewhere".
 */
function useColumns() {
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    // Must stay in step with the grid's own breakpoints below (sm:2, lg:3)
    const lg = window.matchMedia('(min-width: 1024px)')
    const sm = window.matchMedia('(min-width: 640px)')
    const update = () => setColumns(lg.matches ? 3 : sm.matches ? 2 : 1)

    update()
    lg.addEventListener('change', update)
    sm.addEventListener('change', update)
    return () => {
      lg.removeEventListener('change', update)
      sm.removeEventListener('change', update)
    }
  }, [])

  return columns
}

function ProjectThumbnail({
  project,
  index,
  isActive,
  onSelect,
}: {
  project: Project
  index: number
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-expanded={isActive}
      aria-label={`${isActive ? 'Collapse' : 'Expand'} ${project.title}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.09, ease: EASE }}
      className="group relative block w-full text-left"
    >
      <PhoneFrame className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 15rem, (min-width: 768px) 40vw, 60vw"
          className={`object-cover transition-transform duration-[900ms] ease-out ${
            isActive ? 'scale-105' : 'group-hover:scale-105'
          }`}
        />

        {/* Dark red veil lifts on hover */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-oxblood"
          initial={false}
          animate={{ opacity: isActive ? 0.15 : 0.5 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.45 }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />

        {/* Expand toggle, clear of the dynamic island */}
        <span
          className={`absolute right-3 top-[2.4rem] z-20 flex h-8 w-8 items-center justify-center border transition-colors duration-300 ${
            isActive ? 'border-cream bg-cream' : 'border-cream/50 group-hover:border-cream group-hover:bg-cream/15'
          }`}
        >
          <span className="relative block h-px w-3">
            <span className={`absolute inset-0 block h-px w-3 ${isActive ? 'bg-oxblood' : 'bg-cream'}`} />
            <span
              className={`absolute inset-0 block h-px w-3 transition-transform duration-300 ${
                isActive ? 'rotate-0 bg-oxblood' : 'rotate-90 bg-cream'
              }`}
            />
          </span>
        </span>

        {/* Caption sits above the home indicator */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 pb-6">
          <p className="mb-1.5 font-sans text-[0.5625rem] font-semibold uppercase tracking-eyebrow text-cream/70">
            {project.category}
          </p>
          <h3 className="font-display text-base uppercase leading-tight tracking-display text-cream">
            {project.title}
          </h3>
        </div>
      </PhoneFrame>
    </motion.button>
  )
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="col-span-full overflow-hidden"
    >
      <div className="block-dark p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* Vertical media, so the reel plays in the device it was cut for */}
            {project.reel && !project.videoUrl ? (
              <ReelFrame reel={{ shortcode: project.reel, label: 'Watch the reel' }} maxWidth="17rem" />
            ) : (
              <PhoneFrame maxWidth="17rem">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="17rem"
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 to-transparent p-5 pb-7">
                      <p className="font-sans text-[0.625rem] uppercase tracking-wide text-cream/60">
                        Film coming soon
                      </p>
                    </div>
                  </>
                )}
              </PhoneFrame>
            )}

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/20 pt-6">
              {[
                { label: 'Client', value: project.client },
                { label: 'Discipline', value: project.category },
                { label: 'Year', value: project.year },
              ].map((meta) => (
                <div key={meta.label}>
                  <p className="mb-1 font-sans text-[0.625rem] uppercase tracking-wide text-cream/45">
                    {meta.label}
                  </p>
                  <p className="font-sans text-sm font-light text-cream">{meta.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The context is the whole reason the expand exists */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="mb-8 flex items-start justify-between gap-6">
              <h3 className="display-md max-w-[14ch] text-cream">{project.title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="mt-1 shrink-0 border border-cream/30 p-2.5 text-cream/70 transition-colors hover:bg-cream hover:text-oxblood"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>

            <dl className="space-y-6">
              {[
                { term: 'The problem', detail: project.challenge },
                { term: 'What we did', detail: project.approach },
                { term: 'The outcome', detail: project.result },
              ].map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="border-t border-cream/20 pt-5 first:border-t-0 first:pt-0"
                >
                  <dt className="mb-2 font-sans text-[0.625rem] font-semibold uppercase tracking-eyebrow text-cream/60">
                    {item.term}
                  </dt>
                  <dd className="font-sans text-sm font-light leading-relaxed text-cream/85">
                    {item.detail}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.deliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className="border border-cream/25 px-3 py-1.5 font-sans text-[0.625rem] uppercase tracking-wide text-cream/70"
                >
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * The portfolio itself — filter row plus the expandable grid. Lives on /work;
 * the homepage links here rather than repeating it.
 */
export default function WorkGrid() {
  const [filter, setFilter] = useState(ALL)
  // Keyed by slug, not index, so a filter change can't point the panel at a
  // different project than the one that was opened.
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const columns = useColumns()

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  )

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  const activeIndex = visible.findIndex((project) => project.slug === activeSlug)
  const activeProject = activeIndex === -1 ? null : visible[activeIndex]
  const rowEndIndex =
    activeIndex === -1
      ? null
      : Math.min(Math.floor(activeIndex / columns) * columns + columns - 1, visible.length - 1)

  return (
    <>
      <div className="rule mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 pt-6">
        {categories.map((category) => {
          const isCurrent = category === filter
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category)
                setActiveSlug(null)
              }}
              aria-pressed={isCurrent}
              className={`relative pb-1 font-sans text-[0.6875rem] font-semibold uppercase tracking-eyebrow transition-colors duration-300 ${
                isCurrent ? 'text-oxblood' : 'text-oxblood/45 hover:text-ember'
              }`}
            >
              {category}
              <span
                className={`absolute inset-x-0 bottom-0 h-px origin-left bg-oxblood transition-transform duration-300 ${
                  isCurrent ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          )
        })}

        <span className="ml-auto font-sans text-[0.6875rem] uppercase tracking-eyebrow text-oxblood/40">
          {String(visible.length).padStart(2, '0')} projects
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <div key={project.slug} className="contents">
            <ProjectThumbnail
              project={project}
              index={index}
              isActive={activeSlug === project.slug}
              onSelect={() =>
                setActiveSlug((current) => (current === project.slug ? null : project.slug))
              }
            />
            <AnimatePresence initial={false}>
              {activeProject && rowEndIndex === index && (
                <ProjectDetail project={activeProject} onClose={() => setActiveSlug(null)} />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  )
}
