"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <motion.section
      className="py-40 bg-black text-white text-center flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight tracking-tight">
          Ready to transform your design?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-lg mx-auto">
          Convert your Figma files into responsive code effortlessly and bring
          your designs to life.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/landing">
            <button className="bg-white text-blue-600 font-semibold px-12 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 text-xl uppercase">
              Get Started
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
