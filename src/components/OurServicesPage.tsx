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
      style={{ marginBottom: `${margin[1]}px` }}
      className="shadow-2xl px-4 sm:px-6 lg:px-12 pt-10 pb-12 sm:pb-16 lg:pb-20 bg-[#f9f9f9]"
      role="main"
      tabIndex={-1}
      aria-label="Overview of SAS Roofing & Waterproofing services"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
          aria-labelledby="services-heading"
        >
          <header>
            <div
              className="flex items-center justify-center md:justify-start gap-2 mb-1"
              aria-hidden="true"
            >
              <div className="w-6 h-px bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#e63a27] uppercase font-inter">
                Our Services
              </span>
              <div className="md:hidden w-6 h-px bg-[#e63a27]" />
            </div>

            <h1
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter"
            >
              SAS Roofing & Waterproofing
            </h1>
          </header>

          <Link
            href="/services"
            aria-label="View all services offered by SAS Roofing & Waterproofing"
            className="group border-4 border-[#003269] p-1"
          >
            <span className="block border-2 border-[#e63a27] px-5 py-2.5 text-sm sm:text-base lg:text-lg font-bold text-[#e63a27] uppercase font-inter group-hover:bg-[#e63a27] group-hover:text-white transition hover-button">
              All Services
            </span>
          </Link>
        </motion.section>

        {/* Services Slider */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          aria-label="Services slider showcasing available roofing and waterproofing services"
          role="region"
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="additions"
        >
          <ServicesSlider swiperRef={swiperRef} />
        </motion.section>
      </div>
    </main>
  );
}
