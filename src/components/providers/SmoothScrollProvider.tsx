'use client'
import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouchLerp: 0.1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update)

    // Sync GSAP ScrollTrigger with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Handle smooth scrolling for anchor links with improved behavior
    const handleAnchorClick = (e: Event) => {
      e.preventDefault()
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (target && target.startsWith('#')) {
        const element = document.querySelector(target)
        if (element) {
          const offset = -80 // Adjust based on your header height
          const targetPosition = element.getBoundingClientRect().top + window.scrollY
          lenis.scrollTo(targetPosition + offset, {
            duration: 2,
            easing: (t) => 1 - Math.pow(1 - t, 5), // Smoother easing
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    // Stop scrolling when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        lenis.stop()
      } else {
        lenis.start()
      }
    })

    return () => {
      lenis.destroy()
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return <>{children}</>
} 