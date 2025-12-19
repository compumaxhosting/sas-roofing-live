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
  title: "Say Goodbye to Leaks with Full-Spectrum Waterproofing in NYC",
  shortTitle: "Full-spectrum waterproofing solutions across NYC",
  description:
    "Protect your property from leaks, mold, and structural damage with full-spectrum waterproofing services in NYC. Residential and commercial solutions across Brooklyn, Manhattan, Queens, and The Bronx.",
  date: "",
  image: "/blog/residential-blog.jpg",
  link: "full-spectrum-waterproofing-nyc",
  initialLikes: 0,
};

export default function Residential() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                src="/blog/residential-blog.jpg"
                alt="Professional waterproofing services protecting buildings in NYC"
                width={600}
                height={400}
                className="md:h-102 rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-heading"
                className="text-2xl md:text-4xl font-bold font-inter mb-6"
              >
                Say Goodbye to Leaks with Full-Spectrum Waterproofing in NYC
              </h1>

              <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                Water damage can quickly compromise the safety and value of your
                property. From Brooklyn brownstones to Manhattan high-rises,
                reliable waterproofing is essential to prevent leaks, mold
                growth, and structural deterioration.
              </p>

              <p className="mt-2">
                Our full-spectrum{" "}
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-blue-700"
                >
                  waterproofing services in NYC
                </Link>{" "}
                deliver comprehensive, long-lasting protection for both
                residential and commercial properties.
              </p>
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="grid gap-10 text-gray-700 font-bevietnam leading-relaxed">
            {/* Section 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Residential Waterproofing in Brooklyn and Queens
              </h2>

              <p>
                Homes in Brooklyn and Queens face challenges such as heavy
                rainfall, fluctuating groundwater levels, and aging foundations.
                Our residential waterproofing Brooklyn and foundation
                waterproofing Queens services include basement sealing, crack
                repairs, advanced drainage systems, and high-performance
                waterproofing membranes.
              </p>

              <p className="mt-2">
                These solutions effectively protect homes from water intrusion
                while remaining affordable and durable. Homeowners searching for
                a trusted “waterproofing company near me NYC” can rely on our
                proven expertise.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Commercial Waterproofing Services Across NYC
              </h2>

              <p>
                For businesses throughout Manhattan and NYC, water intrusion can
                disrupt operations and lead to costly repairs. Our commercial
                waterproofing NYC services cover rooftops, basements, exterior
                walls, and foundations.
              </p>

              <p className="mt-2">
                With specialized roof{" "}
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-blue-700"
                >
                  waterproofing Manhattan
                </Link>{" "}
                solutions, we help protect commercial properties while meeting
                local building codes and industry standards.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Exterior Waterproofing Solutions
              </h2>

              <p>
                Our exterior waterproofing Brooklyn and Queens services shield
                properties from rain, snow, and humidity. Using advanced
                sealants, water-repellent coatings, and effective drainage
                solutions, we prevent moisture from penetrating walls and
                foundations.
              </p>

              <p className="mt-2">
                Property owners seeking affordable waterproofing services NYC
                benefit from high-quality workmanship without hidden costs.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">Why Choose Us</h2>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Extensive experience across all NYC boroughs</li>
                <li>Customized waterproofing solutions for every property</li>
                <li>Durable, high-quality materials built to last</li>
                <li>Transparent pricing and reliable service</li>
              </ul>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-3">
                Protect Your Property Today
              </h2>

              <p>
                Investing in professional waterproofing now can prevent costly
                future damage. From foundation waterproofing Queens to roof
                waterproofing Manhattan, our team delivers dependable solutions
                across Brooklyn, Manhattan, Queens, and The Bronx.
              </p>

              <p className="mt-2">
                Contact us today for a property assessment and secure your
                investment with expert waterproofing services.
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
