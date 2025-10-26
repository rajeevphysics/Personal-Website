"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SemesterGoalsProps {
  showContent: boolean
  containerRef: React.RefObject<HTMLDivElement>
  semesterGoalsRef: React.RefObject<HTMLDivElement>
}

export default function SemesterGoals({ showContent, containerRef, semesterGoalsRef }: SemesterGoalsProps) {
  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="relative z-50 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-16 md:mb-24 text-black text-left">
          Semester Goals
        </h1>

        <div className="relative z-50 max-w-5xl space-y-16 md:space-y-24">
          <div
            ref={semesterGoalsRef}
            className="space-y-6 text-2xl md:text-3xl lg:text-4xl leading-relaxed text-left scroll-mt-24"
          >
            <p className="relative z-50">This semester, I hope to do the following:</p>
            <p className="relative z-50">Join a research group and learn from upper years about gaining experience.</p>
            <p className="relative z-50">Work and update the Math & Matter project (add a lander page)</p>
            <p className="relative z-50">Compete and prepare for the Velocity Pitch Competition</p>
            <p className="relative z-50">Find a co-op position (or do research as a co-op)</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
