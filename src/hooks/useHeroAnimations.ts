import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useHeroAnimations = () => {
  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
    })

    // Create a reveal mask effect for subtitle
    gsap.set('.hero-subtitle', { 
      autoAlpha: 1,
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })

    // Animate the background first
    tl.fromTo(
      '.hero-bg',
      { 
        opacity: 0,
        scale: 1.1
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power2.out'
      }
    )

    // Animate the particles
    .fromTo(
      '#tsparticles',
      { 
        opacity: 0,
        scale: 1.2
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power2.out'
      },
      '-=1.5'
    )

    // Animate the welcome badge with a bounce effect
    .fromTo(
      '.hero-badge',
      {
        opacity: 0,
        y: -40,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      },
      '-=1'
    )

    // Reveal the subtitle with a smooth slide
    .to('.hero-subtitle', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1,
      ease: 'power2.inOut',
    }, '+=0.8')

    // Add a subtle float animation to the button
    .fromTo(
      '.hero-button',
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      },
      '-=0.5'
    )

    // Add a subtle floating animation to the background orbs
    gsap.to('.hero-bg .motion-orb', {
      y: -20,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.5,
        from: 'random',
      }
    })

    return () => {
      // Cleanup all animations
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
} 