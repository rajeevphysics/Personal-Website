"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white z-[10000] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight">Rajeev Persaud</h1>
          </div>

          <div className="fixed bottom-8 right-8">
            <p className="text-lg md:text-xl font-sans tracking-wide">LOADING {Math.min(Math.round(progress), 100)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
