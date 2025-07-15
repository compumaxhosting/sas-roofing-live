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

const services = [
  {
    title: "Waterproofing Solutions in Brooklyn",
    desc: (
      <>
        We specialize in <strong>basement waterproofing</strong> and{" "}
        <strong>roof waterproofing in Brooklyn</strong>, ensuring your property
        stays dry and protected. Our{" "}
        <strong>waterproofing solutions in Brooklyn</strong> are designed to
        prevent leaks and mold growth.
      </>
    ),
  },
  {
    title: "Foundation Waterproofing Manhattan",
    desc: (
      <>
        Protect your foundation with our{" "}
        <strong>foundation waterproofing services in Manhattan</strong>. We seal
        cracks and provide long-lasting solutions to keep your property secure.
      </>
    ),
  },
  {
    title: "Waterproofing Experts in Queens",
    desc: (
      <>
        Our team of <strong>waterproofing experts in Queens</strong> offers
        comprehensive services to protect your home or business from water
        damage. We handle everything from{" "}
        <strong>exterior waterproofing</strong> to{" "}
        <strong>basement waterproofing</strong>.
      </>
    ),
  },
  {
    title: "Commercial Waterproofing Manhattan",
    desc: (
      <>
        For businesses in Manhattan, we offer{" "}
        <strong>commercial waterproofing</strong>, ensuring your commercial
        property stays safe from water-related issues.
      </>
    ),
  },
  {
    title: "Exterior Walls Waterproofing",
    desc: (
      <>
        Protect your property with our specialized {" "}
        <strong>exterior walls waterproofing services.</strong> We prevent water
        infiltration through brick, stone, stucco, and concrete walls—keeping
        your building dry, insulated, and mold-free. Whether it’s a high-rise in
        Manhattan, a townhouse in Queens, or a commercial building in The Bronx
        or Brooklyn, our team ensures long-lasting protection against moisture
        damage. We proudly serve Brooklyn, Manhattan, Queens, and The Bronx.
      </>
    ),
  },
  {
    title: "Why Choose SAS Roofing & Waterproofing?",
    isLink: true,
  },
];


export default function WaterproofingServices() {
  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] max-w-7xl mx-auto"
      aria-labelledby="waterproofing-heading"
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
              Waterproofing Services
            </span>
          </div>
          <h1
            id="waterproofing-heading"
            className="text-3xl font-bold leading-snug font-inter"
          >
            Professional{" "}
            <strong>Waterproofing Services in Brooklyn, Manhattan</strong> and{" "}
            <strong>Queens</strong>
          </h1>
        </div>

        <Link
          href="/services"
          className="group border-4 border-[#003269] p-2 inline-block focus:outline focus:outline-[#003269]"
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
        className="text-sm md:text-base text-gray-700 mb-6 font-bevietnam"
      >
        <strong>SAS Roofing & Waterproofing</strong> offers expert{" "}
        <strong>waterproofing services</strong> across <strong>Brooklyn</strong>
        , <strong>Manhattan</strong>, and <strong>Queens</strong>. From{" "}
        <strong>basement waterproofing in Brooklyn</strong> to{" "}
        <strong>commercial waterproofing in Manhattan</strong>, we provide
        reliable solutions to keep your property safe from water damage.
      </motion.p>

      {/* Services List */}
      <ul className="grid gap-10 list-none p-0 m-0">
        {services.map(({ title, desc, isLink }, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
          >
            <article>
              <h2 className="text-xl md:text-2xl mb-3 font-bold text-[#003269]">
                {title}
              </h2>
              {isLink ? (
                <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                  At <strong>SAS Roofing & Waterproofing</strong>, we provide
                  top-quality, durable{" "}
                  <strong>waterproofing services in Brooklyn</strong>,{" "}
                  <strong>Manhattan</strong>, and <strong>Queens</strong>.
                  Protect your property today by visiting{" "}
                  <Link
                    href="/"
                    className="text-[#e63a27] hover:underline font-bold"
                  >
                    SAS Roofing & Waterproofing
                  </Link>
                  .
                </p>
              ) : (
                <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                  {desc}
                </p>
              )}
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
