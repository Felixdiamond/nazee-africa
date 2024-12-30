'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Laptop, Users, Presentation, Rocket, Target, Lightbulb, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Service {
  title: string
  description: string
  Icon: React.ElementType
  color: string
  gradient: string
}

const services: Service[] = [
  {
    title: 'Tech Training',
    description: 'Comprehensive training programs in software development, data science, and emerging technologies.',
    Icon: Code2,
    color: 'from-blue-500/20 to-violet-500/20',
    gradient: 'from-blue-500 to-violet-500'
  },
  {
    title: 'Digital Skills',
    description: 'Essential digital skills training for the modern workforce and entrepreneurs.',
    Icon: Laptop,
    color: 'from-emerald-500/20 to-green-500/20',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Mentorship',
    description: 'One-on-one guidance from industry experts to help you achieve your goals.',
    Icon: Users,
    color: 'from-orange-500/20 to-red-500/20',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Workshops',
    description: 'Interactive workshops and seminars on cutting-edge technologies and best practices.',
    Icon: Presentation,
    color: 'from-pink-500/20 to-rose-500/20',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Innovation',
    description: 'Support for tech startups and innovative projects that solve local challenges.',
    Icon: Rocket,
    color: 'from-purple-500/20 to-indigo-500/20',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Career Support',
    description: 'Career guidance, job placement assistance, and professional development.',
    Icon: Target,
    color: 'from-cyan-500/20 to-teal-500/20',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Research',
    description: 'Research and development initiatives focused on African tech solutions.',
    Icon: Lightbulb,
    color: 'from-yellow-500/20 to-amber-500/20',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Partnerships',
    description: 'Collaboration opportunities with global tech companies and educational institutions.',
    Icon: Globe,
    color: 'from-lime-500/20 to-green-500/20',
    gradient: 'from-lime-500 to-green-500'
  },
]

export function PartnerSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background">
      {/* Premium background effects */}
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
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              What We Offer
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to empower individuals and organizations in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-2xl p-6",
                  "bg-gradient-to-br",
                  service.color,
                  "transition-all duration-500 transform hover:-translate-y-1"
                )}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br",
                      service.gradient,
                      "shadow-lg"
                    )}>
                      <service.Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className={cn(
                      "text-lg font-semibold bg-clip-text text-transparent",
                      "bg-gradient-to-r",
                      service.gradient
                    )}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-xl"
            >
              Partner with Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 