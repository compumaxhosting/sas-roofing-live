"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <>
      {/* Main Blog Post Section */}
      <section className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center">
        <div className="w-full xl:max-w-7xl xl:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-10 w-full flex flex-col lg:flex-row items-center gap-8"
            role="article"
            aria-labelledby="main-blog-post-heading"
          >
            {/* Image on the left */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/roofing.jpg"
                alt="Close-up of a well-maintained roof with new shingles, representing roofing expertise"
                width={600}
                height={400}
                loading="lazy" // Add this
                className="rounded-xl shadow-lg mb-6 w-full h-auto"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading"
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                Why SAS <strong>Roofing</strong> &{" "}
                <strong>Waterproofing</strong> Is <strong>Brooklyn</strong>’s
                Most Trusted <strong>Roofing</strong> Expert?
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
                SAS <strong>Roofing</strong> & <strong>Waterproofing</strong>:{" "}
                <strong>Brooklyn</strong>’s Trusted <strong>Roofing</strong>{" "}
                Experts
              </h2>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                With over 30+ years of dedicated service in{" "}
                <strong>Brooklyn</strong>, <strong>Manhattan</strong>,{" "}
                <strong>Queens</strong>, and <strong>The Bronx</strong>, SAS{" "}
                <strong>Roofing</strong> & <strong>Waterproofing</strong> has
                become synonymous with quality, reliability, and excellence in{" "}
                <strong>roofing</strong>, <strong>waterproofing</strong>, and{" "}
                <strong>masonry</strong> services.
              </p>
            </div>
          </motion.div>

          {/* Core Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
            aria-labelledby="core-services-heading"
          >
            <h3
              id="core-services-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
            >
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
              aria-labelledby="roofing-solutions-link"
            >
              <Link
                href="https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
                className="text-xl md:text-2xl font-bold"
                id="roofing-solutions-link"
                aria-label="Learn more about our Roofing Solutions"
              >
                <strong>Roofing</strong> Solutions
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                From minor repairs to complete installations, we handle all
                types of <strong>roofing</strong> projects with precision and
                care. Our expertise covers:
              </p>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of roofing projects handled"
              >
                <li>
                  Flat and pitched <strong>roofs</strong>
                </li>
                <li>
                  Shingle and metal <strong>roofing</strong>
                </li>
                <li>
                  Emergency leak <strong>repairs</strong>
                </li>
              </ul>
            </motion.div>

            {/* Waterproofing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="waterproofing-link"
            >
              <Link
                href="https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                className="text-xl md:text-2xl font-bold"
                id="waterproofing-link"
                aria-label="Learn more about our Advanced Waterproofing services"
              >
                Advanced <strong>Waterproofing</strong>
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Utilizing high-quality single-ply membrane systems, we protect
                your property from water damage, mold, and structural issues.
              </p>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of waterproofing services"
              >
                <li>Basement and foundation sealing</li>
                <li>
                  <strong>Roof</strong> and terrace{" "}
                  <strong>waterproofing</strong>
                </li>
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
              aria-labelledby="masonry-link"
            >
              <Link
                href="https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny"
                className="text-xl md:text-2xl font-bold"
                id="masonry-link"
                aria-label="Learn more about our Expert Masonry Work"
              >
                Expert <strong>Masonry</strong> Work
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Our skilled masons deliver exceptional craftsmanship in:
              </p>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of masonry work"
              >
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
              aria-labelledby="why-choose-us-heading"
            >
              <h4
                id="why-choose-us-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Why Choose SAS <strong>Roofing</strong> &{" "}
                <strong>Waterproofing</strong>?
              </h4>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Reasons to choose SAS Roofing and Waterproofing"
              >
                <li>
                  <strong>Certified</strong> Excellence: Licensed under
                  #2050416-DCA
                </li>
                <li>
                  <strong>Experienced Professionals:</strong> 30+ years of
                  hands-on experience
                </li>
                <li>
                  <strong>Quality Materials:</strong> We use premium, durable
                  materials
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Proven track record
                  with stellar testimonials
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
              aria-labelledby="get-estimate-heading"
            >
              <h5
                id="get-estimate-heading"
                className="text-2xl md:text-3xl font-bold text-[#e63a27]"
              >
                Get a Free Estimate Today
              </h5>
              <p className="text-gray-700 text-base font-bevietnam">
                Protect your home with SAS <strong>Roofing</strong> &{" "}
                <strong>Waterproofing</strong>&apos;s expert services. Contact
                us for a free consultation and tailored solutions.
              </p>
              <ul
                className="text-gray-700"
                aria-label="Contact information for free estimate"
              >
                <li>
                  <strong aria-hidden="true">Phone:</strong>{" "}
                  <a
                    href="tel:3472216549"
                    className="text-[#003269] hover:underline"
                    aria-label="Call SAS Roofing and Waterproofing at 3 4 7 2 2 1 6 5 4 9"
                  >
                    (347) 221-6549
                  </a>
                </li>
                <li>
                  <strong aria-hidden="true">Address:</strong> 552 Rugby Rd,{" "}
                  <strong>Brooklyn</strong>, NY 11230
                </li>
              </ul>
              <Link
                href="/"
                className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
                aria-label="Visit SAS Roofing and Waterproofing website"
              >
                Visit SAS <strong>Roofing</strong> &{" "}
                <strong>Waterproofing</strong>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section with Animation */}
      <FAQSection />
    </>
  );
}
