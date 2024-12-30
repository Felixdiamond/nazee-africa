'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { Loading } from '@/components/ui/loading'

const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <Loading />,
  ssr: false,
})

const FlagshipSection = dynamic(() => import('@/components/sections/FlagshipSection').then(mod => ({ default: mod.FlagshipSection })), {
  loading: () => <Loading />,
  ssr: false,
})

const ImpactSection = dynamic(() => import('@/components/sections/ImpactSection').then(mod => ({ default: mod.ImpactSection })), {
  loading: () => <Loading />,
  ssr: false,
})

const TeamSection = dynamic(() => import('@/components/sections/TeamSection').then(mod => ({ default: mod.TeamSection })), {
  loading: () => <Loading />,
  ssr: false,
})

const StorySection = dynamic(() => import('@/components/sections/StorySection').then(mod => ({ default: mod.StorySection })), {
  loading: () => <Loading />,
  ssr: false,
})

const PartnerSection = dynamic(() => import('@/components/sections/PartnerSection').then(mod => ({ default: mod.PartnerSection })), {
  loading: () => <Loading />,
  ssr: false,
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <Loading />,
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <FlagshipSection />
      <ImpactSection />
      <TeamSection />
      <StorySection />
      <PartnerSection />
      <ContactSection />
    </main>
  )
}
