'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'
import { useHeroAnimations } from '@/hooks/useHeroAnimations'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { parallaxElement } = useGSAPAnimations()

  // Initialize hero animations
  useHeroAnimations()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    if (contentRef.current) {
      parallaxElement('.hero-content', {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      })
    }
  }, [parallaxElement])

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
  
  // @ts-expect-error - Known type mismatch between tsparticles versions
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine)
    } catch (error) {
      console.error('Failed to load particles:', error)
    }
  }, [])

  // Add a new animation hook for the hero content
  const contentAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section 
      ref={sectionRef}
      className="hero-section relative min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-background flex items-center"
    >
      {/* Background effects */}
      <div className="hero-bg absolute inset-0 pointer-events-none opacity-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(black,transparent_75%)]" />
        
        {/* Enhanced gradient orbs with blur and animation */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="motion-orb absolute -top-1/2 left-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-br from-violet-600/20 via-fuchsia-500/15 to-purple-600/20 blur-3xl animate-pulse"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="motion-orb absolute -bottom-1/2 right-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-br from-purple-600/20 via-violet-500/15 to-fuchsia-600/20 blur-3xl animate-pulse"
        />
      </div>

      {/* Enhanced Particles */}
      <Particles
        className="absolute inset-0 opacity-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: {
                enable: true,
                delay: 0.5
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                  color: "#8b5cf6"
                }
              }
            }
          },
          particles: {
            color: {
              value: "#8b5cf6",
            },
            links: {
              color: "#8b5cf6",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              value: 40,
            },
            opacity: {
              value: 0.3,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5
              }
            },
          },
          detectRetina: true,
        }}
      />

      <motion.div 
        ref={contentRef}
        style={{ opacity }}
        className="hero-content container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...contentAnimation}
            transition={{ ...contentAnimation.transition, delay: 0.2 }}
            className="hero-badge inline-block rounded-lg bg-primary/10 px-3 sm:px-4 py-2 text-sm text-primary mb-4 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors duration-300"
          >
            Welcome to Nazee Africa
          </motion.div>
          <motion.div 
            ref={headingRef} 
            className="hero-heading mb-4 sm:mb-6 md:mb-8"
            {...contentAnimation}
            transition={{ ...contentAnimation.transition, delay: 0.4 }}
          >
            <TextGenerateEffect
              words="Empowering Next Generation of Changemakers"
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-[1.1] lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              duration={0.8}
            />
          </motion.div>
          <motion.p 
            ref={subtitleRef}
            {...contentAnimation}
            transition={{ ...contentAnimation.transition, delay: 0.6 }}
            className="hero-subtitle text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed mb-8 sm:mb-10 md:mb-12"
          >
            Breaking barriers with technology-driven education, mentorship, and training tailored for impact.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            {...contentAnimation}
            transition={{ ...contentAnimation.transition, delay: 0.8 }}
          >
            <motion.button
              ref={buttonRef}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button w-full sm:w-auto h-12 px-8 rounded-md bg-gradient-to-r from-primary to-primary/90 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:from-primary/90 hover:to-primary flex items-center justify-center gap-2"
            >
              Get Started
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 