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
          {/* HERO SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/roofing-new-blog.jpg"
                alt="Professional roofing contractor in NYC working on a building"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-7">
                What Makes a Roofing Contractor Trustworthy in NYC?
              </h1>

              <p className="text-gray-700 text-base mb-3">
                A trustworthy roofing contractor should offer:
              </p>

              <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                <li>Licensed and insured services</li>
                <li>Transparent pricing</li>
                <li>Strong local reputation</li>
                <li>Premier roofing services for complex projects</li>
                <li>Fast response for roof repair and replacement in NYC</li>
              </ul>

              <p className="text-gray-700 text-base mt-4">
                In dense urban areas like Brooklyn, Queens, and Manhattan,
                roofing requires expertise in flat roofs, multi-family
                buildings, brownstones, and commercial structures. This is why
                choosing experienced local specialists matters.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-10">
            {/* BEST CONTRACTORS SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Who Are the Best Roofing Contractors in Brooklyn, Queens &
                Manhattan?
              </h2>

              <p className="text-gray-700 text-base mb-4">
                The best roofing contractors in Brooklyn are those who
                understand local building codes, typical weather damage, and the
                unique roofing styles found in brownstones and mixed-use
                buildings. Many homeowners rely on reputable contractors like
                SAS Roofing & Waterproofing, known for dependable service and
                expert residential roofing work.{" "}
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Top Roofing Contractors.
                </Link>
              </p>

              <p className="text-gray-700 text-base mb-4">
                In Queens, the best roofing contractors combine affordability
                with quality workmanship. From Astoria to Forest Hills,
                homeowners often look for roofing teams that specialize in both
                pitched and flat roofs— especially those offering quick
                turnaround times for emergency leaks.
              </p>

              <p className="text-gray-700 text-base">
                In Manhattan, roofing is more complex due to high-rise access
                issues and strict safety protocols. The best roofing contractors
                in Manhattan typically have extensive experience in EPDM, TPO,
                modified bitumen, and commercial waterproofing systems.
              </p>
            </motion.div>

            {/* HOW TO CHOOSE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                How Do I Choose Residential Roofing Contractors in Brooklyn,
                Queens & Manhattan?
              </h2>

              <ol className="list-decimal list-inside text-gray-700 text-base space-y-3">
                <li>
                  <b>Check Local Experience</b>
                  <p>
                    Choose residential roofing contractors in Brooklyn, Queens,
                    or Manhattan who have worked extensively in your specific
                    neighborhood. Local expertise ensures accurate assessments
                    of weather-related wear, common materials, and structural
                    challenges.
                  </p>
                </li>

                <li>
                  <b>Look for Detailed Inspections</b>
                  <p>
                    A reliable roofer will provide a clear evaluation before
                    recommending repairs or replacement.
                  </p>
                </li>

                <li>
                  <b>Compare More Than Just Price</b>
                  <p>
                    While many residents search for affordable roofing
                    contractors in NYC or cheap roofing contractors in Brooklyn,
                    quality should never be overlooked. Cheap work often leads
                    to expensive repairs later.
                  </p>
                </li>

                <li>
                  <b>Verify Licensing, Insurance & Warranty</b>
                  <p>
                    Roofers should offer workmanship guarantees and
                    manufacturer-backed material warranties.
                  </p>
                </li>

                <li>
                  <b>Read Customer Reviews & Ask Questions</b>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Timeline</li>
                    <li>Crew size</li>
                    <li>Materials used</li>
                    <li>Maintenance expectations</li>
                  </ul>
                </li>
              </ol>
            </motion.div>

            {/* AFFORDABLE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Are There Affordable Roofing Options in NYC Without Sacrificing
                Quality?
              </h2>

              <p className="text-gray-700 text-base mb-4">
                Yes. Many homeowners assume that NYC roofing must be expensive,
                but affordable roofing contractors in NYC do exist. The key is
                choosing companies that balance cost with high-quality materials
                and trained technicians.
              </p>

              <p className="text-gray-700 text-base">
                Avoid extremely low bids—they often signal corner-cutting.
                Instead, look for contractors offering competitive pricing,
                flexible options, and transparent quotes. For example, SAS
                Roofing & Waterproofing provides cost-conscious solutions while
                maintaining professional standards.
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  {" "}
                  Affordable NYC Roofing
                </Link>
                Services
              </p>
            </motion.div>

            {/* SERVICES SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                What Type of Roofing Services Are Most Common in NYC?
              </h2>
              <p>
                Most homes and buildings in Brooklyn, Queens, and Manhattan
                need:
              </p>

              <ol className="list-decimal list-inside text-gray-700 text-base space-y-3">
                <li>
                  <b>Roof Repair</b>
                  <p>
                    Fast repair services help stop leaks, replace damaged
                    shingles, and correct drainage issues. Searches like roof
                    repair and replacement NYC are common because small issues
                    can quickly worsen in New York’s climate.
                  </p>
                </li>

                <li>
                  <b>Roof Replacement</b>
                  <p>
                    Older flat roofs, asphalt shingles, and aging waterproof
                    membranes often require full replacement. Contractors who
                    specialize in multi-layer tear-offs and commercial-grade
                    membranes are ideal.
                  </p>
                </li>

                <li>
                  <b>Premier Roofing Services</b>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>TPO and EPDM installation</li>
                    <li>Modified bitumen membranes</li>
                    <li>Silicone coating and waterproofing</li>
                    <li>Roof deck restoration</li>
                  </ul>
                </li>

                <li>
                  <b>Waterproofing</b>
                  <p>
                    Essential for flat roofs in Brooklyn and Manhattan,
                    especially during heavy rainfall.
                  </p>
                </li>
              </ol>
            </motion.div>

            {/* LOCAL EXPERTISE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Why Local Expertise Matters in Brooklyn, Queens & Manhattan
              </h2>

              <p className="text-gray-700 mb-3">
                <b>Brooklyn:</b> Brownstones and flat roofs require roofers who
                know how to handle older structures, multi-layer roofing
                systems, and historical design elements. Many homeowners choose
                residential roofing contractors in Brooklyn for their
                specialized brownstone experience.
              </p>

              <p className="text-gray-700 mb-3">
                <b>Queens:</b> Queens neighborhoods include single-family homes,
                pitched roofs, and multi-unit buildings. Contractors must
                understand both residential and mixed roofing styles.
              </p>

              <p className="text-gray-700">
                <b>Manhattan:</b> High-rise buildings involve strict permitting,
                safety protocols, and specialized equipment—making experienced
                residential roofing contractors in Manhattan essential.
              </p>
            </motion.div>

            {/* LONG ROOF LIFE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                How Can I Ensure Long Roof Life in NYC?
              </h2>
              <p>To extend your roof’s lifespan:</p>

              <ul className="list-disc list-inside text-gray-700 text-base space-y-2 mb-4">
                <li>Schedule yearly inspections</li>
                <li>Clear gutters regularly</li>
                <li>Repair small issues quickly</li>
                <li>Invest in high-quality waterproofing solutions</li>
                <li>
                  Choose reliable contractors who offer ongoing maintenance
                  plans
                </li>
              </ul>

              <p className="text-gray-700">
                When done correctly, NYC roofs can last 20–40 years, depending
                on materials and upkeep.
              </p>
            </motion.div>

            {/* FINAL RECOMMENDATION SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Final Recommendation
              </h2>

              <p className="text-gray-700 text-base">
                If you want trusted, experienced, and affordable roofing
                contractors serving Brooklyn, Queens, and Manhattan, choose
                companies with strong reputations, transparent pricing, and
                proven results. For many homeowners,
                <Link
                  href="/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  {" "}
                  SAS Roofing & Waterproofing
                </Link>
                remains a top choice due to their 20+ years of local expertise
                and reliable craftsmanship.
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Trusted NYC Roofing Contractors
                </Link>
              </p>
              <Link
                href="tel:3472216549"
                className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
              >
                Call Us at (347) 221-6549
              </Link>
            </motion.div>

            {/* CONTACT SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#e63a27]">
                <Link
                  href="/contact-us"
                  className="text-[#e63a27]"
                >
                  Get a Free Estimate Today
                </Link>
              </h2>

              <p className="text-gray-700 text-base mt-2">
                Protect your property with reliable roofing and waterproofing
                services from SAS Roofing & Waterproofing.
              </p>

              <ul className="text-gray-700 mt-3 space-y-1">
                <li>
                  <strong>Phone:</strong>{" "}
                  <Link
                    href="tel:3472216549"
                    className="text-[#003269] hover:underline"
                  >
                    (347) 221-6549
                  </Link>
                </li>
                <li>
                  <strong>Address:</strong> 552 Rugby Rd, Brooklyn, NY 11230
                </li>
              </ul>

              <Link
                href="/"
                className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
              >
                Visit SAS Roofing & Waterproofing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
