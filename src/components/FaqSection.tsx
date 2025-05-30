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
    transition: { duration: 0.4, ease: "easeOut" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function FaqSection() {
  // Initialize with no item open (null) to allow initial closed state or
  // to close an open item if clicked again.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    // If the clicked item is already open, close it; otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    // Allow Enter and Space keys to trigger the toggle action.
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default browser actions (e.g., scrolling with spacebar)
      toggleOpen(index);
    }
  };
  return (
    <section // Use <section> for semantic grouping of related content
      className="pt-8 pb-4 text-left bg-[#f9f9f9] md:px-5 md:ml-5"
      aria-labelledby="faq-section-title" // Links the section to its main heading
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-[2px] bg-[#e63a27]" aria-hidden="true" />{" "}
        {/* Decorative element, hidden from screen readers */}
        <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide font-inter">
          Common Questions & Answers
        </p>
      </div>
      <h2
        id="faq-section-title"
        className="text-4xl lg:text-5xl font-bold text-[#003269] mb-8 font-inter"
      >
        Get Detailed Answers
      </h2>

      <div
        className="space-y-4 text-base"
        aria-label="Frequently Asked Questions list"
      >
        {" "}
        {/* Optional: Label the overall list of FAQs */}
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
              // No specific ARIA role needed here for the container div,
              // as the button and panel roles handle the accordion structure.
            >
              {/*
                Add a visually hidden heading for each question.
                This allows screen reader users to navigate between questions
                using heading shortcuts, even when panels are closed.
                The button itself also acts as a heading to some extent,
                but a proper heading structure is generally better for navigation.
              */}
              <h3 className="sr-only">
                Question {index + 1}: {faq.question}
              </h3>

              <button
                onClick={() => toggleOpen(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen} // Indicates whether the controlled element is expanded or collapsed
                aria-controls={`faq-panel-${index}`} // Links the button to the ID of the controlled content panel
                // `aria-label` is not strictly necessary here because the button's visible text (faq.question)
                // is already highly descriptive and serves as the accessible name.
                className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] ${
                  isOpen ? "bg-[#003269] text-white" : "bg-white text-[#003269]"
                }`}
              >
                <span className="flex items-start gap-3 font-semibold text-base font-inter">
                  <span className="text-[#e63a27]" aria-hidden="true">
                    Q{index + 1}.
                  </span>{" "}
                  {/* Decorative Q#, hide from screen readers */}
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                  aria-hidden="true" // Icon is decorative; its state is conveyed by aria-expanded on the button
                >
                  <FiChevronDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${index}`} // Unique ID that matches aria-controls of the button
                    key="content"
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    // Add role="region" to the content panel for more complex content,
                    // but for simple text, it's often sufficient to just have it linked by aria-controls.
                    className="px-6 pb-6 pt-4 bg-white text-gray-600 leading-relaxed font-bevietnam text-sm"
                  >
                    <p>{faq.answer}</p>{" "}
                    {/* Ensure content is within semantic tags like <p> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
