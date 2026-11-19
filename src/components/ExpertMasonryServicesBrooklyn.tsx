"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, CheckCircle2, ShieldCheck, Wrench, Search, Building2, Hammer } from "lucide-react";
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
    question: "What do masonry contractors in Brooklyn, NY, repair?",
    answer:
      "Masonry contractors commonly repair brick walls, mortar joints, chimneys, stone surfaces, stoops, and concrete masonry features. They may also provide brownstone restoration and address masonry-related water infiltration. The exact services available depend on the contractor's expertise and the condition of the property.",
  },
  {
    question: "How do I know if my brick building needs repointing?",
    answer:
      "Signs include missing mortar, crumbling joints, visible gaps, and loose masonry units. Interior dampness may also indicate a problem with the exterior wall. A professional inspection can determine whether repointing is appropriate or whether the damage requires a different repair.",
  },
  {
    question: "How much does masonry repair cost in Brooklyn?",
    answer:
      "Costs depend on the repair area, material condition, building height, access requirements, and labor involved. Minor localized repairs generally have a different scope from extensive facade restoration. Obtain an on-site assessment and written estimate for a reliable project-specific price.",
  },
  {
    question: "Can damaged bricks be repaired without replacing the entire wall?",
    answer:
      "Yes. When the damage is localized, a contractor may replace individual bricks, repoint deteriorated joints, or restore limited sections. However, widespread deterioration or structural movement may require more extensive work. The appropriate solution depends on the inspection findings.",
  },
  {
    question: "Is repointing the same as tuckpointing?",
    answer:
      "The terms are sometimes used interchangeably, but they can describe different techniques. Repointing generally involves removing deteriorated mortar and replacing it with new mortar. Tuckpointing can refer to a decorative technique that creates the appearance of fine, uniform mortar joints.",
  },
  {
    question: "How often should masonry buildings be inspected?",
    answer:
      "Inspection frequency depends on the building's age, exposure, previous repairs, and condition. Periodic visual checks are useful, especially after severe weather or when new damage appears. Older buildings and properties with recurring moisture problems may need more frequent professional assessments.",
  },
  {
    question: "Can masonry repairs help prevent water damage?",
    answer:
      "Yes, when repairs address the actual source of water entry. Repointing, replacing damaged bricks, repairing flashing, and correcting drainage issues can improve water management. However, masonry repairs alone may not resolve problems caused by plumbing leaks, roof defects, or other sources.",
  },
];

export default function ExpertMasonryServicesBrooklyn() {
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
                src="/blog/expert-masonry-services-brooklyn-ny.webp"
                alt="Professional brick repair and masonry restoration services in Brooklyn, NY"
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
                Expert Masonry Services in Brooklyn, NY: Brick Repair and Restoration
              </h1>

              <h2 className="text-xl md:text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam">
                Brooklyn’s brick buildings, brownstones, stoops, and masonry facades need regular maintenance to remain safe, attractive, and durable.{" "}
                <Link
                  href="/masonry-services-brooklyn-ny"
                  className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                >
                  Professional masonry services in Brooklyn, NY
                </Link>
                , help property owners repair damaged bricks, restore deteriorating mortar, address water infiltration, and protect their buildings from further deterioration. Identifying masonry problems early can help prevent more extensive repairs and preserve the character of your property.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam mt-4">
                Whether you own a brownstone, manage a multifamily building, or maintain a commercial property, understanding common masonry issues can help you make informed decisions about repairs and restoration.
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
                  href="#what-are-masonry-services"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  What Are Masonry Services?
                </a>
              </li>
              <li>
                <a
                  href="#common-masonry-problems"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Common Masonry Problems in Brooklyn
                </a>
              </li>
              <li>
                <a
                  href="#benefits-of-masonry-repair"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Benefits of Professional Masonry Repair
                </a>
              </li>
              <li>
                <a
                  href="#how-restoration-works"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  How Masonry Restoration Works
                </a>
              </li>
              <li>
                <a
                  href="#what-affects-repair-costs"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  What Affects Masonry Repair Costs?
                </a>
              </li>
              <li>
                <a
                  href="#masonry-maintenance-tips"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Masonry Maintenance Tips
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#professional-masonry-services"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Professional Masonry Services in Brooklyn
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Section 1: What Are Masonry Services? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="what-are-masonry-services"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Are Masonry Services?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Masonry Services Overview:</strong> Masonry services involve constructing, repairing, and restoring structures made from materials such as brick, stone, concrete block, and mortar. In Brooklyn, these services are particularly relevant to older buildings, traditional brownstones, exterior walls, chimneys, and front stoops.
              </p>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Common masonry services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              {[
                "Brick repair and replacement",
                "Brick pointing and mortar repointing",
                "Brownstone and stone restoration",
                "Chimney masonry repair",
                "Concrete and masonry step repair",
                "Exterior wall crack repair",
                "Masonry-related waterproofing",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#e63a27] shrink-0" />
                  <span className="text-gray-800 font-medium text-sm md:text-base font-bevietnam">
                    {service}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              The right repair depends on the material, the extent of the damage, and the underlying cause. For example, deteriorating mortar may require repointing, while cracked or severely damaged bricks might need replacement.
            </p>
          </motion.div>

          {/* Section 2: Common Masonry Problems in Brooklyn Buildings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="common-masonry-problems"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Common Masonry Problems in Brooklyn Buildings
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Brooklyn properties experience changing temperatures, rain, snow, and repeated freeze-thaw cycles. These conditions can contribute to masonry deterioration, particularly when water enters cracks or damaged joints.
            </p>

            <div className="space-y-4 mt-6">
              <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition">
                <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003269] text-white text-xs font-bold">1</span>
                  Crumbling or Missing Mortar
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-9">
                  Mortar holds masonry units together and helps limit water penetration through joints. When it deteriorates, water can enter the wall and accelerate damage. Professional repointing removes unsuitable mortar and replaces it with compatible material.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition">
                <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003269] text-white text-xs font-bold">2</span>
                  Cracked or Spalling Bricks
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-9">
                  Spalling occurs when the outer surface of a brick flakes or breaks away. Moisture exposure and freeze-thaw cycles can contribute to this problem. Damaged bricks may need replacement, but the moisture source should also be investigated.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition">
                <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003269] text-white text-xs font-bold">3</span>
                  Cracks in Masonry Walls
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-9">
                  Small cracks may result from normal material movement, while larger or widening cracks can indicate more serious movement or structural concerns. A qualified professional should assess significant cracking before cosmetic repairs are attempted.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition">
                <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003269] text-white text-xs font-bold">4</span>
                  Water Infiltration
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-9">
                  Water entering through deteriorated joints, failed flashing, or damaged exterior details can lead to interior stains, peeling paint, and ongoing masonry deterioration. Repairing the entry point is usually more effective than simply covering the visible damage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Benefits of Professional Masonry Repair */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="benefits-of-masonry-repair"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Benefits of Professional Masonry Repair
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Professional masonry repair helps maintain a building's appearance while addressing damage that could worsen over time.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <h3 className="text-lg font-bold text-[#003269] mb-4">
                Key benefits include:
              </h3>
              <ul className="space-y-3 font-bevietnam text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#003269]">Improved durability:</strong> Repairing damaged joints and masonry units helps protect the building envelope.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#003269]">Better water management:</strong> Correctly addressing openings and failed joints can reduce moisture intrusion.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#003269]">Preserved architectural character:</strong> Appropriate restoration helps retain the appearance of Brooklyn's historic brickwork and brownstones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#003269]">Improved curb appeal:</strong> Well-maintained facades, stoops, and chimneys create a cleaner exterior.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#003269]">More informed maintenance decisions:</strong> Professional assessments can help identify the source of damage and prioritize repairs.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed italic">
              Masonry work should address the underlying problem rather than conceal visible symptoms.
            </p>
          </motion.div>

          {/* Section 4: How Does Masonry Restoration Work? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="how-restoration-works"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How Does Masonry Restoration Work?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              A typical masonry restoration project follows several steps:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              {[
                {
                  step: "1",
                  title: "Inspection",
                  desc: "The contractor examines the affected walls, mortar joints, bricks, and surrounding details.",
                  icon: Search,
                },
                {
                  step: "2",
                  title: "Problem Identification",
                  desc: "The inspection helps determine whether the damage relates to moisture, deteriorated mortar, movement, or another cause.",
                  icon: Wrench,
                },
                {
                  step: "3",
                  title: "Repair Planning",
                  desc: "The contractor identifies appropriate materials, repair methods, access requirements, and project scope.",
                  icon: Building2,
                },
                {
                  step: "4",
                  title: "Surface Preparation",
                  desc: "Damaged mortar or masonry is carefully removed where necessary.",
                  icon: Hammer,
                },
                {
                  step: "5",
                  title: "Repair and Restoration",
                  desc: "Compatible mortar, replacement bricks, or suitable restoration materials are installed.",
                  icon: CheckCircle2,
                },
                {
                  step: "6",
                  title: "Final Assessment",
                  desc: "The completed work is reviewed for workmanship, appearance, and relevant water-management details.",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-full bg-[#003269] text-white flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </span>
                        <IconComponent className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg text-[#003269] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-bevietnam leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-900 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Important note on historic masonry:</strong> Older masonry requires particular care. Using mortar that is too hard for a historic brick wall, for example, can contribute to damage rather than protect it.
              </p>
            </div>
          </motion.div>

          {/* Section 5: What Affects Masonry Repair Costs in Brooklyn, NY? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="what-affects-repair-costs"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Affects Masonry Repair Costs in Brooklyn, NY?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                Masonry repair costs vary according to the property's condition and the work required. There is no single price that applies to every Brooklyn building.
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Important cost factors include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base font-bevietnam">
              <li>
                <strong className="text-[#003269]">Damage severity:</strong> Localized mortar deterioration generally involves a different scope of work than widespread facade damage.
              </li>
              <li>
                <strong className="text-[#003269]">Repair type:</strong> Brick replacement, repointing, stone restoration, and structural repairs require different materials and labor.
              </li>
              <li>
                <strong className="text-[#003269]">Building height and access:</strong> Scaffolding, lifts, and difficult working conditions can increase project costs.
              </li>
              <li>
                <strong className="text-[#003269]">Material compatibility:</strong> Historic bricks and specialized mortar may require additional sourcing and skilled labor.
              </li>
              <li>
                <strong className="text-[#003269]">Waterproofing requirements:</strong> Correcting flashing failures or other water-entry points may add to the overall scope.
              </li>
              <li>
                <strong className="text-[#003269]">Permits and compliance:</strong> Applicable permits, building requirements, and historic-property restrictions may affect the project.
              </li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Request a written estimate that describes the proposed work, materials, access arrangements, and any additional repairs that may be necessary.
            </p>
          </motion.div>

          {/* Section 6: Masonry Maintenance Tips for Brooklyn Property Owners */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="masonry-maintenance-tips"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Masonry Maintenance Tips for Brooklyn Property Owners
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Regular inspections can help identify developing problems before they become more extensive.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <ul className="space-y-3 font-bevietnam text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Inspect brick walls and mortar joints periodically for cracking or deterioration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Look for loose bricks, flaking surfaces, and damaged masonry steps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Check for interior water stains near exterior walls and windows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Keep gutters and drainage systems clear so water does not repeatedly run down masonry surfaces.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Address damaged flashing and other identified sources of water intrusion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Avoid applying waterproof coatings without confirming that they are appropriate for the existing masonry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003269] shrink-0 mt-0.5" />
                  <span>Arrange a professional assessment when cracks widen, walls bulge, or masonry becomes loose.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Historic brickwork often benefits from repair methods that preserve the original materials instead of replacing more masonry than necessary.
            </p>
          </motion.div>

          {/* Section 7: FAQs Accordion */}
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

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-bold text-base md:text-lg text-[#003269]">
                        {index + 1}. {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#003269] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                          <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200/60 pt-3 font-bevietnam">
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

          {/* Section 8: Professional Masonry Services in Brooklyn, NY */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="professional-masonry-services"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Professional Masonry Services in Brooklyn, NY
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Maintaining brickwork, stone surfaces, and mortar joints requires appropriate materials, careful workmanship, and a clear understanding of the underlying damage.{" "}
              <Link
                href="/"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                SAS Roofing & Waterproofing
              </Link>{" "}
              provides a starting point for Brooklyn property owners seeking masonry repair and restoration services.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              If your property has deteriorating mortar, cracked bricks, damaged masonry steps, or signs of moisture intrusion, consider arranging a professional assessment before the damage progresses. The appropriate repair plan should reflect the building's condition, material type, and water-management needs rather than rely on a one-size-fits-all solution.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Explore the company's{" "}
              <Link
                href="/masonry-services-brooklyn-ny"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                masonry services in Brooklyn, NY
              </Link>{" "}
              to learn more about available services.{" "}
              <Link
                href="/contact-us"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                Contact SAS Roofing & Waterproofing
              </Link>{" "}
              to discuss your property's needs and request a project-specific consultation or quote.
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
              Masonry maintenance is an important part of protecting Brooklyn's brick buildings, brownstones, and commercial properties. Recognizing deteriorating mortar, damaged bricks, wall cracks, and moisture problems early can help property owners plan appropriate repairs and preserve their buildings.
            </p>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              Whether you need brick repointing, masonry restoration, or an assessment of water-related damage, choose a qualified professional who understands your property's materials and repair requirements. Taking action early can help maintain the appearance, durability, and long-term performance of your masonry.
            </p>

            <div className="pt-4">
              <Link
                href="/contact-us"
                className="inline-block bg-[#e63a27] hover:bg-[#c82f1e] text-white font-bold py-3 px-8 rounded-lg shadow transition"
              >
                Request a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
