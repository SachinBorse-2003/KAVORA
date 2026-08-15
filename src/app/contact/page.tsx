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
  { label: 'Based in', value: contact.address },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        {/* Header */}
        <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="shell">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="display-xl max-w-[12ch] text-oxblood">Work with us</h1>
            <div className="rule mt-10 grid gap-8 pt-8 md:grid-cols-12">
              <p className="body-lg md:col-span-5">
                Pick a time and talk it through, or write it down and we will
                come back to you within two working days.
              </p>
              <dl className="grid gap-8 sm:grid-cols-3 md:col-span-6 md:col-start-7">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="mb-2 text-[0.625rem] uppercase tracking-eyebrow text-oxblood/50">
                      {detail.label}
                    </dt>
                    <dd className="text-sm font-light text-oxblood">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="transition-colors hover:text-ember"
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
            </div>

            <SocialLinks className="mt-10" />
          </div>
        </section>

        {/* Book a call — the calendar lives here, not on the homepage */}
        <section id="book" className="section rule bg-sand">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">01 — Book a call</p>
              <h2 className="display-md mb-4 text-oxblood">Grab 30 minutes</h2>
              <p className="body">
                No deck, no pitch. We ask what you are trying to move, and tell
                you honestly whether we are the right studio for it.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="h-[640px] overflow-hidden border border-oxblood/20 bg-cream">
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
              <h2 className="display-md mb-4 text-oxblood">Send the brief</h2>
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
        <section className="rule">
          <div className="shell grid gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">03 — Find us</p>
              <h2 className="display-md mb-4 text-oxblood">The studio</h2>
              <p className="body mb-8">{contact.address}</p>
              <p className="body">
                Not nearby? We travel for shoots when the project covers it, and
                direct remote shoots in detail when it does not.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {/* TODO: swap mapEmbedUrl in content/site.ts for the exact studio address */}
              <div className="relative h-[420px] overflow-hidden border border-oxblood/20 grayscale transition-all duration-700 hover:grayscale-0">
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
