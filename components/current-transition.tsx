"use client"

import { useEffect, useState } from "react"

export default function CurrentTransition() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-white pt-10 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-px bg-gray-300 flex-1" />
          <p className="text-base md:text-lg text-gray-500 font-medium tracking-wide">Currently working on</p>
          <div className="h-px bg-gray-300 flex-1" />
        </div>
      </div>
    </section>
  )
}
