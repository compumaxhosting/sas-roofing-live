"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";
import HomeContactForm from "./HomeContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceAndFaqSection() {
  return (
    <section
      className="relative w-full lg:h-[100vh] md:pt-5 pb-24 bg-[#f9f9f9] overflow-hidden md:border-t md:border-black/40 mb-10 md:mb-15 shadow-2xl"
      aria-labelledby="main-section-heading"
    >
      <div className="absolute inset-0 hidden lg:flex z-0" aria-hidden="true">
        <div className="w-[30%] bg-[#e63a27]" />
        <div className="w-[70%] bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left">
        <HomeContactForm />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-xl"
        >
          <FaqSection />
        </motion.div>
      </div>
    </section>
  );
}
