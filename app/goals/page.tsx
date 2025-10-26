"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import LoadingBar from "@/components/loading-bar"
import Footer from "@/components/footer"
import GoalsHero from "@/components/goals/goals-hero"
import SemesterGoals from "@/components/goals/semester-goals"
import GoalsQuote from "@/components/goals/goals-quote"
import GoalsQuote2 from "@/components/goals/goals-quote-2"
import LongTermGoals from "@/components/goals/long-term-goals"

export default function GoalsPage() {
  const [showContent, setShowContent] = useState(false)
  const [showScrollIcon, setShowScrollIcon] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const semesterGoalsRef = useRef<HTMLDivElement>(null)
  const longTermGoalsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIcon(false)
      } else {
        setShowScrollIcon(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-white">
      <LoadingBar />
      <Header />

      <GoalsHero
        showContent={showContent}
        showScrollIcon={showScrollIcon}
        onScrollToSemester={() => scrollToSection(semesterGoalsRef)}
        onScrollToLongTerm={() => scrollToSection(longTermGoalsRef)}
      />

      <GoalsQuote />

      <SemesterGoals showContent={showContent} containerRef={containerRef} semesterGoalsRef={semesterGoalsRef} />

      <GoalsQuote2 />

      <LongTermGoals showContent={showContent} longTermGoalsRef={longTermGoalsRef} />

        <Footer />
    </div>
  )
}
