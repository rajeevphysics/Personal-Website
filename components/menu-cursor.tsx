"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUp, ArrowUpRight } from "lucide-react"

type CursorState = "default" | "internal" | "external"

interface MenuCursorProps {
  isMenuOpen: boolean
}

export default function MenuCursor({ isMenuOpen }: MenuCursorProps) {
  const [cursorState, setCursorState] = useState<CursorState>("default")
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 500 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const size = cursorState === "default" ? 40 : 64
      cursorX.set(e.clientX - size / 2)
      cursorY.set(e.clientY - size / 2)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      const link = target.closest("a")

      if (link) {
        const href = link.getAttribute("href") || ""
        const isExternal = href.startsWith("http") || href.startsWith("mailto:")

        if (isExternal || link.textContent?.includes("GitHub") || link.textContent?.includes("Contact")) {
          setCursorState("external")
        } else if (
          link.textContent?.includes("Home") ||
          link.textContent?.includes("About") ||
          link.textContent?.includes("Timeline") ||
          link.textContent?.includes("Goals") ||
          link.textContent?.includes("CV") ||
          link.textContent?.includes("Resume")
        ) {
          setCursorState("internal")
        }
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      const link = target.closest("a")

      if (link) {
        setCursorState("default")
      }
    }

    if (isMenuOpen) {
      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseenter", handleMouseEnter, true)
      document.addEventListener("mouseleave", handleMouseLeave, true)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [cursorState, cursorX, cursorY, isMenuOpen])

  if (!isMounted || typeof window === "undefined" || window.innerWidth < 768 || !isMenuOpen) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[95] flex items-center justify-center"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        width: cursorState === "default" ? 40 : 64,
        height: cursorState === "default" ? 40 : 64,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-blue-500"
        animate={{
          width: cursorState === "default" ? 40 : 64,
          height: cursorState === "default" ? 40 : 64,
        }}
        transition={{ duration: 0.2 }}
      >
        {cursorState === "internal" && <ArrowUp className="w-6 h-6 text-white" />}
        {cursorState === "external" && <ArrowUpRight className="w-6 h-6 text-white" />}
      </motion.div>
    </motion.div>
  )
}
