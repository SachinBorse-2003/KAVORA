'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { contact } from '@/content/site'

/**
 * Inline Cal.com booking calendar. No API key involved — the embed only needs
 * the public cal link. Theming is set through the embed API so the calendar
 * matches the site instead of Cal's defaults.
 */
export default function CalEmbed() {
  useEffect(() => {
    ;(async () => {
      // Namespace must match the one on <Cal>, or the ui config lands on a
      // different embed instance and the theming silently does nothing.
      const cal = await getCalApi({ namespace: contact.calNamespace })
      cal('ui', {
        // Dark, to sit on the schokobraun/maroon page. Cal's own dark greys are
        // swapped for the palette.
        theme: 'dark',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#610000', // maroon
          },
          dark: {
            'cal-brand': '#A67C00', // gold
            'cal-brand-text': '#34211B',
            'cal-bg': '#34211B',
            'cal-bg-muted': '#34211B',
            'cal-bg-subtle': '#610000',
            'cal-bg-emphasis': '#610000',
            'cal-text': '#FEF8ED',
            'cal-text-emphasis': '#FEF8ED',
            'cal-border': 'rgba(166, 124, 0, 0.4)',
            'cal-border-subtle': 'rgba(254, 248, 237, 0.15)',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      namespace={contact.calNamespace}
      calLink={contact.calLink}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      // Slot list instead of a cramped month grid on phones
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
    />
  )
}
