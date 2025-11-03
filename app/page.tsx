import Header from "@/components/header"
import Hero from "@/components/hero"
import Phrase from "@/components/phrase"
import About from "@/components/about"
import Quote from "@/components/quote"
import Bio from "@/components/bio"
import TechnicalSkillsIntro from "@/components/technical-skills-intro"
import CurrentProject from "@/components/current-project"
import LoadingBar from "@/components/loading-bar"
import Footer from "@/components/footer"
import IntroAnimation from "@/components/intro-animation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <IntroAnimation />
      <LoadingBar />
      <Header />
      <Hero />
      <Phrase />
      <Bio />
      {/* <About /> */}
      <CurrentProject />
      <Quote />
      {/* <TechnicalSkillsIntro /> */}
      <Footer />
    </div>
  )
}
