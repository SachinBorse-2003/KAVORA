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
        theme: 'light',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#5F0A0B', // oxblood
          },
          dark: {
            'cal-brand': '#8E1013', // ember
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
