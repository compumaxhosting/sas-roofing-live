"use client";

import ServicesSlider from "@/components/ServicesSlider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

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
      className={clsx(
        "shadow-2xl px-4 sm:px-6 lg:px-12 pt-10 pb-12 sm:pb-16 lg:pb-20 bg-[#f9f9f9] relative",
        `mb-[${margin[1]}px]`
      )}
      role="main"
      tabIndex={-1}
      aria-label="Overview of SAS Roofing & Waterproofing services"
    >
      <div className="mx-auto space-y-12 max-w-7xl">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-8 md:gap-4"
          aria-labelledby="services-heading"
          role="region"
        >
          <div>
            <div
              className="flex items-center justify-center md:justify-start gap-2 mb-1"
              aria-hidden="true"
            >
              <div className="w-6 h-px bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#e63a27] uppercase font-inter">
                Our Services
              </span>
              <div className="block md:hidden w-6 h-px bg-[#e63a27]" />
            </div>
            <h1
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter"
            >
              SAS Roofing & Waterproofing
            </h1>
          </div>

          <Link
            className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
            aria-label="View all services offered by SAS Roofing & Waterproofing"
            href="/services"
          >
            <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
              All Services
            </div>
          </Link>
        </motion.section>

        {/* ➤ New Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="px-6 sm:px-8 text-center sm:text-left"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#003269] mb-4">
            Need Reliable Roofing, Waterproofing, or Masonry Services in
            Brooklyn or Manhattan?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            SAS Roofing & Waterproofing proudly serves Brooklyn zip codes{" "}
            <strong>
              11201, 11205, 11206, 11215, 11216, 11217, 11218, 11221, 11231,
              11233, 11238
            </strong>
            , and Manhattan zip codes{" "}
            <strong>
              10004, 10005, 10006, 10007, 10012, 10013, 10014, 10038, 10280
            </strong>
            .
            <br />
            <br />
            Whether you’re searching for a <strong>roof repair near me</strong>,
            a trusted <strong>waterproofing contractor in Brooklyn</strong>, or{" "}
            <strong>masonry services in Manhattan</strong>, our local team is
            ready to help. We’re trusted by your neighbors for{" "}
            <strong>fast, affordable, and quality service</strong>.
            <br />
            <br />
            <span className="text-[#e63a27] font-semibold">
              Contact us today for a free estimate!
            </span>
          </p>
        </motion.div>

        {/* ➤ Slider Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="additions"
          role="region"
          aria-label="Services slider showcasing available roofing and waterproofing services"
        >
          <ServicesSlider swiperRef={swiperRef} />
        </motion.div>
      </div>
    </main>
  );
}
