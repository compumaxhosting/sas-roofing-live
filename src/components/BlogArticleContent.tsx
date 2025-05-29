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

//updated for narrator
export default function BlogPage() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center">
      <div className="w-full xl:max-w-7xl xl:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-5"
        >
          <h4 className="text-3xl md:text-4xl font-bold font-inter mb-7">
            Why SAS Roofing & Waterproofing Is Brooklyn’s Most Trusted
            Roofing Expert ?
          </h4>
          <h4 className="text-xl md:text-3xl font-semibold font-inter mb-2">
            SAS Roofing & Waterproofing: Brooklyn’s Trusted Roofing Experts
          </h4>
          <p className="text-sm md:text-base text-gray-700 font-bevietnam">
            With over 30+ years of dedicated service in Brooklyn, Manhattan,
            Queens, and The Bronx, SAS Roofing & Waterproofing has become
            synonymous with quality, reliability, and excellence in roofing,
            waterproofing, and masonry services.
          </p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-5">
            Our Core Services
          </h3>
        </motion.div>

        <div className="grid gap-12">
          {/* Roofing Solutions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <Link
              href={
                "https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
              }
              className="text-xl md:text-2xl font-bold"
            >
              Roofing Solutions
            </Link>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              From minor repairs to complete installations, we handle all types
              of roofing projects with precision and care. Our expertise covers:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Flat and pitched roofs</li>
              <li>Shingle and metal roofing</li>
              <li>Emergency leak repairs</li>
            </ul>
          </motion.div>

          {/* Waterproofing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <Link
              href={
                "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
              }
              className="text-xl md:text-2xl font-bold"
            >
              Advanced Waterproofing
            </Link>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Utilizing high-quality single-ply membrane systems, we protect
              your property from water damage, mold, and structural issues.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Basement and foundation sealing</li>
              <li>Roof and terrace waterproofing</li>
              <li>Bathroom and kitchen leak prevention</li>
            </ul>
          </motion.div>

          {/* Masonry */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <Link
              href={
                "https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny"
              }
              className="text-xl md:text-2xl font-bold"
            >
              Expert Masonry Work
            </Link>
            <p className="text-gray-700 text-base font-bevietnam mt-4">
              Our skilled masons deliver exceptional craftsmanship in:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Brickwork and stonework</li>
              <li>Paving and cement work</li>
              <li>Structural repairs and restorations</li>
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <h3 className="text-xl md:text-2xl font-bold">
              Why Choose SAS Roofing & Waterproofing?
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Certified Excellence: Licensed under #2050416-DCA</li>
              <li>
                Experienced Professionals: 30+ years of hands-on experience
              </li>
              <li>Quality Materials: We use premium, durable materials</li>
              <li>
                Customer Satisfaction: Proven track record with stellar
                testimonials
              </li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#e63a27]">
              Get a Free Estimate Today
            </h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Protect your home with SAS Roofing & Waterproofing&apos;s expert
              services. Contact us for a free consultation and tailored
              solutions.
            </p>
            <ul className="text-gray-700">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:3472216549"
                  className="text-[#003269] hover:underline"
                >
                  (347) 221-6549
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sascon09@yahoo.com"
                  className="text-[#003269] hover:underline"
                >
                  sascon09@yahoo.com
                </a>
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
  );
}
