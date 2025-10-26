"use client"
import { type JSX, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { clsx } from "clsx"

gsap.registerPlugin(ScrollTrigger)
export default function TextGradient({
  phrase,
  colour,
}: {
  phrase: string
  colour: string
}) {
  const refs = useRef<HTMLSpanElement[]>([])
  const container = useRef(null)
  const body = useRef(null)

  useEffect(() => {
    createAnimation()
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "-160%",
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    })
  }

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = []
    const lines = phrase.split("|") // Split by pipe character for line breaks

    lines.forEach((line, lineIndex) => {
      const words = line.trim().split(" ")
      const lineWords: JSX.Element[] = []

      words.forEach((word, i) => {
        const letters = splitLetters(word)
        lineWords.push(
          <p className="m-0 mr-4 inline-block whitespace-nowrap p-0 font-semibold" key={word + "_" + i}>
            {letters}
          </p>,
        )
      })

      body.push(
        <div key={`line_${lineIndex}`} className="w-full">
          {lineWords}
        </div>,
      )
    })
    return body
  }

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = []
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="relative z-50 opacity-30"
          key={letter + "_" + i}
          ref={(el: HTMLSpanElement) => {
            refs.current?.push(el)
          }}
        >
          {letter}
        </span>,
      )
    })
    return letters
  }

  return (
    <main
      ref={container}
      className={clsx(
        "align-end mb-[20vh] flex h-[50vh] justify-center sm:pt-[10vh]",
        colour ? `text-${colour}` : "text-background mix-blend-difference",
      )}
    >
      <div ref={body} className="relative z-50 flex w-[90%] flex-wrap text-[40px] font-semibold sm:text-[80px]">
        {splitWords(phrase)}
      </div>
    </main>
  )
}
