"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";

const features = [
  { icon: FaCertificate, label: "Certified", color: "text-[#e63a27]" },
  { icon: FaLightbulb, label: "Innovative Work", color: "text-yellow-400" },
  { icon: FaHome, label: "Experienced", color: "text-[#e63a27]" },
];

export default function AboutCompany() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="mb-5 md:mb-10 shadow-xl py-10 sm:py-16 lg:py-20 bg-[#f9f9f9]"
      role="region"
      aria-label="About Company Section"
    >
      <div className="flex flex-col items-center xl:flex-row xl:items-start gap-10 lg:gap-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Image Block */}
        <motion.figure
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 aspect-[5/5]"
          aria-label="30+ years experience"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] border-2 border-[#e63a27] overflow-hidden">
            <Image
              src="/about-us/aboutusimage.png"
              alt="Team working on site"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <figcaption className="sr-only">
              Over 30 years of roofing and waterproofing experience
            </figcaption>

            <div className="absolute top-4 right-10 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter">
                30+
              </span>
              <span className="leading-tight text-base sm:text-xl font-extrabold uppercase font-inter">
                Years
                <br />
                of Experience
              </span>
            </div>
          </div>
        </motion.figure>

        {/* Text Block */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-lg xl:max-w-full text-left"
        >
          <header className="flex items-center justify-center xl:justify-start gap-3 mb-2">
            <hr className="w-6 h-[1px] bg-[#e63a27]" />
            <h2 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
              About Company
            </h2>
            <hr className="w-6 h-[1px] bg-[#e63a27]" />
          </header>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
            Roofing Is Our Heritage & Quality Is Our Tradition
          </h1>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#003269] mb-6"
            aria-label="Company Features"
          >
            {features.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 font-bold uppercase"
                aria-label={label}
              >
                <Icon className={color} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-700 font-bevietnam text-justify mb-4">
            <p>
              For over twelve years, SAS Roofing & Waterproofing has proudly
              served{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brooklyn"
              >
                Brooklyn
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q11299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manhattan"
              >
                Manhattan
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18424"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Queens"
              >
                Queens
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Bronx"
              >
                The Bronx
              </Link>{" "}
              with top-tier roofing, waterproofing, and masonry solutions.
            </p>

            {showMore && (
              <div
                className="space-y-4 mt-4"
                aria-live="polite"
                id="company-details"
              >
                <p>
                  As a trusted roofing contractor in Brooklyn, we specialize in
                  everything from residential roof repairs to complete
                  commercial roof installations.
                </p>
                <p>
                  Our skilled masonry team handles everything from brick
                  restoration to sidewalk repair with care.
                </p>
                <p>
                  Choose SAS Roofing & Waterproofing—where dedication meets
                  experience, and every project is built on a foundation of
                  trust and excellence.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-[#e63a27] font-semibold text-sm underline mb-6 hover:text-[#003269] transition-colors font-bevietnam"
            aria-expanded={showMore}
            aria-controls="company-details"
            aria-label={
              showMore
                ? "Show less company details"
                : "Show more company details"
            }
          >
            {showMore ? "Read Less" : "Read More"}
          </button>

          <div
            className="flex items-start gap-2 mb-6"
            aria-label="Certified Company Badge"
          >
            <Image
              src="/about-us/certified-badge.jpg"
              alt="Certified Company Badge"
              width={50}
              height={50}
              className="flex-shrink-0"
            />
            <span className="text-[#003269] text-base font-inter">
              <strong className="block mb-1">Certified Company</strong>
              <span className="text-[#e63a27]">#2050416-DCA</span>
            </span>
          </div>

          <Link
            href="/aboutus"
            className="inline-block border-4 border-[#003269] p-2 group self-start mt-4"
            aria-label="Read more on About Us page"
          >
            <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide text-sm lg:text-base group-hover:bg-[#e63a27] group-hover:text-white transition font-inter hover-button">
              Read More
            </span>
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
