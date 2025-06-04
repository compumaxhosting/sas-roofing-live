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

export default function WaterproofingServices() {
  const services = [
    {
      title: "Waterproofing Solutions in Brooklyn",
      desc: "We specialize in basement waterproofing and roof waterproofing in Brooklyn, ensuring your property stays dry and protected. Our waterproofing solutions in Brooklyn are designed to prevent leaks and mold growth.",
    },
    {
      title: "Foundation Waterproofing Manhattan",
      desc: "Protect your foundation with our foundation waterproofing services in Manhattan. We seal cracks and provide long-lasting solutions to keep your property secure.",
    },
    {
      title: "Waterproofing Experts in Queens",
      desc: "Our team of waterproofing experts in Queens offers comprehensive services to protect your home or business from water damage. We handle everything from exterior waterproofing to basement waterproofing.",
    },
    {
      title: "Commercial Waterproofing Manhattan",
      desc: "For businesses in Manhattan, we offer commercial waterproofing, ensuring your commercial property stays safe from water-related issues.",
    },
    {
      title: "Why Choose SAS Roofing & Waterproofing?",
    },
  ];

  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] lg:mx-30"
      aria-labelledby="waterproofing-heading" // Added aria-labelledby to link to the main heading
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
            {/* Added aria-hidden */}
            <span className="text-sm font-bold text-[#e63a27] uppercase font-inter">
              Waterproofing Services
            </span>
          </div>
          <h2
            id="waterproofing-heading" // Added an ID for aria-labelledby
            className="text-3xl font-bold text-[#003269] leading-snug font-inter"
          >
            Professional Waterproofing Services in Brooklyn, Manhattan and
            Queens
          </h2>
        </div>

        <Link
          href="/waterproofing-contractors-NY"
          className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
          aria-label="View all waterproofing services" // More descriptive aria-label for the link
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
        SAS Roofing & Waterproofing offers expert waterproofing services across
        Brooklyn, Manhattan, and Queens. From basement waterproofing in Brooklyn
        to commercial waterproofing in Manhattan, we provide reliable solutions
        to keep your property safe from water damage.
      </motion.p>

      <div className="grid gap-8">
        {services.map(({ title, desc }, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
            // If the div acts as a distinct section for the service,
            // you might consider role="region" or role="article" and aria-labelledby="title-id"
            // However, given it's a list, the h3 is often sufficient.
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#003269]">
              {title}
            </h3>
            {/* Conditional rendering for the last item (the link) */}
            {idx === services.length - 1 ? (
              <div className="text-sm md:text-base text-gray-700 font-bevietnam">
                At SAS Roofing & Waterproofing, we provide top-quality, durable
                waterproofing services in Brooklyn, Manhattan, and Queens.
                Protect your property today by Visit{" "}
                <Link
                  href="/"
                  className="text-[#e63a27] hover:text-[#003269]"
                  // Add aria-label if the link text alone isn't clear enough out of context,
                  // but "SAS Roofing & Waterproofing" is quite clear here.
                  // For internal links, target="_blank" and rel="noopener noreferrer" are not typically needed.
                >
                  SAS Roofing & Waterproofing
                </Link>
              </div>
            ) : (
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                {desc}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
