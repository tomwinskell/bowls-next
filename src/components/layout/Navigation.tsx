'use client'
import { useState } from 'react';
import Link from 'next/link';
import '@fontsource-variable/noto-sans';

const pages = ['Home', 'Join', 'Fixtures', 'Contact'];

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function closeMenuMobile() {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen z-50 md:relative md:top-auto md:left-auto">
      <nav className="flex items-center justify-end md:justify-center px-4 md:px-8 py-4 bg-navy text-winter">

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-navy flex flex-col items-center justify-center transition-all duration-75 ${
            showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        >
          <div
            className="absolute top-5 right-5 text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            ✕
          </div>
          <ul className="mt-10 flex flex-col gap-6 text-center">
            {pages.map((page) => (
              <li key={page}>
                <Link
                  href={page.toLowerCase() === 'home'? '/' :`/${page.toLowerCase()}`}
                  className="text-lg font-['Noto_Sans_Variable'] text-winter hover:text-gray-300 transition-colors"
                  onClick={closeMenuMobile}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          {pages.map((page) => (
            <li key={page}>
              <Link
                href={page.toLowerCase() === 'home'? '/' :`/${page.toLowerCase()}`}
                className="font-['Noto_Sans_Variable'] text-winter hover:text-gray-300 transition-colors"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </div>
  );
}
