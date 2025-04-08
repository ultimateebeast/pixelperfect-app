// src/components/landing/FaqSection.tsx
"use client";
import { useState } from "react";

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
    <section className="py-20 bg-blue-400">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-blue shadow-sm transition hover:shadow-md">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-lg">
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
