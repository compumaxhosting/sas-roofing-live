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
      title: "Masonry Services in Brooklyn",
      desc: "We specialize in brick masonry, stone masonry, and concrete masonry in Brooklyn, delivering high-quality results for both residential and commercial projects. From masonry repair in Queens to custom masonry in Queens, our experienced team ensures durability and beauty for your property.",
      id: "masonry-brooklyn", // Added unique ID for accessibility
    },
    {
      title: "Masonry Construction in Manhattan",
      desc: "Our team offers expert masonry construction in Manhattan, handling everything from new builds to repairs. We are among the best masonry contractors in Brooklyn, providing services that last.",
      id: "masonry-manhattan", // Added unique ID for accessibility
    },
    {
      title: "Residential and Commercial Masonry Services in Manhattan",
      desc: "For homeowners in Manhattan, our residential and commercial masonry services include everything from brickwork to stone and concrete masonry, creating lasting, beautiful structures.",
      id: "residential-commercial-masonry", // Added unique ID for accessibility
    },
    {
      title: "Why Choose SAS Roofing & Waterproofing?",
      isLink: true,
      id: "why-choose-sas", // Added unique ID for accessibility
    },
  ];

  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] lg:mx-30"
      aria-labelledby="main-services-heading" // Associates section with its main heading
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
            {/* Decorative element */}
            <span className="text-sm font-bold text-[#e63a27] uppercase font-inter">
              Top Masonry Contractors NYC
            </span>
          </div>
          <h2
            id="main-services-heading" // Main heading for the section
            className="text-3xl font-bold text-[#003269] leading-snug font-inter"
          >
            Expert Masonry Services in Brooklyn, Manhattan and Queens
          </h2>
        </div>

        <Link
          href="/masonry-services-brooklyn-ny"
          className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
          aria-label="View all masonry services" // Descriptive label for the link
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
        SAS Roofing & Waterproofing provides top-tier masonry services across
        Brooklyn, Manhattan, and Queens. Whether you need brickwork contractors
        in Brooklyn or stone masonry in Brooklyn, we offer expert solutions
        tailored to your needs.
      </motion.p>

      <div className="grid gap-8">
        {services.map(({ title, desc, isLink, id }, idx) => (
          <motion.div
            key={id || idx} // Use unique ID if available
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
            role="article" // Each service item is a distinct, self-contained piece of content
            aria-labelledby={`${id}-heading`} // Associate article with its heading
          >
            <h3
              id={`${id}-heading`} // Unique ID for each service title
              className="text-xl md:text-2xl font-bold text-[#003269]"
            >
              {title}
            </h3>
            {isLink ? (
              <div
                className="text-sm md:text-base text-gray-700 font-bevietnam"
                aria-describedby={`${id}-heading`} // Associates this descriptive text with the main heading
              >
                At SAS Roofing & Waterproofing, we are committed to delivering
                exceptional masonry solutions. Our team provides reliable,
                long-lasting masonry construction and repair across Brooklyn,
                Manhattan, and Queens. Visit{" "}
                <Link
                  href="/"
                  className="text-[#e63a27] hover:text-[#003269]"
                  aria-label="Visit SAS Roofing & Waterproofing homepage to learn more" // Descriptive label for the link
                >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                to learn more.
              </div>
            ) : (
              <p
                className="text-sm md:text-base text-gray-700 font-bevietnam"
                aria-describedby={`${id}-heading`} // Associates description with its heading
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
