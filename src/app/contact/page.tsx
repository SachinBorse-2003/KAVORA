import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CalEmbed from '@/components/CalEmbed'
import SocialLinks from '@/components/SocialIcons'
import { contact } from '@/content/site'

export const metadata: Metadata = {
  title: 'Work with us | Kavora',
  description:
    'Book an intro call with Kavora, or send us what is not working. Strategy, production, and distribution under one roof.',
}

const details = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Instagram', value: contact.instagramHandle, href: contact.instagram },
  // Short form — this cell is one of three in a narrow row
  { label: 'Based in', value: contact.addressShort },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        {/* Header */}
        {/* Compact header: title and copy on the left, the details block on the
            right, one row — no full-width rule band, no oversized display type */}
        <section className="px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-36">
          <div className="shell grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow mb-3">Contact</p>
              <h1 className="display-md max-w-[14ch] text-cream">Work with us</h1>
              <p className="body mt-5 max-w-[44ch]">
                Pick a time and talk it through, or write it down and we will
                come back to you within two working days.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <dl className="rule grid gap-x-8 gap-y-5 pt-6 sm:grid-cols-2">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="mb-1 font-sans text-[0.625rem] uppercase tracking-eyebrow text-cream/55">
                      {detail.label}
                    </dt>
                    <dd className="font-serif text-sm text-cream">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="transition-colors hover:text-gold"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <SocialLinks className="mt-6" />
            </div>
          </div>
        </section>

        {/* Book a call — the calendar lives here, not on the homepage */}
        <section id="book" className="section rule block-maroon">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">01 — Book a call</p>
              <h2 className="display-md mb-4 text-cream">Grab 30 minutes</h2>
              <p className="body">
                No deck, no pitch. We ask what you are trying to move, and tell
                you honestly whether we are the right studio for it.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {/* Calendar is themed dark in CalEmbed, so the frame matches the page */}
              <div className="h-[640px] overflow-hidden border border-gold/40 bg-choco">
                <CalEmbed />
              </div>
            </div>
          </div>
        </section>

        {/* Write to us */}
        <section className="section rule">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">02 — Or write to us</p>
              <h2 className="display-md mb-4 text-cream">Send the brief</h2>
              <p className="body">
                Rough is fine. The more you tell us about what is not working,
                the more useful the first reply will be.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Find us */}
        <section className="rule block-maroon">
          <div className="shell grid gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">03 — Find us</p>
              <h2 className="display-md mb-4 text-cream">The studio</h2>
              <p className="body mb-8">{contact.address}</p>
              <p className="body">
                Not nearby? We travel for shoots when the project covers it, and
                direct remote shoots in detail when it does not.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {/* TODO: swap mapEmbedUrl in content/site.ts for the exact studio address */}
              <div className="relative h-[420px] overflow-hidden border border-gold/40 grayscale transition-all duration-700 hover:grayscale-0">
                <iframe
                  src={contact.mapEmbedUrl}
                  title="Kavora studio location"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
