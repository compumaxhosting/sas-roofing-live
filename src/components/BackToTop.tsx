"use client";

import React, { useState, useEffect, KeyboardEvent } from "react";
import { GoArrowUp } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
      });
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          aria-label="Back to Top"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.3 }}
          className="hidden xl:flex items-center justify-center fixed bottom-4 right-4 p-3 rounded-full bg-white text-[#e63a27] hover:bg-[#003269] hover:text-white transition-colors z-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#003269]"
        >
          <GoArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
