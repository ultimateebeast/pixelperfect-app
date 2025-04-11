"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-gray-200/40 dark:border-neutral-700/40 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight font-[Inter] flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Pixel.svg"
              alt="PixelPerfect Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            PixelPerfect
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-neutral-700 dark:text-neutral-300 text-sm font-medium items-center">
          <Link className="nav-link" href="/">
            Home
          </Link>

          <Link className="nav-link" href="/landing">
            About
          </Link>

          <SignedIn>
            <Link className="nav-link" href="/tools">
              Tools
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/tools">
              <button className="nav-link">Tools</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link className="nav-link" href="/profile">
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link className="nav-link" href="/sign-in">
              Sign In
            </Link>
          </SignedOut>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="h-6 w-6 text-neutral-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute right-4 top-20 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg p-4 space-y-4 z-50 text-sm">
          <Link className="block nav-link" href="/" onClick={toggleMenu}>
            Home
          </Link>

          <Link className="block nav-link" href="/landing" onClick={toggleMenu}>
            About
          </Link>

          <SignedIn>
            <Link className="block nav-link" href="/tools" onClick={toggleMenu}>
              Tools
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/tools">
              <button className="block nav-link w-full text-left">Tools</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              className="block nav-link"
              href="/profile"
              onClick={toggleMenu}>
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link
              className="block nav-link"
              href="/sign-in"
              onClick={toggleMenu}>
              Sign In
            </Link>
          </SignedOut>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          left: 0;
          bottom: -2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}
