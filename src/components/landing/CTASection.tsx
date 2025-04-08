// src/components/landing/CtaSection.tsx
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-blue-400 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your design?
        </h2>
        <p className="mb-6 text-lg">
          Convert your Figma files into responsive code in just a few clicks.
        </p>
        <Link href="/landing">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}
