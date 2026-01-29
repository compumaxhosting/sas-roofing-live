"use client";

import { useState, KeyboardEvent } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Can terrace waterproofing be used on roofs? ",
    answer:
      "Not always; roofs need systems designed for structural protection.",
  },
  {
    question: "How long does waterproofing last? ",
    answer: "Typically 5–15 years.",
  },
  {
    question: "Is waterproofing necessary for old buildings? ",
    answer: "Yes.",
  },
  {
    question: "Does waterproofing reduce cooling costs? ",
    answer: "Yes, reflective coatings help.",
  },
  {
    question: "How often should inspections be done?",
    answer: "At least once a year.",
  },
];

export default function TerraceFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-12 font-inter"
      aria-labelledby="faq-heading"
    >
      <header className="text-center mb-8">
        <h1 id="faq-heading" className="text-3xl font-bold text-[#e63a27]">
          Frequently Asked Questions
        </h1>
      </header>

      <dl className="space-y-4" role="list">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <dt>
                <button
                  id={`faq-question-${index}`}
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]"
                >
                  <span className="text-lg font-semibold text-[#003269]">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.06 }}
                    className="px-4 pb-5 text-gray-700 text-sm md:text-base leading-relaxed"
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
