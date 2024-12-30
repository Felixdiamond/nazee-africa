'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Target, Users, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Value {
  title: string
  description: string
  Icon: LucideIcon
}

const values: Value[] = [
  {
    title: 'Innovation',
    description: "We embrace innovative solutions and creative thinking to solve Africa&apos;s unique challenges.",
    Icon: Lightbulb,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from our programs to our impact.',
    Icon: Target,
  },
  {
    title: 'Community',
    description: 'We build strong communities that support and empower each other.',
    Icon: Users,
  },
  {
    title: 'Impact',
    description: 'We measure our success by the positive change we create across Africa.',
    Icon: Globe,
  },
]

export function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Introduction to Nazee Consult
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="prose prose-lg dark:prose-invert mb-12 sm:mb-16"
          >
            <p>
              At Nazee Consult, we&apos;re transforming technology education by dismantling barriers and delivering impactful, inclusive learning experiences in tech. Our mission is to provide innovative, accessible, and practical solutions that equip individuals to start up and build successful careers ranging from project management, data analysis, business analysis, web development etc. We also empower organizations with the tech talents, resources and tools needed to thrive in today&apos;s dynamic world.
            </p>
            <p>
              Among our diverse initiatives, our flagship program, Nazee Africa, offers tuition-free, cohort-based tech training exclusively for Africans aged 17–27. This initiative is designed to address deep-rooted inequalities, empowering young Africans with knowledge, experience and skills in technology. By unlocking their potentials, we enable them to become change makers in their communities and contributors to the global economy.
            </p>
            <p>
              Technology is the future, so if you&apos;re looking to speak to an expert, sharpen your project management expertise, acquire essential resources, pass certification exams, empower your team, or support a movement that transforms lives, Nazee Consult is your trusted partner. Together, we&apos;re building a future where technology and education are gateways to equal opportunities, enabling everyone to make their impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-6">
                  <div className="mb-4">
                    <value.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 