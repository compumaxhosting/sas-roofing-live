"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

export default function MasonryServices() {
  const services = [
    {
      title: "Masonry Services in Brooklyn",
      desc: (
        <>
          We specialize in <strong>brick masonry</strong>,{" "}
          <strong>stone masonry</strong>, and{" "}
          <strong>concrete masonry in Brooklyn</strong>, delivering high-quality
          results for both residential and commercial projects. From{" "}
          <strong>masonry repair in Queens</strong> to custom masonry, our
          experienced team ensures durability and beauty for your property.
        </>
      ),
    },
    {
      title: "Masonry Construction in Manhattan",
      desc: (
        <>
          Our team offers expert{" "}
          <strong>masonry construction in Manhattan</strong>, handling
          everything from new builds to repairs. We are among the{" "}
          <strong>best masonry contractors in Brooklyn</strong>, providing
          services that last.
        </>
      ),
    },
    {
      title: "Residential and Commercial Masonry Services in Manhattan",
      desc: (
        <>
          For homeowners in Manhattan, our{" "}
          <strong>residential and commercial masonry services</strong> include
          everything from <strong>brickwork</strong> to{" "}
          <strong>stone masonry</strong> and <strong>concrete masonry</strong>,
          creating lasting, beautiful structures.
        </>
      ),
    },
    {
      title: "Why Choose SAS Roofing & Waterproofing?",
      isLink: true,
    },
  ];

  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] max-w-7xl mx-auto"
      aria-labelledby="masonry-heading"
    >
      {/* Header Section */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 mb-12"
      >
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />
            <span
              className="text-sm font-bold text-[#e63a27] uppercase font-inter"
              aria-hidden="true"
            >
              Top Masonry Contractors NYC
            </span>
          </div>
          <h1
            id="masonry-heading"
            className="text-3xl font-bold text-[#003269] leading-snug font-inter"
          >
            Expert <strong>Masonry Services in Brooklyn</strong>,{" "}
            <strong>Manhattan</strong> and <strong>Queens</strong>
          </h1>
        </div>

        <Link
          href="/services"
          className="group border-4 border-[#003269] p-2 inline-block focus:outline focus:outline-[#003269]"
          aria-label="View all roofing services offered by SAS Roofing & Waterproofing"
        >
          <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
            All Services
          </div>
        </Link>
      </motion.header>

      {/* Intro Paragraph */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-sm md:text-base text-gray-700 mb-6 font-bevietnam max-w-5xl"
      >
        <strong>SAS Roofing & Waterproofing</strong> provides top-tier{" "}
        <strong>masonry services</strong> across <strong>Brooklyn</strong>,{" "}
        <strong>Manhattan</strong>, and <strong>Queens</strong>. Whether you
        need <strong>brickwork contractors in Brooklyn</strong> or{" "}
        <strong>stone masonry in Brooklyn</strong>, we offer expert solutions
        tailored to your needs.
      </motion.p>

      {/* Services */}
      <div className="grid gap-10">
        {services.map(({ title, desc, isLink }, idx) => (
          <motion.article
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#003269] font-inter">
              {title}
            </h2>
            {isLink ? (
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                At <strong>SAS Roofing & Waterproofing</strong>, we are
                committed to delivering exceptional masonry solutions. Our team
                provides reliable, long-lasting{" "}
                <strong>masonry construction</strong> and repair across{" "}
                <strong>Brooklyn</strong>, <strong>Manhattan</strong>, and{" "}
                <strong>Queens</strong>. Visit{" "}
                <Link
                  href="/"
                  className="text-[#e63a27] hover:underline font-bold"
                  aria-label="Visit SAS Roofing & Waterproofing homepage"
                >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                to learn more.
              </p>
            ) : (
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                {desc}
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
