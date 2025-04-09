"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
          PixelPerfect
        </h1>

        <nav className="space-x-6 text-gray-600 dark:text-gray-300 text-sm font-medium flex items-center">
          <Link
            href="/"
            className="hover:text-black dark:hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-black dark:hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link
            href="/tools"
            className="hover:text-black dark:hover:text-white transition-colors duration-200">
            Tools
          </Link>

          {/* Signed-in user */}
          <SignedIn>
            <Link
              href="/profile"
              className="hover:text-black dark:hover:text-white transition-colors duration-200">
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Not signed in */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="hover:text-black dark:hover:text-white transition-colors duration-200">
              Sign In
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
