import Header from "@/components/header"
import Hero from "@/components/hero"
import Phrase from "@/components/phrase"
import Bio from "@/components/bio"
import TechnicalSkillsIntro from "@/components/technical-skills-intro"
import CurrentProject from "@/components/current-project"
import CurrentTransition from "@/components/current-transition"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Phrase />
      <Bio />
      {/* <About /> */}
      <CurrentTransition />
      <CurrentProject />
      {/* <Quote /> */}
      {/* <TechnicalSkillsIntro /> */}
      <Footer />
    </div>
  )
}
