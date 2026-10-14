'use client'

import { useEffect, useState } from 'react'
import RevealLoader from '@/components/ui/reveal-loader'

/** Vengeance UI reveal loader in brand colours: maroon bars lift off a cream wordmark. */
export default function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (document.documentElement.dataset.intro !== 'play') setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div className="intro-loader fixed inset-0 z-[100]" aria-hidden>
      <RevealLoader
        text="Kavora"
        textSize="clamp(3.5rem, 14vw, 11rem)"
        textColor="#FEF8ED"
        bgColors={['#610000']}
        staggerOrder="center-out"
        movementDirection="bottom-up"
        onComplete={() => {
          // Client-side returns to the homepage shouldn't replay it
          document.documentElement.dataset.intro = 'done'
          setVisible(false)
        }}
      />
    </div>
  )
}
