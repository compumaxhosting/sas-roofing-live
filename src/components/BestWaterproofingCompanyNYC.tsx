"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSectionBlog";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const faqs = [
  {
    question: "How do I choose the best waterproofing company in NYC?",
    answer:
      "Compare contractors based on relevant experience, licensing, insurance, waterproofing methods, customer feedback, and written estimates. Choose a company that investigates the source of moisture and explains why its proposed solution is appropriate for your building.",
  },
  {
    question: "How much does waterproofing cost in New York City?",
    answer:
      "Waterproofing costs depend on the affected area, building size, accessibility, severity of water intrusion, materials, labor, and repair requirements. Basement waterproofing, exterior foundation work, and roof membrane installation have significantly different costs.",
  },
  {
    question: "What are the signs that my property needs waterproofing?",
    answer:
      "Common warning signs include damp basement walls, water stains, peeling paint, musty odors, recurring leaks, visible foundation cracks, deteriorating masonry, and standing water.",
  },
  {
    question: "What types of waterproofing services are available in NYC?",
    answer:
      "Common services include basement waterproofing, foundation sealing, exterior wall waterproofing, roof waterproofing, liquid membrane applications, and drainage improvements.",
  },
  {
    question: "How long does waterproofing last?",
    answer:
      "Longevity depends on the materials, installation quality, building conditions, water exposure, maintenance, and environmental factors. Ask the contractor about the expected service life and obtain warranty information in writing.",
  },
  {
    question: "Is basement waterproofing worth the investment?",
    answer:
      "Basement waterproofing can be worthwhile when recurring moisture threatens interior finishes, stored belongings, or building materials. Correcting the underlying water source can reduce repeated damage and ongoing repair expenses.",
  },
  {
    question: "Should I hire a local waterproofing contractor in Brooklyn?",
    answer:
      "Hiring a contractor familiar with Brooklyn properties can be beneficial because older foundations, brick buildings, brownstones, and flat roofs may require specialized assessment.",
  },
  {
    question: "Can waterproofing prevent mold growth?",
    answer:
      "Waterproofing can reduce moisture intrusion, which is an important step in controlling conditions that support mold growth. It does not remove existing mold or guarantee mold prevention; affected materials and indoor humidity must also be addressed.",
  },
];

export default function BestWaterproofingCompanyNYC() {
  return (
    <article
      className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center scroll-smooth"
      aria-labelledby="main-blog-heading"
      role="document"
    >
      <div className="w-full xl:max-w-7xl xl:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 w-full flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="w-full lg:w-1/2">
            <Image
              src="/blog/basement-waterproofing-work.png"
              alt="Professional basement waterproofing work by SAS Roofing and Waterproofing"
              width={1200}
              height={675}
              priority
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 id="main-blog-heading" className="text-3xl md:text-5xl font-bold font-inter mb-6 leading-tight">
              How to Choose the Best Waterproofing Company in New York City
            </h1>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam leading-relaxed">
              Choosing the best waterproofing company in NYC requires more than comparing prices.
              Property owners should evaluate a contractor&apos;s experience, licensing, insurance,
              waterproofing methods, customer reviews, and written estimates before making a decision.
              The right professional should identify the source of water intrusion and recommend a
              solution suited to the building&apos;s structure and moisture problems.
            </p>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam leading-relaxed mt-4">
              New York City&apos;s changing weather, heavy rainfall, snow, aging buildings, and fluctuating
              temperatures can contribute to basement leaks, foundation moisture, roof leaks, and
              exterior wall deterioration. This guide explains what to look for when hiring a reliable
              waterproofing contractor in Brooklyn, Manhattan, Queens, or the Bronx.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside grid gap-2 md:grid-cols-2 text-sm md:text-base font-bevietnam">
            <li><a className="text-blue-700 hover:underline" href="#why-matters">Why Choosing the Right Company Matters</a></li>
            <li><a className="text-blue-700 hover:underline" href="#experience">Experience and Expertise</a></li>
            <li><a className="text-blue-700 hover:underline" href="#credentials">Licensing and Insurance</a></li>
            <li><a className="text-blue-700 hover:underline" href="#methods">Waterproofing Methods and Materials</a></li>
            <li><a className="text-blue-700 hover:underline" href="#local-experience">Local NYC Experience</a></li>
            <li><a className="text-blue-700 hover:underline" href="#estimates">Estimates and Warranties</a></li>
            <li><a className="text-blue-700 hover:underline" href="#reviews">Reviews and Previous Projects</a></li>
            <li><a className="text-blue-700 hover:underline" href="#warning-signs">Warning Signs</a></li>
            <li><a className="text-blue-700 hover:underline" href="#professional">Why Professional Waterproofing Matters</a></li>
            <li><a className="text-blue-700 hover:underline" href="#maintenance">Maintenance and Best Practices</a></li>
            <li><a className="text-blue-700 hover:underline" href="#faq">Frequently Asked Questions</a></li>
            <li><a className="text-blue-700 hover:underline" href="#conclusion">Conclusion</a></li>
          </ol>
        </motion.div>

        <div className="grid gap-10">
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="why-matters" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">1. Why Choosing the Right Waterproofing Company Matters</h2>
            <p className="text-gray-700 text-base font-bevietnam">Waterproofing protects buildings against unwanted moisture and water penetration. A properly designed waterproofing system can help prevent interior water damage, reduce moisture-related deterioration, and protect building materials.</p>
            <p className="text-gray-700 text-base font-bevietnam">An inexperienced contractor may address visible water stains without identifying the underlying cause. For example, basement moisture might result from foundation cracks, poor drainage, groundwater pressure, or water entering through exterior walls. A qualified waterproofing company should investigate the problem before recommending repairs.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="experience" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">2. Check Experience and Relevant Expertise</h2>
            <p className="text-gray-700 text-base font-bevietnam">Experience matters because different buildings require different waterproofing approaches. A contractor familiar with NYC properties should understand the challenges associated with older foundations, flat roofs, brick facades, brownstones, and below-grade spaces.</p>
            <p className="text-gray-700 text-base font-bevietnam">Before hiring a company, ask how long it has provided waterproofing services, whether it has worked on similar properties, and whether it handles basement, foundation, roof, and exterior wall waterproofing. Ask for comparable projects and confirm who will supervise the work.</p>
            <p className="text-gray-700 text-base font-bevietnam">Look for companies that offer related building services when the moisture problem involves multiple areas. Deteriorating brick joints can allow rainwater into exterior walls, making <Link href="/masonry-services-brooklyn-ny" className="text-[#003269] underline hover:text-[#e63a27]">professional masonry services</Link> relevant alongside waterproofing repairs.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="credentials" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">3. Verify Licensing and Insurance</h2>
            <p className="text-gray-700 text-base font-bevietnam">Never assume that a contractor is properly qualified simply because it advertises professional services. Request the company&apos;s applicable NYC licenses, registrations, and insurance documentation, and verify that the credentials are current and appropriate for the proposed work.</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>General liability insurance</li>
              <li>Workers&apos; compensation coverage</li>
              <li>Applicable NYC Department of Consumer and Worker Protection licensing</li>
              <li>Required building permits and approvals</li>
              <li>Compliance with relevant building codes</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">Licensing requirements vary with the type of work. Confirm the requirements that apply to your specific project rather than relying on a general claim of being licensed.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="methods" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">4. Understand Waterproofing Methods and Materials</h2>
            <p className="text-gray-700 text-base font-bevietnam">The best waterproofing company should explain which materials and techniques are appropriate for your property.</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li><strong>Basement waterproofing:</strong> Addresses water entering through basement walls, floors, foundation cracks, and other vulnerable areas.</li>
              <li><strong>Foundation waterproofing:</strong> Uses protective coatings, membranes, drainage systems, and related repairs to reduce water penetration.</li>
              <li><strong>Exterior wall waterproofing:</strong> Protects brick, stone, stucco, and concrete surfaces against moisture infiltration.</li>
              <li><strong>Roof waterproofing:</strong> Uses compatible membranes, sealants, and roofing systems to protect exposed surfaces.</li>
              <li><strong>Liquid membranes:</strong> Form a protective coating when properly applied to prepared surfaces.</li>
              <li><strong>Single-ply membranes:</strong> Flexible sheet systems commonly used for certain roofing and waterproofing applications.</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">A reliable contractor should explain advantages, limitations, preparation requirements, and maintenance considerations for every recommended system.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="local-experience" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">5. Look for Local NYC Experience</h2>
            <p className="text-gray-700 text-base font-bevietnam">New York City buildings face environmental and structural challenges that make local experience valuable. Heavy rainfall can overwhelm inadequate drainage systems. Winter freezing and thawing can worsen existing cracks, while aging masonry and foundations can create additional moisture pathways.</p>
            <p className="text-gray-700 text-base font-bevietnam">Ask whether the company has experience with older Brooklyn homes and brownstones, Manhattan apartment and commercial buildings, basement moisture, flat roofs, brick and concrete exterior walls, drainage problems, and foundation leaks. A contractor should also explain whether your project requires coordination with other trades or additional building approvals.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="estimates" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">6. Compare Written Estimates and Warranties</h2>
            <p className="text-gray-700 text-base font-bevietnam">Price is important, but the cheapest estimate is not necessarily the best value. Request written estimates from multiple qualified contractors. Each proposal should explain the work, materials, and scope.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base font-bevietnam">
                <thead><tr className="bg-[#003269] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Estimate should include</th><th className="border border-gray-300 px-4 py-3 text-left">Why it matters</th></tr></thead>
                <tbody className="text-gray-700">
                  <tr><td className="border border-gray-300 px-4 py-3">Identified water-intrusion problem</td><td className="border border-gray-300 px-4 py-3">Confirms that the contractor investigated the source</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Recommended method and materials</td><td className="border border-gray-300 px-4 py-3">Defines the proposed system and product specifications</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Surface preparation and repairs</td><td className="border border-gray-300 px-4 py-3">Clarifies the work needed before waterproofing</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Labor, timeline, and additional costs</td><td className="border border-gray-300 px-4 py-3">Provides a clear project scope and budget</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Warranty terms and exclusions</td><td className="border border-gray-300 px-4 py-3">Defines coverage and maintenance responsibilities</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 text-base font-bevietnam">Waterproofing costs in NYC vary according to property size, accessibility, water source, structural condition, materials, and labor requirements.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="reviews" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">7. Check Reviews and Previous Projects</h2>
            <p className="text-gray-700 text-base font-bevietnam">Customer reviews and project photographs can help you evaluate a contractor&apos;s reputation and workmanship. Look for consistent feedback about communication, punctuality, project cleanliness, professionalism, and concern resolution.</p>
            <p className="text-gray-700 text-base font-bevietnam">Do not rely entirely on star ratings. Read individual reviews involving basement leaks, roof waterproofing, foundation repairs, or exterior wall protection. Ask for photographs of comparable completed projects and references when available.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="warning-signs" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">8. Warning Signs of Poor Waterproofing Contractors</h2>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Refuses to provide a written estimate</li>
              <li>Cannot explain the source of water intrusion</li>
              <li>Recommends the same solution for every property</li>
              <li>Avoids providing licensing or insurance documentation</li>
              <li>Pressures you to sign immediately</li>
              <li>Makes unrealistic promises about permanent leak prevention</li>
              <li>Does not explain warranty limitations</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">A trustworthy contractor should welcome reasonable questions and clearly explain the proposed work.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="professional" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">9. Why Professional Waterproofing Matters</h2>
            <p className="text-gray-700 text-base font-bevietnam">Professional waterproofing means addressing the cause of moisture, not simply covering visible damage. An experienced contractor can assess vulnerable areas, identify water-entry points, recommend compatible materials, and explain the necessary preparation and repairs.</p>
            <p className="text-gray-700 text-base font-bevietnam">A recurring basement leak may require more than sealing an interior crack. Depending on the source, the appropriate solution might involve exterior foundation repairs, drainage improvements, or a combination of methods. Professional assessment helps property owners make informed decisions and avoid unnecessary repairs.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="maintenance" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">10. Maintenance and Best Practices</h2>
            <p className="text-gray-700 text-base font-bevietnam">Even a properly installed waterproofing system requires periodic inspection.</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Check basements for dampness, water stains, and musty odors</li>
              <li>Inspect roofs and drainage outlets periodically</li>
              <li>Keep gutters and downspouts clear</li>
              <li>Monitor exterior walls for cracks and deteriorating mortar</li>
              <li>Address plumbing leaks promptly</li>
              <li>Maintain appropriate grading and drainage around the foundation</li>
              <li>Arrange professional inspections when recurring moisture appears</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="faq" className="scroll-mt-24">
            <FAQSection faqs={faqs} />
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} id="conclusion" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">11. Conclusion</h2>
            <p className="text-gray-700 text-base font-bevietnam">Choosing the best waterproofing company in NYC means looking beyond pricing. Prioritize relevant experience, proper credentials, quality materials, transparent estimates, and a clear plan for addressing the source of water intrusion.</p>
            <p className="text-gray-700 text-base font-bevietnam">SAS Roofing &amp; Waterproofing provides <Link href="/waterproofing-contractors-NY" className="text-[#003269] underline hover:text-[#e63a27]">roofing and waterproofing services</Link> for residential and commercial properties throughout Brooklyn, Manhattan, Queens, and the Bronx. <Link href="/contact-us" className="text-[#003269] underline hover:text-[#e63a27]">Contact the team</Link> to discuss your project, arrange a consultation, and request an estimate.</p>
          </motion.section>
        </div>
      </div>
    </article>
  );
}
