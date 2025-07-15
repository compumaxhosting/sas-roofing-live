"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHouzz, SiYelp } from "react-icons/si";

export default function Footer() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const paymentIcons = [
    "visa",
    "mastercard",
    "amex",
    "discover",
    "cash",
    "check",
  ];
  const navLinks = [
    { label: "Home", path: "/" }, // Capitalized for display, but keep original for internal paths if needed
    { label: "About Us", path: "/aboutus" },
    { label: "Projects", path: "/projects" },
    { label: "Reviews", path: "/reviews" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact-us" },
    { label: "Blog", path: "/blog" },
  ];
  const socialItems = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      link: "https://www.facebook.com/sasroofingwaterproofing",
    },
    {
      icon: <SiHouzz />,
      label: "Houzz",
      link: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
    },
    {
      icon: <SiYelp />,
      label: "Yelp",
      link: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
    },
    {
      icon: <FaXTwitter />,
      label: "X (Twitter)",
      link: "https://x.com/sasroofing91254",
    },
    {
      icon: (
        <Image
          src="/Footer/angi_logo.png"
          alt="Angi"
          width={28}
          height={28}
          className="object-contain"
        />
      ),
      label: "Angi",
      link: "https://www.angi.com/companylist/us/ny/brooklyn/",
    },
    {
      icon: (
        <Image
          src="/Footer/manta_logo.png"
          alt="Manta"
          width={28}
          height={28}
          className="object-contain"
        />
      ),
      label: "Manta",
      link: "https://www.manta.com/c/mx7pcrf/sas-roofing-waterproofing",
    },
    {
      icon: (
        <Image
          src="/Footer/yellowpages_logo.png"
          alt="Yellow Pages"
          width={28}
          height={28}
          className="object-contain"
        />
      ),
      label: "Yellow Pages",
      link: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
    },
    {
      icon: (
        <Image
          src="/Footer/bbb_logo.png"
          alt="BBB"
          width={28}
          height={28}
          className="object-contain"
        />
      ),
      label: "BBB",
      link: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
    },
    {
      icon: (
        <Image
          src="/Footer/review-us-on-google.jpg"
          alt="review-us-on-google"
          width={28}
          height={28}
          className="object-contain"
        />
      ),
      label: "Review Us On Google",
      link: "https://g.page/r/Cdj4RS1sCCdVEBM/review",
    },
  ];

  return (
    <footer
      className="bg-[#003269] text-white text-sm sm:text-[15px]"
      aria-labelledby="footer-heading"
    >
      <motion.h1
        id="footer-heading" // Added ID for aria-labelledby on footer
        className="px-4 sm:px-6 md:px-12 pt-12 text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12 max-w-4xl mx-auto font-inter"
        {...fadeUp(0)}
      >
        QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
      </motion.h1>

      <div className="px-4 sm:px-6 md:px-12 pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* About Section */}
        <motion.div {...fadeUp(0.1)} aria-labelledby="about-service-heading">
          <h2
            id="about-service-heading"
            className="text-xl font-bold mb-2 font-inter"
          >
            About Service
          </h2>{" "}
          {/* Changed to h3 */}
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
            href="/services"
            className="inline-block mt-6 bg-[#e53935] text-white px-6 py-3 font-semibold hover:bg-[#e63a27] transition text-sm md:text-base More-hover-button font-inter"
            aria-label="Find out more details about SAS Roofing & Waterproofing"
          >
            MORE DETAILS
          </Link>
          <div
            className="flex gap-2 flex-wrap mt-4 items-center"
            aria-label="Accepted payment methods"
          >
            {" "}
            {/* Added aria-label for context */}
            {paymentIcons.map((icon) => (
              <Image
                key={icon}
                src={`/Footer/${icon}.png`}
                alt={`${icon} accepted`} // Clear alt text for payment icons
                width={50}
                height={32}
                className="object-contain h-[35px] w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div {...fadeUp(0.2)} aria-labelledby="useful-links-heading">
          <h2
            id="useful-links-heading"
            className="text-xl font-bold mb-2 font-inter"
          >
            Useful Links
          </h2>{" "}
          {/* Changed to h3 */}
          <div
            className="w-12 h-[2px] bg-[#e63a27] mb-3"
            aria-hidden="true"
          />{" "}
          {/* Decorative line */}
          <ul
            className="space-y-3 mt-4 md:mt-10"
            aria-label="Quick navigation links"
          >
            {" "}
            {/* Added aria-label for context */}
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className="hover:text-[#e63a27] text-sm font-bevietnam"
                  aria-label={`Maps to ${label} page`} // Added specific aria-label for navigation links
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Make Contact */}
        <motion.div {...fadeUp(0.3)} aria-labelledby="make-contact-heading">
          <h2
            id="make-contact-heading"
            className="text-xl font-bold mb-2 font-inter"
          >
            Make Contact
          </h2>{" "}
          {/* Changed to h3 */}
          <div
            className="w-12 h-[2px] bg-[#e63a27] mb-3"
            aria-hidden="true"
          />{" "}
          {/* Decorative line */}
          <div
            className="space-y-2 text-sm md:mt-5"
            aria-label="General inquiries contact information"
          >
            {" "}
            {/* Added aria-label for context */}
            <p className="font-bold font-inter">GENERAL INQUIRIES</p>
            <p className="font-bevietnam">
              Office:{" "}
              <a
                href="tel:3472216549"
                className="hover:underline text-white/90"
                aria-label="Call office at 3 4 7. 2 2 1. 6 5 4 9"
              >
                (347) 221–6549
              </a>
            </p>
            <p className="font-bevietnam">
              Cell:{" "}
              <a
                href="tel:3473949384"
                className="hover:underline text-white/90"
                aria-label="Call cell at 3 4 7. 3 9 4. 9 3 8 4"
              >
                (347) 394–9384
              </a>
            </p>
            <p className="font-bevietnam">
              Email:{" "}
              <a
                href="mailto:sascon09@yahoo.com"
                className="hover:underline text-white/90"
                aria-label="Send email to sascon09@yahoo.com"
              >
                sascon09@yahoo.com
              </a>
            </p>
            <p className="font-bevietnam">
              Email:{" "}
              <a
                href="mailto:amzadh78@gmail.com"
                className="hover:underline text-white/90"
                aria-label="Send email to amzadh78@gmail.com"
              >
                amzadh78@gmail.com
              </a>
            </p>
          </div>
          <div
            className="space-y-2 mt-6 text-sm"
            aria-label="Office location information"
          >
            {" "}
            {/* Added aria-label for context */}
            <p className="font-bold font-inter">OFFICE LOCATION</p>
            <address className="font-bevietnam" aria-label="Our office address">
              {" "}
              {/* Use address tag */}
              552 Rugby Rd, Brooklyn
              <br />
              New York 11230
            </address>
          </div>
          <div className="flex gap-3 flex-wrap items-center mt-6">
            {socialItems.map(({ icon, label, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="text-white hover:text-[#e63a27] transition duration-300 text-xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 text-center">
          <p className="font-bevietnam text-white text-xs sm:text-sm md:text-[15px]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#e63144] font-semibold">
              SAS Roofing & Waterproofing
            </span>{" "}
            All Rights Reserved.
          </p>
          <p className="font-bevietnam text-white text-xs sm:text-sm mt-1">
            Some images sourced from{" "}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white/70 hover:text-white underline transition"
            >
              Freepik
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
