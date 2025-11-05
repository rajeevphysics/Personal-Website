"use client"
import RoundedButton from "./anim/rounded-button"

export default function Bio() {
  const phrase1 = "An undergraduate experimental physicist bridging " + "theory and experiment."

  const phrase2 =
    "Particularly interested the fields of optical and quantum systems, as well as condensed matter." +
    "\n I believe that these disciplines will lead to new " +
    "discoveries about the world."



  return (
    <div className="relative flex flex-col justify-center gap-8 p-8 pb-24 sm:mt-[50px] sm:flex-row sm:p-20 sm:pb-32">
      <div className="space-y-1 z-50">
        <p className="m-0 gap-2 leading-snug text-2xl sm:text-4xl  mb-4 ">
          {phrase1.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex">
              {word}
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 leading-snug text-2xl sm:text-4xl">
          {phrase2.split(" ").map((word, index) => (
            <span key={index} className="relative mr-1.5 inline-flex">
              {word}
            </span>
          ))}
        </p>
      </div>
      <div>
        <p className="m-0 pb-3 font-light text-base sm:text-large z-50">
          A 2nd Year student @ The University of Waterloo .
        </p>
        <p className="m-0 text-base font-light sm:text-large z-50">
          I’ve led educational and simulation-based projects focused on topics like gravitational modeling and precision sensing, while also contributing to rocketry payload resarch and design. 
        </p>
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
