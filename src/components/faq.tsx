"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const faqSections = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "What services do you offer?",
        a: (
          <>
            We specialize in:
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Roofing Services:</strong> Roof installation, roof
                repairs, inspections, maintenance, flat roofs, asphalt shingles,
                and more.
              </li>
              <li>
                <strong>Waterproofing Services:</strong> Basement waterproofing,
                foundation sealing, exterior wall waterproofing, and leak
                detection.
              </li>
              <li>
                <strong>Masonry Services:</strong> Brick pointing, sidewalk
                repair, stucco work, concrete repair, steps restoration, and
                brownstone repair.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: "Which areas do you serve?",
        a: (
          <>
            We proudly serve:
            <br />
            <strong>Brooklyn:</strong> 11201, 11205, 11206, 11215, 11216, 11217,
            11218, 11221, 11231, 11233, 11238
            <br />
            <strong>Manhattan:</strong> 10004, 10005, 10006, 10007, 10012,
            10013, 10014, 10038, 10280
            <br />
            Whether you’re looking for <strong>roof repair near me</strong>, a
            trusted <strong>waterproofing contractor</strong>, or{" "}
            <strong>masonry services</strong>, we’re ready to help.
          </>
        ),
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, we are fully licensed, bonded, and insured to operate throughout Brooklyn and Manhattan.",
      },
    ],
  },
  {
    title: "Roofing Services",
    faqs: [
      {
        q: "How do I know if my roof needs repair or replacement?",
        a: "Common signs include missing shingles, leaks, mold, sagging, or unusually high energy bills. We offer professional inspections to help assess your roof.",
      },
      {
        q: "What types of roofs do you install?",
        a: "We install flat roofs, asphalt shingles, rubber roofs (EPDM), and more—customized for your needs.",
      },
      {
        q: "How long does a roof replacement take?",
        a: "Most residential roof replacements take 1–3 days depending on the size and complexity.",
      },
    ],
  },
  {
    title: "Waterproofing Services",
    faqs: [
      {
        q: "What areas of a building need waterproofing?",
        a: "We waterproof basements, foundations, exterior walls, and roofs—any area exposed to moisture.",
      },
      {
        q: "What waterproofing methods do you use?",
        a: "We use cementitious coatings, liquid membranes, sealants, excavation, and drainage systems based on project needs.",
      },
      {
        q: "Do you offer emergency waterproofing services?",
        a: "Yes, we offer fast-response emergency services in Brooklyn and Manhattan.",
      },
    ],
  },
  {
    title: "Masonry Services",
    faqs: [
      {
        q: "What types of masonry work do you perform?",
        a: "We handle brick pointing, concrete repair, brownstone restoration, stucco, sidewalks, and foundations for residential and commercial properties.",
      },
      {
        q: "How often does brick pointing need to be done?",
        a: "Typically every 20–30 years, or sooner if cracks appear in the mortar joints.",
      },
      {
        q: "Are your masonry services compliant with NYC codes?",
        a: "Absolutely. We follow all NYC building regulations and assist with violation removals and DOB paperwork if needed.",
      },
    ],
  },
  {
    title: "Scheduling & Pricing",
    faqs: [
      {
        q: "How do I get a free estimate?",
        a: (
          <>
            Call us or fill out the form on our{" "}
            <Link
              href="/contact-us"
              className="text-[#e63a27] underline font-semibold"
            >
              Contact page
            </Link>{" "}
            to book a free on-site consultation.
          </>
        ),
      },
      {
        q: "Do you offer warranties?",
        a: "Yes, most services come with workmanship and material warranties. Specific terms vary by service.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit cards, checks, bank transfers, and offer flexible payment plans on larger projects.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section
      className="px-6 py-12 md:px-16 bg-white text-[#003269] max-w-7xl mx-auto"
      aria-labelledby="faq-heading"
    >
      {/* Header */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />
          <span className="text-sm font-bold text-[#e63a27] uppercase font-inter">
            FAQs
          </span>
        </div>
        <h1
          id="faq-heading"
          className="text-3xl font-bold leading-snug font-inter"
        >
          Frequently Asked Questions –{" "}
          <strong>SAS Roofing & Waterproofing</strong>
        </h1>
        <p className="text-sm md:text-base text-gray-700 mt-2 font-bevietnam">
          Answers to your most common roofing, waterproofing, and masonry
          questions in Brooklyn & Manhattan.
        </p>
      </motion.header>

      {/* FAQ List */}
      {faqSections.map((section, idx) => (
        <motion.article
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mb-10"
          aria-labelledby={`faq-section-${idx}`}
        >
          <h2
            id={`faq-section-${idx}`}
            className="text-xl md:text-2xl font-bold mb-4 font-inter"
          >
            {section.title}
          </h2>

          <dl className="space-y-6">
            {section.faqs.map((faq, i) => (
              <div key={i}>
                <dt className="text-lg md:text-xl font-semibold font-inter">
                  Q: {faq.q}
                </dt>
                <dd
                  className="text-sm md:text-base text-gray-700 mt-1 font-bevietnam"
                  aria-live="polite"
                >
                  {typeof faq.a === "string" ? <p>{faq.a}</p> : faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </motion.article>
      ))}

      {/* Footer CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="mt-10 border-t border-gray-200 pt-6 text-sm md:text-base font-bevietnam text-gray-700"
      >
        <p>
          Have more questions? Reach out to our friendly team today. Call now or
          visit{" "}
          <Link
            href="https://www.sasroofingwaterproofing.com"
            className="text-[#e63a27] underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.sasroofingwaterproofing.com
          </Link>
          .
        </p>
        <p className="mt-2">
          Proudly serving Brooklyn and Manhattan with reliable roofing,
          waterproofing, and masonry solutions.
        </p>
      </motion.div>
    </section>
  );
}
