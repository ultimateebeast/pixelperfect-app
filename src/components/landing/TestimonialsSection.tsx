"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aman Verma",
    feedback:
      "PixelPerfect made our Figma-to-code process 5x faster. The code quality is amazing!",
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "The responsive design is just flawless. Saved me hours of manual CSS tweaking.",
  },
  {
    name: "Rajesh Rathi",
    feedback:
      "Every section matched our Figma file perfectly. This tool is a dream for frontend devs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          What Developers Say
        </motion.h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white/80 text-gray-800 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <p className="italic text-lg text-gray-700 mb-4">
                  “{testimonial.feedback}”
                </p>
                <h4 className="text-blue-600 font-semibold">
                  — {testimonial.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
