"use client";
import Image from "next/image";
import { FaHeadphonesAlt, FaMapMarkerAlt } from "react-icons/fa";
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
      role="complementary"
      aria-labelledby="footer-cta-heading"
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
              alt="SAS Roofing and Waterproofing company logo"
              width={200}
              height={200}
              className="border-2"
              loading="lazy"
            />
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.span
          className="hidden lg:inline-block w-px h-[80px] bg-white/30"
          {...fadeUp(0.1)}
          aria-hidden="true"
        />

        {/* Main CTA Text */}
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
            <button
              className="call-hover-button font-inter"
              aria-label="Learn more about SAS Roofing"
            >
              KNOW MORE
            </button>
          </Link>
          <Link
            href="tel:13472216549"
            className="bg-[#e63a27] text-white flex items-center gap-2 px-4 py-2 font-semibold transition hover:bg-[#e63a27] call-hover-button"
            aria-label="Call us now at 3 4 7. 2 2 1. 6 5 4 9"
          >
            <FaHeadphonesAlt aria-hidden="true" />
            <span className="text-sm sm:text-base font-inter">
              (347) 221-6549
            </span>
          </Link>
        </motion.div>
      </div>

      {/* New Service Area Section */}
      <motion.div
        className="mt-10 bg-[#003269] p-6 rounded-xl text-sm sm:text-base font-inter xl:max-w-2/3 mx-auto"
        {...fadeUp(0.4)}
      >
        <h2 className="text-lg md:text-xl font-bold text-white flex items-center justify-center gap-2 mb-3">
          <FaMapMarkerAlt className="text-[#e63a27]" aria-hidden="true" />
          Need Reliable Roofing, Waterproofing, or Masonry Services?
        </h2>
        <p className="text-white/80 mb-3">
          SAS Roofing & Waterproofing proudly serves:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-white/90">
          <div>
            <strong className="block mb-1 text-white">
              Brooklyn Zip Codes:
            </strong>
            <span>
              11201, 11205, 11206, 11215, 11216, 11217, 11218, 11221, 11231,
              11233, 11238
            </span>
          </div>
          <div>
            <strong className="block mb-1 text-white">
              Manhattan Zip Codes:
            </strong>
            <span>
              10004, 10005, 10006, 10007, 10012, 10013, 10014, 10038, 10280
            </span>
          </div>
        </div>
        <p className="mt-4 text-white/80">
          Whether you&lsquo;re searching for{" "}
          <strong>roof repair near me</strong>, a trusted{" "}
          <strong>waterproofing contractor in Brooklyn</strong>, or{" "}
          <strong>masonry services in Manhattan</strong> — our local team is
          ready to help. We&apos;re trusted by your neighbors for fast,
          affordable, and quality service.
        </p>
        <p className="mt-4 text-center">
          <strong>Contact us today for a free estimate!</strong>
        </p>
      </motion.div>
    </div>
  );
}
