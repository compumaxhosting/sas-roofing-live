"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function RoofingServicesBrooklynQueensManhattan() {
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
                src="/blog/roofing-services-brooklyn-queens-manhattan.webp" // Update image path as needed
                alt="Professional roofing contractor inspecting and repairing a roof in New York City."
                width={600}
                height={400}
                loading="lazy"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-post-heading"
                className="text-3xl md:text-4xl font-bold font-inter mb-7"
              >
                Roofing Services in Brooklyn, Queens & Manhattan: Complete 2026 Guide to Roof Repair & Replacement
              </h1>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                Roofing problems in New York City can quickly become expensive when leaks, damaged flashing, worn membranes, or storm damage are ignored. Professional{" "}
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                >
                  roofing contractors in Brooklyn, Queens, and Manhattan
                </Link>{" "}
                can inspect the roof, identify the cause of the problem, and recommend repair or replacement based on the roof&apos;s actual condition.
              </p>
              <p className="text-sm md:text-base text-gray-700 font-bevietnam mt-4">
                Whether you need roof repair, roof replacement, emergency roofing, commercial roofing, residential roofing, or a roof inspection, choosing the right roofing professional is essential for protecting your property.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-3 mb-10"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Table of Contents
            </h3>
            <ul className="list-disc list-inside text-[#003269] text-base font-bevietnam space-y-1">
              <li><a href="#services" className="hover:underline hover:text-[#e63a27] transition">What Roofing Services Include</a></li>
              <li><a href="#repair-vs-replacement" className="hover:underline hover:text-[#e63a27] transition">Roof Repair vs. Roof Replacement</a></li>
              <li><a href="#common-problems" className="hover:underline hover:text-[#e63a27] transition">Common Roofing Problems in NYC</a></li>
              <li><a href="#flat-roof-repair" className="hover:underline hover:text-[#e63a27] transition">Flat Roof Repair in Brooklyn, Queens & Manhattan</a></li>
              <li><a href="#process" className="hover:underline hover:text-[#e63a27] transition">How the Roofing Process Works</a></li>
              <li><a href="#cost" className="hover:underline hover:text-[#e63a27] transition">Cost Factors</a></li>
              <li><a href="#maintenance" className="hover:underline hover:text-[#e63a27] transition">Maintenance Tips</a></li>
              <li><a href="#faq" className="hover:underline hover:text-[#e63a27] transition">Frequently Asked Questions</a></li>
              <li><a href="#why-choose" className="hover:underline hover:text-[#e63a27] transition">Why Choose a Professional Roofing Contractor</a></li>
            </ul>
          </motion.div>

          <div className="grid gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-4"
            >
              <h2 id="services" className="text-3xl md:text-4xl font-bold scroll-mt-24">
                What Roofing Services Include
              </h2>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                <b>Quick Answer:</b>{" "}
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                >
                  Roofing services
                </Link>{" "}
                cover inspection, maintenance, repairs, replacement, waterproofing, flashing work, leak detection, storm-damage repairs, and installation of roofing systems for residential and commercial properties. The appropriate service depends on the roof&apos;s material, age, condition, damage, and building requirements.
              </p>
              <p className="text-gray-700 text-base font-bevietnam">
                For homeowners and property managers, common services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                <li><b>Roof Inspection:</b> Identifying leaks, damaged materials, flashing problems, drainage issues, and structural concerns.</li>
                <li><b>Roof Repair:</b> Fixing localized leaks, damaged shingles, flashing, penetrations, and other defects.</li>
                <li><b>Roof Replacement:</b> Removing an aging or severely damaged roof and installing a new roofing system.</li>
                <li><b>Emergency Roofing:</b> Temporary or permanent solutions for active leaks and sudden storm damage.</li>
                <li id="flat-roof-repair" className="scroll-mt-24"><b>Flat Roof Repair:</b> Addressing membrane damage, ponding water, seams, flashing, and drainage problems.</li>
                <li><b>Commercial Roofing:</b> Roofing solutions designed for apartment buildings, offices, retail properties, warehouses, and other commercial structures.</li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                NYC roofing work also needs to account for applicable construction requirements. The NYC Building Code includes requirements for weather protection, flashing, roof coverings, and wind resistance.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="repair-vs-replacement" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                Roof Repair vs. Roof Replacement: Which Do You Need?
              </h2>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                <b>Quick Answer:</b> Repair is usually appropriate when damage is limited and the underlying roof remains serviceable. Replacement may make more sense when the roof is extensively damaged, repeatedly leaking, nearing the end of its useful life, or has widespread deterioration. A professional inspection is the best way to determine which option is appropriate.
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full min-w-[500px] border-collapse border border-gray-300 text-left text-sm md:text-base text-gray-700 font-bevietnam">
                  <thead className="bg-gray-100 text-[#003269]">
                    <tr>
                      <th className="border border-gray-300 p-3">Situation</th>
                      <th className="border border-gray-300 p-3">Usually Consider</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 p-3">Small localized leak</td><td className="border border-gray-300 p-3">Roof repair</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Damaged flashing</td><td className="border border-gray-300 p-3">Roof repair</td></tr>
                    <tr><td className="border border-gray-300 p-3">A few damaged shingles</td><td className="border border-gray-300 p-3">Roof repair</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Repeated widespread leaks</td><td className="border border-gray-300 p-3">Roof replacement evaluation</td></tr>
                    <tr><td className="border border-gray-300 p-3">Severely deteriorated roofing</td><td className="border border-gray-300 p-3">Roof replacement</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Extensive storm damage</td><td className="border border-gray-300 p-3">Inspection and repair/replacement evaluation</td></tr>
                    <tr><td className="border border-gray-300 p-3">Aging flat roof with widespread membrane failure</td><td className="border border-gray-300 p-3">Replacement evaluation</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Replacing a roof simply because of one leak can be unnecessary. Conversely, repeatedly repairing a roof with widespread deterioration can become more expensive over time.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="common-problems" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                Common Roofing Problems in Brooklyn, Queens & Manhattan
              </h2>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                New York City roofs face rain, snow, wind, temperature changes, rooftop equipment, foot traffic, and drainage challenges. Common problems include:
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-6">Roof Leaks</h3>
              <p className="text-gray-700 text-base font-bevietnam">
                Leaks may originate from damaged roofing materials, flashing, penetrations, seams, skylights, or drainage areas. Water stains inside a building should not automatically be assumed to be directly below the roof defect.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-6">Damaged Flashing</h3>
              <p className="text-gray-700 text-base font-bevietnam">
                Flashing helps protect vulnerable areas where the roof meets walls, chimneys, parapets, gutters, and other penetrations. NYC code specifically addresses flashing at roof and wall intersections and around roof openings.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-6">Ponding Water on Flat Roofs</h3>
              <p className="text-gray-700 text-base font-bevietnam">
                Standing water can indicate drainage or slope problems and may contribute to deterioration of roofing materials.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-6">Storm Damage</h3>
              <p className="text-gray-700 text-base font-bevietnam">
                High winds and severe weather can loosen or damage roofing materials. Missing or damaged roof coverings should be assessed promptly after significant weather events. FEMA inspection guidance also identifies missing roof coverings and damaged roof sheathing as visible indicators of roof damage.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="process" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                How the Roofing Process Works
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                A typical project begins with an inspection. The contractor evaluates the roof surface, flashing, drainage, penetrations, visible structural concerns, and interior evidence of water intrusion. The process generally involves:
              </p>
              <ul className="list-decimal list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                <li>Roof inspection and diagnosis</li>
                <li>Identification of repair or replacement options</li>
                <li>Written scope and estimate</li>
                <li>Selection of appropriate roofing materials</li>
                <li>Preparation and removal of damaged materials when required</li>
                <li>Installation or repair</li>
                <li>Final inspection and cleanup</li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                For certain NYC construction projects, permits may be required before work begins. The NYC Department of Buildings advises property owners and contractors to determine applicable permit requirements before starting construction work.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="cost" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                What Does Roof Repair or Replacement Cost?
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                There is no reliable single price for roof repair in Brooklyn, Queens, or Manhattan because costs vary significantly by project. Important cost factors include:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2 grid grid-cols-1 md:grid-cols-2">
                <li>Roof size and accessibility</li>
                <li>Roofing material</li>
                <li>Extent of damage</li>
                <li>Number of roof penetrations</li>
                <li>Flashing and drainage requirements</li>
                <li>Existing roof layers</li>
                <li>Labor and disposal</li>
                <li>Structural or decking repairs</li>
                <li>Permit and code requirements</li>
                <li>Emergency or after-hours service</li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                A professional inspection and detailed estimate are more useful than relying on a generic per-square-foot price.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="maintenance" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                Roof Maintenance Tips for NYC Property Owners
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Regular maintenance can help identify small problems before they become major repairs. Property owners should:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                <li>Schedule periodic roof inspections.</li>
                <li>Keep drains and drainage areas clear.</li>
                <li>Check flashing and roof penetrations.</li>
                <li>Look for interior signs of water intrusion.</li>
                <li>Inspect roofs after significant storms.</li>
                <li>Address small leaks promptly.</li>
                <li>Avoid unauthorized rooftop work or equipment installation.</li>
              </ul>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                NYC&apos;s construction rules place responsibility on building owners to maintain buildings and regulated components in a safe and code-compliant condition.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h2 id="why-choose" className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24">
                Why Professional Roofing Services Matter
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                Professional roofing contractors in Brooklyn, Queens, and Manhattan bring experience in diagnosing roofing failures, selecting suitable materials, managing difficult roof access, and completing work according to applicable requirements.
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                This is particularly important for NYC properties with flat roofs, parapets, rooftop equipment, commercial tenants, or complex penetrations. Proper installation matters because NYC requirements address wind resistance and the performance of different roof systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-4"
            >
              <h2 id="faq" className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 scroll-mt-24">
                FAQ
              </h2>

              <div className="space-y-3">
                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                  <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                    How do I know if I need roof repair or replacement?
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                    A roof inspection is the best starting point. Minor, localized damage can often be repaired, while widespread deterioration, repeated leaks, or extensive material failure may justify replacement. The roof's age, condition, previous repairs, and underlying deck should all be considered before making a decision.
                  </p>
                </details>

                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                  <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                    How quickly should I fix a roof leak?
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                    As soon as possible. Even a small leak can allow water to reach insulation, ceilings, walls, electrical components, or structural materials. If water is actively entering the building, emergency roofing service can help reduce further damage while a permanent repair is planned.
                  </p>
                </details>

                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                  <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                    Do flat roofs require special maintenance?
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                    Yes. Flat and low-slope roofs depend heavily on effective drainage, seams, flashing, membranes, and penetrations. Ponding water, membrane damage, blocked drains, and deteriorated flashing should be addressed promptly. NYC Building Code provisions specifically address low-slope roof systems and their wind-resistance requirements.
                  </p>
                </details>

                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                  <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                    What should I do after storm damage?
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                    Visually inspect the property from a safe location and look for obvious missing or damaged roofing materials, leaks, or interior water intrusion. Avoid climbing onto a damaged roof. Contact a professional roofing contractor for an inspection and document visible damage for your records.
                  </p>
                </details>

                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                  <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                    How often should I have my roof inspected?
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                    Inspection frequency depends on the roof's age, material, condition, building type, and exposure. Property owners should also consider an inspection after significant weather events or whenever signs of leakage appear. Preventive inspections can identify problems before they become larger repairs.
                  </p>
                </details>
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
                Roofing Services from SAS Roofing & Waterproofing
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                <Link
                  href="/"
                  className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                provides roofing solutions for property owners seeking dependable roofing services in Brooklyn, Queens, and Manhattan. From roof inspections and leak repairs to flat roof work, storm-damage repairs, and roof replacement, the goal is to identify the actual problem and recommend an appropriate solution.
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Whether you own a residential property, manage a commercial building, or need urgent assistance with a roof leak, professional evaluation can help you make an informed decision. Contact SAS Roofing & Waterproofing to discuss your roofing needs, schedule an inspection, or request a project estimate.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="space-y-3 bg-gray-50 p-6 md:p-8 rounded-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Conclusion
              </h2>
              <p className="text-gray-700 text-base font-bevietnam">
                A reliable roof protects everything underneath it. Whether you need roof repair in Brooklyn, roof replacement in Queens, emergency roofing in Manhattan, commercial roofing, residential roofing, or flat roof repair, the right solution starts with an accurate inspection.
              </p>
              <p className="text-gray-700 text-base font-bevietnam mt-4">
                Addressing leaks and storm damage early, maintaining drainage systems, and working with experienced roofing professionals can help protect your property and reduce avoidable repair costs.
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
    </>
  );
}