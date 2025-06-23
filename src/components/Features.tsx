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
      "Shielding Your Property with Unmatched Safety. Reliable Roofing.",
    link: "/services",
  },
  {
    id: "02",
    title: "High Quality Materials",
    description:
      "Premium Materials for Superior Protection. Only the Best for Your Roof’s Durability.",
    link: "/services",
  },
  {
    id: "03",
    title: "Professional Team",
    description:
      "Expert Hands, Exceptional Results. Trained Professionals, Trusted Solutions.",
    link: "/services",
  },
  {
    id: "04",
    title: "Accredited Service",
    description:
      "Certified Excellence in Roofing & Waterproofing. Accredited for Quality",
    link: "/services",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Features = ({ margin }: Props) => (
  <div
    className={`relative z-0 bg-[#f9f9f9] mb-${margin[1]} md:mb-${margin[1]} shadow-2xl`}
  >
    <div
      className="absolute bottom-0 left-0 w-full h-9/10 lg:h-80 shadow-xl bg-[#08386c] z-[-1]"
      aria-hidden="true"
    />

    <section className="py-16 relative z-10" aria-labelledby="features-heading">
      <h1 id="features-heading" className="sr-only">
        Our Core Features
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 px-12">
        {features.map(({ id, title, description, link }, i) => (
          <motion.article
            key={id}
            className="relative bg-[#003269] text-white text-center h-[370px] p-6 overflow-hidden feature-card"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            aria-labelledby={`feature-title-${id}`}
            aria-describedby={`feature-description-${id}`}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-top-shape flex items-center justify-center font-bold text-lg font-inter"
              aria-hidden="true"
            >
              {id}
            </div>

            <h1
              id={`feature-title-${id}`}
              className="pt-20 pb-6 text-base md:text-lg font-semibold font-inter"
            >
              {title}
            </h1>
            <h2
              id={`feature-description-${id}`}
              className="text-sm md:text-base text-gray-300 font-bevietnam"
            >
              {description}
            </h2>

            <Link
              href={link}
              className="group absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-bottom-shape flex items-center justify-center text-white text-sm font-semibold font-inter"
              aria-label={`Learn more about ${title.toLowerCase()}`}
            >
              <FaArrowRight
                className="mr-2 transform transition-transform duration-300 group-hover:-rotate-50"
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

export default Features;
