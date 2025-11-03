"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { getTagColor, getStatusColor, timelineEvents, type TimelineEvent } from "@/lib/timeline-data"

interface EventModalProps {
  selectedEvent: TimelineEvent | null
  onClose: () => void
  onEventClick: (event: TimelineEvent) => void
}

export default function EventModal({ selectedEvent, onClose, onEventClick }: EventModalProps) {
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedEvent])

  if (!selectedEvent) return null

  const relatedEvents = selectedEvent.statusId
    ? timelineEvents
        .filter((event) => event.statusId === selectedEvent.statusId && event.id !== selectedEvent.id)
        .sort((a, b) => {
          if (a.year !== b.year) return Number(b.year) - Number(a.year)
          return b.id - a.id
        })
    : []

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        // allow vertical scroll but keep page locked
        className="fixed inset-0 bg-black/70 z-[100] overflow-y-auto"
      >
        <div className="flex justify-center p-4 pt-12 md:pt-20">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            // height now auto-expands, scroll handled by parent overlay
            className="relative bg-white rounded-lg p-8 md:p-12 max-w-4xl w-full shadow-2xl mb-16"
          >
            <div className="flex justify-end items-start mb-6">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-4xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="relative w-full aspect-[3/2] mb-8 overflow-hidden rounded-lg">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              {selectedEvent.ref && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {selectedEvent.ref}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-blue-500 font-bold text-xl">
                  {selectedEvent.month} {selectedEvent.date} {selectedEvent.year}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {selectedEvent.title}
              </h2>

              <div className="flex gap-2 flex-wrap">
                {selectedEvent.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${getTagColor(tag)} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className={`${getStatusColor(selectedEvent.status)} px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {selectedEvent.status}
                </span>
              </div>

              <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
                {selectedEvent.detailedDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {selectedEvent.fullref && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Reference</h3>
                  <a
                    href={selectedEvent.fullref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 hover:underline break-all"
                  >
                    {selectedEvent.fullref}
                  </a>
                </div>
              )}

              {relatedEvents.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-4">Related Events</h3>
                  <div className="space-y-3">
                    {relatedEvents.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => onEventClick(event)}
                        className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group"
                      >
                        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                              {event.title}
                            </h4>
                            <span
                              className={`${getStatusColor(event.status)} px-2 py-1 rounded text-xs font-semibold flex-shrink-0`}
                            >
                              {event.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {event.month} {event.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}