'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface StoryContent {
  story: {
    title: string
    content: string[]
  }
  vision: {
    title: string
    content: string
  }
  mission: {
    title: string
    content: string
  }
  values: {
    title: string
    content: string[]
  }
}

const storyContent: StoryContent = {
  story: {
    title: 'Our Story',
    content: [
      "Growing up in Africa, We witnessed firsthand the profound underutilization of technology in education, entrepreneurship, and personal growth. In a world filled with potential, it was evident that many individuals and communities were left behind, not due to a lack of talent or ambition, but because of limited access to resources, training, and tools.",
      "As a child, I dreamed of possibilities far beyond what I could see. That dream led me to explore entrepreneurship and the transformative power of technology. Diving into the tech space, I realized just how accessible and impactful innovation could be when paired with the right skills and opportunities. It became clear that technology wasn't just a tool for personal success—it was a catalyst for change, capable of empowering entire communities to achieve greatness."
    ]
  },
  vision: {
    title: 'Vision Statement',
    content: 'A future where education and technology open doors for equal opportunity and growth across communities.'
  },
  mission: {
    title: 'Mission Statement',
    content: 'To bridge the gap between traditional education and modern demands by creating accessible, high-quality learning opportunities for professionals, students, and organizations worldwide.'
  },
  values: {
    title: 'Core Values',
    content: ['Innovation', 'Excellence', 'Continuous Development', 'Global Collaboration']
  }
}

export function StorySection() {
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
              Our Journey
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {storyContent.story.title}
            </h2>
          </motion.div>

          <div className="space-y-12">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-8 sm:p-10">
                <div className="prose prose-lg dark:prose-invert">
                  {storyContent.story.content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision, Mission, Values Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group col-span-1"
              >
                <div className="h-full relative overflow-hidden rounded-2xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {storyContent.vision.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {storyContent.vision.content}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="group col-span-2"
              >
                <div className="h-full relative overflow-hidden rounded-2xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {storyContent.mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {storyContent.mission.content}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-500 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {storyContent.values.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {storyContent.values.content.map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors duration-300">
                        <p className="text-primary font-medium">{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 