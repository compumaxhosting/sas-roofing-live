"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReviewSlider = dynamic(() => import("./ReviewSlider"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className=""
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
                Testimonials
              </span>
              <span className="w-6 h-px bg-[#e63a27]" />
            </span>
            Words From Our Customer
          </h2>
        </motion.div>

        {/* Wrap the slider with a landmark or region and describe for screen readers */}
        <div aria-live="polite" aria-atomic="true" aria-relevant="additions">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
}
