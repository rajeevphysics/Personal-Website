"use client"

import {phrasefirst, phrasesecond, part1, part2} from "@/lib/bio-data"

export default function BioMobile() {
  const phrase1 = phrasefirst;
  const phrase2 = phrasesecond; ;

  return (
    <div className="relative flex flex-col gap-6 px-8 pt-16 pb-16 font-sans">
      <div className="space-y-4">
        <p className="text-xl leading-relaxed">{phrase1}</p>
        <p className="text-xl leading-relaxed">{phrase2}</p>
      </div>

      <div className="space-y-4">
        <p className="text-base font-light"> {part1} </p>
        <p className="text-base font-light">
         {part2}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="/about"
          className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#e74c3c] text-white font-sans text-sm"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
