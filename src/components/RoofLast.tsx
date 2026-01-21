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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
            role="article"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/blog-roof-last.png"
                alt=""
                width={600}
                height={400}
                loading="lazy"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold font-inter mb-7">
                How Long Does a Roof Last in NYC Weather Conditions?
              </h1>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                New York City weather can be tough on your roof. Hot summers,
                freezing winters, heavy rain, snow, and strong winds all take a
                toll over time. Homeowners in Brooklyn, Queens, and Manhattan
                often ask one key question: How long will my roof really last in
                NYC conditions? The answer depends on the roofing material,
                installation quality, and regular maintenance. Understanding
                this can help you avoid sudden leaks, costly repairs, and
                unexpected replacements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">
              Average Lifespan of Common Roofing Materials in NYC
            </h2>
            <p className="text-gray-700 font-bevietnam">
              Different roofing materials react differently to NYC’s changing
              climate. Here’s a simple breakdown of what homeowners can expect.
            </p>

            <p className="font-semibold text-xl">Asphalt Shingle Roofs</p>
            <p className="text-gray-700 font-bevietnam">
              Most common choice in NYC homes.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Average lifespan: 15–25 years</li>
              <li>Can wear faster due to heat and winter ice</li>
              <li>Regular inspections can extend life</li>
            </ul>

            <p className="font-semibold text-xl">
              Flat Roofs (Modified Bitumen / Built-Up Roofing)
            </p>
            <p className="text-gray-700 font-bevietnam">
              Very common in Brooklyn and Manhattan buildings.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Average lifespan: 15–20 years</li>
              <li>Sensitive to standing water and snow buildup</li>
              <li>Requires regular maintenance</li>
            </ul>

            <p className="font-semibold text-xl">Metal Roofs</p>
            <p className="text-gray-700 font-bevietnam">
              Becoming more popular for durability.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Average lifespan: 40–50 years</li>
              <li>Handles snow and rain well</li>
              <li>Higher upfront cost, long-term savings</li>
            </ul>

            <p className="font-semibold text-xl">Tile or Slate Roofs</p>
            <p className="text-gray-700 font-bevietnam">
              Found on older or high-end properties.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Average lifespan: 50–100 years</li>
              <li>Very durable but heavy</li>
              <li>Needs strong structural support</li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              Choosing the right material and working with experienced
              professional roofing services can make a big difference in how
              long your roof lasts. Many homeowners rely on{" "}
              <Link
                href="/roofing-contractors-brooklyn"
                className="text-blue-400 hover:underline"
              >
                trusted roofing contractors in Brooklyn
              </Link>{" "}
              to guide these decisions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              How NYC Borough Weather Conditions Affect Roofs
            </h2>
            <p className="text-gray-700 font-bevietnam">
              Even within NYC, weather conditions vary by location.
            </p>

            <p className="font-semibold text-xl">Brooklyn</p>
            <p className="text-gray-700 font-bevietnam">
              Brooklyn sees heavy rain, salty coastal air, and strong winds.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Flat roofs are common</li>
              <li>Moisture buildup can cause leaks</li>
              <li>
                Regular care from roofing services in Brooklyn is essential
              </li>
            </ul>

            <p className="font-semibold text-xl">Queens</p>
            <p className="text-gray-700 font-bevietnam">
              Queens has more open areas and temperature swings.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Ice dams in winter are common</li>
              <li>Shingles can crack from freeze-thaw cycles</li>
              <li>
                Local Queens roofing experts understand these challenges well
              </li>
            </ul>

            <p className="font-semibold text-xl">Manhattan</p>
            <p className="text-gray-700 font-bevietnam">
              Manhattan buildings face unique pressure.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Tall buildings deal with stronger winds</li>
              <li>Heat reflection from nearby structures</li>
              <li>
                Older roofs need careful monitoring by roofing contractors in
                Manhattan
              </li>
            </ul>

            <p className="text-gray-700 font-bevietnam">
              No matter the borough, local experience matters. Working with{" "}
              <Link
                href="/roofing-contractors-brooklyn"
                className="text-blue-400 hover:underline"
              >
                trusted Brooklyn roofers
              </Link>{" "}
              who serve Brooklyn, Queens, and Manhattanensures your roof gets
              the right care for its environment.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Signs Your Roof May Need Repair or Replacement
            </h2>
            <p className="text-gray-700 font-bevietnam">
              Your roof often shows warning signs before major problems start.
              Catching them early can save thousands of dollars.
            </p>
            <p className="font-semibold text-xl">Common Warning Signs</p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Water stains on ceilings or walls</li>
              <li>Missing, cracked, or curling shingles</li>
              <li>Sagging roof areas</li>
              <li>Mold or mildew smell indoors</li>
              <li>Higher energy bills due to poor insulation</li>
            </ul>
            <p className="text-gray-700 font-bevietnam">
              If you notice any of these issues, don’t wait. A quick inspection
              by professional roofing services can prevent small problems from
              becoming major damage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Importance of Professional Roof Inspections
            </h2>
            <p className="text-gray-700 font-bevietnam">
              Many roofing problems are not visible from the ground. That’s why
              regular inspections are so important in NYC.
            </p>
            <p className="font-semibold text-xl">Why Inspections Matter</p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Detect hidden leaks early</li>
              <li>Check damage after storms or heavy snow</li>
              <li>Extend roof lifespan</li>
              <li>Maintain property value</li>
            </ul>
            <p className="text-gray-700 font-bevietnam">
              Experts recommend a roof inspection once a year, after major
              storms, and before buying or selling a property. Homeowners across
              Brooklyn, Queens, and Manhattan trust experienced teams like
              trusted Brooklyn roofers to keep their roofs in top condition.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              How to Make Your Roof Last Longer in NYC
            </h2>
            <p className="text-gray-700 font-bevietnam">
              Simple maintenance steps can add years to your roof’s life.
            </p>
            <p className="font-semibold text-xl">Helpful Tips</p>
            <ul className="list-disc ml-6 text-gray-700 font-bevietnam">
              <li>Clean gutters regularly</li>
              <li>Remove snow buildup safely</li>
              <li>Fix small leaks immediately</li>
              <li>Schedule annual inspections</li>
              <li>Use licensed local contractors</li>
            </ul>
            <p className="text-gray-700 font-bevietnam">
              Investing in quality care today reduces the risk of emergency
              repairs tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="my-8 space-y-4"
          >
            <h2 className="text-2xl font-bold">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3 text-gray-700 font-bevietnam">
              <p>
                <strong>
                  How often should NYC homeowners replace their roof?
                </strong>
                <br />
                Most roofs last 15–25 years, depending on material and
                maintenance.
              </p>
              <p>
                <strong>Does NYC weather reduce roof lifespan?</strong>
                <br />
                Yes. Extreme heat, snow, rain, and wind can shorten roof life
                without proper care.
              </p>
              <p>
                <strong>Are flat roofs common in NYC?</strong>
                <br />
                Yes. Flat roofs are very common, especially in Brooklyn and
                Manhattan buildings.
              </p>
              <p>
                <strong>Can repairs extend roof life?</strong>
                <br />
                Absolutely. Timely repairs and inspections can add many years.
              </p>
              <p>
                <strong>Should I hire local roofing experts?</strong>
                <br />
                Yes. Local professionals understand borough-specific weather
                challenges best.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 mt-10"
          >
            <h2 className="text-2xl font-bold">
              Conclusion: Plan Ahead and Protect Your Home
            </h2>
            <p className="text-gray-700 font-bevietnam">
              NYC weather is tough, but your roof doesn’t have to suffer.
              Knowing how long your roof should last helps you plan smarter and
              avoid surprises.
            </p>
            <p className="text-gray-700 font-bevietnam">
              Whether you own a home or manage a property, regular inspections
              and expert care are key. If you’re in Brooklyn, Queens, or
              Manhattan, consider consulting experienced local professionals for
              a roof checkup or repair. A small step today can protect your home
              for years to come.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
