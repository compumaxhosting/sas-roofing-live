"use client";

import React from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  { icon: FaCertificate, label: "Certified", color: "text-[#e63a27]" },
  { icon: FaLightbulb, label: "Innovative", color: "text-yellow-500" },
  { icon: FaHome, label: "Experienced", color: "text-[#e63a27]" },
];

const FeatureItem = ({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) => (
  <span className="flex items-center gap-1.5" aria-label={label}>
    <Icon className={color} aria-hidden="true" focusable="false" />
    <span className="font-bold uppercase">{label}</span>
  </span>
);

export default function AboutCompany() {
  return (
    <section
      className="m-2 mb-5 md:m-0 md:mb-10 shadow-xl"
      role="region"
      aria-label="About SAS Roofing Company"
    >
      <div className="py-12 sm:py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="flex flex-col xl:flex-row items-center xl:items-start px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Image Block */}
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 aspect-[5/5] shadow-lg border-2 border-[#e63a27] overflow-hidden"
            aria-label="Team members working on roofing"
          >
            <Image
              src="/about-us/aboutusimage.jpg"
              alt="SAS Roofing & Waterproofing team working on a project"
              fill
              className="object-contain mt:18 sm:mt-18 md:mt-20"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            />
            <figcaption className="sr-only">
              SAS team with over 30 years of experience
            </figcaption>
            <div className="absolute top-4 right-10 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter">
                30+
              </span>
              <span className="leading-tight text-left text-base sm:text-xl font-extrabold uppercase font-inter">
                <span>Years</span>
                <br />
                <span>of Experience</span>
              </span>
            </div>
          </motion.figure>

          {/* Text Content */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-lg xl:max-w-full text-left"
          >
            <header className="flex items-center justify-center xl:justify-start gap-3 mb-2">
              <hr className="w-6 h-[1px] bg-[#e63a27]" />
              <h4 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
                About Company
              </h4>
              <hr className="w-6 h-[1px] bg-[#e63a27]" />
            </header>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
              Roofing Is Our Heritage & Quality Is Our Tradition
            </h1>

            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#003269] mb-6"
              aria-label="Company values"
            >
              {features.map((item) => (
                <FeatureItem key={item.label} {...item} />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-8 font-bevietnam text-justify">
              For over twelve years, SAS Roofing & Waterproofing has proudly
              served{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Brooklyn"
              >
                Brooklyn
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q11299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Manhattan"
              >
                Manhattan
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18424"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Queens"
              >
                Queens
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about The Bronx"
              >
                The Bronx
              </Link>{" "}
              with top-tier roofing, waterproofing, and masonry solutions.
              Roofing isn’t just our job—it’s our legacy. Every roof we install,
              every leak we seal, and every brick we lay reflects our unwavering
              commitment to quality and craftsmanship.
            </p>

            <div
              className="flex items-center gap-2 mb-6"
              aria-label="Certified Company #2050416-DCA"
            >
              <Image
                src="/about-us/certified-badge.jpg"
                alt="Certified Company Badge"
                width={50}
                height={50}
              />
              <span className="text-[#003269] text-base font-inter">
                <strong className="block mb-1">Certified Company</strong>
                <span className="text-[#e63a27]">#2050416-DCA</span>
              </span>
            </div>

            <Link
              href="/aboutus"
              className="inline-block border-4 border-[#003269] p-1 group mt-auto"
              aria-label="Read more about SAS Roofing"
            >
              <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#e63a27] hover:text-white transition text-sm lg:text-base font-inter hover-button">
                Read More
              </span>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
