"use client"

import { useEffect, useState } from "react"

export default function CurrentTransitionMobile() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-white pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-300 flex-1" />
          <p className="text-xs text-gray-500 font-sans font-medium tracking-wide">Currently working on</p>
          <div className="h-px bg-gray-300 flex-1" />
        </div>
      </div>
    </section>
  )
}
