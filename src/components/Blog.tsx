"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className="mx-2 md:m-0 shadow-xl bg-[#f9f9f9] py-10 px-4 sm:px-6"
      aria-labelledby="blog-section-title"
    >
      <motion.div
        className="max-w-screen-xl mx-auto text-center font-inter"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-[#e63a27]" aria-hidden="true" />
            <span className="text-sm font-bold text-[#e63a27] uppercase tracking-widest">
              News & Updates
            </span>
            <div className="w-6 h-[1px] bg-[#e63a27]" aria-hidden="true" />
          </div>
          <h1
            id="blog-section-title"
            className="text-4xl lg:text-5xl font-bold text-[#003269]"
          >
            Latest From Blog Post
          </h1>
        </header>

        <div role="region" aria-label="Blog carousel section">
          <BlogSlider swiperRef={swiperRef} />
        </div>
      </motion.div>
    </section>
  );
}
