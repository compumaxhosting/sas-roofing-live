"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProtectYourPropertyFromDamageManhattan() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          role="article"
        >
          <div className="w-full lg:w-1/2">
            <Image
              src="/blog/protect-your-property-from-damage-in-manhattan.png"
              alt="Protecting a Manhattan property from water and exterior damage"
              width={600}
              height={400}
              priority
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 id="main-blog-heading" className="text-3xl md:text-5xl font-bold font-inter mb-6 leading-tight">
              Protect Your Property from Damage in Manhattan
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">A Complete Guide</h2>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam leading-relaxed">
              Owning property in Manhattan comes with unique challenges. Heavy rainfall, snowstorms,
              temperature changes, aging buildings, and water infiltration can gradually damage your
              property&apos;s roof, foundation, walls, and exterior surfaces.{" "}
              <strong>
                The best way to protect your property from damage in Manhattan is through regular
                inspections,{" "}
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-[#003269] underline hover:text-[#e63a27] transition"
                >
                  professional roofing repairs
                </Link>
                , effective waterproofing, proper drainage, and timely masonry maintenance.
              </strong>
            </p>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam leading-relaxed mt-4">
              Whether you own a brownstone, townhouse, apartment building, or commercial property,
              taking preventive measures can help avoid expensive repairs and preserve your property&apos;s
              value.
            </p>
            <p className="text-sm md:text-base text-gray-700 font-bevietnam leading-relaxed mt-4">
              In this guide, we&apos;ll explain the most common causes of property damage in Manhattan
              and share practical ways to keep your building safe, dry, and structurally sound.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside grid gap-2 md:grid-cols-2 text-sm md:text-base font-bevietnam">
            <li><a className="text-blue-700 hover:underline" href="#causes">What Causes Property Damage in Manhattan?</a></li>
            <li><a className="text-blue-700 hover:underline" href="#water-damage">How to Protect Your Property from Water Damage</a></li>
            <li><a className="text-blue-700 hover:underline" href="#roof-maintenance">Why Roof Maintenance Is Important</a></li>
            <li><a className="text-blue-700 hover:underline" href="#foundation-walls">Protect Your Foundation and Exterior Walls</a></li>
            <li><a className="text-blue-700 hover:underline" href="#maintenance-problems">Common Property Maintenance Problems</a></li>
            <li><a className="text-blue-700 hover:underline" href="#cost">How Much Does Property Protection Cost?</a></li>
            <li><a className="text-blue-700 hover:underline" href="#professional-services">Why Professional Roofing and Waterproofing Services Matter</a></li>
            <li><a className="text-blue-700 hover:underline" href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </motion.div>

        <div className="grid gap-10">
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="causes" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">1. What Causes Property Damage in Manhattan?</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Manhattan properties experience constant exposure to changing weather conditions and environmental factors.
              Older buildings may also have aging roofing systems, deteriorating mortar joints, and outdated waterproofing materials.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">The most common causes of property damage include:</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li><strong>Heavy rainfall:</strong> Water can enter through damaged roofs, windows, foundations, and exterior walls.</li>
              <li><strong>Snow and ice:</strong> Freezing temperatures can cause cracks, ice buildup, and drainage problems.</li>
              <li><strong>Roof deterioration:</strong> Aging roofing membranes, loose flashing, and damaged shingles can lead to leaks.</li>
              <li><strong>Foundation moisture:</strong> Groundwater and poor drainage can allow moisture to enter basements.</li>
              <li><strong>Masonry deterioration:</strong> Cracked bricks and deteriorating mortar joints can weaken exterior walls.</li>
              <li><strong>Poor drainage:</strong> Blocked gutters and roof drains can cause water accumulation.</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">Understanding these risks is the first step toward preventing costly property damage.</p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="water-damage" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">2. How to Protect Your Property from Water Damage in Manhattan</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Water infiltration is one of the biggest threats to residential and commercial buildings in New York City.
              Even a small leak can eventually damage drywall, flooring, insulation, electrical components, and structural materials.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-base font-bevietnam">
                <strong>Quick Answer:</strong> Protect your Manhattan property from water damage by inspecting your roof,
                sealing foundation cracks, maintaining drainage systems, waterproofing vulnerable surfaces, and repairing leaks as soon as they appear.
              </p>
            </div>
            <p className="text-gray-700 text-base font-bevietnam">Here are five important preventive measures:</p>

            <h3 className="text-xl md:text-2xl font-bold">Schedule Professional Waterproofing</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Waterproofing creates a protective barrier that prevents moisture from entering vulnerable building areas.
              Depending on your property&apos;s condition, professional waterproofing may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Basement waterproofing</li>
              <li>Foundation wall sealing</li>
              <li>Exterior wall waterproofing</li>
              <li>Roof and terrace waterproofing</li>
              <li>Waterproof membrane installation</li>
              <li>Crack sealing and moisture protection</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">
              For Manhattan brownstones and older buildings, foundation and exterior wall waterproofing can be particularly important.
            </p>

            <h3 className="text-xl md:text-2xl font-bold">Inspect Basements Regularly</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Look for damp walls, musty odors, peeling paint, water stains, and standing water.
              These signs may indicate moisture infiltration that requires professional attention.
            </p>

            <h3 className="text-xl md:text-2xl font-bold">Maintain Proper Drainage</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Keep roof drains, gutters, and downspouts clear of leaves and debris.
              Proper drainage helps direct water away from vulnerable building areas.
            </p>

            <h3 className="text-xl md:text-2xl font-bold">Seal Cracks and Openings</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Inspect exterior walls, foundation surfaces, and window openings.
              Small cracks can become entry points for rainwater.
            </p>

            <h3 className="text-xl md:text-2xl font-bold">Address Leaks Immediately</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Never ignore recurring leaks. Temporary solutions may hide the symptoms without addressing the underlying problem.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="roof-maintenance" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">3. Why Roof Maintenance Is Important for Manhattan Properties</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Your roof is your property&apos;s first line of defense against rain, snow, wind, and extreme temperatures.
              Unfortunately, many property owners only inspect their roofs after noticing water stains or interior leaks.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              Regular roof inspections can identify problems before they develop into expensive repairs.
            </p>
            <p className="text-gray-700 text-base font-bevietnam"><strong>Important roof maintenance recommendations:</strong></p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Inspect roofing materials at least annually and after significant storms.</li>
              <li>Check flashing around chimneys, skylights, and ventilation openings.</li>
              <li>Look for cracks, bubbles, or damaged roofing membranes.</li>
              <li>Remove debris that blocks roof drains.</li>
              <li>Repair loose shingles and damaged roof sections.</li>
              <li>Check flat roofs for standing water.</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">
              Manhattan properties commonly feature flat and low-slope roofing systems.
              These roofs require proper drainage and well-maintained waterproofing membranes.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              If you notice ceiling stains, dripping water, or damaged roofing materials, arrange a professional inspection.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="foundation-walls" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">4. Protect Your Foundation and Exterior Walls</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              A building&apos;s foundation and exterior walls provide essential structural support.
              Water infiltration, deteriorating mortar, and untreated cracks can gradually compromise these areas.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">Invest in Professional Masonry Repairs</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Masonry maintenance is particularly important for Manhattan&apos;s historic buildings and brownstones.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">Common masonry problems include:</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Crumbling mortar joints</li>
              <li>Cracked bricks</li>
              <li>Loose stonework</li>
              <li>Damaged concrete surfaces</li>
              <li>Deteriorating exterior walls</li>
              <li>Water penetration through masonry</li>
            </ul>
            <p className="text-gray-700 text-base font-bevietnam">
              Professional brick pointing, concrete repair, and masonry restoration can help maintain structural integrity
              and prevent further deterioration.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">Inspect Exterior Walls</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Look for cracks, discoloration, loose materials, and damaged sealants.
              For larger buildings, property owners should arrange appropriate façade inspections and comply with applicable
              NYC Department of Buildings requirements.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="maintenance-problems" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">5. Common Property Maintenance Problems to Avoid</h2>
            <p className="text-gray-700 text-base font-bevietnam">Many expensive repairs begin with small maintenance issues.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base font-bevietnam">
                <thead>
                  <tr className="bg-[#003269] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Common problem</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Potential consequence</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Recommended solution</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border border-gray-300 px-4 py-3">Roof leaks</td><td className="border border-gray-300 px-4 py-3">Ceiling and interior damage</td><td className="border border-gray-300 px-4 py-3">Professional roof repair</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Basement moisture</td><td className="border border-gray-300 px-4 py-3">Mold and material deterioration</td><td className="border border-gray-300 px-4 py-3">Basement waterproofing</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Blocked roof drains</td><td className="border border-gray-300 px-4 py-3">Standing water and leaks</td><td className="border border-gray-300 px-4 py-3">Drain cleaning and maintenance</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Cracked foundation</td><td className="border border-gray-300 px-4 py-3">Water infiltration</td><td className="border border-gray-300 px-4 py-3">Foundation inspection and repair</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Damaged mortar</td><td className="border border-gray-300 px-4 py-3">Masonry deterioration</td><td className="border border-gray-300 px-4 py-3">Brick pointing</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-3">Poor exterior sealing</td><td className="border border-gray-300 px-4 py-3">Moisture penetration</td><td className="border border-gray-300 px-4 py-3">Exterior waterproofing</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 text-base font-bevietnam">
              One of the biggest mistakes property owners make is delaying repairs until visible damage becomes severe.
              Preventive maintenance is generally more manageable than extensive restoration.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="cost" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">6. How Much Does Property Protection Cost in Manhattan?</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              The cost of protecting a Manhattan property depends on the building&apos;s size, condition, accessibility,
              materials, and the type of work required.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              For example, repairing a small roof leak is generally less expensive than replacing an entire roofing system.
              Similarly, sealing a minor foundation crack may cost considerably less than extensive exterior excavation and waterproofing.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">Factors that influence project costs include:</p>
            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Roof size and roofing material</li>
              <li>Extent of existing water damage</li>
              <li>Foundation condition</li>
              <li>Masonry repair requirements</li>
              <li>Labor and building accessibility</li>
              <li>Waterproofing system selection</li>
              <li>Required permits and additional repairs</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-base font-bevietnam">
                <strong>Expert recommendation:</strong> Request a professional inspection and written estimate before starting major repairs.
                Compare the proposed materials, work scope, warranties, and labor costs rather than choosing a contractor based on price alone.
              </p>
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="professional-services" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">7. Why Professional Roofing and Waterproofing Services Matter</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              DIY maintenance can help with simple tasks such as removing accessible debris and monitoring visible damage.
              However, roofing, structural masonry, and foundation waterproofing require specialized knowledge and appropriate safety procedures.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">A qualified contractor can:</p>
            <ol className="list-decimal list-inside text-gray-700 text-base font-bevietnam space-y-2">
              <li>Inspect the property&apos;s roof, foundation, and exterior walls.</li>
              <li>Identify existing damage and potential water entry points.</li>
              <li>Recommend suitable roofing or waterproofing materials.</li>
              <li>Repair damaged areas using appropriate methods.</li>
              <li>Explain maintenance requirements and applicable warranties.</li>
            </ol>
            <p className="text-gray-700 text-base font-bevietnam">
              Professional assistance is particularly valuable for older Manhattan buildings,
              where multiple issues may contribute to recurring leaks and structural deterioration.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} id="faq" className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">8. Frequently Asked Questions</h2>
            <h3 className="text-xl md:text-2xl font-bold">How can I protect my property from water damage in Manhattan?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Start with regular roof inspections, basement waterproofing, foundation crack repairs, and proper drainage maintenance.
              Check exterior walls and windows for openings that allow moisture inside.
              Address leaks promptly and consider a professional inspection if you notice recurring dampness, water stains, or musty odors.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">How often should I inspect my Manhattan property?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Arrange a thorough property inspection at least once a year.
              Additional inspections are advisable after major storms, heavy snowfall, or noticeable changes in the building&apos;s condition.
              Older properties may require more frequent monitoring because aging roofing, masonry, and waterproofing materials can deteriorate over time.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">What are the warning signs of roof damage?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Common warning signs include missing shingles, cracked roofing membranes, standing water, damaged flashing,
              ceiling stains, and recurring leaks. You may also notice damp insulation or peeling paint near the ceiling.
              A professional roofing inspection can determine whether repairs or replacement are necessary.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">Is basement waterproofing necessary for Manhattan properties?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Basement waterproofing is worth considering if your property experiences damp walls, recurring leaks,
              standing water, or foundation moisture. Manhattan buildings can experience groundwater infiltration,
              plumbing-related moisture, and stormwater problems. A professional assessment can identify the water source
              and determine the most suitable waterproofing solution.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">How can I prevent masonry damage in older Manhattan buildings?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Inspect brickwork, mortar joints, concrete, and exterior walls regularly.
              Repair deteriorating mortar through professional repointing and address cracks before water enters the masonry.
              Proper exterior waterproofing can also help protect vulnerable surfaces from moisture penetration and weather-related deterioration.
            </p>
            <h3 className="text-xl md:text-2xl font-bold">When should I hire a professional waterproofing contractor?</h3>
            <p className="text-gray-700 text-base font-bevietnam">
              Contact a waterproofing contractor when you notice recurring basement leaks, foundation moisture,
              exterior wall seepage, or persistent water infiltration. Professional assistance is also advisable when
              existing repairs have failed to resolve the problem. Identifying the actual water source is essential for
              choosing an effective long-term solution.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="space-y-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold">9. Protect Your Manhattan Property with SAS Roofing &amp; Waterproofing</h2>
            <p className="text-gray-700 text-base font-bevietnam">
              Your property deserves dependable protection against New York City&apos;s challenging weather conditions.{" "}
              <Link href="/" className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition">
                SAS Roofing &amp; Waterproofing
              </Link>{" "}
              provides professional roofing, waterproofing, and masonry services throughout Manhattan, Brooklyn, Queens, and The Bronx.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              With more than 25 years of industry experience and a history of serving NYC property owners since 2000,
              SAS understands the importance of durable materials, careful workmanship, and practical property protection solutions.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              Our services include roof installation and repairs, flat roofing, basement and foundation waterproofing,
              exterior wall protection, brick pointing, and masonry repairs. Whether you&apos;re addressing a recurring roof leak,
              protecting a basement from moisture, or restoring deteriorating exterior masonry, our team can help assess your property&apos;s needs.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              We are committed to providing reliable service, quality workmanship, and solutions suited to your building&apos;s condition.
            </p>
            <p className="text-gray-700 text-base font-bevietnam">
              <strong>
                Don&apos;t wait for minor damage to become a major expense. Contact SAS Roofing &amp; Waterproofing today at (347)
                221-6549 to discuss your property protection needs and request a free estimate.
              </strong>
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="p-8 bg-[#003269] text-white rounded-2xl shadow-xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
            <p className="text-gray-100 text-base font-bevietnam">
              Protecting your property from damage in Manhattan requires consistent maintenance and early attention to potential problems.
              Roof inspections, basement waterproofing, foundation repairs, proper drainage, and masonry maintenance all contribute
              to a safer and more durable building.
            </p>
            <p className="text-gray-100 text-base font-bevietnam">
              The key is to identify problems early rather than waiting for visible damage to become expensive.
            </p>
            <p className="text-gray-100 text-base font-bevietnam">
              Whether you own a Manhattan brownstone, residential building, or commercial property,
              working with experienced roofing and waterproofing professionals can help protect your investment for years to come.
            </p>
            <p className="text-gray-100 text-base font-bevietnam">
              Contact SAS Roofing &amp; Waterproofing to schedule an evaluation and take the next step toward protecting your property.
            </p>
            <Link href="/contact-us" className="inline-block bg-[#e63a27] hover:bg-[#c82f1e] text-white font-bold py-3 px-8 rounded-lg shadow transition">
              Request a Free Estimate
            </Link>
          </motion.section>
        </div>
      </div>
    </article>
  );
}
