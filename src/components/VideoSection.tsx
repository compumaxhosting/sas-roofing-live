"use client";

import React, { useState, useCallback } from "react"; // Added useCallback
import { GoVideo } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the VideoIframe component
const VideoIframe = dynamic(() => import("./VideoIframe"), {
  ssr: false, // Ensure it's client-side rendered
  loading: () => (
    <div className="flex items-center justify-center bg-black text-white h-full w-full">
      Loading video...
    </div>
  ), // Add a loading state
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Props = {
  margin: number[];
  // You might want to pass the video ID as a prop for reusability
  // youtubeVideoId: string;
};

const VideoSection = ({ margin }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use useCallback for event handlers to prevent unnecessary re-renders
  const handleOpenVideo = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Ensure `mb-` utility class is applied correctly.
  // TailwindCSS expects full class names in string literals for JIT compilation.
  // You might need to adjust your Tailwind config if `mb-${margin[1]}` isn't working as expected.
  // A safer approach for dynamic classes is to concatenate: `mb-${margin[1]}px` if using arbitrary values,
  // or use a predefined array of classes like `mb-0`, `mb-8`, etc.
  // For demonstration, let's assume `margin` contains values like 0, 8, 16, etc.
  const marginBottomClass = `mb-${margin[1]}`;

  return (
    <div>
      <section
        className={`relative w-full flex flex-col md:flex-row overflow-hidden h-[550px] bg-[#f0482f] lg:bg-[#f9f9f9] ${marginBottomClass} shadow-2xl`}
        aria-labelledby="video-section-heading" // Added ARIA label for the section
      >
        <Image
          src="/VideoSectionBg.webp"
          alt="Roofing Image" // Decorative image, keep alt empty if it provides no unique info
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />

        {/* Left Section (Content) */}
        <div className="relative md:w-[60%] w-full h-[500px] md:h-auto">
          {/* Background shapes - consider combining or simplifying if possible for cleaner DOM */}
          <div className="absolute inset-0 bg-[#c72f1c] red-left-shape-2 z-20 translate-x-6 translate-y-16">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat left" />
          </div>
          <div className="absolute inset-0 bg-[#e63a27] red-left-shape-2 z-20">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat" />
          </div>

          <div className="flex justify-center items-center h-full">
            {" "}
            {/* Added h-full to center content vertically */}
            <motion.div
              className="relative z-30 text-white p-10 md:p-16 lg:max-w-[80%] xl:max-w-[60%] text-left" // Added text-left for consistency
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-px bg-white" />
                <h5 className="text-sm uppercase font-semibold">Video Proof</h5>
              </div>

              <h2
                id="video-section-heading"
                className="text-3xl lg:text-5xl font-medium leading-tight mb-4 font-inter"
              >
                Have a Look <br /> At Our Video
              </h2>

              <ul className="space-y-2" aria-label="Key features">
                {" "}
                {/* Added ARIA label for the list */}
                <li>
                  <SiTicktick className="inline mr-2" aria-hidden="true" />{" "}
                  {/* Hide decorative icon */}
                  Roof of the Year
                </li>
                <li>
                  <SiTicktick className="inline mr-2" aria-hidden="true" />{" "}
                  Fully supported metal
                </li>
                <li>
                  <SiTicktick className="inline mr-2" aria-hidden="true" />{" "}
                  Reliable & Trustworthy
                </li>
                <li>
                  <SiTicktick className="inline mr-2" aria-hidden="true" />{" "}
                  Dependable
                </li>
              </ul>

              {/* Mobile Video Icon - now a semantic button */}
              <button
                type="button" // Important for semantic button
                className="mt-4 ml-6 pr-6 pl-6 flex flex-col md:hidden text-white" // Combined styles
                onClick={handleOpenVideo}
                aria-label="Play video: Flat Roof Installation" // Clear action for screen readers
              >
                <GoVideo
                  size={60}
                  className="text-4xl sm:text-6xl"
                  aria-hidden="true" // Icon is decorative, label is on button
                />
                <span className="font-inter text-sm">
                  FLAT ROOF INSTALLATION
                </span>{" "}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Section with Video Icon */}
        <motion.div
          className="relative md:w-[40%] w-full overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {" "}
            {/* Added flex for centering */}
            <button
              type="button"
              className="absolute z-30 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded-full" // Added focus styles
              onClick={handleOpenVideo}
              aria-label="Play video: Flat Roof Installation"
            >
              <GoVideo
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mr-16 md:mr-24 lg:mr-48"
                aria-hidden="true"
              />
            </button>
            <div className="hidden md:block absolute z-30 mt-36 text-white font-semibold text-lg tracking-wide mr-16 md:mr-18 lg:mr-48 font-inter">
              FLAT ROOF INSTALLATION
            </div>
            {/* Background shapes */}
            <div className="absolute inset-0 bg-[#e63a27] red-left-shape-1 z-20 translate-y-20">
              <div className="w-full h-full bg-[url('/thm-pattern-5.webp')] bg-repeat" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal with accessibility + hydration-safe iframe */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] p-0 rounded-lg border-none bg-transparent shadow-none font-bevietnam">
          <VisuallyHidden>
            <DialogTitle>Flat Roof Installation Video</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            {isOpen && (
              <VideoIframe
                videoId="Z4gunD5Wbi8"
                title="Company Promo Video"
                autoplay={true}
              />
            )}{" "}
            {/* Only mount iframe when dialog is open */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" // Added focus styles
              aria-label="Close video" // Clear label for close button
            >
              <IoClose aria-hidden="true" /> {/* Icon is decorative */}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoSection;
