
  /* SEO update: Page content refreshed on February 17, 2026 (updated after 4 months) */

  "use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "./FAQSectionBlog";

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
              Our Core Roofing, Waterproofing, and Masonry Services
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
                href="/roofing-contractors-brooklyn"
                className="text-xl md:text-2xl font-bold"
                id="roofing-solutions-link"
                aria-label="Learn more about our Roofing Solutions"
              >
                <strong>Professional Roofing Solutions</strong>
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                We specialize in complete roofing services, including roof
                repair, roof installation, and roof replacement. Whether your
                property has minor damage or needs a full roofing system
                upgrade, our skilled <strong> roofing </strong> contractors
                ensure precision and long-term protection.
              </p>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of roofing projects handled"
              >
                <li>
                  Flat roof <strong>repair and installation</strong>
                </li>
                <li>
                  Pitched roof <strong>repair and replacement</strong>
                </li>
                <li>
                  Shingle roofing <strong>installation and repair</strong>
                </li>
                <li>
                  Metal roofing systems <strong>and maintenance</strong>
                </li>
                <li>
                  Emergency roof leak <strong>and storm damage repair</strong>
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
                href="/waterproofing-contractors-NY"
                className="text-xl md:text-2xl font-bold"
                id="waterproofing-link"
                aria-label="Learn more about our Advanced Waterproofing services"
              >
                Advanced <strong>Waterproofing</strong>
              </Link>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Our professional waterproofing solutions protect your property
                from water damage, leaks, mold growth, and structural
                deterioration. We use advanced single-ply membrane systems and
                industry-leading materials to ensure long-lasting protection and
                performance.
              </p>

              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of waterproofing services"
              >
                <li>
                  Basement <strong>waterproofing</strong> and foundation sealing
                </li>
                <li>
                  Roof and terrace <strong>waterproofing systems</strong>
                </li>
                <li>
                  Bathroom <strong>waterproofing</strong> and kitchen leak
                  prevention
                </li>
                <li>
                  Structural <strong>waterproofing</strong> to prevent moisture
                  intrusion
                </li>
              </ul>

              <p className="text-gray-700 text-base font-bevietnam">
                These solutions help extend the lifespan of your property,
                prevent costly repairs, and keep your building protected
                year-round from water and moisture damage.
              </p>
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
                href="/masonry-services-brooklyn-ny"
                className="text-xl md:text-2xl font-bold"
                id="masonry-link"
                aria-label="Learn more about our Expert Masonry Services and Structural Repairs"
              >
                Expert <strong>Masonry</strong> Services
              </Link>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Our experienced masonry team provides high-quality masonry
                services, brickwork, and structural repair solutions that
                enhance both the strength and appearance of your property. We
                focus on durability, structural integrity, and long-lasting
                results in every project.
              </p>

              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Types of masonry services"
              >
                <li>Professional brickwork and stonework</li>
                <li>Concrete paving and cement work</li>
                <li>Structural masonry repair and restoration</li>
                <li>Foundation and exterior masonry maintenance</li>
              </ul>

              <p className="text-gray-700 text-base font-bevietnam">
                Our masonry solutions are designed to strengthen structures,
                improve curb appeal, and ensure your property remains safe,
                stable, and visually appealing for years to come.
              </p>
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
                className="list-disc pl-5 text-gray-700 space-y-2"
                aria-label="Reasons to choose SAS Roofing and Waterproofing"
              >
                <li>
                  <strong>Certified and Licensed Contractors:</strong> We are
                  fully licensed under #2050416-DCA, ensuring compliance with
                  industry standards and regulations.
                </li>

                <li>
                  <strong>
                    30+ Years of Roofing and Waterproofing Experience:
                  </strong>{" "}
                  Our decades of hands-on experience allow us to deliver
                  reliable, efficient, and professional services.
                </li>

                <li>
                  <strong>Premium Roofing and Waterproofing Materials:</strong>{" "}
                  We use high-quality, durable materials for long-lasting
                  protection and performance.
                </li>

                <li>
                  <strong>
                    Proven Customer Satisfaction and Trusted Reputation:
                  </strong>{" "}
                  Our strong track record, positive customer reviews, and
                  successful projects make us a trusted roofing and
                  waterproofing company.
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
