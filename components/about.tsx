"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const underline1 = useTransform(scrollYProgress, [0.35, 0.42], [0, 1])
  const underline2 = useTransform(scrollYProgress, [0.4, 0.47], [0, 1])
  const underline3 = useTransform(scrollYProgress, [0.48, 0.54], [0, 1])
  const underline4 = useTransform(scrollYProgress, [0.52, 0.58], [0, 1])
  const underline5 = useTransform(scrollYProgress, [0.60, 0.66], [0, 1])

  const text =
    "I'm a second-year Physics student at the University of Waterloo with a strong interest in experimental work. Although my intrest are very wide I have the most intrest in optical systems  and condensed . I plan to pursue graduate research in a related field. Beyond research, I'm deeply interested in improving  the communication of scientific ideas  among researchers and to the general public. Whether that be visualizing data, creating an interactive website or rewording complex phrases."

  const words = text.split(" ")

  return (
    <section id="about" ref={containerRef} className="relative min-h-[200vh] bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="relative z-50 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-16 md:mb-24 text-black text-left">
          About Me
        </h2>
        <div className="relative z-50 max-w-5xl space-y-16 md:space-y-24">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed text-black text-left text-pretty">
            {words.map((word, index) => {
              const isOpticalSystems = word === "optical" || (words[index - 1] === "optical" && word === "systems")
              const isCondensedMatter = word === "condensed" || (words[index - 1] === "condensed" && word === "matter,")
              const isImproving = word === "improving"
              const isScientificIdeas = word === "scientific" || (words[index - 1] === "scientific" && word === "ideas")
              const isGeneralPublic = word === "general" || (words[index - 1] === "general" && word === "public.")

              if (isOpticalSystems) {
                if (word === "optical") {
                  return (
                    <span key={index} className="relative inline-block">
                      <span className="whitespace-nowrap">optical systems </span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-[5px] bg-blue-500"
                        style={{
                          width: "100%",
                          scaleX: underline1,
                          transformOrigin: "left",
                        }}
                      />
                    </span>
                  )
                } else {
                  return null
                }
              }

              if (isCondensedMatter) {
                if (word === "condensed") {
                  return (
                    <span key={index} className="relative inline-block">
                      <span className="whitespace-nowrap">condensed matter </span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-[5px] bg-blue-500"
                        style={{
                          width: "100%",
                          scaleX: underline2,
                          transformOrigin: "left",
                        }}
                      />
                    </span>
                  )
                } else {
                  return null
                }
              }

              if (isImproving) {
                return (
                  <span key={index} className="relative inline-block">
                    <span className="whitespace-nowrap">improving</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[5px] bg-blue-500"
                      style={{
                        width: "100%",
                        scaleX: underline3,
                        transformOrigin: "left",
                      }}
                    />
                  </span>
                )
              }

              if (isScientificIdeas) {
                if (word === "scientific") {
                  return (
                    <span key={index} className="relative inline-block">
                      <span className="whitespace-nowrap">scientific ideas</span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-[5px] bg-blue-500"
                        style={{
                          width: "100%",
                          scaleX: underline4,
                          transformOrigin: "left",
                        }}
                      />
                    </span>
                  )
                } else {
                  return null
                }
              }

              if (isGeneralPublic) {
                if (word === "general") {
                  return (
                    <span key={index} className="relative inline-block">
                      <span className="whitespace-nowrap">general public. </span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-[5px] bg-blue-500"
                        style={{
                          width: "100%",
                          scaleX: underline5,
                          transformOrigin: "left",
                        }}
                      />
                    </span>
                  )
                } else {
                  return null
                }
              }

              return <span key={index}>{word} </span>
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
