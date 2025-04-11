"use client";
import { motion } from "framer-motion";
import StarBackground from "../ui/StarBackground";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <StarBackground />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center px-4 relative z-10">
        {/* Responsive, Adaptive Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 break-words leading-tight max-w-[90vw] mx-auto">
          <span className="block sm:inline">Pixel</span>
          <span className="block sm:inline">Perfect</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-semibold max-w-xl mx-auto">
          Where Figma meets Production.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white animate-bounce rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
