"use client";

import React, { Suspense } from "react"; // Added Suspense
import { motion } from "framer-motion";
import Link from "next/link";
import { Loader2 } from "lucide-react"; // Example: using lucide-react for a spinner icon

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface OurProjectsProps {
  gallery: string;
}

const OurProjects: React.FC<OurProjectsProps> = ({ gallery }) => {
  // Using React.lazy for dynamic imports with Suspense for a better loading state
  const GallerySection = React.useMemo(() => {
    // Only create the lazy component once
    if (gallery === "1") {
      return React.lazy(() => import("./GallerySection1")); // Assuming GallerySection1
    } else if (gallery === "2") {
      return React.lazy(() => import("./GallerySection2")); // Assuming GallerySection2
    }
    // Fallback or handle other gallery values as needed
    return null;
  }, [gallery]);
  //updated for narrator
  return (
    <main
      className="px-4 sm:px-6 lg:px-12 py-8 bg-[#f9f9f9] mb-10 md:mb-15 shadow-2xl"
      aria-label="Our Projects Section"
    >
      <motion.section
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        // This section contains introductory content about projects
        aria-labelledby="projects-heading" // Link to the main heading
      >
        {/* Heading & Subtitle */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />{" "}
            {/* Decorative element, hide from screen readers */}
            <span className="text-sm sm:text-md lg:text-base font-bold text-[#e63a27] uppercase whitespace-nowrap font-inter">
              Our Projects
            </span>
          </div>
          <h1
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter"
          >
            Recently Completed Works
          </h1>
        </div>

        {/* Button */}
        <Link
          href="/projects"
          className="group self-start md:self-auto border-4 border-[#003269] p-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]" // Added focus styles
          aria-label="View all completed projects" // More descriptive aria-label
        >
          <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
            All Projects
          </div>
        </Link>
      </motion.section>

      {/* Dynamic Gallery with Suspense Fallback */}
      <Suspense
        fallback={
          <div
            className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg shadow-inner mt-8"
            role="status" // Indicates that this section is a status message
            aria-live="polite" // Announces changes politely to screen readers
            aria-atomic="true" // Announces the entire content of the region
          >
            <Loader2
              className="h-10 w-10 text-[#003269] animate-spin mb-4"
              aria-hidden="true"
            />{" "}
            {/* Spinner icon, hide from screen readers */}
            <p className="text-[#003269] text-lg font-semibold">
              Loading project gallery...
            </p>
          </div>
        }
      >
        {GallerySection && <GallerySection />}
      </Suspense>
    </main>
  );
};

export default OurProjects;
