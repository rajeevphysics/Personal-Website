
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import RoundedButton from "./anim/rounded-button"
import { slideUp, opacity } from "./anim/anim"

export default function Bio() {
  const phrase1 = "An undergraduate experimental physicist bridging theory and experiment."

  const phrase2 =
    "Particularly interested the fields of optical and quantum systems, as well as condensed matter. I believe that these disciplines will lead to new discoveries about the world."

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <div
      ref={description}
      className="relative flex flex-col justify-center gap-8 p-8 pb-24 sm:mt-[50px] sm:flex-row sm:p-20 sm:pb-32"
    >
      <div className="space-y-1 font-sans z-50">
        <p className="m-0 gap-2 text-2xl leading-snug sm:text-4xl">
          {phrase1.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex overflow-hidden">
              <motion.span custom={index} variants={slideUp} animate={isInView ? "open" : "closed"}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 text-2xl leading-snug sm:text-4xl">
          {phrase2.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex overflow-hidden">
              <motion.span
                custom={index + phrase1.split(" ").length}
                variants={slideUp}
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div className="font-sans">
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="m-0 pb-3 text-base font-light sm:text-lg"
        >
          A 2nd Year student @ The University of Waterloo .
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="m-0 text-base font-light sm:text-lg"
        >
          I've led educational and simulation-based projects focused on topics like classical physics and gravitational
          waves, while also contributing to rocketry payload research and design.
        </motion.p>
        <div data-scroll-speed={0.1}>
          <RoundedButton
            href="/about"
            className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#e74c3c] text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]"
          >
            About me
          </RoundedButton>
        </div>
      </div>
    </div>
  )
}
