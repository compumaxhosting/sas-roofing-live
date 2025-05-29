"use client";

import ServicesSlider from "@/components/ServicesSlider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  margin: number[];
};

export default function OurServicesPage({ margin }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main
      className={`
        mb-${margin[1]} md:mb-${margin[1]} shadow-2xl
        px-4 sm:px-6 lg:px-12 pt-10 pb-12 sm:pb-16 lg:pb-20 bg-[#f9f9f9] relative`}
      aria-label="Our Services Section" // Add an overall label for the main content area
    >
      <div className="mx-auto space-y-12">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-8 md:gap-4"
          aria-labelledby="services-page-heading" // Link this section to its primary heading
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              {/* Decorative element, hide from screen readers */}
              <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#e63a27] uppercase font-inter">
                Our Services
              </span>
            </div>
            {/* The main heading for the services section */}
            <h1
              id="services-page-heading"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter"
            >
              SAS Roofing & Waterproofing
            </h1>
          </div>

          <Link
            href="/services"
            className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]" // Added focus styles
            aria-label="View all our services" // More descriptive aria-label
          >
            <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
              All Services
            </div>
          </Link>
        </motion.section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* ServicesSlider component - assume it handles its own accessibility */}
          <ServicesSlider swiperRef={swiperRef} />
        </motion.div>
      </div>
    </main>
  );
}
