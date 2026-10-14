import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/ui/smooth-scroll'
import { introScript } from '@/lib/intro'

export const metadata: Metadata = {
  title: 'Kavora | Creative Content & Growth Agency',
  description:
    'Kavora builds content systems for brands that refuse to blend in. Strategy, production, and distribution under one roof.',
  icons: {
    icon: '/k icon final.png',
    apple: '/k icon final.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // The intro script sets data-intro on <html> before hydration
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="bg-choco font-serif text-cream antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
