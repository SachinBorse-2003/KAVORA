'use client'
import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export interface SmoothScrollProps {
    children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        // Kavora: reduced-motion users keep native scrolling
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        // Kavora: `anchors` keeps in-page links like /#services smooth under Lenis
        const lenis = new Lenis({ anchors: true })

        let frame = 0
        function raf(time: number) {
            lenis.raf(time)
            frame = requestAnimationFrame(raf)
        }

        frame = requestAnimationFrame(raf)

        // Remove loading class
        document.body.classList.remove('loading');

        return () => {
            cancelAnimationFrame(frame)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll
