"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Phrase from "@/components/phrase"
import Bio from "@/components/bio"
import CurrentTransition from "@/components/current-transition"
import CurrentProject from "@/components/current-project"
import Footer from "@/components/footer"
import IntroAnimation from "@/components/loading-bar"
import { useMobile } from "@/hooks/use-mobile"
import HeroMobile from "@/components/mobile/hero-mobile"
import BioMobile from "@/components/mobile/bio-mobile"
import CurrentProjectMobile from "@/components/mobile/current-project-mobile"
import CurrentTransitionMobile from "@/components/mobile/current-transition-mobile"
import PhraseMobile from "@/components/mobile/phrase-mobile"

export default function Home() {
  const isMobile = useMobile()

  return (
    <div className="min-h-screen">
      <IntroAnimation />
      <Header />
      {isMobile ? <HeroMobile /> : <Hero />}
      {isMobile ? <PhraseMobile /> : <Phrase />}
      {isMobile ? <BioMobile /> : <Bio />}
      {isMobile ? <CurrentTransitionMobile /> : <CurrentTransition />}
      {isMobile ? <CurrentProjectMobile /> : <CurrentProject />}
      <Footer />
    </div>
  )
}
