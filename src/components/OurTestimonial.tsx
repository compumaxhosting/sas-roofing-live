"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Skeleton loader component for the testimonials
const TestimonialSkeleton = () => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
    role="status" // Indicates that this section is a status message
    aria-live="polite" // Announces changes politely to screen readers
    aria-atomic="true" // Announces the entire content of the region
    aria-label="Loading testimonials" // Provides a label for the loading state
  >
    {Array.from({ length: 3 }).map(
      (
        _,
        i // Render 3 skeleton cards
      ) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md animate-pulse"
        >
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>{" "}
          {/* Placeholder for title */}
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="flex items-center mt-6">
            <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>{" "}
            {/* Placeholder for avatar */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>{" "}
              {/* Placeholder for name */}
              <div className="h-3 bg-gray-200 rounded w-16"></div>{" "}
              {/* Placeholder for role/date */}
            </div>
          </div>
        </div>
      )
    )}
  </div>
);
const ReviewSlider = dynamic(() => import("./ReviewSlider"), {
  ssr: false,
  loading: () => <TestimonialSkeleton />, // Use the skeleton loader as the loading fallback
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
      className="pt-8 pb-4 px-4 sm:px-6 bg-[#f9f9f9] mb-10 md:mb-15 shadow-xl"
      aria-labelledby="testimonial-heading" // Links the section to its main heading
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Using a heading group for better semantic structure */}
          <h2
            id="testimonial-heading" // Main heading for the section
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003269] font-inter"
          >
            <span className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />{" "}
              {/* Decorative element, hide from screen readers */}
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase font-inter">
                Testimonials
              </span>
            </span>
            {/* The primary visible heading text */}
            Words From Our Customer
          </h2>
        </motion.div>

        {/* The ReviewSlider component is loaded dynamically */}
        <ReviewSlider />
      </div>
    </section>
  );
}
