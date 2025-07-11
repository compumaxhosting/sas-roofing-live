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
      <section
        className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
        aria-labelledby="main-blog-post-heading"
        role="document"
      >
        <div className="w-full xl:max-w-7xl xl:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
            role="article"
            aria-labelledby="main-blog-post-heading"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/waterproofing.webp"
                alt="Close-up of a building wall undergoing waterproofing treatment, showing a professional applying a sealant."
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading"
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                How Waterproofing Can Save Your NYC Property from Costly Damage
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
                Essential Protection for Homes and Businesses in New York City
              </h2>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                Water damage is one of the most expensive and destructive issues
                a property owner in New York City can face. With NYC’s
                unpredictable weather, including heavy rain, snow, and
                fluctuating temperatures, it&apos;s crucial to ensure your
                property is properly waterproofed. Whether you&apos;re in
                Brooklyn, Manhattan, Queens, or The Bronx, investing in
                professional waterproofing services can save you from costly
                repairs and protect your property’s long-term value.
              </p>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam mt-4">
                In this blog, we’ll explore why waterproofing is essential for
                NYC properties and how it can prevent serious damage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Why You Need Professional Waterproofing in NYC
            </h2>
            <p className="text-gray-700 text-base font-bevietnam mb-2">
              New York City’s unique architectural landscape and unpredictable
              weather make waterproofing a must for property owners. Here’s why:
            </p>
          </motion.div>

          <div className="grid gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                1. Protects Structural Integrity
              </h3>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Water infiltrating a building can cause severe damage to walls,
                foundations, and roofs. Over time, this can result in structural
                issues like cracks, sagging, and even collapse. Waterproofing
                your property ensures water doesn’t penetrate critical areas
                that support your building’s structure.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                2. Prevents Mold and Mildew
              </h3>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Excess moisture promotes mold and mildew growth, which can be
                hazardous to health. Mold not only damages surfaces but also
                poses respiratory risks. Waterproofing keeps your property dry
                and healthy by preventing mold buildup.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                3. Preserves Property and Furnishings
              </h3>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Water can destroy personal belongings, including electronics,
                furniture, and artwork. Waterproofing shields these valuable
                items from water damage, allowing them to stay in good condition
                for years.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                4. Increases Property Value
              </h3>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Properties with waterproofing systems often have a higher resale
                value. Potential buyers appreciate a building that’s been
                safeguarded against water damage, making it easier to sell in
                the future.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Trusted Waterproofing Contractors in Brooklyn, Manhattan,
                Queens, and The Bronx
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Choosing the right waterproofing contractor is essential. NYC
                properties have unique challenges due to their age, size, and
                location. A trusted professional will understand these
                challenges and offer tailored solutions to meet your needs. In
                Brooklyn, Manhattan, Queens, and The Bronx, look for companies
                with proven experience in handling residential and commercial
                waterproofing jobs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                Common Waterproofing Solutions in NYC Include:
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                <li>
                  <b>Foundation Waterproofing:</b> Protects against water
                  entering through your building&apos;s foundation.
                </li>
                <li>
                  <b>Roof Waterproofing:</b> Prevents leaks in flat or sloped
                  roofs, which are common in NYC.
                </li>
                <li>
                  <b>Basement Waterproofing:</b> Ensures that water doesn’t seep
                  into below-ground areas, which are especially prone to
                  moisture.
                </li>
                <li>
                  <b>Crawl Space Waterproofing:</b> Keeps moisture out of crawl
                  spaces, preventing rotting and pests.
                </li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam">
                By hiring {""}
                <Link
                  href={
                    "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                  }
                  className="text-[#003269] hover:underline"
                >
                  waterproofing experts
                </Link>
                , you ensure that each area of your property is properly
                protected against leaks and water damage.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Stop Leaks Fast: Waterproofing Solutions for NYC Properties
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                The key to avoiding extensive water damage is addressing leaks
                quickly. Professional waterproofing contractors provide a
                variety of solutions that stop water intrusion before it becomes
                a major problem:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                <li>
                  <b>Sealant Application:</b> Waterproofing sealants are applied
                  to minor cracks and gaps to create an impermeable barrier,
                  preventing leaks.
                </li>
                <li>
                  <b>Drainage Systems:</b> Installing proper drainage systems
                  around the property helps divert water away from the
                  foundation, preventing water buildup.
                </li>
                <li>
                  <b>Sump Pumps:</b> For properties with basements, sump pumps
                  remove excess water, keeping the area dry even during heavy
                  rainstorms.
                </li>
                <li>
                  <b>Roof Coatings:</b> A protective layer applied to flat roofs
                  that prevents leaks and extends the roof’s lifespan.
                </li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam">
                These solutions not only address existing problems but also act
                as preventative measures against future damage.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Affordable and Reliable Waterproofing in NYC Boroughs
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Many NYC property owners think waterproofing services are too
                expensive, but the truth is, they can save you a lot of money in
                the long run. Without proper waterproofing, small issues can
                quickly escalate into costly repairs. Professional waterproofing
                contractors offer affordable solutions, ensuring that your
                property remains safe without breaking the bank.
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                Whether you live in Brooklyn, Manhattan, Queens, or The Bronx,
                there are reliable and cost-effective waterproofing services
                available to meet your needs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Protect Your Property with Expert Waterproofing Services
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Waterproofing is not just a one-time fix but an investment in
                your property’s future. From preventing structural damage to
                safeguarding your health, waterproofing offers significant
                benefits. By working with trusted{" "}
                <Link
                  href={
                    "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                  }
                  className="text-[#003269] hover:underline"
                >
                  waterproofing contractors
                </Link>
                in NYC, you can protect your home or business from the
                destructive effects of water damage.
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                For more details about professional waterproofing services,
                check out this{" "}
                <Link
                  href="https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                  className="text-[#003269] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </Link>{" "}
                and learn how the right waterproofing solutions can protect your
                NYC property.
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                In conclusion, don’t wait for water damage to take a toll on
                your property. Act now by hiring professional waterproofing
                experts in Brooklyn, Manhattan, Queens, or The Bronx to ensure
                your property stays dry, safe, and secure for years to come.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2
                id="free-estimate-heading"
                className="text-2xl md:text-3xl font-bold text-[#e63a27]"
              >
                Get a Free Estimate Today
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Protect your home with SAS Roofing & Waterproofing&apos;s expert
                services. Contact us for a free consultation and tailored
                solutions.
              </p>
              <ul className="text-gray-700">
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
                  <address>
                    <strong>Address:</strong> 552 Rugby Rd, Brooklyn, NY 11230
                  </address>
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
