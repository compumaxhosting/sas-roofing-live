"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  margin: number[];
};

const features = [
  {
    id: "01",
    title: "Safety\n& Reliability",
    description:
      "Shielding Your Property with Unmatched Safety. Reliable Roofing.",
    // Added specific link for each feature, assuming /safety-reliability is the detail page
    // If all 'DETAILS' links go to '/reviews', then this `featureLink` isn't strictly necessary.
    // However, it's good practice for each feature to potentially have its own detail page.
    featureLink: "/reviews",
  },
  {
    id: "02",
    title: "High Quality\nMaterials",
    description:
      "Premium Materials for Superior Protection. Only the Best for Your Roof’s Durability.",
    featureLink: "/reviews",
  },
  {
    id: "03",
    title: "Professional\nTeam",
    description:
      "Expert Hands, Exceptional Results. Trained Professionals, Trusted Solutions.",
    featureLink: "/reviews",
  },
  {
    id: "04",
    title: "Accredited\nService",
    description:
      "Certified Excellence in Roofing & Waterproofing. Accredited for Quality",
    featureLink: "/reviews",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Features = ({ margin }: Props) => (
  <div
    // Consider adding a role="region" and aria-labelledby if this div is a significant landmark,
    // though the inner <section> handles it well already.
    className={`relative z-0 bg-[#f9f9f9] mb-${margin[1]} md:mb-${margin[1]} shadow-2xl`}
  >
    {/* Decorative background element, hide from screen readers */}
    <div
      className="absolute bottom-0 left-0 w-full h-9/10 lg:h-80 shadow-xl bg-[#08386c] z-[-1]"
      aria-hidden="true"
    />

    <section
      className="py-16 relative z-10"
      role="region" // Designates this as a perceivable section of content
      aria-labelledby="features-heading" // Links the section to its main heading
    >
      {/* Main heading for the section (visually hidden but accessible) */}
      <h2 id="features-heading" className="sr-only">
        Our Key Features
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 px-12">
        {features.map(({ id, title, description, featureLink }, i) => (
          <motion.div
            key={id}
            className="relative bg-[#003269] text-white text-center h-[370px] p-6 overflow-hidden feature-card"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            // Optional: If this card itself is interactively foldable/expandable,
            // you might add aria-labelledby to point to the h3, but for static cards, it's not necessary.
          >
            {/* Decorative ID element, hide from screen readers */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-top-shape flex items-center justify-center font-bold text-lg font-inter"
              aria-hidden="true"
            >
              {id}
            </div>

            {/* Use `h3` for the feature title. The `whitespace-pre-line` is fine. */}
            <h3 className="pt-20 pb-6 text-base md:text-lg font-semibold whitespace-pre-line font-inter">
              {title}
            </h3>
            {/* Use `p` for the description text. */}
            <p className="text-sm md:text-base text-gray-300 font-bevietnam">
              {description}
            </p>

            {/*
              The `Link` element is crucial for accessibility here.
              We need to make its `aria-label` descriptive.
              If `featureLink` is unique per feature, use that for a more specific label.
              Otherwise, use a generic label like "Learn more about [feature title]".
            */}
            <Link
              href={featureLink || "/reviews"} // Use featureLink if available, fallback to /reviews
              aria-label={`Learn more about ${title.replace(/\n/g, " ")}`} // More descriptive label
              className="group absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-bottom-shape flex items-center justify-center text-white text-sm font-semibold font-inter"
            >
              {/* Icon is decorative within the link, hide from screen readers */}
              <FaArrowRight
                className="mr-2 transform transition-transform duration-300 group-hover:-rotate-50"
                aria-hidden="true"
              />
              DETAILS
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Features;

// Add this class to your global CSS or a utility file if not already present
// For Tailwind CSS, you might add it to your `tailwind.config.js` or a global CSS file.
/*
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
*/
