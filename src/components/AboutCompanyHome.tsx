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
      aria-label="About Company Section"
    >
      <div className="flex flex-col items-center xl:flex-row xl:items-start gap-10 lg:gap-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Optimized Image */}
        <motion.figure
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md lg:max-w-lg"
        >
          <div className="relative w-full aspect-[4/5] border-2 border-[#e63a27] overflow-hidden">
            <Image
              src="/about-us/aboutusimage.jpg"
              alt="Team working on site"
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 500px"
            />
            <figcaption className="sr-only">
              Over 30 years of roofing and waterproofing experience
            </figcaption>
            <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-md text-[#003269] shadow-md text-center">
              <span className="block text-3xl font-extrabold font-inter">
                30+
              </span>
              <span className="block text-xs font-inter uppercase">
                Years of Experience
              </span>
            </div>
          </div>
        </motion.figure>

        {/* Optimized Text */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-lg xl:max-w-full text-left"
        >
          <header className="flex items-center justify-center xl:justify-start gap-3 mb-2">
            <hr className="w-6 h-[1px] bg-[#e63a27]" />
            <h1 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
              About Company
            </h1>
            <hr className="w-6 h-[1px] bg-[#e63a27]" />
          </header>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
            Roofing Is Our Heritage & Quality Is Our Tradition
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#003269] mb-6">
            {features.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 font-bold uppercase"
              >
                <Icon className={color} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-700 font-bevietnam text-justify mb-4">
            <p>
              For over thirty years,{" "}
              <strong>SAS Roofing & Waterproofing</strong> has proudly served{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18419"
                target="_blank"
                className="font-bold"
              >
                Brooklyn
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q11299"
                target="_blank"
                className="font-bold"
              >
                Manhattan
              </Link>
              ,{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18424"
                target="_blank"
                className="font-bold"
              >
                Queens
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.wikidata.org/wiki/Q18426"
                target="_blank"
                className="font-bold"
              >
                The Bronx
              </Link>{" "}
              with top-tier <strong>roofing</strong>,{" "}
              <strong>waterproofing</strong>, and <strong>masonry</strong>{" "}
              solutions.
            </p>

            {showMore && (
              <div className="space-y-4 mt-4" id="company-details">
                <p>
                  We specialize in everything from{" "}
                  <strong>residential roof repairs</strong> to full{" "}
                  <strong>commercial roof installations</strong>.
                </p>
                <p>
                  Our masonry experts handle <strong>brick restoration</strong>,{" "}
                  <strong>sidewalk repair</strong>, and more.
                </p>
                <p>
                  With <strong>dedication</strong>, <strong>experience</strong>,
                  and <strong>trust</strong>— SAS Roofing & Waterproofing is the
                  team you can rely on.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#e63a27] font-semibold text-sm underline mb-6 hover:text-[#003269] transition-colors font-bevietnam"
            aria-expanded={showMore}
            aria-controls="company-details"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>

          <div className="flex items-start gap-2 mb-6">
            <Image
              src="/about-us/certified-badge.jpg"
              alt="Certified Company Badge"
              width={50}
              height={50}
              loading="lazy"
            />
            <span className="text-[#003269] text-base font-inter">
              <strong className="block mb-1">Certified Company</strong>
              <span className="text-[#e63a27]">#2050416-DCA</span>
            </span>
          </div>

          <Link
            href="/aboutus"
            className="inline-block border-4 border-[#003269] p-1 group"
            aria-label="Read more about SAS Roofing"
          >
            <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#e63a27] hover:text-white transition text-sm lg:text-base font-inter">
              Know More
            </span>
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
