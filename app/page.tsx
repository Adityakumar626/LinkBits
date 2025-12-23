import Image from "next/image";
import { Handlee } from "next/font/google";
import { Courgette } from "next/font/google";
import Link from "next/link";

const handjet = Courgette({ subsets: ["latin"], weight: "400" });
const eduFont = Handlee({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      {/* 1. Changed grid-cols-2 to grid-cols-1 for mobile, md:grid-cols-2 for desktop.
          2. Adjusted height from h-[80vh] to min-h-[80vh] to prevent content cutoff.
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-6 gap-8">
        {/* Text Content: Center aligned on mobile, left/center on desktop */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-20 gap-6">
          <h1
            className={`text-4xl md:text-5xl lg:text-5xl font-bold leading-tight ${handjet.className}`}
          >
            The Ultimate URL Shortening Service
          </h1>
          <p
            className={`${eduFont.className} text-lg md:text-xl text-gray-600`}
          >
            Shorten your URLs quickly and easily with our tool.
          </p>

          {/* List Style: Removed bullet points with list-none */}
          <div className="flex items-center space-x-3 list-none">
            <Link href="/shorten">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-3xl transition-all cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/Adityakumar626/LinkBits"
              target="_blank"
            >
              <button className="hover:bg-blue-500 hover:text-white text-blue-500 border-2 border-blue-500 font-bold py-3 px-6 rounded-3xl transition-all cursor-pointer">
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* Image Container: 
            Added a fixed height on mobile so the image doesn't disappear.
        */}
        <div className="relative h-75 md:h-auto min-h-75 w-full flex justify-center items-center">
          <Image
            src="/alpha.svg"
            alt="Link Shortener Illustration"
            // fill={true}
            width={1000}
            height={1000}
            className="object-contain" // Ensures image doesn't stretch weirdly
            priority
          />
        </div>
      </section>
    </main>
  );
}
