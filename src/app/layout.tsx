import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kavora | Creative Content & Growth Agency',
  description: 'We engineer growth through premium content strategy, production, and personal branding.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23610000'>K</text></svg>" />
      </head>
      <body className="bg-cream text-gray-900 font-inter">
        {children}
      </body>
    </html>
  )
}
