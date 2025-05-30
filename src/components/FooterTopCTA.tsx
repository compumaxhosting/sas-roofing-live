"use client";
import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterTopCTA() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });
  return (
    <section
      className="bg-[#00254c] text-white px-4 py-10 sm:px-6 md:px-12"
      aria-label="Call to action for roofing problems" // More specific label for the section
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-center lg:text-left">
        {/* Logo */}
        <motion.div
          className="min-w-[100px] sm:min-w-[120px] lg:min-w-[160px]"
          {...fadeUp(0)}
        >
          <Link href="/" className="block" aria-label="SAS Roofing home page">
            {" "}
            {/* Added aria-label for the logo link */}
            <Image
              src="/Logo.png"
              alt="SAS Roofing and Waterproofing Company Logo" // More descriptive alt text
              width={200}
              height={200}
              className="border-2"
              loading="lazy"
            />
          </Link>
        </motion.div>

        {/* Vertical Divider - purely decorative, hide from screen readers */}
        <motion.span
          className="hidden lg:inline-block w-px h-[80px] bg-white/30"
          {...fadeUp(0.1)}
          aria-hidden="true" // Hide decorative element
        />

        {/* Text Content */}
        <motion.div className="max-w-md px-2" {...fadeUp(0.2)}>
          <h2 className="text-lg md:text-xl font-bold mb-1 font-inter">
            {" "}
            {/* Changed to h2 as it's a primary heading in this section */}
            Roof Problems can’t wait?
          </h2>
          <p className="text-sm text-white/80 leading-snug font-inter">
            Protect your home from leaks and roof repairs — contact us today.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center items-center"
          {...fadeUp(0.3)}
        >
          {/* Using a Link for "KNOW MORE" is good, but directly calling button inside Link is not semantic. */}
          {/* It's better to style the Link directly as a button or use a button that triggers navigation. */}
          {/* Replaced with a styled Link for better semantics */}
          <Link
            href="/aboutus"
            className="call-hover-button font-inter inline-flex items-center justify-center px-4 py-2" // Added flex/justify/items for consistent styling with the call button
            aria-label="Learn more about SAS Roofing" // Specific aria-label for clarity
          >
            KNOW MORE
          </Link>

          <Link
            href="tel:13472216549" // Corrected href to standard tel: format
            className="bg-[#e63a27] text-white flex items-center gap-2 px-4 py-2 font-semibold transition hover:bg-[#e63a27] call-hover-button"
            aria-label="Call SAS Roofing at (347) 221-6549" // Specific aria-label for the phone number
          >
            <FaHeadphonesAlt aria-hidden="true" />{" "}
            {/* Icon is decorative, hide from screen readers */}
            <span className="text-sm sm:text-base font-inter">
              (347) 221-6549
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
