'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursorOuter = cursorOuterRef.current
    const cursorInner = cursorInnerRef.current

    if (!cursorOuter || !cursorInner) return

    // Initial setup
    gsap.set([cursorOuter, cursorInner], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    })

    // Create a single GSAP context for better performance
    const ctx = gsap.context(() => {})

    // Mouse move handler with GSAP animations
    const onMouseMove = (e: MouseEvent) => {
      // Animate inner cursor (fast)
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
        overwrite: true,
      })

      // Animate outer cursor (smooth follow)
      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "none",
        overwrite: true,
      })
    }

    // Hover effects
    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a') {
        gsap.to(cursorOuter, {
          scale: 1.5,
          backgroundColor: 'rgb(var(--primary))',
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(cursorInner, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      } else if (
        target.tagName.toLowerCase() === 'p' || 
        target.tagName.toLowerCase() === 'h1' || 
        target.tagName.toLowerCase() === 'h2' || 
        target.tagName.toLowerCase() === 'h3' || 
        target.tagName.toLowerCase() === 'span'
      ) {
        gsap.to(cursorOuter, {
          scale: 1.2,
          backgroundColor: '#ffffff',
          opacity: 0.2,
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(cursorInner, {
          scale: 0.8,
          backgroundColor: '#ffffff',
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    const onMouseLeave = () => {
      gsap.to(cursorOuter, {
        scale: 1,
        backgroundColor: 'transparent',
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(cursorInner, {
        scale: 1,
        opacity: 1,
        backgroundColor: 'rgb(var(--primary))',
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Show cursors when mouse moves
    const onFirstMove = () => {
      gsap.to([cursorInner, cursorOuter], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      })
      window.removeEventListener('mousemove', onFirstMove)
    }

    // Add event listeners
    window.addEventListener('mousemove', onFirstMove)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.querySelectorAll('button, a, p, h1, h2, h3, span').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      ctx.revert() // Clean up all GSAP animations
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousemove', onFirstMove)
      document.querySelectorAll('button, a, p, h1, h2, h3, span').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorOuterRef}
        className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border-2 border-primary mix-blend-difference"
      />
      <div
        ref={cursorInnerRef}
        className="fixed pointer-events-none z-[9999] w-4 h-4 rounded-full bg-primary mix-blend-difference"
      />
    </>
  )
} 