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
                id="main-blog-post-heading" // ID for aria-labelledby
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                How This NYC Waterproofing Contractor is Revolutionizing Home
                Protection
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold font-inter mb-2">
                Leading the Charge in Residential and Commercial Waterproofing
                Services
              </h2>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                In a city where the weather can turn on a dime, protecting your
                property is more than a necessity—it’s a priority. Homeowners
                and business owners alike are turning to expert{" "}
                <Link
                  href="https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                  className="text-[#003269] hover:underline"
                  aria-label="Learn more about expert waterproofing contractors in New York City" // Improved aria-label
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  waterproofing contractors NYC
                </Link>{" "}
                to ensure their buildings remain safe, dry, and mold-free.
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
              aria-labelledby="basement-waterproofing-heading" // Link to the heading below
            >
              <h4 // Changed to h3 as it's a subheading under "Our Services"
                id="basement-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Basement Waterproofing Brooklyn: The First Line of Defense
              </h4>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Many homes in Brooklyn suffer from aging infrastructure and
                inadequate drainage. That’s why{" "}
                <b aria-hidden="true">basement waterproofing Brooklyn</b> is
                crucial. Proper sealing not only prevents flooding but also
                controls moisture that leads to mold growth and structural
                damage.
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
              <h5 // Changed to h3
                id="roof-leak-repair-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Roof Leak Repair Manhattan: Stop the Drip Before It Destroys
              </h5>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Flat rooftops are common in Manhattan. Unfortunately, so are
                leaks. <b aria-hidden="true">Roof leak repair Manhattan</b>{" "}
                services are in high demand as building owners seek fast,
                lasting solutions. Advanced technologies and materials ensure
                these leaks don’t become disasters.
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
              <h6 // Changed to h3
                id="foundation-sealing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Foundation Sealing Queens: Building Strength from Below
              </h6>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                A compromised foundation leads to cracks, moisture intrusion,
                and expensive repairs. With expert{" "}
                <b aria-hidden="true">foundation sealing Queens</b>, properties
                gain the long-term stability they need to withstand New York’s
                harsh seasons and shifting soil.
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
              <p // Changed to h3
                id="exterior-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Exterior Waterproofing Brooklyn: Guarding Your Outer Walls
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                For Brooklyn brownstones and townhomes,{" "}
                <b aria-hidden="true">exterior waterproofing Brooklyn</b> offers
                a durable shield against rain, snow, and humidity. From wall
                crack repair to applying a waterproof coating, this method
                extends the life of your building&apos;s exterior.
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
              <p // Changed to h3
                id="interior-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Interior Waterproofing Manhattan: A Smart Indoor Strategy
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                When moisture seeps in from the inside,{" "}
                <b aria-hidden="true">interior waterproofing Manhattan</b>{" "}
                tackles it head-on. This method includes sump pumps, drainage
                systems, and barrier installations that ensure dry, livable
                spaces all year round.
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
              <p // Changed to h3
                id="basement-moisture-control-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Basement Moisture Control: Dry Spaces Matter
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Without proper{" "}
                <b aria-hidden="true">basement moisture control</b>, basements
                can become breeding grounds for bacteria and structural
                problems. Dry, insulated, and ventilated basements are essential
                for livable, healthy homes.
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
              <p // Changed to h3
                id="concrete-waterproofing-heading"
                className="text-xl md:text-2xl font-bold"
              >
                Concrete Waterproofing Manhattan: Tough Protection for Tough
                Surfaces
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Concrete is durable, but not invincible.{" "}
                <b aria-hidden="true">Concrete waterproofing Manhattan</b> adds
                an impermeable layer that extends the lifespan of sidewalks,
                foundations, and parking structures.
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
                As building codes evolve and weather patterns shift,{" "}
                <Link
                  href={
                    "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY"
                  }
                  className="text-[#003269] hover:underline"
                  aria-label="Find top waterproofing contractors in New York City for advanced solutions" // Improved aria-label
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  waterproofing contractors NYC
                </Link>{" "}
                continue to innovate. From cutting-edge leak detection to
                eco-friendly coatings, their services are shaping safer,
                longer-lasting homes across the city.
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                Whether it’s a cozy brownstone or a towering high-rise, NYC
                residents deserve reliable protection. With the right
                contractor, waterproofing isn’t just a fix—it’s a
                transformation.
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
