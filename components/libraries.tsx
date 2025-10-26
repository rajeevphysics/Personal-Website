"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const libraries = [
  { name: "React", icon: "/icons/react.jpg", years: 2 },
  { name: "Next.js", icon: "/icons/nextjs.jpg", years: 2 },
  { name: "Node.js", icon: "/icons/nodejs.jpg", years: 3 },
]

function LibraryCard({ name, icon, years }: { name: string; icon: string; years: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const counter = useTransform(scrollYProgress, [0.3, 0.7], [1, years])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image src={icon || "/placeholder.svg"} alt={name} width={192} height={192} className="w-full h-full" />
      </div>

      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{name}</h3>

      <motion.p className="text-xl md:text-2xl lg:text-3xl text-white/80">
        <motion.span>{counter.get().toFixed(0)}</motion.span>
        {years > 2 ? "-3+" : "+"} years
      </motion.p>
    </motion.div>
  )
}

export default function Libraries() {
  return (
    <section id="libraries" className="relative z-10 min-h-[200vh] bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-16 md:mb-24 text-white text-right">
          Libraries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {libraries.map((library) => (
            <LibraryCard key={library.name} {...library} />
          ))}
        </div>
      </div>
    </section>
  )
}
