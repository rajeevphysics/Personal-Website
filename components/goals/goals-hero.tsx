"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface GoalsHeroProps {
  showContent: boolean
  showScrollIcon: boolean
  onScrollToSemester: () => void
  onScrollToLongTerm: () => void
}

export default function GoalsHero({
  showContent,
  showScrollIcon,
  onScrollToSemester,
  onScrollToLongTerm,
}: GoalsHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-screen flex items-center justify-center bg-white px-6 md:px-12 lg:px-24"
    >
      <h1 className="relative z-50 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-black">My Goals</h1>

      <div
        className={`absolute bottom-8 left-0 right-0 px-12 md:px-24 transition-opacity duration-300 z-30 ${
          showScrollIcon && showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <button
            onClick={onScrollToSemester}
            data-goals-button
            className="relative z-30 text-2xl md:text-3xl font-bold text-foreground transition-colors cursor-pointer"
          >
            Semester Goals
          </button>

          <div className="relative z-50 flex flex-col items-center gap-2">
            <span className="text-xl font-bold text-foreground">Scroll or Click</span>
            <ChevronDown className="w-10 h-10 text-foreground" strokeWidth={3} />
          </div>

          <button
            onClick={onScrollToLongTerm}
            data-goals-button
            className="relative z-30 text-2xl md:text-3xl font-bold text-foreground transition-colors cursor-pointer"
          >
            Long-Term Goals
          </button>
        </div>
      </div>
    </motion.section>
  )
}
