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

export default function TopRoofingContractorsBlog() {
  return (
    <>
      <section className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center font-inter">
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
                src="/blog/roofing_blog.jpg"
                alt="Newly installed shingles on a residential roof"
                width={600}
                height={400}
                className="rounded-xl shadow-lg mb-6 w-full h-auto"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading"
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                Trusted Roofing Contractors Serving Brooklyn, Manhattan, Queens
                & The Bronx
              </h1>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                When it comes to protecting your home or commercial property in
                New York City, your roof is your first line of defense. Choosing
                a roofing contractor isn’t just about patching a leak—it’s about
                hiring local professionals who understand the unique roofing
                needs of each borough, from Brooklyn brownstones to high-rise
                buildings in Manhattan.
              </p>
              <br />
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                That’s where SAS Roofing & Waterproofing comes in. We proudly
                serve Brooklyn, Manhattan, Queens, and The Bronx, offering
                expert roofing and waterproofing services tailored to NYC
                buildings.
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
            <h2
              id="core-services-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
            >
              Why Choose SAS Roofing & Waterproofing?
            </h2>
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
                aria-label="Learn more about our borough-wide NYC roofing expertise"
              >
                Borough-Wide NYC Roofing Experts
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Our crews are experienced in serving a wide range of properties
                across Brooklyn, Manhattan, Queens, and The Bronx. Whether it’s
                a residential home in Park Slope or a retail space in Harlem, we
                handle it all with precision.
              </p>
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
                aria-label="Learn more about our licensed and insured waterproofing services in NYC"
              >
                Licensed, Insured & Certified in NYC
              </Link>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                SAS Roofing is fully licensed and insured in New York City. We
                follow DOB regulations and use only OSHA-compliant practices for
                safety and reliability.
              </p>
            </motion.div>

            {/* Full-Service Roofing Solutions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="full-service-heading"
            >
              <h3
                id="full-service-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Full-Service Roofing Solutions
              </h3>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Full list of our roofing services"
              >
                <li>
                  <strong aria-hidden="true">Roof Installations –</strong> Flat
                  roofs (TPO, EPDM, Modified Bitumen), asphalt shingles, metal,
                  and more.
                </li>
                <li>
                  <strong aria-hidden="true">Roof Repairs –</strong> Leak
                  detection, storm damage repair, flashing, and emergency fixes.
                </li>
                <li>
                  <strong aria-hidden="true">Waterproofing Services –</strong>{" "}
                  Keep your roof protected against moisture and mold.
                </li>
                <li>
                  <strong aria-hidden="true">
                    Preventive Maintenance & Inspections –
                  </strong>{" "}
                  Ideal for property managers and homeowners alike.
                </li>
              </ul>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="service-areas-heading"
            >
              <h3
                id="service-areas-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Service Areas Across NYC
              </h3>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="Our NYC service areas"
              >
                <li>
                  <strong aria-hidden="true">Brooklyn –</strong> Williamsburg,
                  Bed-Stuy, Crown Heights, Park Slope.
                </li>
                <li>
                  <strong aria-hidden="true">Manhattan –</strong> Harlem, Upper
                  West Side, Lower East Side, Tribeca.
                </li>
                <li>
                  <strong aria-hidden="true">Queens –</strong> Astoria, Jackson
                  Heights, Flushing, Long Island City.
                </li>
                <li>
                  <strong aria-hidden="true">The Bronx –</strong> Fordham,
                  Riverdale, Throgs Neck, Pelham Bay.
                </li>
              </ul>
            </motion.div>

            {/* What Makes SAS Different */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="difference-heading"
            >
              <h3
                id="difference-heading"
                className="text-xl md:text-2xl font-bold"
              >
                What Makes SAS Different?
              </h3>
              <ul
                className="list-disc pl-5 text-gray-700"
                aria-label="What sets us apart from other contractors"
              >
                <li>Local Experts in NYC Roofing.</li>
                <li>Same-Day Estimates and Fast Scheduling.</li>
                <li>Workmanship Warranties on Labor and Materials.</li>
                <li>100s of Satisfied Clients Across All Boroughs.</li>
                <li>Eco-Friendly Roofing Options Available.</li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                At SAS Roofing & Waterproofing, we handle everything from flat
                roof installation, asphalt shingle roofing, and tile roofing
                installation to green roof systems and EPDM rubber roofing.
                <br /> <br />
                Whether you need roof leak repair, skylight roof installation,
                roof flashing repair, or a full slate roof replacement, our
                licensed roofing company in NYC is equipped for both residential
                roofing services and commercial roofers in the Bronx. <br />{" "}
                <br />
                We also offer expert TPO roofing, roof waterproofing in
                Manhattan, and metal roof contractor solutions. <br /> <br />
                Our team specializes in roof storm damage, emergency roof
                repair, chimney flashing in Brooklyn, and roof ventilation
                upgrades. <br /> <br />
                We proudly serve as local roofing contractors offering accurate
                roofing estimates in Queens, along with preventive gutter and
                roof maintenance, full roof inspections in NYC, new roof
                construction, and high-performance roof coating services to
                protect your investment.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="cta-heading"
            >
              <h3
                id="cta-heading"
                className="text-2xl md:text-3xl font-bold text-[#e63a27]"
              >
                Get a Free Estimate Today
              </h3>
              <ul
                className="text-gray-700"
                aria-label="Contact information for free estimate"
              >
                <li>
                  <strong aria-hidden="true">Serving All 5 NYC Boroughs</strong>{" "}
                  including Brooklyn, Manhattan, Queens & The Bronx
                </li>
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
                  <strong aria-hidden="true">Address:</strong> 552 Rugby Rd,
                  Brooklyn, NY 11230
                </li>
              </ul>
              <Link
                href="/"
                className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
                aria-label="Visit SAS Roofing and Waterproofing homepage"
              >
                Visit SAS Roofing & Waterproofing
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
