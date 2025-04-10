"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-white dark:bg-black text-[#1d1d1f] dark:text-white px-6 md:px-12 lg:px-24 py-20 font-sans">
        {/* Last updated badge */}
        <div className="absolute top-5 right-5 bg-gray-100 dark:bg-neutral-800 text-xs text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">
          Last updated: April 10, 2025
        </div>

        {/* Intro */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Your Privacy Matters
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            At PixelPerfect, we believe privacy is a fundamental human right.
            This policy explains how your data is used, stored, and protected.
          </p>
        </section>

        {/* Section 1 */}
        <section className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium">1. What We Collect</h2>
          <p>
            PixelPerfect collects the minimum information required to make your
            experience exceptional. This includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Your name and email when you sign in.</li>
            <li>Design files you upload.</li>
            <li>
              Technical data like device type and browser for improving
              performance.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium">2. How We Use Your Data</h2>
          <p>
            We use your data only to power features, improve tools, and
            personalize your experience — not to sell or spam you.
          </p>
        </section>

        {/* Section 3 */}
        <section className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium">3. Who Can See Your Data</h2>
          <p>
            Your data is private. We don’t share it with third parties unless
            it’s absolutely necessary for operation — like authentication or
            file processing.
          </p>
        </section>

        {/* Section 4 */}
        <section className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium">4. Your Rights</h2>
          <p>
            You have full control. Delete your data, export it, or reach out to
            us anytime. We’re transparent by design.
          </p>
        </section>

        {/* Section 5 */}
        <section className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium">5. Contact Us</h2>
          <p>
            Have questions? Reach us at{" "}
            <a
              href="mailto:privacy@pixelperfect.dev"
              className="underline text-blue-600 dark:text-blue-400">
              privacy@pixelperfect.dev
            </a>
            . We’re here for you.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
