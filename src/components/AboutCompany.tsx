"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";

const features = [
  { icon: FaCertificate, label: "Certified", color: "text-[#e63a27]" },
  { icon: FaLightbulb, label: "Innovative", color: "text-yellow-500" },
  { icon: FaHome, label: "Experienced", color: "text-[#e63a27]" },
];

function FeatureItem({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <Icon className={color} aria-hidden="true" focusable="false" />
      <strong className="uppercase text-sm">{label}</strong>
    </span>
  );
}

export default function AboutCompany() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="m-2 mb-8 md:m-0 md:mb-12 bg-[#f5f5f5] shadow-xl"
      role="region"
    >
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 lg:gap-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Image Block */}
          <motion.figure
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg flex-shrink-0 aspect-[5/5] border-2 border-[#e63a27] shadow-lg overflow-hidden"
          >
            <Image
              src="/about-us/aboutusimage.jpg"
              alt="Roofing professionals at work"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            />
            <figcaption className="sr-only">
              30+ years of experience in roofing and waterproofing
            </figcaption>

            <div className="absolute top-4 right-10 bg-white/90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter">
                30+
              </span>
              <span className="leading-tight text-left text-base sm:text-xl font-extrabold uppercase font-inter">
                Years
                <br />
                of Experience
              </span>
            </div>
          </motion.figure>

          {/* Text Block */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg xl:max-w-full text-left"
          >
            <header className="flex items-center justify-center xl:justify-start gap-3 mb-3">
              <hr className="w-6 h-[1px] bg-[#e63a27]" />
              <h1 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
                About Company
              </h1>
              <hr className="w-6 h-[1px] bg-[#e63a27]" />
            </header>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
              Roofing Is Our Heritage & Quality Is Our Tradition
            </h2>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-[#003269]">
              {features.map((feature) => (
                <FeatureItem key={feature.label} {...feature} />
              ))}
            </div>

            <div className="text-gray-700 text-sm font-bevietnam text-justify leading-relaxed mb-8">
              <p>
                For over thirty years,{" "}
                <strong>SAS Roofing & Waterproofing</strong> has proudly served{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  Brooklyn
                </Link>
                ,{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q11299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  Manhattan
                </Link>
                ,{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  Queens
                </Link>
                , and{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  The Bronx
                </Link>{" "}
                with top-tier <strong>roofing</strong>,{" "}
                <strong>waterproofing</strong>, and <strong>masonry</strong>{" "}
                solutions.
              </p>

              <p className="mt-4">
                <strong>Roofing</strong> isn’t just our job—it’s our legacy.
                Every roof we install, every leak we seal, and every brick we
                lay reflects our commitment to <strong>quality</strong> and{" "}
                <strong>craftsmanship</strong>.
              </p>

              {showMore && (
                <div className="space-y-4 mt-4" id="company-details">
                  <p>
                    As a trusted <strong>roofing contractor</strong> in{" "}
                    <strong>Brooklyn</strong>, we specialize in everything from{" "}
                    <strong>residential roof repairs</strong> to{" "}
                    <strong>commercial roof installations</strong>.
                  </p>
                  <p>
                    Our <strong>masonry experts</strong> take pride in restoring
                    bricks, repairing sidewalks, and enhancing property value.
                  </p>
                  <p>
                    Choose <strong>SAS Roofing & Waterproofing</strong>—where{" "}
                    <strong>experience</strong> meets <strong>trust</strong> and
                    every project is a reflection of excellence.
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-[#e63a27] text-sm font-semibold underline hover:text-[#c42d1c] focus:outline-none"
                aria-expanded={showMore}
                aria-controls="company-details"
              >
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6">
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
                Know More
              </span>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
