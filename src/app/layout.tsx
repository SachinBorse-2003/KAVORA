import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="bg-cream font-sans text-oxblood antialiased">
        {children}
      </body>
    </html>
  )
}
