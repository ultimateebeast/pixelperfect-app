"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
    features: [
      "Everything in Free",
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
      "Team collaboration",
      "Custom setup assistance",
      "Dedicated support",
      "Performance optimizations",
    ],
  },
];

export default function PricingSection() {
  const router = useRouter();

  const handlePlanSelect = (plan: string) => {
    if (plan === "Free") {
      router.push("/dashboard"); // Or homepage/dashboard
    } else if (plan === "Pro") {
      router.push("/api/checkout?plan=pro"); // Update with your actual Stripe route
    } else if (plan === "Enterprise") {
      router.push("/contact"); // Or open a modal
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-white relative overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-2xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl font-semibold mb-14 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Choose Your Plan
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl text-white border border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
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
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                {plan.name === "Enterprise" ? "Contact Us" : `Get ${plan.name}`}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
