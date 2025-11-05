"use client"

import { useState, useMemo, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollCursor from "@/components/scroll-cursor"
import TimelineFilters from "@/components/timeline/timeline-filters"
import TimelineEventsList from "@/components/timeline/timeline-events-list"
import BottomSheetModal from "@/components/timeline/bottom-sheet-modal"
import ScrollToTopButton from "@/components/timeline/scroll-to-top-button"
import { timelineEvents, type TimelineEvent } from "@/lib/timeline-data"

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedTag, setSelectedTag] = useState<string>("all")
  const [showQuickSearch, setShowQuickSearch] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isArrowAbsolute, setIsArrowAbsolute] = useState(false)
  const [arrowAbsoluteTop, setArrowAbsoluteTop] = useState(0)

  useEffect(() => {
    // Immediate attempt
    window.scrollTo(0, 0)
    if (typeof window !== "undefined" && (window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { immediate: true })
    }

    // Multiple retries with increasing delays
    const timers = [
      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 100),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 300),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 500),

      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof window !== "undefined" && (window as any).lenis) {
          ;(window as any).lenis.scrollTo(0, { immediate: true })
        }
      }, 800),
    ]

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, []) 


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromBottom = documentHeight - (scrollY + windowHeight)

      setShowScrollTop(scrollY > 300)

      if (scrollY > 300 && distanceFromBottom <= 400) {
        const footer = document.querySelector("footer")
        if (footer) {
          const footerTop = footer.offsetTop
          setArrowAbsoluteTop(footerTop - 100)
        } else {
          setArrowAbsoluteTop(documentHeight - 800)
        }
        setIsArrowAbsolute(true)
      } else {
        setIsArrowAbsolute(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    timelineEvents.forEach((event) => {
      event.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  const filteredEvents = useMemo(() => {
    const directMatches = timelineEvents.filter((event) => {
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesYear = selectedYear === "all" || event.year === selectedYear

      const matchesTag = selectedTag === "all" || event.tags.includes(selectedTag)

      return matchesSearch && matchesYear && matchesTag
    })

    if (searchQuery === "") {
      return directMatches
    }

    const matchedStatusIds = new Set<string>()
    directMatches.forEach((event) => {
      if (event.statusId) {
        matchedStatusIds.add(event.statusId)
      }
    })

    const relatedEvents = timelineEvents.filter((event) => {
      if (!event.statusId) return false
      return matchedStatusIds.has(event.statusId)
    })

    const allMatches = [...directMatches, ...relatedEvents]
    const uniqueEvents = Array.from(new Map(allMatches.map((event) => [event.id, event])).values())

    return uniqueEvents.filter((event) => {
      const matchesYear = selectedYear === "all" || event.year === selectedYear
      const matchesTag = selectedTag === "all" || event.tags.includes(selectedTag)
      return matchesYear && matchesTag
    })
  }, [searchQuery, selectedYear, selectedTag])

  const eventsByYear = filteredEvents.reduce(
    (acc, event) => {
      if (!acc[event.year]) {
        acc[event.year] = []
      }
      acc[event.year].push(event)
      return acc
    },
    {} as Record<string, TimelineEvent[]>,
  )

  Object.keys(eventsByYear).forEach((year) => {
    eventsByYear[year].sort((a, b) => b.id - a.id)
  })

  const years = Object.keys(eventsByYear).sort((a, b) => Number(b) - Number(a))
  const allYears = Array.from(new Set(timelineEvents.map((e) => e.year))).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollCursor isScrollButtonVisible={showScrollTop} />
      <div className="h-24" />

      <div>
        <TimelineFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          allYears={allYears}
          allTags={allTags}
          filteredEventsCount={filteredEvents.length}
          showQuickSearch={showQuickSearch}
          setShowQuickSearch={setShowQuickSearch}
        />

        <div className="relative z-20 py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <TimelineEventsList eventsByYear={eventsByYear} years={years} onEventClick={setSelectedEvent} />
          </div>
        </div>
      </div>

      <BottomSheetModal
        selectedEvent={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onEventClick={setSelectedEvent}
      />

      <ScrollToTopButton
        showScrollTop={showScrollTop}
        isArrowAbsolute={isArrowAbsolute}
        arrowAbsoluteTop={arrowAbsoluteTop}
        onScrollToTop={scrollToTop}
      />

      <Footer />
    </div>
  )
}
