"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";

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
  const [GallerySection, setGallerySection] =
    useState<React.ComponentType | null>(null);
  const [isLoadingGallery, setIsLoadingGallery] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      setIsLoadingGallery(true);
      try {
        const GalleryModule = await import(`./GallerySection${gallery}`);
        setGallerySection(() => GalleryModule.default);
      } catch (error) {
        console.error("Failed to load gallery module:", error);
      } finally {
        setIsLoadingGallery(false);
      }
    };

    loadGallery();
  }, [gallery]);

  return (
    <main
      className="px-4 sm:px-6 lg:px-12 py-8 bg-[#f9f9f9] mb-10 md:mb-15 shadow-2xl"
      role="region"
      aria-labelledby="our-projects-heading"
    >
      {/* Header Section */}
      <motion.section
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />
            <span className="text-sm sm:text-md lg:text-base font-bold text-[#e63a27] uppercase font-inter">
              Our Projects
            </span>
            <div
              className="block md:hidden w-6 h-px bg-[#e63a27]"
              aria-hidden="true"
            />
          </div>
          <h1
            id="our-projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter"
          >
            Recently Completed Works
          </h1>
        </div>

        {/* CTA Button */}
        <motion.div
          className="group relative self-center md:self-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.5}
        >
          <Link
            href="/projects"
            className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
            aria-label="View all our completed projects"
          >
            <div className="border-4 border-[#003269] px-2 py-2">
              <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
                All Projects
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <div className="mt-10">
        {isLoadingGallery ? (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center h-48 text-center text-gray-600"
          >
            <Loader2 className="h-10 w-10 animate-spin text-[#e63a27] mb-4" />
            <p>Loading projects gallery...</p>
            <span className="sr-only">Loading...</span>
          </div>
        ) : GallerySection ? (
          <Suspense fallback={null}>
            <GallerySection />
          </Suspense>
        ) : (
          <div className="text-center text-red-500 font-medium">
            Failed to load gallery. Please try again.
          </div>
        )}
      </div>
    </main>
  );
};

export default OurProjects;
