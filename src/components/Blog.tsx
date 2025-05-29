"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper"; // Assuming SwiperType is correctly imported from 'swiper'
import { motion } from "framer-motion";

// Dynamic import for client-side only component
// Using 'loading' prop for a fallback can improve UX during load
const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false, // Ensures this component is only rendered on the client side
  loading: () => <div className="text-center py-10">Loading blog posts...</div>, // Optional: Add a loading state
});

//updated for narrator
export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    // Outer div for styling, consider if this needs a more semantic role if it's a major section
    <div className="mx-2 md:m-0 shadow-xl">
      {/* Use a semantic <section> tag for major content blocks */}
      <section
        className="pb-15 pt-5 px-4 sm:px-6 bg-[#f9f9f9]"
        aria-labelledby="latest-blog-posts-heading" // Link section to its main heading for accessibility
      >
        <motion.div
          className="max-w-screen-xl mx-auto text-center font-inter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          {/* Use a header for the section's introductory content */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-6 h-[1px] bg-[#e63a27]" aria-hidden="true" />{" "}
              {/* Decorative line, hide from screen readers */}
              <span
                className="text-sm font-bold text-[#e63a27] uppercase tracking-widest"
                // This might be better as a small heading for semantic hierarchy if needed.
                // For now, if H2 is the primary, then span is fine.
              >
                News & Updates
              </span>
            </div>
            {/* Main heading for this section */}
            <h2
              id="latest-blog-posts-heading"
              className="text-4xl lg:text-5xl font-bold text-[#003269]"
            >
              Latest From Blog Post
            </h2>
          </header>

          {/* Blog Slider */}
          {/* Ensure BlogSlider internally handles its own accessibility for navigation (e.g., arrow buttons, pagination) */}
          <BlogSlider swiperRef={swiperRef} />
        </motion.div>
      </section>
    </div>
  );
}
