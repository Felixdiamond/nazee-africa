'use client'

import { useEffect, useRef } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { Target, ClipboardList, Cog, BarChart3, CheckCircle } from 'lucide-react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const pmPhases = [
  {
    title: 'Initiation',
    description: 'Define project goals, scope, and key stakeholders',
    Icon: Target,
    color: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-500',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Planning',
    description: 'Develop detailed project plans and resource allocation',
    Icon: ClipboardList,
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-emerald-500',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Execution',
    description: 'Implement project tasks and coordinate team efforts',
    Icon: Cog,
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-500',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Monitoring',
    description: 'Track progress and ensure project stays on course',
    Icon: BarChart3,
    color: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-amber-500',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Closure',
    description: 'Complete deliverables and document lessons learned',
    Icon: CheckCircle,
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-rose-500',
    gradient: 'from-pink-500 to-rose-500'
  },
]

export function ProjectManagementSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])

  useEffect(() => {
    if (!cardsRef.current || !titleRef.current) return

    // Smoother title animation
    let titleAnimation: gsap.core.Timeline
    try {
      const letters = new SplitType(titleRef.current, { types: 'chars' })
      titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        }
      })
        .set(letters.chars, { opacity: 1 })
        .from(letters.chars, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power2.out',
        })
    } catch {
      // Fallback animation
      titleAnimation = gsap.timeline()
        .from(titleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
        })
    }

    // Smoother cards animation
    const cards = gsap.utils.toArray<HTMLElement>('.pm-card')
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    })

    cards.forEach((card, i) => {
      const icon = card.querySelector('.card-icon')
      const content = card.querySelector('.card-content')

      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        i * 0.15
      )
      .fromTo(
        icon,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      )
      .fromTo(
        content,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )

      // Add smooth hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -3,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out',
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      })
    })

    return () => {
      titleAnimation.kill()
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <motion.div 
        style={{ y, opacity }} 
        className="container px-4 md:px-6 relative"
      >
        <AnimateIn className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'power2.out' }}
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4"
          >
            What is Project Management?
          </motion.div>
          <motion.h2 
            ref={titleRef}
            initial={{ opacity: 1 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6"
          >
            <span className="text-foreground">Master the Art of </span>
            <span className="inline-block bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Project Management
            </span>
          </motion.h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Project management is the application of knowledge, skills, tools, and
            techniques to deliver value through successful project execution.
          </p>
        </AnimateIn>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {pmPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="pm-card group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl p-8",
                "bg-gradient-to-br",
                phase.color,
                "transition-all duration-500 transform hover:-translate-y-1"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="card-icon mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br",
                    phase.gradient,
                    "shadow-lg"
                  )}>
                    <phase.Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                <div className="card-content space-y-2">
                  <h3 className={cn(
                    "text-xl font-semibold bg-clip-text text-transparent",
                    "bg-gradient-to-r",
                    phase.gradient
                  )}>
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimateIn delay={0.6} className="mt-20 text-center">
          <motion.button
            whileHover={{ 
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25
            }}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-xl"
          >
            Speak to a PM Adviser
          </motion.button>
        </AnimateIn>
      </motion.div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </section>
  )
} 