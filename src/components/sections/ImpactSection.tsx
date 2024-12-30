'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Lightbulb, Globe } from 'lucide-react'
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'

const stats = [
  {
    title: 'Individuals Trained',
    value: '1,000',
    description: 'Empowered with tech skills',
    Icon: Users,
    color: 'from-blue-500 to-violet-500'
  },
  {
    title: 'Program Engagement Rate',
    value: '75%',
    description: 'Active participation',
    Icon: Lightbulb,
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Countries',
    value: '10',
    description: 'Across Africa',
    Icon: Globe,
    color: 'from-orange-500 to-red-500'
  },
]

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scaleOnScroll, staggerFadeInUp } = useGSAPAnimations()

  useEffect(() => {
    staggerFadeInUp('.stat-card', 0.2)
    
    scaleOnScroll('.impact-title', {
      trigger: '.impact-section',
      start: 'top center+=100',
      end: 'top center-=100',
      scrub: 1,
    })
  }, [staggerFadeInUp, scaleOnScroll])

  return (
    <section 
      ref={sectionRef}
      className="impact-section relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(black,transparent_75%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Impact
            </div>
            <h2 className="impact-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Our Journey in Numbers
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Transforming lives and communities through technology and education across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="stat-card group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-8 text-center hover:bg-primary/10 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                      <stat.Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.h3 
                    className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-base font-medium text-primary mb-1">{stat.title}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 