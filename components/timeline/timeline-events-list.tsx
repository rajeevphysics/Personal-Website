"use client"

import { getTagColor, getStatusColor, type TimelineEvent } from "@/lib/timeline-data"

/* 
  TimelineEventsList Component
  Displays all events grouped by year in an alternating (left-right) layout.
  Each event is clickable and triggers onEventClick(event) to open a modal.
*/

interface TimelineEventsListProps {
  eventsByYear: Record<string, TimelineEvent[]>
  years: string[]
  onEventClick: (event: TimelineEvent) => void
}

export default function TimelineEventsList({
  eventsByYear,
  years,
  onEventClick,
}: TimelineEventsListProps) {
  if (years.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-500">No events found matching your criteria.</p>
      </div>
    )
  }

  return (
    <>
      {years.map((year, yearIndex) => (
        <div key={year} className="relative">
          <div className="flex items-start gap-16 md:gap-24 lg:gap-32 mb-12">
            {/* Year label on the left */}
            <div className="sticky top-32 w-32 md:w-40 flex-shrink-0 -ml-8 md:-ml-12">
              <h2
                className={`text-6xl md:text-8xl font-bold ${
                  yearIndex === 0 ? "text-black" : "text-gray-300"
                }`}
              >
                {year}
              </h2>
            </div>

            {/* Events list */}
            <div className="flex-1 space-y-12">
              <div className="border-t-2 border-gray-300 mb-12" />

              {eventsByYear[year].map((event, index) => {
                const isReversed = index % 2 === 1 // alternate layout for every second event

                return (
                  <div key={event.id} className="group">
                    <div
                      onClick={() => onEventClick(event)} // ✅ Fixed: ensures modal opens
                      className="relative z-30 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    >
                      {/* Alternating layout */}
                      <div
                        className={`flex flex-col md:flex-row gap-8 items-start ${
                          isReversed ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Image container */}
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

                        {/* Text container */}
                        <div
                          className={`flex-1 space-y-4 ${
                            isReversed ? "text-right md:pr-4" : "text-left md:pl-4"
                          }`}
                        >
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-blue-500 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {event.month} {event.date} {year}
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

                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
