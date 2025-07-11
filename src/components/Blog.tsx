"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

// Dynamically import the blog slider (client-side only)
const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

export default function Blog() {
  // If BlogSlider needs swiperRef, otherwise remove this
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <motion.section
      className="mx-2 md:m-0 shadow-xl bg-[#f9f9f9] py-10 px-4 sm:px-6"
      aria-labelledby="blog-section-title"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto text-center font-inter">
        {/* Section Header */}
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
            Latest Roofing & Waterproofing News & Tips
          </h1>
        </header>

        {/* Blog Slider Section */}
        <div role="region" aria-label="Blog carousel section">
          <BlogSlider swiperRef={swiperRef} />
        </div>
      </div>
    </motion.section>
  );
}
