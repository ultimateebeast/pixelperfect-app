// components/common/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
  items: { title?: string; content: string; author?: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      loop
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="!pb-10">
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-xl shadow-md p-6 transition hover:scale-[1.01]">
            <p className="text-gray-700 italic mb-4">“{item.content}”</p>
            {item.author && (
              <h4 className="text-blue-600 font-semibold text-sm">
                — {item.author}
              </h4>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
