import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="px-20 py-3 bg-gray-800 text-white flex justify-between items-center gap-4">
      <div className="text-2xl font-bold flex">
        {" "}
        <Image src="/beta.gif" alt="Logo" width={35} height={35} className="bg-white rounded-2xl mr-2 p-1"/>
        LinkBits
      </div>
      <ul className="flex space-x-4 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <li className="flex space-x-2">
          <Link href="/shorten">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-xl cursor-pointer">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="outline hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-3 rounded-xl cursor-pointer">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
