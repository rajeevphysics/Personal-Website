import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative ">
            <h3 className="text-2xl font-bold mb-4 z-50">My Philosophy</h3>
            <p className="relative z-50 text-gray-300 leading-relaxed">
              In this new era of science, communications between researchers, institutions, policy makers, and the
              general public have never been more important. The way scientists speak to one another shouldn't be the
              same as speaking to the general public. I believe using more engaging verbal languages, web applications,
              and clear, simple data visualizations will improve public trust in science.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/goals"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-blue-600 transition-all duration-300 inline-block relative z-30"
              >
                See My Goals
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-end text-right">
            <h3 className="text-2xl font-bold mb-4 relative z-50">Contact</h3>
            <a
              href="mailto:r3persau@uwaterloo.ca"
              className="text-gray-300 hover:text-blue-400 transition-colors block mb-6 relative z-30"
            >
              r3persau@uwaterloo.ca
            </a>

            <div className="flex flex-col gap-3">
              <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition-colors relative z-30">
                CV
              </Link>
              <a
                href="https://github.com/rajeevphysics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors relative z-30"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm relative z-30">
          © {new Date().getFullYear()} Rajeev Persaud. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
