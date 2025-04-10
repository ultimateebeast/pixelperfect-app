"use client";

import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FeaturesSection() {
  return (
    <motion.section
      className="py-20 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Why PixelPerfect?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 border-2 border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-transform bg-white/10 backdrop-blur-lg"
              variants={cardVariants}
              custom={index}>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-white/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
