/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // The whole palette — Kavora brand guideline, Sept 2026. "No other core
      // colors": vary opacity, never add a tint.
      colors: {
        maroon: '#610000', // authority surface, blocks
        choco: '#34211B',  // schokobraun — default page surface
        cream: '#FEF8ED',  // type on dark; minority surface for contrast
        gold: '#A67C00',   // numbers, guarantees, thin dividers, small marks — never large fills
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],                // headlines, Bold/SemiBold; Italic for quotes
        serif: ['Alike', 'Georgia', 'serif'],                           // all body copy
        sans: ['Inter', 'system-ui', 'sans-serif'],                     // labels, tags, UI
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'], // numbers & stats
      },
      letterSpacing: {
        display: '-0.02em',
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
