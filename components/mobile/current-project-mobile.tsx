"use client"
import { getTagColor, getStatusColor, timelineEvents, type TimelineEvent } from "@/lib/timeline-data"
import { useEffect, useState } from "react"
import BottomSheetModal from "@/components/timeline/bottom-sheet-modal"
import RoundedButton from "@/components/anim/rounded-button"

export default function CurrentProjectMobile() {
  const [showContent, setShowContent] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const latestEvents: TimelineEvent[] = [...timelineEvents].sort((a, b) => b.id - a.id).slice(0, 3)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-white pt-8 pb-16 px-4">
      <div className="flex flex-col mb-8">
        {/* Year Label */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-black">2025</h2>
        </div>

        {/* Latest Projects - Mobile Optimized */}
        <div className="space-y-8">
          <div className="border-t-2 border-gray-300 mb-6" />

          {latestEvents.map((event) => (
            <div key={event.id} onClick={() => setSelectedEvent(event)} className="group cursor-pointer">
              <div className="flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
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
                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {event.month} {event.date} {event.year}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${getTagColor(tag)} px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className={`${getStatusColor(event.status)} px-2 py-1 rounded-full text-xs font-semibold`}>
                      {event.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t-2 border-gray-300 mt-12 pt-8 flex justify-center">
            <RoundedButton
              href="/timeline"
              className="px-6 py-2 text-sm bg-white text-black font-medium rounded-full border-2 border-orange-400 hover:border-orange-500 transition-colors duration-300"
            >
              View Full Timeline
            </RoundedButton>
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
