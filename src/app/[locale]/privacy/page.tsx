// src/app/[locale]/privacy/page.tsx

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {


  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 space-y-8 text-gray-800 dark:text-gray-300 leading-relaxed">
        <section>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: April 10, 2025
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to PixelPerfect. We are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and share
            information about you when you use our website and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Information you provide (e.g., name, email) via sign-up or contact
              forms.
            </li>
            <li>
              Data collected automatically (e.g., browser type, device ID, IP
              address).
            </li>
            <li>
              Figma file data or uploaded files for JSX conversion purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and improve the PixelPerfect experience.</li>
            <li>Personalize content, features, and functionality.</li>
            <li>Analyze usage and monitor service performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Service providers for analytics, hosting, and customer support.
            </li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Cookies & Tracking</h2>
          <p>
            PixelPerfect uses cookies and similar technologies to enhance your
            experience and gather usage data. You can manage cookies in your
            browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the
            purposes outlined in this policy, unless a longer retention period
            is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Your Rights</h2>
          <p>You may have rights under applicable privacy laws, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>The right to access and review your data.</li>
            <li>The right to request deletion of your personal data.</li>
            <li>The right to opt out of certain data uses.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will
            update the Last Updated date at the top of the page. We encourage
            you to review this page regularly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:{" "}
            <a
              href="mailto:support@pixelperfect.dev"
              className="text-blue-600 underline">
              support@pixelperfect.dev
            </a>
          </p>
        </section>
      </main>

      <Footer />
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-80">
        Last Updated: April 10, 2025
      </div>
    </>
  );
}
