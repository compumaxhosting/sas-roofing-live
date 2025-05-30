"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const paymentIcons = [
    { name: "Visa", src: "visa" },
    { name: "Mastercard", src: "mastercard" },
    { name: "Amex", src: "amex" },
    { name: "Discover", src: "discover" },
    { name: "Cash", src: "cash" },
    { name: "Check", src: "check" },
  ];
  const navLinks = [
    { label: "Home", path: "/" }, // Capitalized for consistency in labels
    { label: "About Us", path: "/aboutus" },
    { label: "Projects", path: "/projects" },
    { label: "Reviews", path: "/reviews" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact-us" },
    { label: "Blog", path: "/blog" },
  ];
  const socialIcons = [
    {
      src: "facebook",
      path: "https://www.facebook.com/sasroofingwaterproofing",
      label: "Facebook",
    },
    {
      src: "houzz",
      path: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      label: "Houzz",
    },
    {
      src: "angi",
      path: "https://www.angi.com/companylist/us/ny/brooklyn/",
      label: "Angi",
    },
    {
      src: "manta",
      path: "https://www.manta.com/c/mx7pcrf/sas-roofing-waterproofing",
      label: "Manta",
    },
    {
      src: "yellowpages",
      path: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
      label: "Yellow Pages",
    },
    {
      src: "yelp",
      path: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
      label: "Yelp",
    },
    {
      src: "x",
      path: "https://x.com/sasroofing91254",
      label: "X (formerly Twitter)",
    }, // More explicit label
    {
      src: "bbb",
      path: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
      label: "Better Business Bureau", // Full name
    },
    {
      src: "google_my_business",
      path: "https://www.google.com/maps/place/SAS+Roofing+&+Waterproofing", // REMINDER: Verify this Google Maps URL is correct
      label: "Google Maps Profile", // More explicit label
    },
  ];
  return (
    <footer
      className="bg-[#003269] text-white text-sm sm:text-[15px]"
      role="contentinfo" // Explicitly defines the footer as a landmark region for general site info
      aria-label="Site Footer" // Provides a more specific label for the entire footer landmark
    >
      <motion.h2
        className="px-4 sm:px-6 md:px-12 pt-12 text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12 max-w-4xl mx-auto font-inter"
        {...fadeUp(0)}
      >
        QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
      </motion.h2>

      <div className="px-4 sm:px-6 md:px-12 pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* About Section */}
        <motion.div {...fadeUp(0.1)}>
          <h3
            className="text-xl font-bold mb-2 font-inter"
            id="about-service-heading"
          >
            {" "}
            {/* Use h3 for sub-headings, add ID */}
            About Service
          </h3>
          <div
            className="w-12 h-[2px] bg-[#e63a27] mb-3"
            aria-hidden="true"
          />{" "}
          {/* Decorative line */}
          <p className="text-white/90 leading-relaxed md:mt-10 text-sm font-bevietnam">
            “SAS Roofing & Waterproofing is a family-owned and operated business
            serving the greater Brooklyn, New York area since 2000.“
          </p>
          <p className="font-bold mt-4 font-inter">WE ARE AVAILABLE</p>
          <p className="text-white/80 font-bevietnam text-sm">
            Mon–Sat: 09.00 am to 6.30 pm
          </p>
          <Link
            href="/aboutus" // Changed to /aboutus for "MORE DETAILS" specific to About Us
            className="inline-block mt-6 bg-[#e53935] text-white px-6 py-3 font-semibold hover:bg-[#e63a27] transition text-sm md:text-base More-hover-button font-inter"
            aria-label="Learn more about SAS Roofing & Waterproofing" // More specific label
          >
            MORE DETAILS
          </Link>
          <div
            className="flex gap-2 flex-wrap mt-4 items-center"
            aria-label="Accepted Payment Methods"
          >
            {" "}
            {/* Label for payment icons */}
            {paymentIcons.map(({ name, src }) => (
              <Image
                key={src}
                src={`/${src}_logo.png`}
                alt={`${name} accepted`} // Clear alt text for each payment icon
                width={50}
                height={32}
                className="object-contain h-[35px] w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div {...fadeUp(0.2)}>
          <h3
            className="text-xl font-bold mb-2 font-inter"
            id="useful-links-heading"
          >
            {" "}
            {/* Use h3, add ID */}
            Useful Links
          </h3>
          <div
            className="w-12 h-[2px] bg-[#e63a27] mb-3"
            aria-hidden="true"
          />{" "}
          {/* Decorative line */}
          <nav aria-labelledby="useful-links-heading">
            {" "}
            {/* Nav landmark for navigation */}
            <ul className="space-y-3 mt-4 md:mt-10">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="hover:text-[#e63a27] text-sm font-bevietnam"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Make Contact */}
        <motion.div {...fadeUp(0.3)}>
          <h3
            className="text-xl font-bold mb-2 font-inter"
            id="make-contact-heading"
          >
            {" "}
            {/* Use h3, add ID */}
            Make Contact
          </h3>
          <div
            className="w-12 h-[2px] bg-[#e63a27] mb-3"
            aria-hidden="true"
          />{" "}
          {/* Decorative line */}
          <div className="space-y-2 text-sm md:mt-5">
            <p className="font-bold font-inter">GENERAL INQUIRIES</p>
            {/* Phone numbers are now links */}
            <p className="font-bevietnam">
              Office:{" "}
              <a
                href="tel:13472216549"
                aria-label="Call office at (347) 221-6549"
                className="hover:underline"
              >
                (347) 221–6549
              </a>
            </p>
            <p className="font-bevietnam">
              Cell:{" "}
              <a
                href="tel:13473949384"
                aria-label="Call cell at (347) 394-9384"
                className="hover:underline"
              >
                (347) 394–9384
              </a>
            </p>
            {/* Email addresses are now links */}
            <p className="font-bevietnam">
              Email:{" "}
              <a
                href="mailto:sascon09@yahoo.com"
                aria-label="Email SAS Roofing via sascon09@yahoo.com"
                className="hover:underline"
              >
                sascon09@yahoo.com
              </a>
            </p>
            <p className="font-bevietnam">
              Email:{" "}
              <a
                href="mailto:amzadh78@gmail.com"
                aria-label="Email SAS Roofing via amzadh78@gmail.com"
                className="hover:underline"
              >
                amzadh78@gmail.com
              </a>
            </p>
          </div>
          <div className="space-y-2 mt-6 text-sm">
            <p className="font-bold font-inter">OFFICE LOCATION</p>
            <address className="font-bevietnam not-italic">
              {" "}
              {/* Use <address> for semantic location */}
              552 Rugby Rd, Brooklyn
              <br />
              New York 11230
            </address>
          </div>
          <div
            className="flex gap-2 flex-wrap mt-6 items-center"
            aria-label="Social Media Links"
          >
            {" "}
            {/* Label for social icons */}
            {socialIcons.map(({ src, path, label }) => (
              <a
                key={src}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page (opens in a new tab)`} // Explicitly mention new tab
              >
                <Image
                  src={`/${src}_logo.png`}
                  alt={label} // Use label for alt text for clarity
                  width={35}
                  height={35}
                  className="object-contain h-[28px] w-auto"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm md:text-[15px]">
          <p className="text-center md:text-left fontfont-bevietnam">
            © 2025{" "}
            <span className="text-[#e63144] font-bevietnam">
              SAS Roofing & Waterproofing
            </span>{" "}
            All Rights Reserved.
          </p>
          <nav aria-label="Footer Legal Links">
            {" "}
            {/* Nav landmark for legal links */}
            <ul className="flex gap-x-6 flex-wrap justify-center md:justify-end font-bevietnam">
              {["Terms of Service", "Privacy Policy"].map((text) => (
                <li key={text}>
                  <Link href="/" className="hover:underline">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
