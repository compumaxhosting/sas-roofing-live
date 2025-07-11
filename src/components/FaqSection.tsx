"use client";

import React, { useState, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is waterproofing, and why is it important?",
    answer:
      "Waterproofing makes a structure resistant to water infiltration. It's essential to protect your building’s integrity and avoid long-term damage caused by leaks.",
  },
  {
    question: "What types of roofing services do you offer?",
    answer:
      "We provide full roofing solutions—installation, repair, maintenance, and inspections for both residential and commercial properties.",
  },
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "Signs like leaks, damaged shingles, sagging, or visible wear indicate potential issues. Schedule an inspection to determine your roof's condition.",
  },
  {
    question: "What roofing materials do you work with?",
    answer:
      "We work with asphalt shingles, metal roofing, slate, tiles, and flat roofing systems including TPO and EPDM.",
  },
  {
    question: "How long does a roof installation take?",
    answer:
      "Most residential roof installs are completed in 1–3 days. Timelines vary based on size, complexity, and material.",
  },
];

const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen(index);
    }
  };

  return (
    <section
      className="py-10 px-5 bg-[#f9f9f9] max-w-5xl mx-auto"
      aria-labelledby="faq-section-title"
    >
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-[2px] bg-[#e63a27]" aria-hidden="true" />
          <span className="uppercase text-sm font-bold tracking-wider text-[#e63a27] font-inter">
            Common Questions & Answers
          </span>
        </div>
        <h2
          id="faq-section-title"
          className="text-3xl md:text-4xl font-bold text-[#003269] font-inter"
        >
          Frequently Asked Questions
        </h2>
      </header>

      <dl className="space-y-4" role="list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm"
            >
              <dt>
                <button
                  onClick={() => toggleOpen(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] transition-colors rounded-md ${
                    isOpen
                      ? "bg-[#003269] text-white"
                      : "bg-white text-[#003269]"
                  }`}
                >
                  <span className="flex gap-3 font-semibold font-inter">
                    <span className="text-[#e63a27]" aria-hidden="true">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    <FiChevronDown size={22} />
                  </motion.span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    key="content"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-5 pt-3 text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={accordionVariants}
                  >
                    {faq.answer}
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
