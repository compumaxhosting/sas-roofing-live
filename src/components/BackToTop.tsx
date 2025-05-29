"use client";

import React, { useState, useEffect, useCallback } from "react"; // Added useCallback
import { GoArrowUp } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useCallback for event listener functions to prevent re-creation on every render
  const checkScroll = useCallback(() => {
    // Check if window is defined (for SSR safety, although "use client" helps here)
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300);
    }
  }, []); // Empty dependency array, only create once

  useEffect(() => {
    // Ensure window is defined before adding event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScroll);
      // Cleanup function to remove the event listener when the component unmounts
      return () => window.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]); // Dependency on checkScroll memoized with useCallback

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  //updated for narrator
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll back to the top of the page" // More descriptive aria-label
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.3 }}
          // Consider making this visible on smaller screens too, or use breakpoints more dynamically.
          // The `xl:block` means it's `display: none` by default until xl breakpoint.
          className="fixed bottom-18 md:bottom-4 right-4 p-4 bg-white hover:bg-[#003269] z-50 shadow-lg group" // Added group for hover effects
        >
          {/* Apply text-white to the icon directly or ensure parent color applies */}
          <GoArrowUp
            size={30}
            className="text-[#e63a27] group-hover:text-white transition-colors duration-300" // Icon color changes on hover
            aria-hidden="true" // Icon is decorative, its purpose is conveyed by the button's aria-label
            focusable="false" // Prevents some assistive technologies from focusing on the SVG
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
