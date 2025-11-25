"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FAQSection from "./FAQSectionBlog";
import Link from "next/link";

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

export default function BestWaterproofing() {
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
                src="/blog/blogImage.jpg"
                alt="Professional roofer working on a Brooklyn building roof installation"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-heading" className="text-2xl md:text-4xl font-bold font-inter mb-6"
              >
                Best Waterproofing Contractors in New York — Protect Your
                Property from Water Damage
              </h1>
              <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                Water damage is one of the most common and costly problems New
                Yorkers face. From basement seepage to exterior wall leaks,
                moisture can harm building structure, promote mold, and lower
                property value.{" "}
                <Link href="/" >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                provides proven waterproofing solutions across Brooklyn,
                Manhattan, Queens, and The Bronx. With decades of local
                experience, they specialize in basement waterproofing,
                foundation sealing, exterior wall protection, and commercial
                systems designed for New York’s climate and construction style.
              </p>
              <h2 className="text-2xl font-bold mb-3">
                Why Waterproofing Matters in NYC
              </h2>
              <p>
                New York’s weather and dense, often older building stock make
                waterproofing a necessity. Heavy rain, melting snow, and high
                groundwater levels in certain neighborhoods increase the risk of
                leaks and foundation damage. Proper waterproofing prevents
                structural deterioration, improves indoor air quality, reduces
                mold, and extends the life of your property. It’s one of the
                smartest investments you can make for your home or building.
              </p>
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="grid gap-10 text-gray-700 font-bevietnam leading-relaxed">
            {/* What SAS Offers */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                What SAS Roofing & Waterproofing Offers
              </h2>
              <p>
                SAS Roofing & Waterproofing is a trusted, family-run company
                serving New York for over two decades. Their team handles both
                residential and commercial waterproofing with quality materials
                and expert workmanship.
              </p>

              <h3 className="font-semibold mt-2">Services include:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Basement waterproofing: Interior and exterior systems to stop
                  seepage, manage water pressure, and prevent dampness.
                </li>
                <li>
                  Foundation waterproofing: Crack repair, drainage, and sealing
                  solutions that protect structural integrity.
                </li>
                <li>
                  Roof waterproofing: Single-ply membranes, coatings, and
                  sealants to prevent leaks and energy loss.
                </li>
                <li>
                  Exterior wall waterproofing: Brick, stone, stucco, and
                  concrete sealing to stop water intrusion.
                </li>
                <li>
                  Commercial waterproofing: Large-scale building systems and
                  long-lasting coatings.
                </li>
                <li>
                  Masonry repair & pointing: Brick restoration and sealing for
                  lasting protection.
                </li>
              </ul>
            </motion.div>

            {/* The Waterproofing Process */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                The Waterproofing Process
              </h2>
              <p>
                A quality waterproofing project should follow a structured
                approach. SAS Roofing & Waterproofing follows industry best
                practices:
              </p>
              <ol className="list-decimal ml-6 mt-2 space-y-1">
                <li>
                  Inspection & evaluation — Technicians identify problem areas
                  and causes.
                </li>
                <li>
                  Customized plan & estimate — You’ll receive clear
                  recommendations and costs.
                </li>
                <li>
                  Surface preparation & repair — Crack sealing, repointing, or
                  cleaning as needed.
                </li>
                <li>
                  Application of waterproofing system — Installation of
                  membranes, coatings, or interior drainage.
                </li>
                <li>
                  Final inspection & warranty — Ensures quality and durability
                  of the completed work.
                </li>
              </ol>
              <p className="mt-2">
                This step-by-step process ensures each issue is fixed at the
                root and prevents recurring problems.
              </p>
            </motion.div>

            {/* Common Problems */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Common Waterproofing Problems Solved
              </h2>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Damp or musty basements</li>
                <li>Leaky foundations or walls</li>
                <li>Roof leaks and flashing failures</li>
                <li>Water seepage through brick or concrete</li>
                <li>Mold and humidity issues in crawl spaces</li>
              </ul>
            </motion.div>

            {/* Cost and Value */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">Cost and Value</h2>
              <p>
                The cost of waterproofing depends on building size, location,
                materials, and access. SAS Roofing & Waterproofing provides free
                on-site estimates to help you understand your options before
                committing. Their goal is to balance quality with affordability,
                offering long-term protection for your investment.
              </p>
            </motion.div>

            {/* Choosing Contractor */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                How to Choose the Right Waterproofing Contractor
              </h2>
              <p>When selecting a waterproofing company, look for:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Verified experience in your borough</li>
                <li>Licensed and insured professionals</li>
                <li>Written estimates and clear timelines</li>
                <li>Quality materials with manufacturer warranties</li>
                <li>Good local reviews and references</li>
              </ul>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">FAQs</h2>
              <p>
                <strong>Q: How long does waterproofing take?</strong>
              </p>
              <p>
                A: Smaller jobs take 2–3 days; larger projects may take up to a
                week.
              </p>

              <p>
                <strong>
                  Q: Can waterproofing stop old leaks permanently?
                </strong>
              </p>
              <p>
                A: Yes. Professional-grade systems seal leaks and prevent future
                moisture intrusion.
              </p>

              <p>
                <strong>Q: Is waterproofing worth it for older homes?</strong>
              </p>
              <p>
                A: Definitely. It protects foundations, stops mold, and
                preserves property value.
              </p>

              <p>
                <strong>Q: Do you offer commercial waterproofing?</strong>
              </p>
              <p>
                A: Yes, SAS handles large buildings, offices, and retail
                structures across New York City.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
              <p>
                Waterproofing is one of the smartest ways to protect your home
                or business from long-term damage. Whether it’s a basement leak,
                wall seepage, or a roof issue, hiring experienced professionals
                makes all the difference.{" "}
                <Link href="/" >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                combines experience, skill, and local knowledge to deliver
                reliable, lasting results throughout Brooklyn, Manhattan,
                Queens, and The Bronx.
              </p>
              <p className="mt-2">
                Call today for a free estimate and keep your property safe, dry,
                and secure.
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
