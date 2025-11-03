"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { getTagColor, getStatusColor, timelineEvents, type TimelineEvent } from "@/lib/timeline-data"
import { useEffect, useState } from "react"


export default function CurrentProject() {
  const [showContent, setShowContent] = useState(false)

  // Simulated latest 3 events (replace with your real filter/sort logic)
const latestEvents: TimelineEvent[] = [...timelineEvents]
  .sort((a, b) => b.id - a.id)
  .slice(0, 3)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-white py-24 px-8 md:px-16 lg:px-24">
      <div className="flex items-start gap-16 md:gap-24 lg:gap-32 mb-12">
        {/* Sticky Year Label */}
        <div className="sticky top-32 w-32 md:w-40 flex-shrink-0 -ml-8 md:-ml-12">
          <h2 className="text-6xl md:text-8xl font-bold text-black">2025</h2>
        </div>

        {/* Latest Projects (Timeline Style) */}
        <div className="flex-1 space-y-16">
          <div className="border-t-2 border-gray-300 mb-12" />

          {latestEvents.map((event, index) => {
            const isReversed = index % 2 === 1

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {event.ref && (
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {event.ref}
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div
                    className={`flex-1 space-y-4 ${
                      isReversed ? "text-right md:pr-4" : "text-left md:pl-4"
                    }`}
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {event.month} {event.date} {event.year}
                    </p>

                    <div
                      className={`flex gap-2 flex-wrap ${
                        isReversed ? "justify-end" : ""
                      }`}
                    >
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${getTagColor(
                            tag
                          )} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
                        >
                          {tag}
                        </span>
                      ))}
                      <span
                        className={`${getStatusColor(
                          event.status
                        )} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* View More Button */}
          <div className="border-t-2 border-gray-300 mt-20 pt-12">
            <Link href="/timeline" className="flex justify-start md:pl-4 group">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}