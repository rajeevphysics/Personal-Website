"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function TechnicalSkillsIntro() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const underline1 = useTransform(scrollYProgress, [0.35, 0.42], [0, 1])
  const underline2 = useTransform(scrollYProgress, [0.48, 0.54], [0, 1])

  const text =
    "My main programming experience is in Python (2+ years), where I've worked with libraries like NumPy, Pandas, and Manim to build simulations and visualize data.  I also have experience with web development languages  such as HTML, JavaScript and modern frameworks like React and Next.js, which were used to build this website."

  const words = text.split(" ")

  return (
    <section ref={containerRef} className="relative min-h-[100vh] bg-white py-20 px-6 md:px-12 lg:px-24">
      <div>
        <h2 className="relative z-50 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-16 md:mb-24 text-black text-left">
          Technical Skills
        </h2>
        <div className="relative z-50 max-w-5xl space-y-16 md:space-y-24">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed text-black text-left text-pretty">
            {words.map((word, index) => {
              const isPython =
                word === "Python" ||
                (words[index - 1] === "Python" && word === "(2+") ||
                (words[index - 2] === "Python" && words[index - 1] === "(2+" && word === "years),")

              const isWebDevelopment =
                word === "web" ||
                (words[index - 1] === "web" && word === "development") ||
                (words[index - 2] === "web" && words[index - 1] === "development" && word === "languages")

              if (isPython) {
                if (word === "Python") {
                  return (
                    <span key={index} className="relative inline-block whitespace-nowrap">
                      <span>Python (2+ years), </span>
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

              if (isWebDevelopment) {
                if (word === "web") {
                  return (
                    <span key={index} className="relative inline-block whitespace-nowrap">
                      <span>web development languages </span>
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

              return <span key={index}>{word} </span>
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
