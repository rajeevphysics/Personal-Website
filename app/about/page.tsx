"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function AboutPage() {
  useEffect(() => {
    const scrollToTop = () => {
      if (typeof window !== "undefined") {
        if ((window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true, force: true })
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    }

    // Immediate scroll
    scrollToTop()

    // Multiple retry attempts to ensure scroll happens
    const timers = [0, 50, 100, 200, 300].map((delay) => setTimeout(scrollToTop, delay))

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-24" />
      <About />
      <Footer />
    </div>
  )
}
