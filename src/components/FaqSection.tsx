"use client";

import React, { useState, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is waterproofing, and why is it important?",
    answer:
      "Waterproofing is the process of making a structure water-resistant to prevent water infiltration. It is crucial to protect the integrity of buildings and prevent damage caused by water leaks.",
  },
  {
    question: "What types of roofing services do you offer?",
    answer:
      "We offer a range of roofing services, including installation, repair, maintenance, and inspections for both residential and commercial properties.",
  },
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "Common signs include leaks, missing or damaged shingles, sagging areas, and noticeable wear and tear. Our professionals can conduct an inspection to determine the best course of action.",
  },
  {
    question: "What roofing materials do you work with?",
    answer:
      "We work with a variety of materials, including asphalt shingles, metal roofing, tile, slate, and flat roofing systems like TPO and EPDM.",
  },
  {
    question: "How long does a roof installation take?",
    answer:
      "The duration varies based on the size and type of the roof, but most residential installations take between 1–3 days. Commercial projects may take longer.",
  },
];

const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5, // Slightly longer duration for a smoother feel
      ease: "easeOut", // "easeOut" is good for content appearing
      when: "beforeChildren", // Ensures content starts animating before children
    },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4, // Slightly longer duration for content disappearing
      ease: "easeIn", // "easeIn" is good for content disappearing
    },
  },
};

export default function FaqSection() {
  // -1 means no FAQ is open by default, improving initial screen reader experience
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleOpen = (index: number) => {
    // If clicking the currently open FAQ, close it. Otherwise, open the clicked one.
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    // Check for 'Enter' or 'Space' key
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default scroll behavior for spacebar
      toggleOpen(index);
    }
  };

  return (
    <div className="pt-8 pb-4 text-left bg-[#f9f9f9] md:px-5 md:ml-5">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-[2px] bg-[#e63a27]" aria-hidden="true" />{" "}
        {/* Decorative element, hide from screen readers */}
        <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide font-inter">
          Common Questions & Answers
        </p>
      </div>
      <h2
        id="faq-main-heading" // Add an ID for potential future linking or context
        className="text-4xl lg:text-5xl font-bold text-[#003269] mb-8 font-inter"
      >
        Frequently Asked Questions
      </h2>{" "}
      {/* More common and clearer heading text */}
      {/* Use a dl (description list) for semantically grouping questions and answers */}
      <dl className="space-y-4 text-base">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index} // Using index as key is acceptable here as the list is static
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <dt>
                {" "}
                {/* Use dt for the term (question) */}
                <button
                  onClick={() => toggleOpen(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`} // aria-controls points to the answer's ID
                  id={`faq-question-${index}`} // Add an ID to the button for better association
                  className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] rounded-md ${
                    isOpen
                      ? "bg-[#003269] text-white"
                      : "bg-white text-[#003269]"
                  }`}
                >
                  <span className="flex items-start gap-3 font-semibold text-base font-inter">
                    <span className="text-[#e63a27]" aria-hidden="true">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <motion.span
                    initial={false} // Prevents initial animation on mount if component re-renders
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                    aria-hidden="true" // Hide the decorative icon from screen readers
                  >
                    <FiChevronDown size={22} />
                  </motion.span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd // Use dd for the definition (answer)
                    id={`faq-answer-${index}`}
                    key="content" // Key is important for AnimatePresence to track the element
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    role="region" // Identify this as a collapsible region
                    aria-labelledby={`faq-question-${index}`} // Associate with its controlling button
                    className="px-6 pb-6 pt-4 bg-white text-gray-600 leading-relaxed font-bevietnam text-sm"
                  >
                    {faq.answer}
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
