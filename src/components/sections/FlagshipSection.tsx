'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Kanban, ListChecks, Users, School, GraduationCap } from 'lucide-react'

const programs = [
  {
    title: 'Project management training',
    description: 'LMS, One-one classes, tools, resources',
    Icon: Kanban,
  },
  {
    title: 'Career preparation',
    description: 'Internship match, CV revamp, interview prep',
    Icon: ListChecks,
  },
  {
    title: 'Mentorship',
    description: 'One to one QA sessions',
    Icon: School,
  },
  {
    title: 'Community support',
    description: 'Girls in PM community group',
    Icon: Users,
  },
  {
    title: 'Certification',
    description: 'Earn a diploma certificate to showcase your skill',
    Icon: GraduationCap,
  }
]

const eligibilityCriteria = [
  'Be between 17–27 years old',
  'Female participants only',
  'Reside in an African country',
  'Demonstrate a keen interest in technology and project management',
  'Be ready to dedicate 5-10 hours per week for program activities, including classes, projects, and mentorship sessions'
]

export function FlagshipSection() {
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
              Flagship Initiative: Nazee Africa empowerment
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
              Nazee Africa is one of our initiatives. It is tuition-free, cohort-based program designed to empower young Africans aged 17–27 with technology skills, bridging the gap between talent and opportunity. Our mission is to make technology education accessible and provide a gateway to global opportunities, fostering tech inclusivity across Africa. Our pioneer program, &quot;Girls in PM,&quot; is a three-month intensive training program focused on equipping young women with project management (PM) skills. This program empowers participants to lead, plan, and manage projects efficiently, preparing them for lucrative roles in the global tech industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-6">
                  <div className="mb-4">
                    <program.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Eligibility Criteria
            </h3>
            <div className="inline-block text-left">
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <motion.li
                    key={criteria}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0" />
                    {criteria}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="prose prose-lg dark:prose-invert mb-12"
          >
            <p className="text-center text-muted-foreground">
              This program is competitive as we take less than 10% of applicants. Take time and put your best foot forward in the application. We can&apos;t wait to have you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              APPLY for next cohort
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 