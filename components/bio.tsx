"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { opacity, slideUp } from "./anim/anim"
import RoundedButton from "./anim/rounded-button"
import Link from "next/link"

export default function Bio() {
  const phrase1 = "Add .\n\n "

  const phrase2 =
    "Sometihg " +
    "Something " +
    "Somting."

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <div ref={description} className="relative flex flex-col justify-center gap-8 p-8 sm:mt-[50px] sm:flex-row sm:p-20">
      <div className="space-y-1">
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase1.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex overflow-hidden">
              <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase2.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex overflow-hidden">
              <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="m-0 pb-3 font-light sm:text-lg">
          Currently the founding full stack software engineer @Catapult a DeFi startup.
        </motion.p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="m-0 text-lg font-light">
          My projects have received multiple awards in the past, and I am always looking for new and innovative ways to
          use my skills to make a positive impact on the world.
        </motion.p>
        <div data-scroll-speed={0.1}>
          <Link href={"/#about"}>
            <RoundedButton className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#e74c3c] text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]">
              About me
            </RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
