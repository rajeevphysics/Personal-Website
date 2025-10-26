"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function MobileWarning() {
  const [isSmallDevice, setIsSmallDevice] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallDevice(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (!isSmallDevice || isDismissed) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6">
      <div className="relative max-w-md rounded-lg bg-white p-8 text-center">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Dismiss warning"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Notice</h2>
        <p className="text-gray-700 leading-relaxed">
          This site is not optimized for small devices. For the best experience, please visit on a desktop or laptop
          computer.
        </p>
      </div>
    </div>
  )
}
