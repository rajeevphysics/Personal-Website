"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"
import LoadingBar from "@/components/loading-bar"

export default function AboutPage() {
  useEffect(() => {
    // Immediate attempt
    window.scrollTo(0, 0)
    if (typeof window !== "undefined" && (window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { immediate: true })
    }

    // Multiple retries with increasing delays
    const timers = [
      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 100),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 300),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 500),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 800),
    ]

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  return (
    <div className="min-h-screen">
    <LoadingBar />
      <Header />
      <div className="h-24" />
      <About />
      <Footer />
    </div>
  )
}
