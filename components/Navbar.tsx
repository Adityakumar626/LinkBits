"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/beta.gif"
            alt="Logo"
            width={35}
            height={35}
            className="bg-white rounded-2xl p-1"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap text-white">
            Link
            <span className={`${audiowide.className} text-blue-500 font-bold`}>
              Bits
            </span>
          </span>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop/Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800">
            {/* Added w-full to <li> to fill container width */}
            <li className="w-full md:w-auto">
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-blue-500 md:p-0 w-full text-center md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/shorten"
                className="block py-2 px-3 text-white rounded 
               /* Hover Effects */
               hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-400 
               /* Smooth Transition */
               transition-colors duration-200 
               w-full text-center md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Shorten
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 w-full text-center md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Buttons Container - using items-stretch and w-full */}
            <li className="flex flex-col md:flex-row gap-2 py-2 md:py-0 w-full md:w-auto">
              <Link
                href="/shorten"
                className="w-full md:w-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-xl transition-colors">
                  Try Now
                </button>
              </Link>
              <Link
                href="https://github.com/Adityakumar626/LinkBits"
                target="_blank"
                className="w-full md:w-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full border border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white font-bold py-2 px-3 rounded-xl transition-colors">
                  Github
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
