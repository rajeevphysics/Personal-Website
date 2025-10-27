"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading completion after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[1000] origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  )
}
