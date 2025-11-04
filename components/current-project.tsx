"use client"
import { motion, useInView } from "framer-motion"
import { getTagColor, getStatusColor, timelineEvents, type TimelineEvent } from "@/lib/timeline-data"
import { useEffect, useState, useRef } from "react"
import BottomSheetModal from "@/components/timeline/bottom-sheet-modal"
import RoundedButton from "@/components/anim/rounded-button"

export default function CurrentProject() {
  const [showContent, setShowContent] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const buttonRef = useRef(null)
  const isButtonInView = useInView(buttonRef, { once: true })

  const latestEvents: TimelineEvent[] = [...timelineEvents].sort((a, b) => b.id - a.id).slice(0, 3)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-white pt-8 pb-24 px-8 md:px-16 lg:px-24">
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
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer"
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-start ${isReversed ? "md:flex-row-reverse" : ""}`}
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
                  <div className={`flex-1 space-y-4 ${isReversed ? "text-right md:pr-4" : "text-left md:pl-4"}`}>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {event.month} {event.date} {event.year}
                    </p>

                    <div className={`flex gap-2 flex-wrap ${isReversed ? "justify-end" : ""}`}>
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${getTagColor(
                            tag,
                          )} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className={`${getStatusColor(event.status)} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {event.status}
                      </span>
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}

          <div ref={buttonRef} className="border-t-2 border-gray-300 mt-20 pt-12 flex justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isButtonInView ? 1 : 0,
                opacity: isButtonInView ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <RoundedButton
                href="/timeline"
                className="px-8 py-3 bg-white text-black font-medium text-base rounded-full border-2 border-orange-400 hover:border-orange-500 transition-colors duration-300"
              >
                View Full Timeline
              </RoundedButton>
            </motion.div>
          </div>
        </div>
      </div>

      <BottomSheetModal
        selectedEvent={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onEventClick={setSelectedEvent}
      />
    </section>
  )
}
