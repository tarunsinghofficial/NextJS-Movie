'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMobileMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="px-2 md:px-10 lg:px-40 bg-transparent w-full h-20 relative top-0 flex justify-between items-center">   
      <ul className="hidden md:flex flex-row font-bold text-xl gap-3">
        <li>
          <Link href="/" className="hover:cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:cursor-pointer">
            Trending
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:cursor-pointer">
            Upcoming
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex items-center ml-3">
        <button
          className="text-2xl text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>

      {navOpen && (
        <div className="md:hidden absolute top-20 bg-[#00050d] w-full z-10 p-2">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/" className="hover:cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:cursor-pointer">
                Trending
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:cursor-pointer">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="flex flex-row gap-3 mr-3">
        <button className="bg-[#fca311] text-black font-semibold p-2 rounded-full">
          Sign in
        </button>
        <button className="bg-[#ffffff] text-black font-semibold p-2 rounded-full">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
