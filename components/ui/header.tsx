import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            <span className="text-xl font-bold pl-2">Blue Chestnut</span>
          </div>

          {/* Hamburger menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-8 pr-3">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/everblue"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                EverBlue
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg md:hidden">
              <div className="py-1">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/consulting"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consulting
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
