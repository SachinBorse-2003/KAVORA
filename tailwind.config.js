/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand pair from Kavora
        cream: '#FFF9EE',   // primary surface
        oxblood: '#5F0A0B', // brand red — type, dark blocks

        // Derived from the pair, for depth
        sand: '#F6EADB',    // subtle panel on cream
        ember: '#8E1013',   // accent: hover, live indicators
        ink: '#2A0405',     // deepest, footer
        blush: '#EFD2C2',
      },
      fontFamily: {
        // Auralux for display, Nunito for everything read as text
        display: ['Auralux', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        gasthony: ['Gasthony Signature', 'cursive'],
      },
      letterSpacing: {
        display: '0.01em',
        eyebrow: '0.35em',
        wide: '0.18em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'marquee-reverse': 'marqueeReverse 55s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
