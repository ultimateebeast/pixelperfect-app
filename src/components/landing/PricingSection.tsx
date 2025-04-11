"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const pricingPlans = [
  {
    name: "Free",
    tagline: "Perfect for starters",
    price: "₹0",
    features: [
      "Access to basic components",
      "Community support",
      "Figma preview",
    ],
  },
  {
    name: "Pro",
    tagline: "Ideal for developers",
    price: "₹499/month",
    recommended: true,
    features: [
      "Access to basic components",
      "Community support",
      "Figma preview",
      "Unlimited projects",
      "Export to production code",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom solution for teams",
    price: "Custom",
    features: [
      "Access to basic components",
      "Community support",
      "Figma preview",
      "Unlimited projects",
      "Export to production code",
      "Priority support",
      "Team collaboration",
      "Custom setup assistance",
      "Dedicated support",
      "Performance optimizations",
    ],
  },
];

const allFeatures = [
  {
    label: "Access to basic components",
    hint: "Use prebuilt React + Tailwind components",
  },
  {
    label: "Community support",
    hint: "Get help from our growing Discord dev community",
  },
  {
    label: "Figma preview",
    hint: "Live-preview of Figma files in your browser",
  },
  {
    label: "Unlimited projects",
    hint: "No limits on the number of design-to-code projects",
  },
  {
    label: "Export to production code",
    hint: "Generate optimized, clean React/Next.js code",
  },
  {
    label: "Priority support",
    hint: "Faster responses and dedicated help from the team",
  },
  {
    label: "Team collaboration",
    hint: "Invite teammates and work in real-time",
  },
  {
    label: "Custom setup assistance",
    hint: "We help you integrate PixelPerfect into your workflow",
  },
  {
    label: "Dedicated support",
    hint: "One-on-one support from our engineers",
  },
  {
    label: "Performance optimizations",
    hint: "Ensure your code is optimized for speed and SEO",
  },
];

export default function PricingSection() {
  const router = useRouter();
  const tableRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (tableRef.current) {
      const top = tableRef.current.getBoundingClientRect().top;
      setSticky(top <= 80);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlanSelect = (plan: string) => {
    if (plan === "Free") router.push("/dashboard");
    else if (plan === "Pro") router.push("/api/checkout?plan=pro");
    else if (plan === "Enterprise") router.push("/contact");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-2xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl font-semibold mb-14 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Choose Your Plan
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-white/20 ${
                plan.recommended ? "ring-2 ring-blue-500" : ""
              }`}>
              {plan.recommended && (
                <div className="absolute top-4 right-4 bg-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                  AI Recommended
                </div>
              )}
              <p className="text-sm text-white/60 mb-2 italic">
                {plan.tagline}
              </p>
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8 space-y-4 text-left text-white/80">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-medium">
                {plan.name === "Enterprise" ? "Contact Us" : `Get ${plan.name}`}
              </button>
              {plan.name === "Pro" && (
                <p className="mt-4 text-sm text-white/50 italic">
                  Most users upgrade after 5 days 🎯
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Matrix Table */}
        <div
          ref={tableRef}
          className={`mt-24 overflow-x-auto transition-all duration-300 ${
            isSticky ? "sticky top-16 z-20 shadow-2xl" : ""
          }`}>
          <table className="w-full text-sm border border-white/10 text-white/90 text-left bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden">
            <thead className="bg-white/10 text-white text-base">
              <tr>
                <th className="p-4 text-left">Feature</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="p-4 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, i) => (
                <tr
                  key={i}
                  className="border-t border-white/10 hover:bg-white/10 transition-all">
                  <td className="p-4">
                    <Tippy content={feature.hint}>
                      <span className="cursor-help hover:text-blue-400 transition-all">
                        {feature.label}
                      </span>
                    </Tippy>
                  </td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 text-center font-bold text-lg">
                      {plan.features.includes(feature.label) ? "✅" : "❌"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
