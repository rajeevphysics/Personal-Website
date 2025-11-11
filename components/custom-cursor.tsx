"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUp, ArrowUpRight, ArrowDown } from "lucide-react"

type CursorState = "default" | "internal" | "external" | "menu" | "goals-down"

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default")
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [isHoveringGoals, setIsHoveringGoals] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 500 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)

    const handleMenuToggle = () => {
      const menuOverlay = document.querySelector('[class*="z-\\[90\\]"]')
      setIsMenuOpen(menuOverlay?.classList.contains("opacity-100") || false)
    }

    const observer = new MutationObserver(handleMenuToggle)
    const menuOverlay = document.querySelector('[class*="z-\\[90\\]"]')
    if (menuOverlay) {
      observer.observe(menuOverlay, { attributes: true, attributeFilter: ["class"] })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const size = cursorState === "default" ? 40 : cursorState === "menu" ? 80 : 64
      cursorX.set(e.clientX - size / 2)
      cursorY.set(e.clientY - size / 2)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      const goalsButton = target.closest("[data-goals-button]")
      if (goalsButton) {
        setCursorState("goals-down")
        setIsHoveringGoals(true)
        return
      }

      const menuButton =
        target.closest('button[class*="MENU"]') ||
        (target instanceof HTMLButtonElement && target.textContent?.includes("MENU"))

      const menuNavLink = target.closest("a") && target.closest("a")?.textContent?.includes("MENU")

      if (menuButton || menuNavLink) {
        setCursorState("menu")
        if (menuButton) {
          setIsHoveringMenu(true)
        }
        return
      }

      const link = target.closest("a")
      const clickableCard = target.closest('[class*="cursor-pointer"]')
      const quickSearchButton = target.closest("button[data-quick-search]")

      if (link) {
        const href = link.getAttribute("href") || ""
        const isExternal = href.startsWith("http") || href.startsWith("mailto:")

        if (isExternal || link.textContent?.includes("GitHub") || link.textContent?.includes("Contact")) {
          setCursorState("external")
        } else if (
          link.textContent?.includes("About") ||
          link.textContent?.includes("Timeline") ||
          link.textContent?.includes("Goals") ||
          link.textContent?.includes("CV") ||
          link.textContent?.includes("Resume") ||
          link.textContent?.includes("Rajeev Persaud") ||
          link.textContent?.includes("Home")
        ) {
          setCursorState("internal")
        }
      } else if (clickableCard || quickSearchButton) {
        setCursorState("internal")
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof HTMLElement)) {
        return
      }

      const goalsButton = target.closest("[data-goals-button]")
      if (goalsButton) {
        setCursorState("default")
        setIsHoveringGoals(false)
        return
      }

      const menuButton =
        target.closest('button[class*="MENU"]') ||
        (target instanceof HTMLButtonElement && target.textContent?.includes("MENU"))
      const menuNavLink = target.closest("a") && target.closest("a")?.textContent?.includes("MENU")
      const link = target.closest("a")
      const clickableCard = target.closest('[class*="cursor-pointer"]')
      const quickSearchButton = target.closest("button[data-quick-search]")

      if (link || clickableCard || quickSearchButton || menuButton || menuNavLink) {
        setCursorState("default")
        if (menuButton) {
          setIsHoveringMenu(false)
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      observer.disconnect()
    }
  }, [cursorState, cursorX, cursorY])

  if (!isMounted || typeof window === "undefined" || window.innerWidth < 768 || isMenuOpen) {
    return null
  }

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 flex items-center justify-center ${
        isHoveringMenu || isHoveringGoals ? "z-[105]" : "z-40"
      }`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        width: cursorState === "default" ? 40 : cursorState === "menu" ? 80 : 64,
        height: cursorState === "default" ? 40 : cursorState === "menu" ? 80 : 64,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-blue-500"
        animate={{
          width: cursorState === "default" ? 40 : cursorState === "menu" ? 80 : 64,
          height: cursorState === "default" ? 40 : cursorState === "menu" ? 80 : 64,
        }}
        transition={{ duration: 0.2 }}
      >
        {cursorState === "internal" && <ArrowUp className="w-6 h-6 text-white" />}
        {cursorState === "external" && <ArrowUpRight className="w-6 h-6 text-white" />}
        {cursorState === "menu" && <span className="text-white font-bold text-sm">MENU</span>}
        {cursorState === "goals-down" && <ArrowDown className="w-8 h-8 text-white" />}
      </motion.div>
    </motion.div>
  )
}