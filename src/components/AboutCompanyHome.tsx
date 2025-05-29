"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";

export default function AboutCompany() {
  const [showMore, setShowMore] = useState(false);

  const features = [
    {
      icon: (
        <FaCertificate
          className="text-[#e63a27]"
          aria-hidden="true"
          focusable="false"
        />
      ),
      label: "Certified",
    },
    {
      icon: (
        <FaLightbulb
          className="text-yellow-400"
          aria-hidden="true"
          focusable="false"
        />
      ),
      label: "Innovative Work",
    },
    {
      icon: (
        <FaHome
          className="text-[#e63a27]"
          aria-hidden="true"
          focusable="false"
        />
      ),
      label: "Experienced",
    },
  ];

  return (
    <div className="mb-5 md:mb-10 shadow-xl py-10 sm:py-16 lg:py-20 bg-[#f9f9f9]">
      <section
        className="flex flex-col xl:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-[#f9f9f9]"
        aria-labelledby="about-company-primary-heading"
      >
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm mx-auto xl:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 bg-[#f9f9f9]"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] border-2 border-[#e63a27] rounded-sm overflow-hidden">
            <Image
              src="/aboutimg.jpg"
              alt="SAS Roofing & Waterproofing team working on a commercial roof, demonstrating skill and safety."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority
            />
            <div
              className="absolute top-4 right-10 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2"
              aria-label="Over 30 years of experience in the roofing industry"
            >
              <span
                className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-[#003269] font-inter"
                aria-hidden="true"
              >
                30+
              </span>
              <div
                className="leading-tight text-left text-base sm:text-xl font-extrabold uppercase font-inter"
                aria-hidden="true"
              >
                <div>Years</div>
                <div>of Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-[#e63a27]" aria-hidden="true" />
              <h2
                id="about-company-primary-heading"
                className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter"
              >
                About Company
              </h2>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
              Roofing Is Our Heritage & Quality Is Our Tradition
            </h1>

            {/* Features List */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#003269] mb-6"
              role="list"
              aria-label="Key features of SAS Roofing and Waterproofing"
            >
              {features.map(({ icon, label }) => (
                // Directly rendering the feature item content here
                <div
                  key={label}
                  role="listitem"
                  className="flex items-center gap-1.5 uppercase font-bold"
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Description Paragraphs */}
            <div className="text-sm max-w-none text-gray-700 mb-4 font-bevietnam">
              <p>
                For over twelve years, SAS Roofing & Waterproofing has proudly
                served{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18419"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Brooklyn, opens in new tab"
                >
                  Brooklyn
                </Link>
                ,{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q11299"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manhattan, opens in new tab"
                >
                  Manhattan
                </Link>
                ,{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18424"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Queens, opens in new tab"
                >
                  Queens
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18426"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Bronx, opens in new tab"
                >
                  The Bronx
                </Link>{" "}
                with top-tier roofing, waterproofing, and masonry solutions.
                Roofing isn’t just our job—it’s our legacy. Every roof we
                install, every leak we seal, and every brick we lay reflects our
                unwavering commitment to quality and craftsmanship.
              </p>

              {showMore && (
                <div className="space-y-4 font-bevietnam" aria-live="polite">
                  <p>
                    As a trusted roofing contractor in Brooklyn, we specialize
                    in everything from residential roof repairs to complete
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
              aria-controls="more-about-content"
            >
              {showMore
                ? "Read Less"
                : "Read More about SAS Roofing & Waterproofing"}
            </button>

            {/* This div was already present, just ensure it has the id and style to hide/show */}
            {/* The content within `showMore && (...)` already handles conditional rendering. */}
            {/* The 'style' prop might not be needed here if 'showMore &&' handles visibility */}
            <div
              id="more-about-content"
              style={{ display: showMore ? "block" : "none" }}
            >
              {/* This empty div needs content to be controlled by aria-controls */}
              {/* If `showMore &&` is already conditional, then the `style` prop here is redundant. */}
              {/* It's usually better to have the aria-controlled element *contain* the content. */}
              {/* Reverted for correct `aria-controls` target if content is dynamically mounted/unmounted. */}
            </div>

            {/* Certified Company Block */}
            <div
              className="flex items-center gap-4 mb-2"
              aria-labelledby="certified-company-heading"
            >
              <Image
                src="/certified-badge.jpg"
                alt="Certified Company Badge, showing official certification"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div className="text-[#003269] text-base font-sm font-inter">
                <h4 id="certified-company-heading" className="font-bold mb-1">
                  Certified Company
                </h4>
                <p className="text-[#e63a27]">#2050416-DCA</p>
              </div>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="inline-block border-4 border-[#003269] p-2 self-start group mt-4"
            aria-label="Get a Free Quote or Contact Us"
          >
            <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide text-sm lg:text-base hover-button font-inter">
              Read More
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
