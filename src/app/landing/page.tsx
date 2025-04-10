"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function LandingPage() {
  return (
    <PageWrapper>
      <SectionWrapper>
        {/* === HERO SECTION === */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-black text-white">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-5xl mb-6 leading-tight">
            Transform Figma Designs into Pixel-Perfect React Code
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-2xl text-white/80 max-w-2xl mb-10">
            Build beautiful, responsive apps faster with the ultimate developer
            workflow — crafted for designers and developers alike.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            className="mt-10">
            <Link href="#next-section">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="text-white text-7xl cursor-pointer drop-shadow-lg">
                ↓
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>

        {/* === SECONDARY CTA SECTION === */}
        <motion.section
          id="next-section"
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="py-36 text-center bg-neutral-950 text-white px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            Design to Code, Pixel Perfect.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/80 text-xl sm:text-2xl max-w-3xl mx-auto mb-12">
            We transform beautiful Figma designs into clean, responsive, and
            scalable React code with unmatched precision and efficiency.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/tools">
              <button className="bg-white text-black font-semibold px-12 py-5 rounded-xl shadow-xl hover:bg-gray-100 transition text-xl uppercase">
                Start Now
              </button>
            </Link>
          </motion.div>
        </motion.section>
      </SectionWrapper>
    </PageWrapper>
  );
}
