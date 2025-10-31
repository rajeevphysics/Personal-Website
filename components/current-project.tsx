"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { latestProject, getTagColor } from "@/lib/current-project-data"
import { useEffect, useState } from "react"

// This page is for current event visable through the homepage

export default function CurrentProject() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-white py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="relative z-50 text-6xl md:text-7xl lg:text-8xl font-bold text-black text-left">
            What I'm Doing Now
          </h2>
        </motion.div>

        {/* Fancy project card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-30 group"
        >
          <Link href="/timeline" className="block">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:scale-[1.02]">
              {/* Image with overlay gradient */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={latestProject.image || "/placeholder.svg"}
                  alt={latestProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Tags and status overlay */}
                <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                  {latestProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${getTagColor(tag)} px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide backdrop-blur-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {latestProject.status}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-400 font-bold text-lg">
                      <span className="w-12 h-0.5 bg-blue-400" />
                      <span>
                        {latestProject.month} {latestProject.year}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {latestProject.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                      {latestProject.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-500 transition-all duration-500" />
            </div>

            {/* Call to action */}
            <div className="mt-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 text-blue-500 font-bold text-xl group-hover:gap-5 transition-all duration-300">
                <span>View Full Timeline</span>
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
