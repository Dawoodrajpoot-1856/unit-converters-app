"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Converters", href: "/converters" },
    { name: "About", href: "/about-us" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1">
          <h1 className="text-2xl font-black tracking-tight text-neutral-900">
            Unit
            <span className="text-neutral-500 hover:text-black transition">
              X
            </span>
          </h1>
        </Link>

        {/* DESKTOP NAVIGATION LINKS (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] text-neutral-600 hover:text-black font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTON (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact-us">
            <button className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer">
              Contact us
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-700 hover:text-black focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            // Close (X) Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger (☰) Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-neutral-700 hover:text-black font-semibold py-1 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-3 bg-neutral-900 text-white font-semibold rounded-xl text-sm hover:bg-neutral-800 transition"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
