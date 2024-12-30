'use client'

import React, { useRef, useEffect } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations'

const teamMembers = [
  {
    name: 'Naomi Omonua Igbinovia',
    role: 'Lead Project Manager',
    image: '/team/naomi.jpg',
    bio: 'A project management professional and entrepreneur with a background in computer science. She is a multipotentialite who has made significant contributions to educational technology and digital product space. Naomi is recognized for her efforts in coaching and people development skills. Having educated over 10,000 individuals through various programs. She is the brain behind Nazee Consult, which focuses on innovative education technological solutions. Naomi is passionate about girl child inclusion and development. Naomi has worked with notable organizations such as Microsoft, Yoummday, Edo state government, DWP UK etc. She is an emblem of hope to future generations.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Osazee',
    role: 'Team Member',
    image: '/team/osazee.jpg',
    bio: 'Contributing to our mission of empowering through technology.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Victoria',
    role: 'Team Member',
    image: '/team/victoria.jpg',
    bio: 'Contributing to our mission of empowering through technology.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
]

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scaleOnScroll, staggerFadeInUp } = useGSAPAnimations()

  useEffect(() => {
    staggerFadeInUp('.team-card', 0.3)
    
    scaleOnScroll('.team-title', {
      trigger: '.team-section',
      start: 'top center+=100',
      end: 'top center-=100',
      scrub: 1,
    })
  }, [staggerFadeInUp, scaleOnScroll])

  return (
    <section 
      ref={sectionRef}
      className="team-section relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="team-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 opacity-0">
              Meet the lead Project Manager
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-card group opacity-0"
              >
                <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-6 hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}