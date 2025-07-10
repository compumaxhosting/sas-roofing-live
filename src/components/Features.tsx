"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  margin: number[];
};

const features = [
  {
    id: "01",
    title: "Safety & Reliability",
    description:
      "Shielding your property with unmatched safety. Reliable roofing.",
    link: "/services",
  },
  {
    id: "02",
    title: "High Quality Materials",
    description:
      "Premium materials for superior protection. Only the best for your roof’s durability.",
    link: "/services",
  },
  {
    id: "03",
    title: "Professional Team",
    description:
      "Expert hands, exceptional results. Trained professionals, trusted solutions.",
    link: "/services",
  },
  {
    id: "04",
    title: "Accredited Service",
    description:
      "Certified excellence in roofing & waterproofing. Accredited for quality.",
    link: "/services",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Features({ margin }: Props) {
  return (
    <div
      className="relative z-0 bg-[#f9f9f9] shadow-2xl"
      style={{ marginBottom: `${margin[1]}px` }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-4/5 lg:h-80 bg-[#08386c] z-[-1]"
        aria-hidden="true"
      />

      <section
        className="py-16 relative z-10"
        aria-labelledby="features-heading"
        role="region"
      >
        <h2 id="features-heading" className="sr-only">
          Core Features of SAS Roofing
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 sm:px-10 lg:px-12">
          {features.map(({ id, title, description, link }, i) => (
            <motion.article
              key={id}
              className="relative bg-[#003269] text-white text-center h-[370px] p-6 overflow-hidden"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <header
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-top-shape flex items-center justify-center font-bold text-lg font-inter"
                aria-hidden="true"
              >
                {id}
              </header>

              <div className="pt-20 pb-6">
                <h3 className="text-base md:text-lg font-semibold font-inter mb-2">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 font-bevietnam">
                  {description}
                </p>
              </div>

              <Link
                href={link}
                className="group absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-bottom-shape flex items-center justify-center text-white text-sm font-semibold font-inter"
                aria-label={`Learn more about ${title}`}
              >
                <FaArrowRight
                  className="mr-2 transition-transform duration-300 group-hover:-rotate-45"
                  aria-hidden="true"
                />
                <span>DETAILS</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
