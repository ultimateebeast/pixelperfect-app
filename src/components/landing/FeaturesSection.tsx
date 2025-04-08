// src/components/landing/FeaturesSection.tsx
const features = [
  {
    title: "Pixel-Perfect Conversion",
    description: "Every Figma detail converted with precision using Tailwind.",
  },
  {
    title: "Responsive by Default",
    description: "Mobile-first design that looks great on every screen.",
  },
  {
    title: "Reusable Components",
    description: "Write once, use anywhere. Modular and maintainable code.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why PixelPerfect?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
