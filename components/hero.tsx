"use client"

import { LetterCollision } from "@/textAnimations/scrollText"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [showScrollIcon, setShowScrollIcon] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIcon(false)
      } else {
        setShowScrollIcon(true)
      }
    }

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="relative pt-5 overflow-hidden min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: showContent ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <LetterCollision />
      </motion.div>

      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          showScrollIcon && showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold text-foreground">Scroll</span>
          <ChevronDown className="w-10 h-10 text-foreground" strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}
