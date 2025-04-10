"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is PixelPerfect?",
    answer:
      "PixelPerfect is a Figma-to-React converter with perfect responsiveness and clean code.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, we offer a free plan with essential features. You can upgrade anytime.",
  },
  {
    question: "Do you support custom components?",
    answer:
      "Absolutely! You can import and render your own components inside the platform.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <motion.section
      className="py-20 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-2 rounded-xl p-6 bg-white/10 backdrop-blur-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-xl text-white">
                <span>{faq.question}</span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-lg text-white/90"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}>
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
