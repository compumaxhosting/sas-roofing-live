"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FAQSection from "./FAQSectionBlog";
import Link from "next/link";

import { type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // valid easing type
    },
  },
};

export const blogPost = {
  title:
    "How to Choose the Best Roofing Company in Brooklyn Without Overpaying",
  shortTitle: "Your complete guide to hiring trusted roofers in Brooklyn.",
  description: `Learn how to choose the best roofing company in Brooklyn without overpaying. Understand what to look for, compare estimates, check licenses, and make the right decision for your home or business.`,
  date: "27 OCT",
  image: "/blog/signs-roofing.jpeg",
  link: "how-to-choose-the-best-roofing-company-in-brooklyn-without-overpaying",
  initialLikes: 70,
};

export default function SignsRoofing() {
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
            className="mb-12 flex flex-col lg:flex-row items-stretch gap-8"
            role="article"
            aria-labelledby="main-blog-heading"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex">
              <Image
                src="/blog/signs-roofing.jpeg"
                alt="Roofing services warning signs in Brooklyn and Manhattan"
                width={600}
                height={300}
                className="w-full h-full max-h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1
                id="main-blog-heading"
                className="text-2xl md:text-4xl font-bold font-inter mb-4"
              >
                10 Signs You Need Roofing Services Immediately
              </h1>
              <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                If you live in Brooklyn (11201, 11205, 11206, 11215, 11216,
                11217, 11218, 11221, 11231, 11233, 11238) or Manhattan (10004,
                10005, 10006, 10007, 10012, 10013, 10014, 10038, 10280),
                spotting early signs of roof trouble is essential. A damaged
                roof can lead to leaks, mold, and major structural issues. Here
                are the top signs that you need roofing services right away—and
                how local experts can help.
              </p>
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="grid gap-8 text-gray-700 font-bevietnam leading-relaxed">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">
                1. Water Leaks or Stains
              </h2>
              <p>
                If you notice water dripping, ceiling stains, or damp walls,
                your roof may have cracks or loose shingles. This is one of the
                most urgent signs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">
                2. Missing or Damaged Shingles
              </h2>
              <p>
                Strong winds and storms often cause shingles to curl, crack, or
                fall off. This exposes your home to leaks.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">
                3. Sagging Roof Sections
              </h2>
              <p>
                A sagging roof is a red flag. It may indicate structural
                weakness or trapped moisture.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">4. Mold or Moss Growth</h2>
              <p>
                Moss and mold show that moisture is trapped in your roofing
                system, requiring professional attention.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">5. Granules in Gutters</h2>
              <p>
                If your gutters are filled with shingle granules, it means your
                roof is aging and losing its protective layer.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">6. Rising Energy Bills</h2>
              <p>
                Poor insulation from roofing issues can lead to higher heating
                and cooling costs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">
                7. Roof Age Over 20 Years
              </h2>
              <p>
                Older roofs weaken over time. If yours is over two decades old,
                you likely need inspection or replacement.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">8. Interior Drafts</h2>
              <p>Drafts in the attic can mean gaps or cracks in the roof.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">9. Damaged Flashing</h2>
              <p>
                Broken flashing around vents, chimneys, or skylights can cause
                major leaks.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold mb-2">
                10. Loose or Fallen Roof Tiles
              </h2>
              <p>
                Loose tiles compromise your home’s protection and should be
                fixed immediately.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>
                For trusted local service in Brooklyn and Manhattan, contact SAS
                Roofing & Waterproofing. Their certified team delivers fast,
                reliable repair and replacement solutions.
              </p>
              <p className="mt-2">
                Learn more at{" "}
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-blue-700"
                >
                  SAS Roofing Contractors in Brooklyn
                </Link>{" "}
                or visit the main site:{" "}
                <Link href="/" className="text-blue-700">
                  SAS Roofing Waterproofing
                </Link>
                .
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
