"use client"

import { AnimatePresence } from "framer-motion"
import QuickSearch from "./quick-search"

/* 
This is where title descriptions and filtering lies for the timeline page 


Add in date to filter should go year -> month -> day if needed
should be YDate = "" and then filter in timeline-events-list.tsx

*/

interface TimelineFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedYear: string
  setSelectedYear: (year: string) => void
  selectedTag: string
  setSelectedTag: (tag: string) => void
  allYears: string[]
  allTags: string[]
  filteredEventsCount: number
  showQuickSearch: boolean
  setShowQuickSearch: (show: boolean) => void
}

export default function TimelineFilters({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  selectedTag,
  setSelectedTag,
  allYears,
  allTags,
  filteredEventsCount,
  showQuickSearch,
  setShowQuickSearch,
}: TimelineFiltersProps) {
  const hasActiveFilters = searchQuery || selectedYear !== "all" || selectedTag !== "all"

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedYear("all")
    setSelectedTag("all")
  }

  return (
    <div className="relative z-50 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 border-b border-gray-200">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timeline</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore my journey through research, projects, achievements and education. Use the filters below to navigate by year,
            category, or search for specific topics. 
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setShowQuickSearch(true)}
          onMouseLeave={() => setShowQuickSearch(false)}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search timeline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
            >
              <option value="all">All Years</option>
              {allYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
            >
              <option value="all">All Tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          <AnimatePresence>
            {showQuickSearch && <QuickSearch setSearchQuery={setSearchQuery} setSelectedTag={setSelectedTag} />}
          </AnimatePresence>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Showing {filteredEventsCount} results</span>
            <button onClick={clearFilters} className="text-blue-500 hover:text-blue-700 underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
