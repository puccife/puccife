import { Mail, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-950">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-10 md:px-12 md:py-14">
        {/* Retro Terminal Header */}
        <div className="mb-8 font-mono text-zinc-500 flex items-center space-x-2">
          <Terminal className="w-4 h-4" />
          <span className="text-sm">welcome.sh</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-10 md:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 to-zinc-900/50 z-10" />
            {/* Retro Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/10 to-transparent animate-scan z-20" />
            <Image
              src="/Federico.jpg"
              alt="Federico Pucci"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-between h-full">
            {/* Header */}
            <div className="space-y-8">
              <h1 className="font-space text-4xl md:text-6xl font-medium tracking-tight text-zinc-100 glitch-text">
                Federico Pucci
              </h1>

              <div className="space-y-4 max-w-2xl">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300">
                  I am a computer scientist,
                  <span className="italic text-zinc-100"> passionate about AI, product design and complex systems.</span>
                </p>

                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  Currently Co-Founder and CTO at{" "}
                  <span className="text-zinc-100 hover:text-zinc-300 transition-colors cursor-pointer">
                    <Link href="https://daskell.com">Daskell</Link>
                  </span>
                  <span className="animate-blink">_</span>
                </p>
              </div>

              {/* Previously */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center space-x-2 font-mono text-zinc-500">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm">previously.log</span>
                </div>

                <ul className="space-y-2">
                  <li className="text-base text-zinc-400 font-light">
                    W/ Daskell, Co-Founded{" "}
                    <a
                      href="https://www.voiseed.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-zinc-300 transition-colors"
                    >
                      Voiseed
                    </a>{" "}
                    and designed the AI dubbing platform Voiseed Studio
                  </li>
                  <li className="text-base text-zinc-400 font-light">
                    Data Scientist at Swisscom
                  </li>
                  <li className="text-base text-zinc-400 font-light">
                    Data Scientist at{" "}
                    <a
                      href="https://www.bnovate.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-zinc-300 transition-colors"
                    >
                      bNovate
                    </a>
                  </li>
                  <li className="text-base text-zinc-400 font-light">
                    Research Student at{" "}
                    <a
                      href="https://dlab.epfl.ch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-zinc-300 transition-colors"
                    >
                      EPFL Data Lab
                    </a>{" "}
                    (led by Bob West)
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center space-x-2 font-mono text-zinc-500">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm">education.log</span>
                </div>

                <ul className="space-y-2">
                  <li className="text-base text-zinc-400 font-light">
                    Master in CS at EPFL
                  </li>
                  <li className="text-base text-zinc-400 font-light">
                    Bachelor in Computer Engineering at Unibo
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 md:mt-8 border-t border-zinc-800/50 pt-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 group">
                  <Mail className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  <a 
                    href="mailto:federico.pucci@daskell.com" 
                    className="text-lg text-zinc-400 hover:text-zinc-100 transition-colors monospace-numbers"
                  >
                    federico.pucci@daskell.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 