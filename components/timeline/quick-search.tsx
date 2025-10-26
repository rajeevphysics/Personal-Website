"use client"

import { motion } from "framer-motion"
import { quickSearchData } from "@/lib/timeline-data"

interface QuickSearchProps {
  setSearchQuery: (query: string) => void
  setSelectedTag: (tag: string) => void
}

export default function QuickSearch({ setSearchQuery, setSelectedTag }: QuickSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 z-20 mt-2 p-6 border border-gray-200 bg-white shadow-lg rounded-lg"
    >
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Quick Search</h3>

        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Topics</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchData.topics.map((topic) => (
              <button
                key={topic.label}
                data-quick-search
                onClick={() => setSearchQuery(topic.query)}
                className="relative z-25 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Tags</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchData.tags.map((tagItem) => (
              <button
                key={tagItem.label}
                data-quick-search
                onClick={() => setSelectedTag(tagItem.tag)}
                className="relative z-25 px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
              >
                {tagItem.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Featured Events</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchData.events.map((event) => (
              <button
                key={event.label}
                data-quick-search
                onClick={() => setSearchQuery(event.query)}
                className="relative z-25 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {event.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
