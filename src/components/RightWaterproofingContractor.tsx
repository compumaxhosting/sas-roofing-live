"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "./FAQSectionBlog";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center">
        <div className="w-full xl:max-w-7xl xl:px-0">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
            // Added role="article" to explicitly mark this as the primary article content.
            role="article"
            aria-labelledby="main-blog-post-heading"
          >
            {/* Image on the left */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/water-proofing.png"
                // Enhanced alt text to be more descriptive for screen reader users
                alt="Close-up of a building wall undergoing waterproofing treatment, showing a professional applying a sealant."
                width={600}
                height={400}
                loading="lazy" // Add this
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading" // ID for aria-labelledby
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                How to Choose the Right Waterproofing Contractor: A Complete
                Homeowner’s Guide
              </h1>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                Water damage is one of the most costly and underestimated
                threats to residential and commercial properties. From roof
                leaks and basement seepage to damp walls and mold growth, poor
                waterproofing can compromise structural integrity and indoor air
                quality. Choosing the right waterproofing contractor is not just
                a maintenance decision—it’s a long-term investment in your
                property’s safety and value. <br /> Whether you’re a homeowner
                or property manager in New York City and surrounding areas, this
                comprehensive guide will help you understand how to select a
                reliable waterproofing contractor using proven SEO-backed,
                user-focused criteria.
              </p>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">
              Why Hiring the Right Waterproofing Contractor Matters
            </h2>

            <p className="text-gray-700 font-bevietnam">
              Waterproofing is a specialized service that requires technical
              expertise, quality materials, and precise execution. An
              inexperienced contractor may offer low prices but deliver
              short-term solutions that fail within months.
            </p>

            <h3 className="text-xl font-semibold">
              Key Benefits of a Professional Waterproofing Contractor:
            </h3>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Long-lasting protection against leaks and moisture</li>
              <li>Prevention of mold, mildew, and structural damage</li>
              <li>Increased property value and lifespan</li>
              <li>Compliance with local building codes and safety standards</li>
            </ul>
          </motion.div>

          {/* Types of Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Types of Waterproofing Services to Look For
            </h2>

            <p className="text-gray-700 font-bevietnam">
              Before hiring a contractor, ensure they offer services relevant to
              your needs:
            </p>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Roof waterproofing</li>
              <li>Basement waterproofing</li>
              <li>Terrace and balcony waterproofing</li>
              <li>Bathroom and kitchen waterproofing</li>
              <li>Exterior wall and foundation waterproofing</li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              A full-service provider like a trusted waterproofing specialist in
              NYC can assess multiple problem areas under one contract.
            </p>
          </motion.div>

          {/* Key Factors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Key Factors to Consider When Choosing a Waterproofing Contractor
            </h2>

            <div>
              <h3 className="font-semibold">
                1. Experience and Local Expertise
              </h3>
              <p className="text-gray-700 font-bevietnam">
                Choose contractors with at least 5–10 years of experience,
                especially in New York City’s climate, where freeze-thaw cycles
                and heavy rainfall are common. Local expertise ensures
                familiarity with regional building structures and weather
                challenges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                2. Proper Licensing and Insurance
              </h3>
              <p className="text-gray-700 font-bevietnam">Always verify:</p>
              <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
                <li>Valid contractor license</li>
                <li>General liability insurance</li>
                <li>Worker’s compensation coverage</li>
              </ul>
              <p className="text-gray-700 font-bevietnam">
                This protects you from legal and financial risks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Reputation and Reviews</h3>
              <p className="text-gray-700 font-bevietnam">
                Check Google Reviews, Yelp, and local listings. Look for:
              </p>
              <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
                <li>Consistent positive feedback</li>
                <li>Before-and-after project photos</li>
                <li>Testimonials mentioning long-term result</li>
              </ul>
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Questions You Should Ask Before Hiring
            </h2>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>What waterproofing method do you recommend and why?</li>
              <li>What materials will be used?</li>
              <li>How long will the project take?</li>
              <li>Do you offer a written warranty?</li>
              <li>Can you provide local references?</li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              Professional contractors will answer confidently and
              transparently.
            </p>
          </motion.div>

          {/* Methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Understanding Waterproofing Methods
            </h2>

            <p className="text-gray-700 font-bevietnam">
              A reliable contractor should explain available techniques, such
              as:
            </p>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Liquid membrane waterproofing</li>
              <li>Bituminous coating</li>
              <li>Cementitious waterproofing</li>
              <li>Polyurethane injection</li>
              <li>Sheet membrane systems</li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              Each method suits different surfaces and moisture levels.
            </p>
          </motion.div>

          {/* Warranty */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Importance of Warranty and After-Service Support
            </h2>

            <p className="text-gray-700 font-bevietnam">
              Never hire a contractor who does not offer a warranty. A standard
              warranty ranges from 5 to 10 years depending on materials and
              scope.
            </p>

            <p className="text-gray-700 font-bevietnam">
              Look for after-service support such as inspections and maintenance
              guidance. Companies like{" "}
              <Link
                href={
                  "/"
                }
                className="text-[#003269] hover:underline"
                aria-label="Find top waterproofing contractors in New York City for advanced solutions" // Improved aria-label
                target="_blank"
                rel="noopener noreferrer"
              >
                roof waterproofing experts
              </Link>{" "}
              emphasize long-term performance, not quick fixes.
            </p>
          </motion.div>

          {/* Cost vs Quality */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Cost vs Quality: Avoid Cheap Traps
            </h2>

            <p className="text-gray-700 font-bevietnam">
              Low-cost quotes often mean:
            </p>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Inferior materials</li>
              <li>Unskilled labor</li>
              <li>No warranty coverage</li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              Always compare at least three quotes and focus on value, not just
              price.
            </p>
          </motion.div>

          {/* Red Flags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">Red Flags to Watch Out For</h2>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>No written estimate</li>
              <li>Asking for full payment upfront</li>
              <li>Lack of physical office address</li>
              <li>No online presence or reviews</li>
              <li>Unwillingness to explain the process</li>
            </ul>
          </motion.div>

          {/* Local SEO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Why Local SEO Matters When Choosing a Contractor
            </h2>

            <p className="text-gray-700 font-bevietnam">
              Hiring a local waterproofing contractor in New York City ensures:
            </p>

            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Faster site visits and inspections</li>
              <li>Better accountability</li>
              <li>Knowledge of local regulations</li>
              <li>Easy follow-ups and maintenance</li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="my-8 space-y-4"
          >
            <h2 className="text-2xl font-bold">FAQs</h2>

            <div className="space-y-3 text-gray-700 font-bevietnam">
              <p>
                <strong>1. How long does waterproofing last?</strong>
                <br />
                Quality waterproofing can last 10–15 years when done by a
                professional using premium materials.
              </p>

              <p>
                <strong>2. Is waterproofing needed for new buildings?</strong>
                <br />
                Yes. Preventive waterproofing during construction is more
                cost-effective than repairs later.
              </p>

              <p>
                <strong>
                  3. How do I know if my home needs waterproofing?
                </strong>
                <br />
                Signs include damp walls, peeling paint, musty odors, visible
                cracks, and water stains.
              </p>

              <p>
                <strong>
                  4. Can waterproofing be done during the rainy season?
                </strong>
                <br />
                Some methods can, but dry conditions are ideal. A professional
                contractor will advise the best timing.
              </p>

              <p>
                <strong>
                  5. What areas of a house need waterproofing most?
                </strong>
                <br />
                Roof, basement, bathrooms, balconies, and exterior walls.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">Conclusion</h2>

            <p className="text-gray-700 font-bevietnam">
              Choosing the right waterproofing contractor is crucial for
              protecting your property from long-term damage. By evaluating
              experience, local expertise, materials, warranties, and customer
              feedback, you can make an informed decision that ensures peace of
              mind.
            </p>

            <p className="text-gray-700 font-bevietnam">
              For property owners in New York City, partnering with a trusted
              local expert guarantees durable results and compliance with
              regional standards. Don’t wait for visible damage—invest in
              professional waterproofing today.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
