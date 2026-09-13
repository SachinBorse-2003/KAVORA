'use client'

import { useState, type FormEvent } from 'react'
import { contact } from '@/content/site'

const services = [
  'Social Media Management',
  'Content Production',
  'Podcast Production',
  'Personal Branding',
  'Not sure yet',
]

/**
 * Hands off to the visitor's mail client with everything pre-filled.
 *
 * TODO: swap for a POST to /api/contact once Kavora has an email provider
 * (Resend / Formspree). Keeping it as a mailto means no enquiry is silently
 * dropped in the meantime.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const body = [
      `Name: ${data.get('name')}`,
      `Brand: ${data.get('brand')}`,
      `Email: ${data.get('email')}`,
      `Looking for: ${data.get('service')}`,
      '',
      `${data.get('message')}`,
    ].join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `New enquiry — ${data.get('brand') || data.get('name')}`
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  const fieldClass =
    'w-full border-b border-cream/25 bg-transparent py-3 font-serif text-base text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
            Your name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="brand" className="mb-2 block font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
            Brand
          </label>
          <input id="brand" name="brand" type="text" placeholder="Company or handle" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
          What do you need
        </label>
        <select id="service" name="service" defaultValue={services[0]} className={`${fieldClass} appearance-none`}>
          {services.map((service) => (
            <option key={service} value={service} className="bg-choco text-cream">
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
          What is not working right now
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="A sentence or two is plenty."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-solid">
          Send enquiry
        </button>
        {submitted && (
          <p className="font-serif text-sm text-cream/70" role="status">
            Your mail app should be open. If not, write to{' '}
            <a href={`mailto:${contact.email}`} className="text-cream underline decoration-gold">
              {contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
