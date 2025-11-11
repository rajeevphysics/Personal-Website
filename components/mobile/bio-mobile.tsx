"use client"

export default function BioMobile() {
  const phrase1 = "An undergraduate experimental physicist bridging theory and experiment."
  const phrase2 =
    "Particularly interested the fields of optical and quantum systems, as well as condensed matter. I believe that these disciplines will lead to new discoveries about the world."

  return (
    <div className="relative flex flex-col gap-6 px-8 pt-16 pb-16 font-sans">
      <div className="space-y-4">
        <p className="text-xl leading-relaxed">{phrase1}</p>
        <p className="text-xl leading-relaxed">{phrase2}</p>
      </div>

      <div className="space-y-4">
        <p className="text-base font-light">Currently a 2nd Year student @ The University of Waterloo.</p>
        <p className="text-base font-light">
          I've led educational and simulation-based projects focused on topics like gravitational modeling and precision
          sensing, while also contributing to rocketry guidance research. I'm driven by the challenge of translating
          complex theoretical ideas into practical experiments and data, and I enjoy making these concepts accessible to
          others through clear communication and relatable analogies to inspire real-world understanding and impact.
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
