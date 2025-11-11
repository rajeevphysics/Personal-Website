"use client"

import { getTagColor, getStatusColor, type TimelineEvent } from "@/lib/timeline-data"

interface TimelineEventsListMobileProps {
  eventsByYear: Record<string, TimelineEvent[]>
  years: string[]
  onEventClick: (event: TimelineEvent) => void
}

export default function TimelineEventsListMobile({ eventsByYear, years, onEventClick }: TimelineEventsListMobileProps) {
  if (years.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-500">No events found matching your criteria.</p>
      </div>
    )
  }

  return (
    <>
      {years.map((year, yearIndex) => (
        <div key={year} className="relative mb-12">
          {/* Year Label */}
          <div className="mb-6">
            <h2 className={`text-4xl font-bold ${yearIndex === 0 ? "text-black" : "text-gray-300"}`}>{year}</h2>
          </div>

          {/* Events - Mobile Stacked Layout */}
          <div className="space-y-8">
            <div className="border-t-2 border-gray-300 mb-6" />

            {eventsByYear[year].map((event) => (
              <div key={event.id} onClick={() => onEventClick(event)} className="group cursor-pointer">
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
                      {event.month} {event.date} {year}
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
          </div>
        </div>
      ))}
    </>
  )
}
