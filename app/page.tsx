import Image from "next/image";
import { Handlee } from "next/font/google";
import { Courgette } from "next/font/google";
import Link from "next/link";

const handjet = Courgette({ subsets: ["latin"], weight: "400" });
const eduFont = Handlee({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[80vh]  ">
        <div className=" flex flex-col justify-center items-center px-20 gap-4 rounded-2xl ">
          <p className={`text-3xl font-bold ${handjet.className}`}>
            The Ultimate URL Shortening Service
          </p>
          <p className={`${eduFont.className} text-xl`}>
            Shorten your URLs quickly and easily with our tool.
          </p>
          <li className="flex space-x-2">
            <Link href="/shorten">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-xl cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/Adityakumar626/LinkBits"
              target="_blank"
            >
              <button className=" hover:bg-blue-500 hover:text-white text-blue-500 outline font-bold py-2 px-3 rounded-xl cursor-pointer">
                Github
              </button>
            </Link>
          </li>
        </div>
        <div className="flex justify-start relative ">
          <Image src="/alpha.svg" alt="Description" fill={true} />
        </div>
      </section>
    </main>
  );
}
