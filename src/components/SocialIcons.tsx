import { contact } from '@/content/site'

/**
 * Line-art social marks — transparent, no fills, drawn in `currentColor` so the
 * same icon works on the dark surfaces and on cream. Feather icon paths.
 */
const paths: Record<string, JSX.Element> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
}

export const socials = [
  { label: 'Instagram', icon: 'instagram', href: contact.instagram },
  { label: 'LinkedIn', icon: 'linkedin', href: contact.linkedin },
  { label: 'Facebook', icon: 'facebook', href: contact.facebook },
]

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? 'h-[1.05rem] w-[1.05rem]'}
    >
      {paths[name]}
    </svg>
  )
}

/**
 * Row of icon links. `tone` picks the palette: `dark` for the schokobraun and
 * maroon surfaces (the default), `light` for cream.
 */
export default function SocialLinks({
  tone = 'dark',
  variant = 'box',
  className,
}: {
  tone?: 'light' | 'dark'
  /** `bare` drops the bordered button — for tight rows like the nav bar. */
  variant?: 'box' | 'bare'
  className?: string
}) {
  const box =
    tone === 'dark'
      ? 'border-cream/25 text-cream/70 hover:border-cream hover:bg-cream hover:text-maroon'
      : 'border-maroon/25 text-maroon/80 hover:border-maroon hover:bg-maroon hover:text-cream'

  const bare =
    tone === 'dark' ? 'text-cream/60 hover:text-cream' : 'text-maroon/70 hover:text-maroon'

  return (
    <ul className={`flex items-center ${variant === 'box' ? 'gap-3' : 'gap-4'} ${className ?? ''}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={
              variant === 'box'
                ? `flex h-10 w-10 items-center justify-center border transition-all duration-300 hover:-translate-y-0.5 ${box}`
                : `block transition-all duration-300 hover:-translate-y-0.5 ${bare}`
            }
          >
            <SocialIcon name={social.icon} className={variant === 'box' ? undefined : 'h-4 w-4'} />
          </a>
        </li>
      ))}
    </ul>
  )
}
