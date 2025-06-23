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
    <div
      className="bg-[#00254c] text-white px-4 py-10 sm:px-6 md:px-12"
      role="complementary" // Indicates supplementary content to the main document.
      aria-labelledby="footer-cta-heading" // Associates the div with its main heading.
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-center lg:text-left">
        {/* Logo */}
        <motion.div
          className="min-w-[100px] sm:min-w-[120px] lg:min-w-[160px]"
          {...fadeUp(0)}
        >
          <Link href="/" className="block" aria-label="Go to homepage">
            <Image
              src="/Navbar/Logo.png"
              alt="SAS Roofing and Waterproofing company logo" // More descriptive alt text
              width={200}
              height={200}
              className="border-2"
              loading="lazy"
            />
          </Link>
        </motion.div>

        {/* Vertical Divider */}
        <motion.span
          className="hidden lg:inline-block w-px h-[80px] bg-white/30"
          {...fadeUp(0.1)}
          aria-hidden="true" // Hides the purely decorative divider from screen readers
        />

        {/* Text Content */}
        <motion.div className="max-w-md px-2" {...fadeUp(0.2)}>
          <h1
            id="footer-cta-heading"
            className="text-lg md:text-xl font-bold mb-1 font-inter"
          >
            Roof Problems can’t wait?
          </h1>
          <p className="text-sm text-white/80 leading-snug font-inter">
            Protect your home from leaks and roof repairs — contact us today.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center items-center"
          {...fadeUp(0.3)}
        >
          <Link href="/aboutus" passHref>
            {" "}
            {/* Added passHref for Link wrapping a button */}
            <button
              className="call-hover-button font-inter"
              aria-label="Learn more about SAS Roofing"
            >
              KNOW MORE
            </button>
          </Link>
          <Link
            href="tel:13472216549" // Corrected href from "tel:11347..." to "tel:1347..."
            className="bg-[#e63a27] text-white flex items-center gap-2 px-4 py-2 font-semibold transition hover:bg-[#e63a27] call-hover-button"
            aria-label="Call us now at 3 4 7. 2 2 1. 6 5 4 9" // More descriptive aria-label
          >
            <FaHeadphonesAlt aria-hidden="true" />{" "}
            {/* Hides the icon from screen readers */}
            <span className="text-sm sm:text-base font-inter">
              (347) 221-6549
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
