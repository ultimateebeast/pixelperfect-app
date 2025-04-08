// src/components/landing/PricingSection.tsx
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
