"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-gray-200/40 dark:border-neutral-700/40 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand Name */}
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight font-[Inter] flex items-center gap-2">
    <Link href="/" className="flex items-center gap-2">
      <img src="/Pixel.svg" alt="PixelPerfect Logo" className="w-8 h-8" />
      PixelPerfect
    </Link>
  </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 text-neutral-700 dark:text-neutral-300 text-sm font-medium flex items-center">
          <Link
            href="/"
            className="relative hover:text-black dark:hover:text-white transition duration-200 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Home
          </Link>
          <Link
            href="/landing"
            className="relative hover:text-black dark:hover:text-white transition duration-200 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            About
          </Link>
          <Link
            href="/tools"
            className="relative hover:text-black dark:hover:text-white transition duration-200 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Tools
          </Link>

          <SignedIn>
            <Link
              href="/profile"
              className="relative hover:text-black dark:hover:text-white transition duration-200 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link
              href="/sign-in"
              className="relative hover:text-black dark:hover:text-white transition duration-200 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Sign In
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
