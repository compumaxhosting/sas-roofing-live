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

export const blogPost = {
  title: "How to Choose the Best Roofing Contractor in Brooklyn",
  shortTitle: "Protect your NYC property with expert roofing solutions.",
  description: `A complete guide to finding the best roofing contractor in Brooklyn — what to look for, red flags to avoid, and why SAS Roofing & Waterproofing is NYC’s trusted choice for roofing, waterproofing, and masonry services.`,
  date: "27 OCT",
  image: "/blog/roofing-contractors.jpg",
  link: "how-to-choose-the-best-roofing-contractor-in-brooklyn",
  initialLikes: 70,
};

export default function BestRoofing() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <section
        className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
        aria-labelledby="main-blog-heading"
        role="document"
      >
        <div className="w-full xl:max-w-7xl xl:px-0">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 flex flex-col lg:flex-row items-center gap-8"
            role="article"
            aria-labelledby="main-blog-heading"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/roofing-contractors.jpg"
                alt="Professional roofer working on a Brooklyn building roof installation"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-heading"
                className="text-2xl md:text-4xl font-bold font-inter mb-6"
              >
                How to Choose the Best Roofing Contractor in Brooklyn
              </h1>
              <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                Finding the best roofing contractor in Brooklyn can feel
                overwhelming — especially when your home or commercial property
                needs reliable roofing, waterproofing, or masonry services. With
                unpredictable weather, aging buildings, and the dense structure
                of New York City boroughs like Brooklyn, Manhattan, Queens, and
                The Bronx, hiring the right experts matters more than ever.
              </p>
              <p className="mt-3 text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                A poorly done roof doesn’t just look bad — it leads to leaks,
                mold, structural damage, expensive repairs, and reduced property
                value. That’s why selecting a professional, trustworthy, and
                experienced roofing company is essential.
              </p>
              <p className="mt-3 text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                In this comprehensive guide, you’ll learn exactly what to look
                for, the questions to ask, red flags to avoid, and why a highly
                reputable company like{" "}
                <strong>SAS Roofing & Waterproofing</strong> is a preferred
                choice for thousands of property owners in NYC.
              </p>
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="grid gap-10 text-gray-700 font-bevietnam leading-relaxed">
            {/* Why It Matters */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Why Hiring the Right Roofing Contractor Matters
              </h2>
              <p>
                A roof is one of the most critical components of any structure.
                It protects against:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Harsh weather</li>
                <li>Water intrusion</li>
                <li>UV damage</li>
                <li>Heat and energy loss</li>
                <li>Structural degradation</li>
              </ul>
              <p className="mt-4">A professional roofing contractor ensures:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>High-quality materials</li>
                <li>Skilled, certified technicians</li>
                <li>Long-term durability and safety</li>
                <li>Compliance with NYC building codes</li>
                <li>Proper installation to prevent costly repairs later</li>
              </ul>
              <p className="mt-4">
                Hiring the wrong team, however, can result in leaks, warranty
                voids, unsafe conditions, and overpaying for cheap workmanship.
                The goal isn’t just to find any roofer — it’s to find{" "}
                <strong>the best roofing contractor in Brooklyn</strong>.
              </p>
            </motion.div>

            {/* Qualities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Key Qualities of a Top Brooklyn Roofing Contractor
              </h2>

              <h3 className="font-semibold mt-2">
                1️⃣ Experience and Proven Track Record
              </h3>
              <p>
                Choose experts with decades of experience, not untested
                newcomers.
                <br />✅ SAS Roofing & Waterproofing has served NYC for over{" "}
                <strong>30 years</strong>, specializing in:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Residential roofing</li>
                <li>Commercial roofing</li>
                <li>Waterproofing systems</li>
                <li>Masonry services</li>
              </ul>

              <h3 className="font-semibold mt-4">
                2️⃣ Valid Licensing and Insurance
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>NYC contractor license</li>
                <li>General liability insurance</li>
                <li>Workers’ compensation</li>
              </ul>
              <p>
                This protects you from legal or financial issues during the
                project.
              </p>

              <h3 className="font-semibold mt-4">3️⃣ Local NYC Knowledge</h3>
              <p>
                Brooklyn’s unique architecture — flat roofs, brownstones, and
                multi-family buildings — requires experience with:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>NYC building codes</li>
                <li>Permit and compliance requirements</li>
                <li>
                  Local climate challenges like snow, heatwaves, and rainstorms
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                4️⃣ Transparent Pricing and Written Estimates
              </h3>
              <p>
                Trustworthy contractors provide detailed, written estimates with
                no hidden fees or vague terms. Avoid anyone demanding large
                upfront payments or unusually low bids.
              </p>

              <h3 className="font-semibold mt-4">
                5️⃣ Quality Materials & Workmanship
              </h3>
              <p>Ensure the use of certified materials like:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>TPO</li>
                <li>EPDM rubber roofing</li>
                <li>PVC roofing</li>
                <li>Asphalt shingles</li>
                <li>Modified bitumen</li>
                <li>Torch down roofing</li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Types of Roofing Services You Should Expect
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>✔ Roof Installation — for new or replacement roofs</li>
                <li>
                  ✔ Roof Repairs — leaks, damaged shingles, and deterioration
                </li>
                <li>✔ Roof Waterproofing — for flat and low-slope roofs</li>
                <li>✔ Roof Maintenance — scheduled inspections and upkeep</li>
                <li>
                  ✔ Emergency Roofing — quick fixes for storm or water damage
                </li>
              </ul>
            </motion.div>

            {/* Waterproofing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Why Waterproofing Is Crucial in Brooklyn
              </h2>
              <p>
                NYC roofs endure heavy rainfall, snow, humidity, and drainage
                issues on flat roofs. Without proper waterproofing, small cracks
                can cause interior leaks, mold, and structural decay.
              </p>
            </motion.div>

            {/* Masonry */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Masonry Services: An Added Bonus
              </h2>
              <p>
                Leading roofing companies also support building exteriors
                through:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Brick pointing</li>
                <li>Concrete repair</li>
                <li>Façade maintenance</li>
                <li>Stucco and siding</li>
              </ul>
              <p>
                These services help preserve your property’s strength and
                appearance for decades.
              </p>
            </motion.div>

            {/* Questions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Questions to Ask Before Hiring
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>How long have you been in business?</li>
                <li>Are you licensed and insured in NYC?</li>
                <li>Do you provide written estimates and contracts?</li>
                <li>Can I see your past roofing projects?</li>
                <li>What materials do you recommend and why?</li>
                <li>Do your roofs come with warranties?</li>
                <li>How soon can you complete the job?</li>
                <li>What’s your customer service policy?</li>
              </ul>
            </motion.div>

            {/* Red Flags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">Red Flags to Avoid</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Demands full payment upfront</li>
                <li>No local references</li>
                <li>Lacks proper licensing or insurance</li>
                <li>Only offers verbal agreements</li>
                <li>Cannot explain material choices</li>
                <li>Offers suspiciously low bids</li>
              </ul>
            </motion.div>

            {/* SAS Roofing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                ⭐ Why SAS Roofing & Waterproofing Is a Top Choice in NYC
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Certified and experienced roofing experts</li>
                <li>High-quality installations and repairs</li>
                <li>Specialization in flat roofing and waterproofing</li>
                <li>Transparent pricing and reliable service</li>
              </ul>
              <p className="mt-3">
                Proudly serving Brooklyn, Manhattan, Queens, and The Bronx.
              </p>
              <blockquote className="italic mt-3 text-[#003269]">
                “Roofing Is Our Heritage & Quality Is Our Tradition.”
              </blockquote>
              <p className="mt-4">
                <strong>Office:</strong> 552 Rugby Rd, Brooklyn, NY 11226
                <br />
                <strong>Website:</strong>{" "}
                <Link
                  href="https://www.sasroofingwaterproofing.com"
                  target="_blank"
                  className="text-[#e63a27] hover:underline"
                >
                  www.sasroofingwaterproofing.com
                </Link>
              </p>
            </motion.div>

            {/* Roofing Materials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Roofing Materials: Which One Is Best for Brooklyn?
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Material Type</th>
                      <th className="py-2 px-4 border-b">Best For</th>
                      <th className="py-2 px-4 border-b">Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">TPO Roofing</td>
                      <td className="py-2 px-4 border-b">
                        Commercial buildings
                      </td>
                      <td className="py-2 px-4 border-b">
                        Energy-efficient, long lifespan
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">EPDM Roofing</td>
                      <td className="py-2 px-4 border-b">Flat roofs</td>
                      <td className="py-2 px-4 border-b">
                        Durable, affordable, low maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">PVC Roofing</td>
                      <td className="py-2 px-4 border-b">Industrial spaces</td>
                      <td className="py-2 px-4 border-b">
                        Chemical-resistant, waterproof
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Modified Bitumen</td>
                      <td className="py-2 px-4 border-b">NYC flat roofs</td>
                      <td className="py-2 px-4 border-b">
                        Flexible, strong, proven performance
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Asphalt Shingles</td>
                      <td className="py-2 px-4 border-b">Residential roofs</td>
                      <td className="py-2 px-4 border-b">
                        Stylish, cost-effective
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Maintenance */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Importance of Regular Roof Maintenance in Brooklyn
              </h2>
              <p>
                Roof maintenance is more than a checkup — it’s protection for
                your investment. Regular inspections prevent:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Leaks and water intrusion</li>
                <li>Premature roof failure</li>
                <li>Weather damage</li>
                <li>Costly emergency repairs</li>
              </ul>
              <p className="mt-3">
                Experts recommend roof inspections twice a year, especially
                after major storms.
              </p>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Tips for Choosing the Best Roofer in Brooklyn
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Hire experienced professionals</li>
                <li>Verify insurance and licensing</li>
                <li>Check online reviews and ratings</li>
                <li>Request written estimates</li>
                <li>Ask about warranties</li>
                <li>Choose local specialists</li>
                <li>Review previous work samples</li>
              </ul>
            </motion.div>

            {/* Final Checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Final Checklist Before You Sign the Contract
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>✔ Project start and end dates</li>
                <li>✔ Materials and labor details</li>
                <li>✔ Price breakdown</li>
                <li>✔ Warranty information</li>
                <li>✔ Safety guidelines</li>
                <li>✔ Cleanup responsibilities</li>
              </ul>
              <p className="mt-3">
                Never sign until all terms are clear and in writing.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Conclusion: Protect Your Home With the Right Roofing Partner
              </h2>
              <p>
                Choosing the best roofing contractor in Brooklyn isn’t just
                about fixing a roof — it’s about protecting your home, your
                family, and your investment for years to come.
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>⭐ 30+ years of NYC roofing expertise</li>
                <li>⭐ Fully certified and insured professionals</li>
                <li>⭐ Premium quality materials</li>
                <li>⭐ Honesty, professionalism, and lasting results</li>
              </ul>
              <p className="mt-4">
                Visit{" "}
                <Link
                  href="https://www.sasroofingwaterproofing.com"
                  target="_blank"
                  className="text-[#e63a27] font-semibold hover:underline"
                >
                  www.sasroofingwaterproofing.com
                </Link>{" "}
                today to schedule your consultation and enjoy peace of mind with
                NYC’s most trusted roofing experts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
