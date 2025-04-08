
"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold tracking-tight max-w-3xl mb-6">
            Transform Figma Designs into Pixel-Perfect React Code
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-8">
            Build beautiful, responsive apps faster with the ultimate developer
            workflow.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>

        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Design to Code, Pixel Perfect.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We transform beautiful designs from Figma into clean, responsive,
            and scalable React code.
          </p>
          <Link href="/tools" className="inline-block">
            <Button onClick={() => alert("Start building!")}>Start Now</Button>
          </Link>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
