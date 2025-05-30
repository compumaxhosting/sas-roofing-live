"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RoofingServices() {
  const services = [
    {
      title: "Top Roofing Services in Brooklyn",
      desc: "We offer comprehensive roofing services in Brooklyn, including roof repair and roof installation. Our team specializes in flat roofs in Brooklyn, ensuring durability and protection against harsh weather.",
      id: "top-roofing-brooklyn", // Added unique ID
    },
    {
      title: "Residential & Commercial Roofing Brooklyn",
      desc: "From residential roofing to commercial roofing in Brooklyn, we handle everything from minor repairs to large installations, ensuring your property stays safe and secure.",
      id: "res-com-roofing-brooklyn", // Added unique ID
    },
    {
      title: "Roof Repair and Replacement Across NYC",
      desc: "Whether you need roof repair in Manhattan, roof repair in Queens, or a roof replacement in Queens, SAS Roofing & Waterproofing provides fast and efficient solutions for all roofing types.",
      id: "repair-replacement-nyc", // Added unique ID
    },
    {
      title: "Affordable Roofing Solutions",
      desc: "Looking for affordable roofing in Manhattan? SAS Roofing & Waterproofing offers high-quality services that fit your budget, without compromising on durability or performance.",
      id: "affordable-roofing", // Added unique ID
    },
    {
      title: "Contact SAS Roofing & Waterproofing",
      isLink: true,
      id: "contact-sas", // Added unique ID
    },
  ];

  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] lg:mx-30"
      aria-labelledby="roofing-services-main-heading" // Associates the section with its main heading
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 mb-12"
      >
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />{" "}
            {/* Decorative element, hidden from screen readers */}
            <span className="text-sm font-bold text-[#e63a27] uppercase font-inter">
              Roofing Services
            </span>
          </div>
          <h2
            id="roofing-services-main-heading" // Main heading for the section
            className="text-3xl font-bold text-[#003269] leading-snug font-inter"
          >
            Expert Roofing Services in Brooklyn, Queens and Manhattan
          </h2>
        </div>

        <Link
          href="/roofing-contractors-brooklyn"
          className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
          aria-label="View all roofing services" // More descriptive label for accessibility
        >
          <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
            All Services
          </div>
        </Link>
      </motion.div>

      {/* Description Paragraph */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-sm md:text-base text-gray-700 mb-6 font-bevietnam"
      >
        SAS Roofing & Waterproofing is your trusted roofing partner for both
        residential and commercial roofing across Brooklyn, Queens, and
        Manhattan. Whether you&apos;re in need of roof repair in Brooklyn, roof
        installation in Manhattan, or affordable roofing in Queens, we provide
        reliable and high-quality solutions tailored to your needs.
      </motion.p>

      <div className="grid gap-8">
        {services.map(({ title, desc, isLink, id }, idx) => (
          <motion.div
            key={id || idx} // Use unique ID for key
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
            role="article" // Each service item is a distinct, self-contained piece of content
            aria-labelledby={`${id}-heading`} // Associates the article with its heading
          >
            <h3
              id={`${id}-heading`} // Unique ID for each service title
              className="text-xl md:text-2xl font-bold text-[#003269] font-inter"
            >
              {title}
            </h3>
            {isLink ? (
              <div
                className="text-sm md:text-base text-gray-700 font-bevietnam"
                // aria-describedby could be used here if additional context is needed from the heading
              >
                For expert roofing contractors in Queens and beyond, reach out
                to SAS Roofing & Waterproofing today. Visit{" "}
                <Link
                  href="/"
                  className="text-[#e63a27] hover:text-[#003269]"
                  aria-label="Visit SAS Roofing & Waterproofing homepage to schedule a consultation" // More descriptive label
                >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                to schedule a consultation!
              </div>
            ) : (
              <p
                className="text-sm md:text-base text-gray-700 font-bevietnam"
                // aria-describedby could be used here if additional context is needed from the heading
              >
                {desc}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
