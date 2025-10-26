"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUp, ArrowDown } from "lucide-react"

interface ScrollCursorProps {
  isScrollButtonVisible?: boolean
}

export default function ScrollCursor({ isScrollButtonVisible = false }: ScrollCursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringNav, setIsHoveringNav] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 500 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const size = isHoveringNav ? 64 : isHovering ? 80 : 40
      cursorX.set(e.clientX - size / 2)
      cursorY.set(e.clientY - size / 2)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      // Check if hovering over the scroll-to-top button
      const scrollButton = target.closest('button[aria-label="Scroll to top"]')
      const navLink = target.closest('[data-cursor="down-arrow"]')

      if (scrollButton) {
        setIsHovering(true)
      } else if (navLink) {
        setIsHoveringNav(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      const scrollButton = target.closest('button[aria-label="Scroll to top"]')
      const navLink = target.closest('[data-cursor="down-arrow"]')

      if (scrollButton) {
        setIsHovering(false)
      } else if (navLink) {
        setIsHoveringNav(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [isHovering, isHoveringNav, cursorX, cursorY])

  if (
    !isMounted ||
    typeof window === "undefined" ||
    window.innerWidth < 768 ||
    (!isScrollButtonVisible && !isHoveringNav) ||
    (!isHovering && !isHoveringNav)
  ) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 flex items-center justify-center"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        width: isHoveringNav ? 64 : 80,
        height: isHoveringNav ? 64 : 80,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-blue-500"
        animate={{
          width: isHoveringNav ? 64 : 80,
          height: isHoveringNav ? 64 : 80,
        }}
        transition={{ duration: 0.2 }}
      >
        {isHoveringNav ? (
          <ArrowDown className="w-8 h-8 text-white" strokeWidth={2.5} />
        ) : (
          <ArrowUp className="w-8 h-8 text-white" strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.div>
  )
}
