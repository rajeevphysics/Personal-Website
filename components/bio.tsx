"use client"
import RoundedButton from "./anim/rounded-button"

export default function Bio() {
  const phrase1 = "An undergraduate experimental physicist bridging " + "theory and experiment."

  const phrase2 =
    "Particularly interested the fields of optical and quantum systems, as well as condensed matter." +
    "\n I believe that these disciplines will lead to new " +
    "discoveries about the world."

  const handleAboutClick = () => {
    if (typeof window !== "undefined") {
      // Try to use Lenis if available
      if ((window as any).lenis) {
        ;(window as any).lenis.scrollTo(0, { immediate: true })
      }
      // Also use native scroll as fallback
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
  }

  return (
    <div className="relative flex flex-col justify-center gap-8 p-8 pb-24 sm:mt-[50px] sm:flex-row sm:p-20 sm:pb-32">
      <div className="space-y-1 z-50">
        <p className="m-0 gap-2 leading-snug sm:text-4xl  mb-4 ">
          {phrase1.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex">
              {word}
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase2.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex">
              {word}
            </span>
          ))}
        </p>
      </div>
      <div>
        <p className="m-0 pb-3 font-light sm:text-lg z-50">
          Currently a 2nd Year student @ The University of Waterloo .
        </p>
        <p className="m-0 text-lg font-light">
          I’ve led experimental design and simulation projects in areas like rocketry guidance and
          precision sensing, earning several awards along the way. I’m driven by the challenge of
          turning theory into hardware and data, and I’m constantly pushing toward new ideas that
          can create real-world impact.
        </p>
        <div data-scroll-speed={0.1}>
          <RoundedButton
            href="/about"
            onClick={handleAboutClick}
            className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#e74c3c] text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]"
          >
            About me
          </RoundedButton>
        </div>
      </div>
    </div>
  )
}
