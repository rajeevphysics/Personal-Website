"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (!hasSeenIntro) {
      setIsVisible(true)
      sessionStorage.setItem("hasSeenIntro", "true")

      setTimeout(() => {
        setIsVisible(false)
      }, 1500)
      // </CHANGE>
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      )}
    </AnimatePresence>
  )
}
