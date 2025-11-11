"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black text-center z-50">I'm Rajeev Persaud</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
              <Image
                src="grad.jpeg"
                alt="Rajeev Persaud graduation photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="space-y-8 text-black z-50">
            <p className="text-xl md:text-2xl leading-relaxed">
              An undergraduate experimental physicist with a passion for understanding physical systems through hands-on research and instrumentation.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed">
              I have experience contributing to experimental projects in fields such as rocketry, sensing systems, and optical instrumentation, building tools that translate theoretical principles into real-world data.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed">
              Currently pursuing my studies at the University of Waterloo, I am focused on developing strong experimental and analytical skills while contributing to student research initiatives and technical projects.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed">
              My work spans simulation, lab-based experimentation, and hardware design, driven by curiosity and a commitment to turning scientific ideas into measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
