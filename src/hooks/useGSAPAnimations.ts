import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimationConfig {
  trigger: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  pin?: boolean
  anticipatePin?: boolean
}

export const useGSAPAnimations = () => {
  const fadeInUp = (element: string, delay: number = 0) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
      }
    )
  }

  const staggerFadeInUp = (elements: string, stagger: number = 0.2) => {
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger,
        ease: 'power3.out',
      }
    )
  }

  const parallaxElement = (element: string, config: AnimationConfig) => {
    gsap.fromTo(
      element,
      {
        y: 0,
      },
      {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: config.trigger,
          start: config.start || 'top center',
          end: config.end || 'bottom center',
          scrub: config.scrub ?? true,
          markers: config.markers ?? false,
        },
      }
    )
  }

  const scaleOnScroll = (element: string, config: AnimationConfig) => {
    gsap.fromTo(
      element,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: config.trigger,
          start: config.start || 'top center',
          end: config.end || 'center center',
          scrub: config.scrub ?? true,
          markers: config.markers ?? false,
        },
      }
    )
  }

  const rotateOnScroll = (element: string, config: AnimationConfig) => {
    gsap.fromTo(
      element,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: config.trigger,
          start: config.start || 'top center',
          end: config.end || 'bottom center',
          scrub: config.scrub ?? true,
          markers: config.markers ?? false,
        },
      }
    )
  }

  return {
    fadeInUp,
    staggerFadeInUp,
    parallaxElement,
    scaleOnScroll,
    rotateOnScroll,
  }
} 