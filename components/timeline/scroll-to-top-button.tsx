"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

interface ScrollToTopButtonProps {
  showScrollTop: boolean
  isArrowAbsolute: boolean
  arrowAbsoluteTop: number
  onScrollToTop: () => void
}

export default function ScrollToTopButton({
  showScrollTop,
  isArrowAbsolute,
  arrowAbsoluteTop,
  onScrollToTop,
}: ScrollToTopButtonProps) {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={onScrollToTop}
          data-quick-search
          className={`${isArrowAbsolute ? "absolute" : "fixed"} bottom-8 left-8 z-30 transition-opacity hover:opacity-80`}
          style={
            isArrowAbsolute
              ? {
                  top: `${arrowAbsoluteTop}px`,
                }
              : undefined
          }
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-10 h-16 text-blue-500" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
