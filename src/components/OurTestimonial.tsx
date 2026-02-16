"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function OurTestimonial() {
  return (
    <section
      className="pt-8 pb-4 px-4 sm:px-6 bg-[#f9f9f9] mb-16 shadow-xl"
      aria-labelledby="testimonial-heading"
      role="region"
      tabIndex={-1}
    >
      {/* Elfsight script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            id="testimonial-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003269] font-inter"
          >
            <span
              className="flex items-center justify-center gap-2 mb-2"
              aria-hidden="true"
            >
              <span className="w-6 h-px bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase font-inter">
                SAS Roofing & Waterproofing
              </span>
              <span className="w-6 h-px bg-[#e63a27]" />
            </span>
            Our Google Reviews
          </h2>
        </motion.div>

        {/* Elfsight widget container */}
        <div className="mt-8">
          <div
            className="elfsight-app-59e1a999-b7f1-4576-afe1-04909c583f24"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
