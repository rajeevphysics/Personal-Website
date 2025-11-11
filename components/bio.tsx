
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import RoundedButton from "./anim/rounded-button"
import { slideUp, opacity } from "./anim/anim"
import {phrasefirst, phrasesecond, part1, part2 } from "@/lib/bio-data"


export default function Bio() {
  const phrase1 = phrasefirst

  const phrase2 = phrasesecond

  const description = useRef(null)
  const isInView = useInView(description, { once: true, margin: "-100px" })

  return (
    <div
      ref={description}
      className="relative flex flex-col justify-center gap-8 pt-8 pb-24 sm:mt-[50px] sm:flex-row sm:p-20 sm:pb-32"
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
        <p className="m-0 gap-6 text-2xl py-5 leading-snug sm:text-4xl">
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
          {part1}
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="m-0 text-base font-light sm:text-lg"
        >
          {part2}
        </motion.p>
        <div data-scroll-speed={0.1}>
          <RoundedButton
            href="/about"
            className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#e74c3c] text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]"
          >
            Learn More
          </RoundedButton>
        </div>
      </div>
    </div>
  )
}
