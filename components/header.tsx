"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import MenuCursor from "./menu-cursor"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight)
    }

    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 2500)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsMenuOpen(false)
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    smoothScrollTo(targetId)
  }

  return (
    <>
      <MenuCursor isMenuOpen={isMenuOpen} />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showHeader && !isScrolled ? 1 : 0, y: showHeader ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[35] bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isScrolled ? "pointer-events-none" : ""
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-background font-bold text-sm">P</span>
              </div>
              <span className="text-sm">by Rajeev Persaud</span>
            </Link>

            {/* Increased gap from gap-8 to gap-12 for better spacing */}
            <nav className="flex items-center gap-12">
              <Link
                href="/#about"
                className={`text-lg font-medium hover:opacity-70 transition-opacity ${
                  pathname === "/" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </Link>
              <Link
                href="/timeline"
                className={`text-lg font-medium hover:opacity-70 transition-opacity ${
                  pathname === "/timeline" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={(e) => handleNavClick(e, "timeline")}
              >
                Timeline & Projects
              </Link>
              <Link
                href="/goals"
                className={`text-lg font-medium hover:opacity-70 transition-opacity ${
                  pathname === "/goals" ? "border-b-2 border-blue-500" : ""
                }`}
              >
                Goals
              </Link>
              <Link
                href="/skills"
                className={`text-lg font-medium hover:opacity-70 transition-opacity ${
                  pathname === "/skills" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={(e) => handleNavClick(e, "skills")}
              >
                CV
              </Link>
              <a
                href="https://github.com/rajeevphysics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
              >
                GitHub
                <span className="text-xs"></span>
              </a>
              <a
                href="mailto:r3persau@uwaterloo.ca"
                className="text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
              >
                Contact
                <span className="text-xs"></span>
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showHeader && isScrolled ? 1 : 0,
          scale: showHeader && isScrolled ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-6 right-6 z-[100] bg-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-blue-600 transition-all duration-300 ${
          isScrolled ? "" : "pointer-events-none"
        }`}
      >
        {isMenuOpen ? "CLOSE" : "MENU"}
      </motion.button>

      <div
        className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen && isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-bold hover:text-blue-500 transition-colors ${
              pathname === "/" ? "text-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-bold hover:text-blue-500 transition-colors ${
              pathname === "/" ? "text-blue-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/timeline"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-bold hover:text-blue-500 transition-colors ${
              pathname === "/timeline" ? "text-blue-500" : ""
            }`}
          >
            Timeline & Projects
          </Link>
          <Link
            href="/goals"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-bold hover:text-blue-500 transition-colors ${
              pathname === "/goals" ? "text-blue-500" : ""
            }`}
          >
            Goals
          </Link>
          <Link
            href="/skills"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-bold hover:text-blue-500 transition-colors ${
              pathname === "/skills" ? "text-blue-500" : ""
            }`}
          >
            CV
          </Link>
          <a
            href="https://github.com/rajeevphysics"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:r3persau@uwaterloo.ca"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  )
}
