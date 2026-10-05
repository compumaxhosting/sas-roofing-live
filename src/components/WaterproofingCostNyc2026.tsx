"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const faqs = [
  {
    question: "How much does basement waterproofing cost in New York City?",
    answer:
      "Many NYC residential basement waterproofing projects fall in the several-thousand-dollar range. A 2026 local estimate places typical projects around $3,485–$8,259, with an average near $5,842. Larger exterior excavation, foundation repairs, difficult access, or drainage upgrades can push costs higher.",
  },
  {
    question: "How much does foundation waterproofing cost in NYC?",
    answer:
      "There isn't one standard foundation waterproofing price. Cost depends on foundation size, accessibility, wall condition, excavation requirements, waterproofing materials, drainage, and repairs. Exterior work is typically more labor-intensive than interior solutions. The best way to determine foundation waterproofing cost in NYC is through an on-site evaluation and written scope.",
  },
  {
    question: "Does Brooklyn need basement waterproofing?",
    answer:
      "A Brooklyn property may need waterproofing when it experiences recurring seepage, damp walls, foundation cracks, standing water, or basement flooding. Older masonry buildings and below-grade spaces can be particularly vulnerable. The appropriate solution depends on the source of water, so recurring leaks should be professionally evaluated rather than treated only with surface sealants.",
  },
  {
    question: "How long does waterproofing last?",
    answer:
      "The lifespan of waterproofing depends on the system, materials, installation quality, building conditions, drainage, and maintenance. A properly designed system can provide long-term protection, but no waterproofing system eliminates every future risk. Periodic inspection is especially important after major storms, foundation movement, drainage problems, or other changes around the property.",
  },
  {
    question: "What is the best waterproofing solution for NYC buildings?",
    answer:
      "There is no universal best solution. Interior drainage may make sense where exterior excavation is impractical, while exterior waterproofing can be appropriate when the foundation can be accessed and water needs to be stopped before entering. A qualified contractor should identify the source of moisture before recommending a system.",
  },
];

export default function WaterproofingCostNyc2026() {
  const [mounted, setMounted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  if (!mounted) return null;

  return (
    <>
      <article
        className="px-6 py-12 md:px-16 bg-white text-[#003269] flex flex-col items-center scroll-smooth"
        aria-labelledby="main-blog-heading"
        role="document"
      >
        <div className="w-full xl:max-w-7xl xl:px-0">
          {/* Hero Section */}
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
                src="/blog/waterproofing-cost-nyc-2026.webp"
                alt="Waterproofing cost guide for NYC homes and buildings in Brooklyn, Manhattan, and Queens"
                width={600}
                height={400}
                priority
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1
                id="main-blog-heading"
                className="text-3xl md:text-5xl font-bold font-inter mb-6 leading-tight"
              >
                Waterproofing Cost in NYC: 2026 Guide for Brooklyn, Manhattan & Queens
              </h1>

              <h2 className="text-xl md:text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam">
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                >
                  Waterproofing cost in NYC
                </Link>{" "}
                can vary significantly depending on the building, water problem, access, materials, and waterproofing method. Current 2026 estimates put typical NYC basement waterproofing around $3,485 to $8,259, with an average near $5,842, while larger or more complex exterior projects can cost considerably more.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam mt-4">
                For homeowners and property managers in Brooklyn, Manhattan, and Queens, the important question isn't simply “What is the price?” It's what solution does the building actually need?
              </p>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          >
            <h2 className="text-2xl font-bold text-[#003269] mb-4">
              Table of Contents
            </h2>
            <ul className="grid gap-2 md:grid-cols-2 text-sm md:text-base font-bevietnam">
              <li>
                <a
                  href="#what-affects-waterproofing-cost"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  What affects waterproofing cost in NYC?
                </a>
              </li>
              <li>
                <a
                  href="#interior-vs-exterior"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Interior vs. exterior waterproofing
                </a>
              </li>
              <li>
                <a
                  href="#basement-foundation-costs"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Basement and foundation waterproofing costs
                </a>
              </li>
              <li>
                <a
                  href="#common-water-problems"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Common NYC water problems
                </a>
              </li>
              <li>
                <a
                  href="#how-waterproofing-works"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  How professional waterproofing works
                </a>
              </li>
              <li>
                <a
                  href="#is-waterproofing-worth-the-cost"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Is waterproofing worth the cost?
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-sas"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Why choose SAS Roofing & Waterproofing?
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Section: What Is Waterproofing? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mb-14 space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Is Waterproofing?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Quick Answer:</strong> Waterproofing is the process of preventing water from entering a building through foundations, basement walls, roofs, exterior walls, joints, cracks, or other vulnerable areas. Depending on the source of moisture, a contractor may use membranes, drainage systems, crack repairs, sealants, sump pumps, or exterior excavation.
              </p>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              In NYC, waterproofing is especially important for below-grade spaces. The city's Department of Environmental Protection identifies groundwater infiltration through foundation cracks and floor drains, sewer backups, street flooding, and coastal flooding as potential sources of basement water.
            </p>
          </motion.div>

          {/* Section: How Much Does Waterproofing Cost in NYC? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="what-affects-waterproofing-cost"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How Much Does Waterproofing Cost in NYC?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Quick Answer:</strong> A reasonable 2026 starting point for NYC basement waterproofing is roughly $3,500–$8,300 for many residential projects, but the actual price can be lower or substantially higher. Current local benchmarks also place basement waterproofing around $37–$150 per linear foot, depending on the system and project scope.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300 text-left text-sm md:text-base font-bevietnam">
                <thead>
                  <tr className="bg-[#003269] text-white">
                    <th className="border border-gray-300 px-4 py-3 font-semibold">Project factor</th>
                    <th className="border border-gray-300 px-4 py-3 font-semibold">Potential impact on cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Basement size</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">More area generally means more labor and materials</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Interior drainage</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Adds excavation, drainage, and finishing work</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Exterior waterproofing</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Excavation and access can substantially increase costs</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Foundation repairs</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Cracks or damaged masonry may require additional work</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Building access</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Brownstones, rowhouses, and tight lots can increase labor</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Water source</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Groundwater, runoff, and sewer-related problems require different solutions</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Permits and project requirements</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Scope-dependent NYC requirements can add time and expense</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed italic">
              These figures are planning benchmarks, not guaranteed quotes. A site inspection is necessary to determine the actual waterproofing cost in NYC.
            </p>
          </motion.div>

          {/* Section: Basement Waterproofing Cost in Brooklyn, Manhattan & Queens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="basement-foundation-costs"
            className="mb-14 space-y-6 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Basement Waterproofing Cost in Brooklyn, Manhattan & Queens
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#003269] mb-3">
                  Brooklyn Waterproofing
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                  Waterproofing Brooklyn, NY projects often involve brownstones, rowhouses, older masonry, below-grade spaces, and limited exterior access. Interior drainage may be more practical when excavation outside the foundation isn't feasible.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#003269] mb-3">
                  Manhattan Waterproofing
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                  Waterproofing Manhattan, NY can involve commercial buildings, apartment buildings, mechanical rooms, foundations, and exterior walls. Limited work areas, building access rules, scheduling restrictions, and surrounding infrastructure can affect labor and project logistics.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#003269] mb-3">
                  Queens Waterproofing
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                  <Link
                    href="/waterproofing-contractors-NY"
                    className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                  >
                    Waterproofing Queens, NY
                  </Link>{" "}
                  ranges from single-family homes to multifamily and commercial properties. Depending on the site, solutions may include foundation sealing, interior drainage, exterior waterproofing, or repairs around below-grade openings.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed mt-4">
              The cost difference between these boroughs isn't simply geographic. Building type, access, foundation construction, and the source of water usually have a greater effect on the final estimate.
            </p>
          </motion.div>

          {/* Section: Interior vs. Exterior Waterproofing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="interior-vs-exterior"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Interior vs. Exterior Waterproofing
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Quick Answer:</strong> Interior waterproofing controls water after it reaches the inside of the foundation, often through drainage and collection systems. Exterior waterproofing addresses the problem from outside by protecting the foundation and controlling water before it enters. The right approach depends on the building and source of infiltration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-[#003269] mb-3">
                  Interior solutions may include:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base font-bevietnam">
                  <li>Crack and joint sealing</li>
                  <li>Interior drainage channels</li>
                  <li>Drainage membranes</li>
                  <li>Sump pump systems</li>
                  <li>Floor or foundation drainage improvements</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-[#003269] mb-3">
                  Exterior waterproofing can involve:
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
                  Excavation, foundation-wall preparation, membrane application, drainage improvements, and protection before backfilling.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed mt-4">
              Exterior work can be considerably more expensive in NYC because excavation may require difficult access, manual labor, additional safety measures, and coordination around neighboring properties or infrastructure.
            </p>
          </motion.div>

          {/* Section: What Causes Basement Water Leaks in NYC? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="common-water-problems"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Causes Basement Water Leaks in NYC?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam mb-4">
              Common causes include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-base font-bevietnam">
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Foundation wall cracks
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Hydrostatic pressure
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Poor surface drainage
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Failed or deteriorated waterproofing
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Leaking basement windows or areaways
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Groundwater infiltration
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Sewer backups
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Heavy rainfall and stormwater
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200 md:col-span-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003269] flex-shrink-0"></span>
                Deteriorated masonry joints
              </li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed mt-4">
              NYC DEP notes that prolonged rainfall can saturate the ground and allow groundwater to enter through foundation cracks or leaking floor drains. Heavy storms can also overwhelm sewer systems.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed font-semibold">
              That is why simply sealing the visible leak may not solve the underlying problem.
            </p>
          </motion.div>

          {/* Section: How Professional Waterproofing Works */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="how-waterproofing-works"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How Professional Waterproofing Works
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              A professional waterproofing contractor in NYC should first identify where water is coming from rather than immediately recommending a particular product.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam font-semibold">
              A typical process includes:
            </p>

            <ol className="space-y-3 font-bevietnam">
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">1</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Inspect the basement, foundation, walls, drains, and exterior.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">2</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Identify the source and pathway of water.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">3</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Determine whether interior, exterior, or combined waterproofing is appropriate.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">4</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Repair cracks, masonry defects, or other contributing problems.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">5</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Install the appropriate waterproofing or drainage system.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">6</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Test and inspect the completed work.</span>
              </li>
              <li className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white font-bold text-sm flex-shrink-0">7</span>
                <span className="text-gray-700 text-sm md:text-base self-center">Explain maintenance and any applicable warranty requirements.</span>
              </li>
            </ol>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed mt-4">
              For flood-prone properties, additional measures may be appropriate. NYC guidance recommends inspecting foundation cracks, below-grade openings, floor drains, and other potential entry points before storms.
            </p>
          </motion.div>

          {/* Section: Is Waterproofing Worth the Cost in NYC? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="is-waterproofing-worth-the-cost"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Is Waterproofing Worth the Cost in NYC?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Quick Answer:</strong> Waterproofing is generally worth considering when recurring moisture threatens a basement, foundation, finished space, or building contents. Preventing continued water intrusion can help reduce the risk of mold, masonry deterioration, damaged finishes, and repeated emergency repairs.
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              However, waterproofing should be matched to the actual problem. Spending thousands of dollars on the wrong solution is no better than ignoring a leak.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Get written estimates that clearly explain materials, labor, drainage, repairs, permits where applicable, cleanup, warranty coverage, and exclusions. Comparing identical scopes makes contractor quotes much more meaningful.
            </p>
          </motion.div>

          {/* Section: Frequently Asked Questions (Accordion) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="faqs"
            className="mb-14 space-y-6 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 font-bevietnam">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003269]"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-bold text-base md:text-lg text-[#003269]">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#003269] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200/60 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Section: Why Choose SAS Roofing & Waterproofing? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="why-choose-sas"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Why Choose SAS Roofing & Waterproofing?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              <Link
                href="/"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                SAS Roofing & Waterproofing
              </Link>{" "}
              has served Brooklyn, Manhattan, Queens, and The Bronx with roofing, waterproofing, and masonry services for decades. The company states that it has more than 25 years of roofing and waterproofing experience and has served the greater Brooklyn area since 2000.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Its waterproofing services include basement, foundation, exterior-wall, residential, and commercial waterproofing. SAS specifically serves properties throughout Brooklyn, Manhattan, and Queens, giving homeowners and property managers access to one contractor for different exterior and moisture-related concerns.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              When you're comparing waterproofing contractors in NYC, look beyond the lowest price. Ask how the contractor identified the water source, what materials will be used, what repairs are included, and how the proposed system addresses the underlying problem.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed font-semibold">
              If you are dealing with basement seepage, foundation moisture, or recurring leaks, contact SAS Roofing & Waterproofing for an evaluation and detailed waterproofing estimate.
            </p>
          </motion.div>

          {/* Section: Conclusion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="p-8 bg-[#003269] text-white rounded-2xl shadow-xl space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Conclusion</h2>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              The{" "}
              <Link
                href="/"
                className="text-white font-semibold underline hover:text-gray-200 transition"
              >
                waterproofing cost in NYC
              </Link>{" "}
              depends heavily on the building and the solution required. A straightforward interior project may cost several thousand dollars, while exterior excavation, foundation repairs, difficult access, and larger commercial work can substantially increase the investment.
            </p>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              Whether your property is in Brooklyn, Manhattan, or Queens, the smartest approach is to identify the source of water first and then compare detailed proposals from qualified waterproofing contractors in NYC.
            </p>

            <div className="pt-4">
              <Link
                href="/contact-us"
                className="inline-block bg-[#e63a27] hover:bg-[#c82f1e] text-white font-bold py-3 px-8 rounded-lg shadow transition"
              >
                Get a Detailed Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
