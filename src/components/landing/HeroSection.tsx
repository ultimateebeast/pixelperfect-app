"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-gray-400 to-blue-400">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Transform Your Figma Designs
        </h1>
        <p className="text-lg sm:text-xl text-grey-600 mb-8">
          PixelPerfect turns your Figma UI into clean, responsive code using
          Next.js + Tailwind.
        </p>
        <Button>
          <Link href="/landing">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
