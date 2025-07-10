"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "./FAQSectionBlog";

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

  if (!mounted) return null;

  return (
    <>
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
      aria-labelledby="main-blog-post-heading"
      role="document"
    >
      <div className="w-full xl:max-w-7xl xl:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
          role="article"
          aria-labelledby="main-blog-post-heading"
        >
          <div className="w-full lg:w-1/2">
            <Image
              src="/blog/roofing-contractors.jpg"
              alt="Close-up of a building wall undergoing waterproofing treatment, showing a professional applying a sealant."
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1
              id="main-blog-post-heading"
              className="text-3xl md:text-4xl font-bold font-inter mb-7"
            >
              The Satisfaction Factor: Why{" "}
              <strong className="font-bold">
                Certified Roofing Contractors
              </strong>{" "}
              in Brooklyn Are a Smart Choice
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
              Introduction
            </h2>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam">
              Choosing{" "}
              <strong className="font-bold">
                certified roofing contractors
              </strong>{" "}
              in Brooklyn is essential for quality, safety, and reliability.
              From <strong className="font-bold">Roof Repair</strong> to{" "}
              <strong className="font-bold">Roof Installation</strong>,
              certified experts bring peace of mind to homeowners and
              businesses. Let’s explore why hiring certified professionals is
              the smart choice for{" "}
              <strong className="font-bold">Roof Repair</strong>,{" "}
              <strong className="font-bold">Roof Replacement</strong>, and more
              in Brooklyn, Queens, and Manhattan.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="basement-waterproofing-heading"
          >
            <h3
              id="basement-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">
                Certified Roofing Contractors
              </strong>
              : What Sets Them Apart
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified contractors have specialized training and use
              top-quality materials, ensuring reliable results. Unlike
              uncertified workers, they follow safety standards and building
              codes. Whether it’s{" "}
              <strong className="font-bold">Roof Repair</strong> in Brooklyn,
              Queens, or Manhattan, certified pros guarantee peace of mind and
              long-lasting solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="roof-leak-repair-heading"
          >
            <h3
              id="roof-leak-repair-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Roof Repair</strong> and
              Maintenance: Essential Protection
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Timely <strong className="font-bold">Roof Repair</strong> and{" "}
              <strong className="font-bold">Roof Maintenance</strong> keep your
              property safe and prevent expensive damage. Certified contractors
              offer inspections and maintenance to spot problems early. By
              investing in regular service, you extend the life of your roof and
              avoid costly emergencies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="foundation-sealing-heading"
          >
            <h3
              id="foundation-sealing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Roof Installation</strong> and{" "}
              <strong className="font-bold">Replacement</strong>: Quality Counts
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified contractors handle{" "}
              <strong className="font-bold">Roof Installation</strong> and{" "}
              <strong className="font-bold">Roof Replacement</strong> with care
              and expertise. They recommend the right materials and techniques
              for your needs, ensuring energy efficiency and durability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="exterior-waterproofing-heading"
          >
            <h3
              id="exterior-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Emergency Roof Repair</strong>: Fast
              Response
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Storms and leaks can’t wait.{" "}
              <strong className="font-bold">Emergency Roof Repair</strong>{" "}
              services by certified contractors are quick, reliable, and
              available 24/7.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="interior-waterproofing-heading"
          >
            <h3
              id="interior-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Roof Coating</strong> and{" "}
              <strong className="font-bold">Flat Roof Repair</strong>:
              Durability Matters
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              <strong className="font-bold">Flat roofs</strong> need special
              attention. Certified pros offer{" "}
              <strong className="font-bold">Roof Coating</strong> and{" "}
              <strong className="font-bold">Flat Roof Repair</strong> to protect
              against water damage, leaks, and UV rays.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="crawl-space-waterproofing-heading"
          >
            <h3
              id="crawl-space-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Roofing Service</strong> for
              Brooklyn, Queens, and Manhattan
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified roofing contractors serve Brooklyn, Queens, and
              Manhattan with a full range of services:{" "}
              <strong className="font-bold">Roof Repair</strong>,{" "}
              <strong className="font-bold">Installation</strong>,{" "}
              <strong className="font-bold">Replacement</strong>, and more.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="brick-waterproofing-heading"
          >
            <h3
              id="brick-waterproofing-heading"
              className="text-xl md:text-2xl font-bold"
            >
              <strong className="font-bold">Commercial Roof Repair</strong>:
              Business Protection
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              <strong className="font-bold">Commercial Roof Repair</strong> is
              crucial to avoid business disruptions. Certified contractors
              quickly fix leaks and damage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="roof-membrane-heading"
          >
            <h3
              id="roof-membrane-heading"
              className="text-xl md:text-2xl font-bold"
            >
              Conclusion: The Smart Choice
            </h3>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Certified roofing contractors offer unmatched expertise in all
              areas of <strong className="font-bold">Roofing Service</strong>.
              For <strong className="font-bold">Roof Repair</strong>,{" "}
              <strong className="font-bold">Roof Installation</strong>,{" "}
              <strong className="font-bold">Roof Replacement</strong>, and more,
              trust certified pros in Brooklyn, Queens, and Manhattan.
              <br />
              <br />
              For trusted roofing services, visit{" "}
              <Link
                href="https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                className="text-[#003269] hover:underline"
                aria-label="Find top waterproofing contractors in New York City for advanced solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="font-bold">
                  SAS Roofing & Waterproofing
                </strong>
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
            aria-labelledby="free-estimate-heading"
          >
            <h2
              id="free-estimate-heading"
              className="text-2xl md:text-3xl font-bold text-[#e63a27]"
            >
              Get a Free Estimate Today
            </h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Protect your home with{" "}
              <strong className="font-bold">SAS Roofing & Waterproofing</strong>
              &apos;s expert services.
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
                  aria-label="Call SAS Roofing and Waterproofing at 3 4 7, 2 2 1, 6 5 4 9 for a free estimate"
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
              href="/"
              className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
              aria-label="Visit SAS Roofing & Waterproofing homepage for more information and services"
            >
              Visit SAS Roofing & Waterproofing
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    {/* FAQ Section with Animation */}
    <FAQSection />
    </>      
  );
}
