"use client"

import type React from "react"
import { motion } from "framer-motion"

interface LongTermGoalsProps {
  showContent: boolean
  longTermGoalsRef: React.RefObject<HTMLDivElement>
}

export default function LongTermGoals({ showContent, longTermGoalsRef }: LongTermGoalsProps) {
  return (
    <motion.section
      ref={longTermGoalsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="relative z-50 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-16 md:mb-24 text-black text-left">
          Long-Term Goals
        </h1>

        <div className="relative z-50 max-w-5xl space-y-16 md:space-y-24">
          <div className="space-y-6 text-2xl md:text-3xl lg:text-4xl leading-relaxed text-left scroll-mt-24">
            <p className="relative z-50">Over the next few years I hope to complete the following:</p>
            <p className="relative z-50">
              Pursue a Master's in some field of Physics (interests are condensed matter, optical systems and nuclear
              physics)
            </p>
            <p className="relative z-50">
              Gain better study techniques, spend less time studying and gain better academic outcomes
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
