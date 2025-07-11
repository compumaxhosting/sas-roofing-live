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
    title: "Top Roofing Services in Brooklyn",
    desc: (
      <>
        We offer comprehensive <strong>roofing services in Brooklyn</strong>,
        including <strong>roof repair</strong> and{" "}
        <strong>roof installation</strong>. Our team specializes in{" "}
        <strong>flat roofs in Brooklyn</strong>, ensuring durability and
        protection against harsh weather.
      </>
    ),
  },
  {
    title: "Residential & Commercial Roofing Brooklyn",
    desc: (
      <>
        From <strong>residential roofing</strong> to{" "}
        <strong>commercial roofing in Brooklyn</strong>, we handle everything
        from minor repairs to large installations, ensuring your property stays
        safe and secure.
      </>
    ),
  },
  {
    title: "Roof Repair and Replacement Across NYC",
    desc: (
      <>
        Whether you need <strong>roof repair in Manhattan</strong>,{" "}
        <strong>roof repair in Queens</strong>, or a{" "}
        <strong>roof replacement in Queens</strong>, SAS Roofing & Waterproofing
        provides fast and efficient solutions for all roofing types.
      </>
    ),
  },
  {
    title: "Affordable Roofing Solutions",
    desc: (
      <>
        Looking for <strong>affordable roofing in Manhattan</strong>? SAS
        Roofing & Waterproofing offers high-quality services that fit your
        budget, without compromising on durability or performance.
      </>
    ),
  },
  {
    title: "Contact SAS Roofing & Waterproofing",
    isLink: true,
  },
];

export default function RoofingServices() {
  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] max-w-7xl mx-auto"
      aria-labelledby="roofing-services-heading"
    >
      {/* Header */}
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
              Roofing Services
            </span>
          </div>
          <h1
            id="roofing-services-heading"
            className="text-3xl font-bold leading-snug font-inter"
          >
            Expert <strong>Roofing Services in Brooklyn, Queens</strong> and{" "}
            <strong>Manhattan</strong>
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

      {/* Intro */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-sm md:text-base text-gray-700 mb-6 font-bevietnam"
      >
        <strong>SAS Roofing & Waterproofing</strong> is your trusted{" "}
        <strong>roofing</strong> partner for both{" "}
        <strong>residential roofing</strong> and{" "}
        <strong>commercial roofing</strong> across <strong>Brooklyn</strong>,{" "}
        <strong>Queens</strong>, and <strong>Manhattan</strong>. Whether you
        need <strong>roof repair in Brooklyn</strong>,{" "}
        <strong>roof installation in Manhattan</strong>, or{" "}
        <strong>affordable roofing in Queens</strong>, we provide reliable and
        high-quality solutions tailored to your needs.
      </motion.p>

      {/* Services */}
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
              <h2 className="text-xl md:text-2xl font-bold text-[#003269] font-inter">
                {title}
              </h2>

              {isLink ? (
                <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                  For expert <strong>roofing contractors in Queens</strong> and
                  beyond, reach out to{" "}
                  <Link
                    href="/"
                    className="text-[#e63a27] hover:underline font-bold"
                  >
                    SAS Roofing & Waterproofing
                  </Link>{" "}
                  to schedule a consultation!
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
