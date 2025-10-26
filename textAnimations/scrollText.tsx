"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { type MutableRefObject, useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const iWord = "I "
const experiment = "Experiment, "
const therefore = "Therefore "
const iWord2 = "I "
const explain = "Explain"
const sentence3 = "abstract thinking is my passion"

function getRandomSpeed() {
  const randomDecimal = Math.random()
  return 0.8 + randomDecimal * (1.5 - 0.8)
}
function getRandomRotation() {
  return Math.random() * 60 - 30
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current
  const letterElements = lettersContainer?.querySelectorAll(".letter")

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) => (1 - Number.parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
      ease: "power2.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5,
      },
      rotation: getRandomRotation(),
    })
  })
}

function LetterDisplay({ word }: { word: string }) {
  return word.split("").map((letter, index) => (
    <div
      key={index}
      className="letter relative z-50 text-4xl font-semibold xs:text-5xl xs:leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]"
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
  ))
}

export function LetterCollision() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    animateLettersOnScroll(containerRef)
  }, [])

  return (
    <div ref={containerRef} className="ml-4 sm:ml-8 scroll-smooth">
      <div className="mb-24 flex h-screen flex-col justify-center lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={iWord} />
          <div className="w-1 xs:w-2 sm:w-4"></div>
          <LetterDisplay word={experiment} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={therefore} />
          <div className="w-1 xs:w-2 sm:w-4"></div>
          <LetterDisplay word={iWord2} />
          <div className="w-1 xs:w-2 sm:w-4"></div>
          <LetterDisplay word={explain} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  )
}
