"use client";

import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Access to basic components",
      "Community support",
      "Figma preview",
    ],
  },
  {
    name: "Pro",
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
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Choose Your Plan
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 text-white border-2 border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8 space-y-4 text-left text-white/80">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                Get {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
