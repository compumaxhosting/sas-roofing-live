"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a loader/spinner
  return (
    // Main section for the blog content, identified by aria-labelledby for screen readers.
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
      aria-labelledby="main-blog-post-heading"
      // Added role="document" for the main content area, which is equivalent to the body of a web page
      // It implies a logical grouping of content that comprises a document.
      role="document"
    >
      <div className="w-full xl:max-w-7xl xl:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
          // Added role="article" to explicitly mark this as the primary article content.
          role="article"
          aria-labelledby="main-blog-post-heading"
        >
          {/* Image on the left */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/roofing-contractors.jpg"
              // Enhanced alt text to be more descriptive for screen reader users
              alt="Close-up of a building wall undergoing waterproofing treatment, showing a professional applying a sealant."
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text on the right */}
          <div className="w-full lg:w-1/2">
            <h1
              id="main-blog-post-heading" // ID for aria-labelledby
              className="text-3xl md:text-4xl font-bold font-inter mb-7"
            >
              The Satisfaction Factor: Why Certified Roofing Contractors in
              Brooklyn Are a Smart Choice
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
              Introduction
            </h2>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam">
              Choosing certified roofing contractors in Brooklyn is essential
              for quality, safety, and reliability. From Roof Repair to Roof
              Installation, certified experts bring peace of mind to homeowners
              and businesses. Let’s explore why hiring certified professionals
              is the smart choice for Roof Repair, Roof Replacement, and more in
              Brooklyn, Queens, and Manhattan.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10">
          {/* Basement Waterproofing Brooklyn */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="basement-waterproofing-heading" // Link to the heading below
          >
            <h3 // Changed to h3 as it's a subheading under "Our Services"
              id="basement-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Certified Roofing Contractors: What Sets Them Apart 
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified contractors have specialized training and use
              top-quality materials, ensuring reliable results. Unlike
              uncertified workers, they follow safety standards and building
              codes. Whether it’s Roof Repair in Brooklyn, Queens, or Manhattan,
              certified pros guarantee peace of mind and long-lasting solutions.
            </p>
          </motion.div>

          {/* Roof Leak Repair Manhattan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="roof-leak-repair-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="roof-leak-repair-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Roof Repair and Maintenance: Essential Protection
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Timely Roof Repair and Roof Maintenance keep your property safe
              and prevent expensive damage. Certified contractors offer
              inspections and maintenance to spot problems early. By investing
              in regular service, you extend the life of your roof and avoid
              costly emergencies.
            </p>
          </motion.div>

          {/* Foundation Sealing Queens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="foundation-sealing-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="foundation-sealing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Roof Installation and Replacement: Quality Counts
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified contractors handle Roof Installation and Roof
              Replacement with care and expertise. They recommend the right
              materials and techniques for your needs, ensuring energy
              efficiency and durability. A certified installer guarantees a job
              done right from start to finish.
            </p>
          </motion.div>

          {/* Exterior Waterproofing Brooklyn */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="exterior-waterproofing-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="exterior-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Emergency Roof Repair: Fast Response
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Storms and leaks can’t wait. Emergency Roof Repair services by
              certified contractors are quick, reliable, and available 24/7.
              They protect your home or business from further damage, saving you
              time and money.
            </p>
          </motion.div>

          {/* Interior Waterproofing Manhattan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="interior-waterproofing-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="interior-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Roof Coating and Flat Roof Repair: Durability Matters
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Flat roofs need special attention. Certified pros offer Roof
              Coating and Flat Roof Repair to protect against water damage,
              leaks, and UV rays. Roof Coating extends your roof’s lifespan
              while saving on energy costs.
            </p>
          </motion.div>

          {/* Crawl Space Waterproofing Queens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="crawl-space-waterproofing-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="crawl-space-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Roofing Service for Brooklyn, Queens, and Manhattan
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified roofing contractors serve Brooklyn, Queens, and
              Manhattan with a full range of services: Roof Repair,
              Installation, Replacement, and more. Their experience and
              professionalism make them the best choice for residential and
              commercial projects.
            </p>
          </motion.div>

          {/* Brick Waterproofing Queens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="brick-waterproofing-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="brick-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Commercial Roof Repair: Business Protection
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Commercial Roof Repair is crucial to avoid business disruptions.
              Certified contractors quickly fix leaks and damage, keeping your
              business safe and operational. Their expertise ensures minimal
              downtime and lasting results.
            </p>
          </motion.div>

          {/* Roof Membrane Installation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="roof-membrane-heading" // Link to the heading below
          >
            <h3 // Changed to h3
              id="roof-membrane-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Conclusion: The Smart Choice
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified roofing contractors offer unmatched expertise in all
              areas of Roofing Service. For Roof Repair, Roof Installation, Roof
              Replacement, and more, trust certified pros in Brooklyn, Queens,
              and Manhattan. They keep your home or business safe, reliable, and
              worry-free.{"  "} <br></br>
              <br></br>
              For trusted roofing services, visit {" "}
              <Link
                href={
                  "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                }
                className="text-[#003269] hover:underline"
                aria-label="Find top waterproofing contractors in New York City for advanced solutions" // Improved aria-label
                target="_blank"
                rel="noopener noreferrer"
              >
                SAS Roofing & Waterproofing.
              </Link>
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="free-estimate-heading" // Link to the heading below
          >
            <h2 // Changed to h2
              id="free-estimate-heading"
              className="text-2xl md:text-3xl font-bold text-[#e63a27]"
            >
              Get a Free Estimate Today
            </h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Protect your home with SAS Roofing & Waterproofing&apos;s expert
              services. Contact us for a free consultation and tailored
              solutions.
            </p>
            <ul
              className="text-gray-700"
              aria-label="Contact information for a free estimate"
            >
              <li>
                <strong aria-hidden="true">Phone:</strong>{" "}
                <Link
                  href="tel:3472216549"
                  className="text-[#003269] hover:underline"
                  aria-label="Call SAS Roofing and Waterproofing at 3 4 7, 2 2 1, 6 5 4 9 for a free estimate" // Spelling out numbers for better screen reader pronunciation
                >
                  (347) 221-6549
                </Link>
              </li>
              <li>
                <address aria-label="Our office address">
                  <strong aria-hidden="true">Address:</strong> 552 Rugby Rd,
                  Brooklyn, NY 11230
                </address>
              </li>
            </ul>
            <Link
              href="/" //goes to home page
              className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
              aria-label="Visit SAS Roofing & Waterproofing homepage for more information and services" // Improved aria-label
            >
              Visit SAS Roofing & Waterproofing
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
