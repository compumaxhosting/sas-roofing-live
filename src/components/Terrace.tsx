"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import TerraceFaq from "./TerraceFaq";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const blogPost = {
  title: "Terrace Waterproofing vs Roof Waterproofing – What’s the Difference?",
  shortTitle: "Terrace vs Roof Waterproofing",
  description:
    "Terrace Waterproofing vs Roof Waterproofing – What’s the Difference?",
  date: "",
  image: "/blog/terrace.png",
  link: "terrace-waterproofing-vs-roof-waterproofing",
  initialLikes: 0,
};

export default function Terrace() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section
        className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
        role="document"
      >
        <div className="w-full xl:max-w-7xl xl:px-0">
          <div className="max-w-3xl mx-auto">
            {/* Title Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold font-inter mb-6">
                Terrace Waterproofing vs Roof Waterproofing – What’s the
                Difference?
              </h1>
            </motion.div>

            {/* Introduction */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Introduction to Waterproofing
              </h2>
              <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                Water damage is sneaky. One small leak can lead to mold, cracks,
                and costly repairs. That’s why waterproofing is critical—
                especially in places like New York, where rain, snow, and
                temperature swings hit buildings hard.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <Image
                src="/blog/terrace.png"
                alt="terrace vs roof waterproofing"
                width={900}
                height={500}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </motion.div>

            {/* Terrace Waterproofing */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                What Is Terrace Waterproofing?
              </h2>
              <p className="text-sm md:text-base mb-4 font-bevietnam leading-relaxed">
                Terrace waterproofing protects flat, walkable surfaces often
                used as sitting areas, gardens, or utility spaces.
              </p>

              <h3 className="font-semibold text-sm md:text-base mb-2">
                Key goals:
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-sm md:text-base font-bevietnam">
                <li>Prevent water seepage into living areas</li>
                <li>Handle foot traffic</li>
                <li>Resist weather exposure</li>
              </ul>

              <p className="mt-4 text-sm md:text-base font-bevietnam leading-relaxed">
                Common systems include chemical coatings and membrane layers
                applied by experts like roof waterproofing specialists.
              </p>
            </motion.div>

            {/* Roof Waterproofing */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                What Is Roof Waterproofing?
              </h2>
              <p className="text-sm md:text-base mb-4 font-bevietnam leading-relaxed">
                Roof waterproofing focuses on the topmost structural covering of
                a building. Unlike terraces, roofs may not be designed for
                regular use.
              </p>

              <h3 className="font-semibold text-sm md:text-base mb-2">
                Main functions:
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-sm md:text-base font-bevietnam">
                <li>Shield the building structure</li>
                <li>Prevent leaks and insulation damage</li>
                <li>Withstand pooled water and UV rays</li>
              </ul>
            </motion.div>

            {/* Key Differences */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Key Differences
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-sm md:text-base font-bevietnam">
                <li>Usage: Terrace is walkable; Roof is mostly non-walkable</li>
                <li>
                  Load: Terrace handles foot traffic; Roof focuses on structural
                  protection
                </li>
                <li>
                  Materials: Terrace uses flexible coatings; Roof uses
                  heavy-duty membranes
                </li>
                <li>Maintenance: Terrace requires higher maintenance</li>
              </ul>
            </motion.div>

            {/* Which One */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Which One Do You Need?
              </h2>
              <p className="text-sm md:text-base font-bevietnam leading-relaxed">
                If the surface is used like a floor, it needs terrace
                waterproofing. If it’s purely protective, roof waterproofing
                works. In NYC’s harsh climate, professional installation is
                important.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-sm md:text-base font-bevietnam leading-relaxed">
                Both systems fight the same enemy—water—but serve different
                roles. Choosing the right solution protects your property, saves
                money, and prevents future headaches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TerraceFaq />
    </>
  );
}
