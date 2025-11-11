"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { getTagColor, getStatusColor, timelineEvents, type TimelineEvent } from "@/lib/timeline-data"

interface BottomSheetModalProps {
  selectedEvent: TimelineEvent | null
  onClose: () => void
  onEventClick: (event: TimelineEvent) => void
}

export default function BottomSheetModal({ selectedEvent, onClose, onEventClick }: BottomSheetModalProps) {
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    if (selectedEvent) {
      scrollPositionRef.current = window.scrollY
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.documentElement.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = ""
        document.body.style.paddingRight = ""
        document.documentElement.style.overflow = ""
      }
    }
  }, [selectedEvent])

  if (!selectedEvent) return null

  const relatedEvents = selectedEvent.statusId
    ? timelineEvents
        .filter((event) => event.statusId === selectedEvent.statusId && event.id !== selectedEvent.id)
        .sort((a, b) => {
          if (a.year !== b.year) {
            return Number(b.year) - Number(a.year)
          }
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
        className="fixed inset-0 bg-black/70 z-50 touch-none"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[90vh] flex flex-col"
          style={{ touchAction: "pan-y" }}
        >
          {/* Close button - sticky header */}
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex justify-end rounded-t-3xl flex-shrink-0">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 overscroll-contain">
            <div className="px-6 md:px-12 pb-12">
              {/* Image on left, metadata on right */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Image - smaller on the left */}
                <div className="relative w-full md:w-64 md:flex-shrink-0 aspect-[4/3] md:aspect-square overflow-hidden rounded-lg">
                  <img
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  {selectedEvent.ref && (
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {selectedEvent.ref}
                    </div>
                  )}
                </div>

                {/* Metadata on the right */}
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">{selectedEvent.title}</h2>

                  <div className="flex items-baseline gap-4">
                    <span className="text-blue-500 font-bold text-lg">
                      {selectedEvent.month} {selectedEvent.date} {selectedEvent.year}
                    </span>
                  </div>

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
                </div>
              </div>

              <div className="space-y-6">
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
                              {event.month} {event.date} {event.year}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
