/* SEO update: Page content refreshed on march 12, 2026 (updated after 4 months) */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a loader/spinner
  return (
    <>
      <section
        className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center"
        aria-labelledby="main-blog-post-heading"
        // Added role="document" for the main content area, which is equivalent to the body of a web page
        // It implies a logical grouping of content that comprises a document.
        role="document"
      >
        <div className="w-full xl:max-w-7xl xl:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
            // Added role="article" to explicitly mark this as the primary article content.
            role="article"
            aria-labelledby="main-blog-post-heading"
          >
            {/* Image on the left */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/blog/blogImage.jpg"
                // Enhanced alt text to be more descriptive for screen reader users
                alt="Close-up of a building wall undergoing waterproofing treatment, showing a professional applying a sealant."
                width={600}
                height={400}
                loading="lazy" // Add this
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading"
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                Trusted NYC Waterproofing Contractor Protecting Homes &
                Buildings
              </h1>

              <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
                Professional Waterproofing Services for Residential & Commercial
                Properties
              </h2>

              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                In a city like <strong>New York</strong>, where heavy rain,
                snow, and humidity can cause serious structural damage, reliable
                <strong> waterproofing solutions</strong> are essential.
                Property owners across the city rely on experienced{" "}
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-[#003269] hover:underline"
                  aria-label="Learn more about waterproofing contractors in New York City"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  waterproofing contractors in NYC
                </Link>{" "}
                to protect their buildings from leaks, moisture intrusion, mold
                growth, and long-term foundation damage. From basement
                waterproofing to roof and structural waterproofing, professional
                systems ensure buildings stay strong, dry, and protected
                year-round.
              </p>
            </div>
          </motion.div>

          {/* Core Services Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
            aria-labelledby="our-services-heading" // Link to the heading below
          >
            <h4 // Changed to h2 as it's a main section heading
              id="our-services-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
            >
              Our Services
            </h4>
          </motion.div>

          <div className="grid gap-12">
            {/* Basement Waterproofing Brooklyn */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="basement-waterproofing-heading"
            >
              <h4
                id="basement-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Basement Waterproofing in Brooklyn: Protecting Your Foundation
              </h4>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Many properties in <strong>Brooklyn</strong> experience basement
                leaks due to aging foundations, poor drainage systems, and heavy
                seasonal rainfall. Professional{" "}
                <b aria-hidden="true">basement waterproofing in Brooklyn</b> is
                one of the most effective ways to protect your home from water
                intrusion, mold growth, and structural deterioration. By sealing
                foundation walls, improving drainage, and installing modern
                waterproofing systems, homeowners can prevent costly damage
                while maintaining a dry, safe, and healthy living environment.
              </p>
            </motion.div>

            {/* Roof Leak Repair Manhattan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="roof-leak-repair-heading" // Link to the heading below
            >
              <h5
                id="roof-leak-repair-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Roof Leak Repair in Manhattan: Prevent Costly Roof Damage
              </h5>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Many buildings in <strong>Manhattan</strong> feature flat or
                low-slope roofing systems that can develop leaks over time due
                to weather exposure, aging materials, and poor drainage.
                Professional{" "}
                <b aria-hidden="true">roof leak repair in Manhattan</b> helps
                property owners quickly identify problem areas and prevent water
                intrusion that can damage ceilings, insulation, and structural
                components. Using advanced roofing materials and proven repair
                techniques, experienced contractors provide fast, long-lasting
                solutions to keep residential and commercial properties
                protected from costly roof damage.
              </p>
            </motion.div>

            {/* Foundation Sealing Queens */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="foundation-sealing-heading" // Link to the heading below
            >
              <h6
                id="foundation-sealing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Foundation Sealing in Queens: Protecting Structural Stability
              </h6>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                A damaged foundation can lead to serious issues such as cracks,
                water intrusion, and long-term structural deterioration.
                Professional{" "}
                <b aria-hidden="true">foundation sealing in Queens</b> helps
                protect homes and commercial buildings by blocking moisture,
                reinforcing foundation walls, and preventing costly structural
                repairs. With proper sealing and waterproofing systems, property
                owners can improve stability, reduce basement moisture problems,
                and protect their buildings from New York’s changing weather
                conditions and shifting soil.
              </p>
            </motion.div>

            {/* Exterior Waterproofing Brooklyn */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="exterior-waterproofing-heading" // Link to the heading below
            >
              <p
                id="exterior-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Exterior Waterproofing in Brooklyn: Protecting Your Building’s
                Structure
              </p>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Brooklyn’s brownstones, townhomes, and commercial buildings face
                constant exposure to rain, snow, humidity, and temperature
                changes. Professional{" "}
                <b aria-hidden="true">exterior waterproofing in Brooklyn</b>{" "}
                creates a protective barrier that prevents water penetration,
                wall cracks, and long- term structural damage. By sealing
                exterior walls, repairing masonry cracks, and applying durable
                waterproof coatings, contractors help extend the life of your
                building while keeping interiors dry and protected year-round.
              </p>
            </motion.div>

            {/* Interior Waterproofing Manhattan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="interior-waterproofing-heading" // Link to the heading below
            >
              <p
                id="interior-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Interior Waterproofing in Manhattan: Smart Protection for Indoor
                Spaces
              </p>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Many buildings in <strong>Manhattan</strong> experience interior
                moisture problems caused by groundwater pressure, poor drainage,
                or aging foundations. Professional{" "}
                <b aria-hidden="true">interior waterproofing in Manhattan</b>{" "}
                helps control moisture before it damages walls, flooring, or
                basement areas. Solutions often include sump pump installation,
                interior drainage systems, vapor barriers, and
                moisture-resistant sealing techniques that keep homes and
                commercial properties dry, healthy, and protected throughout the
                year.
              </p>
            </motion.div>

            {/* Crawl Space Waterproofing Queens */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="crawl-space-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="crawl-space-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Crawl Space Waterproofing Queens: Protect What’s Hidden
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Ignoring crawl spaces can be a costly mistake.{" "}
                <b aria-hidden="true">Crawl space waterproofing Queens</b>{" "}
                involves sealing and moisture control to prevent wood rot, pest
                infestation, and poor air quality within the home.
              </p>
            </motion.div>

            {/* Brick Waterproofing Queens */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="brick-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="brick-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Brick Waterproofing Queens: Preserving Classic NYC Exteriors
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Older buildings with brick facades often absorb water, leading
                to cracks and damage.{" "}
                <b aria-hidden="true">Brick waterproofing Queens</b> involves
                sealing porous brick and mortar to prevent long-term
                degradation.
              </p>
            </motion.div>

            {/* Roof Membrane Installation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="roof-membrane-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="roof-membrane-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Roof Membrane Installation: A Modern Solution for Flat Roofs
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                One of the best advancements in flat roof waterproofing is{" "}
                <b aria-hidden="true">roof membrane installation</b>. It
                provides superior protection and longevity, especially for
                commercial buildings dealing with heavy foot traffic and
                variable weather.
              </p>
            </motion.div>

            {/* Waterproof Coating Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="waterproof-coating-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="waterproof-coating-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Waterproof Coating Services: Stronger, Safer Surfaces
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                From decks to foundations,{" "}
                <b aria-hidden="true">waterproof coating services</b> offer a
                seamless barrier against moisture. These coatings are versatile,
                durable, and ideal for a wide range of surfaces.
              </p>
            </motion.div>

            {/* Waterproofing Inspection NYC */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="waterproofing-inspection-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="waterproofing-inspection-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Waterproofing Inspection NYC: Know Before It’s Too Late
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Many problems go undetected until it’s too late. A detailed{" "}
                <b aria-hidden="true">waterproofing inspection NYC</b> can
                uncover risks early. This allows homeowners to address minor
                issues before they become emergencies.
              </p>
            </motion.div>

            {/* Leak Detection Brooklyn */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="leak-detection-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="leak-detection-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Leak Detection Brooklyn: Fast Action, Less Damage
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                With modern thermal imaging and sensor tech,{" "}
                <b aria-hidden="true">leak detection Brooklyn</b> services
                pinpoint problems instantly. This reduces repair time and limits
                costly damage.
              </p>
            </motion.div>

            {/* Waterproofing Maintenance Queens */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="waterproofing-maintenance-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="waterproofing-maintenance-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Waterproofing Maintenance Queens: Stay Ahead of Damage
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Prevention is key. Routine{" "}
                <b aria-hidden="true">waterproofing maintenance Queens</b> helps
                ensure your home or commercial building remains safe and
                structurally sound no matter the season.
              </p>
            </motion.div>

            {/* Mold Prevention Waterproofing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="mold-prevention-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="mold-prevention-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Mold Prevention Waterproofing: Health Starts at Home
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Damp areas lead to mold, and mold leads to health issues.{" "}
                <b aria-hidden="true">Mold prevention waterproofing</b> stops
                spores at the source with smart sealing and ventilation.
              </p>
            </motion.div>

            {/* Waterproofing Restoration Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="waterproofing-restoration-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="waterproofing-restoration-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Waterproofing Restoration Services: Reviving Older Properties
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                For aging or damaged buildings,{" "}
                <b aria-hidden="true">waterproofing restoration services</b>{" "}
                offer a second chance. Restoration involves fixing past issues
                and strengthening the structure for the future.
              </p>
            </motion.div>

            {/* Basement Moisture Control */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="basement-moisture-control-heading" // Link to the heading below
            >
              <p
                id="basement-moisture-control-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Basement Moisture Control: Keeping Basements Dry and Healthy
              </p>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Without proper{" "}
                <b aria-hidden="true">basement moisture control</b>, basements
                can quickly develop mold growth, unpleasant odors, and long-term
                structural issues. Effective moisture management solutions such
                as ventilation improvements, waterproof coatings, drainage
                systems, and dehumidification help keep basement spaces dry and
                protected. Maintaining a dry basement not only prevents costly
                repairs but also creates a healthier living environment for
                homeowners and occupants.
              </p>
            </motion.div>

            {/* Emergency Waterproofing NYC */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="emergency-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="emergency-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Emergency Waterproofing NYC: When Time Is Critical
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Floods and leaks don’t wait. 24/7{" "}
                <b aria-hidden="true">emergency waterproofing NYC</b> services
                provide immediate relief and repair. Fast response reduces
                damage and gives homeowners peace of mind.
              </p>
            </motion.div>

            {/* Industrial Waterproofing Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="industrial-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="industrial-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Industrial Waterproofing Services: Built for Bigger Jobs
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Large-scale facilities demand high-performance waterproofing.{" "}
                <b aria-hidden="true">Industrial waterproofing services</b>{" "}
                provide advanced sealing methods tailored to warehouses,
                factories, and other industrial spaces.
              </p>
            </motion.div>

            {/* Deck Waterproofing Contractors */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="deck-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h3
                id="deck-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Deck Waterproofing Contractors: Outdoor Living, Protected
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Decks take a beating from the elements.{" "}
                <b aria-hidden="true">Deck waterproofing contractors</b> apply
                coatings and sealants that make outdoor spaces usable and safe
                year-round.
              </p>
            </motion.div>

            {/* Concrete Waterproofing Manhattan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="concrete-waterproofing-heading" // Link to the heading below
            >
              <p
                id="concrete-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Concrete Waterproofing in Manhattan: Durable Protection for
                Concrete Structures
              </p>

              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Concrete surfaces are strong, but constant exposure to moisture,
                freeze-thaw cycles, and heavy urban traffic can lead to cracks
                and deterioration. Professional{" "}
                <b aria-hidden="true">concrete waterproofing in Manhattan</b>{" "}
                creates a protective barrier that prevents water penetration and
                structural damage. By sealing sidewalks, foundations, parking
                garages, and exterior concrete walls, waterproof coatings help
                extend the lifespan of concrete structures while reducing
                maintenance and costly repairs.
              </p>
            </motion.div>

            {/* The Future of Waterproofing in NYC */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="future-waterproofing-heading" // Link to the heading below
            >
              <p // Changed to h2 as it's a new main section
                id="future-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                The Future of Waterproofing in NYC
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                As building codes evolve and extreme weather becomes more
                common, professional{" "}
                <Link
                  href={"/waterproofing-contractors-NY"}
                  className="text-[#003269] hover:underline"
                  aria-label="Find top waterproofing contractors in New York City for advanced waterproofing solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  waterproofing contractors in NYC
                </Link>{" "}
                continue to adopt modern solutions that protect properties from
                costly water damage. From advanced leak detection systems to
                high-performance waterproof membranes and eco-friendly coatings,
                today’s waterproofing technologies help safeguard foundations,
                roofs, and exterior walls across New York City.
              </p>

              <p className="text-gray-700 text-base font-bevietnam">
                Whether protecting a historic Brooklyn brownstone, a Manhattan
                apartment building, or a commercial property, reliable
                waterproofing services are essential for long-term structural
                protection. With experienced contractors and proven
                waterproofing systems, property owners can prevent leaks,
                control moisture, and ensure their buildings remain safe,
                durable, and comfortable for years to come.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
              aria-labelledby="free-estimate-heading" // Link to the heading below
            >
              <p // Changed to h2
                id="free-estimate-heading"
                className="text-2xl md:text-3xl font-bold text-[#e63a27]"
              >
                Get a Free Estimate Today
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                Protect your home with SAS Roofing & Waterproofing&apos;s expert
                services. Contact us for a free consultation and tailored
                solutions.
              </p>
              <ul
                className="text-gray-700"
                aria-label="Contact information for a free estimate"
              >
                <li>
                  <strong aria-hidden="true">Phone:</strong>{" "}
                  <Link
                    href="tel:3472216549"
                    className="text-[#003269] hover:underline"
                    aria-label="Call SAS Roofing and Waterproofing at 3 4 7, 2 2 1, 6 5 4 9 for a free estimate" // Spelling out numbers for better screen reader pronunciation
                  >
                    (347) 221-6549
                  </Link>
                </li>
                <li>
                  <address aria-label="Our office address">
                    <strong aria-hidden="true">Address:</strong> 552 Rugby Rd,
                    Brooklyn, NY 11230
                  </address>
                </li>
              </ul>
              <Link
                href="/" //goes to home page
                className="inline-block mt-4 bg-[#e63a27] text-white px-5 py-2 rounded hover:bg-[#c72d1d] transition"
                aria-label="Visit SAS Roofing & Waterproofing homepage for more information and services" // Improved aria-label
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
