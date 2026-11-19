"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  FileText,
  Star,
  MessageSquare,
  ClipboardList,
} from "lucide-react";
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
    question: "How do I know if a waterproofing contractor is reliable?",
    answer:
      "Look for relevant experience, verified licensing, insurance, positive customer references, detailed estimates, and written warranties. A dependable contractor should inspect your property before recommending a solution and clearly explain the materials, installation process, and expected results.",
  },
  {
    question: "Should a waterproofing contractor be licensed and insured in NYC?",
    answer:
      "Yes, applicable licensing and insurance are important. NYC generally requires a Home Improvement Contractor license for qualifying residential improvement work exceeding $200. Contractors may also need additional registrations, insurance, or permits depending on the project.",
  },
  {
    question: "How long does professional waterproofing last?",
    answer:
      "The lifespan depends on the waterproofing system, material quality, installation, building conditions, and maintenance. Some systems can provide protection for many years, but no universal lifespan applies. Ask the contractor about manufacturer specifications, maintenance requirements, and warranty coverage.",
  },
  {
    question: "What questions should I ask before hiring a waterproofing contractor?",
    answer:
      "Ask about previous projects, licensing, insurance, inspection procedures, recommended materials, estimated completion time, pricing, and warranty terms. Also ask how the contractor plans to identify and address the original source of water intrusion rather than simply treating visible damage.",
  },
  {
    question: "Is professional waterproofing worth the investment?",
    answer:
      "Yes. Professional waterproofing can help prevent recurring leaks, moisture damage, mold-related problems, and deterioration of building materials. Addressing water intrusion early may also reduce the likelihood of more extensive repairs. The best solution depends on the building's condition and the underlying cause of moisture.",
  },
  {
    question: "How often should waterproofing systems be inspected?",
    answer:
      "Inspect roofs and other exposed waterproofing components at least annually and after significant storms when safe. Check for damaged flashing, blocked drains, deteriorated sealants, and standing water. Follow the maintenance recommendations for the specific waterproofing system.",
  },
];

const qualities = [
  {
    step: "1",
    icon: Wrench,
    title: "Proven Industry Experience",
    body: "Experience is one of the strongest indicators of a contractor's ability to handle different waterproofing challenges. An experienced professional understands how water behaves around foundations, roofs, masonry walls, and drainage systems. They can recognize problems that may not be immediately visible, such as hidden membrane failures or moisture entering through deteriorated flashing. Ask how long the company has operated and whether it has completed projects similar to yours.",
  },
  {
    step: "2",
    icon: ShieldCheck,
    title: "Proper Licensing and Insurance",
    body: "A reliable waterproofing contractor should have the licenses and insurance required for the specific work being performed. Before signing an agreement, ask for applicable contractor license details, general liability insurance documentation, workers' compensation coverage where required, and relevant registrations and permits. In New York City, residential home improvement contractors generally need a DCWP license for qualifying work costing more than $200. Verify the contractor's applicable credentials rather than relying on verbal assurances.",
  },
  {
    step: "3",
    icon: ClipboardList,
    title: "Detailed Inspection and Accurate Diagnosis",
    body: "A trustworthy contractor does not recommend expensive repairs without understanding the underlying problem. For example, a ceiling leak may originate from damaged roof flashing, a failed membrane, clogged drainage, or another building component. Simply sealing the visible stain will not necessarily solve the problem. Look for contractors who inspect the affected area, explain their findings, and provide a clear repair recommendation.",
  },
  {
    step: "4",
    icon: CheckCircle2,
    title: "Knowledge of Quality Materials and Installation Methods",
    body: "Waterproofing performance depends heavily on selecting the right materials and installing them correctly. Depending on the project, suitable systems may include single-ply roofing membranes, liquid-applied waterproofing systems, modified bitumen membranes, foundation waterproofing coatings, protective drainage membranes, and compatible masonry sealants. A professional should explain why a particular system suits your property's surface, exposure, drainage conditions, and intended use.",
  },
  {
    step: "5",
    icon: FileText,
    title: "Transparent Pricing and Written Estimates",
    body: "A dependable contractor provides a detailed estimate rather than an unexplained lump-sum price. The proposal should identify labor, materials, preparation, repair methods, project access, cleanup, and any additional charges. Compare estimates based on the complete scope of work, not just the lowest price. An unusually cheap proposal may exclude important preparation or drainage repairs that affect long-term performance.",
  },
  {
    step: "6",
    icon: Star,
    title: "Strong References and a Verifiable Reputation",
    body: "Customer feedback can reveal how a company handles communication, workmanship, scheduling, and unexpected problems. Before hiring, review recent Google customer reviews, before-and-after project photographs, references from previous customers, examples of comparable roofing or waterproofing projects, and responses to complaints or negative feedback. A reliable waterproofing company should be comfortable discussing its previous work and answering reasonable questions.",
  },
  {
    step: "7",
    icon: ShieldCheck,
    title: "Written Warranties and Clear Guarantees",
    body: "Waterproofing is a long-term investment, so warranty terms matter. Ask whether the contractor offers a workmanship warranty and whether manufacturer warranties apply to the selected materials. Understand what is covered, how long coverage lasts, and what exclusions apply. A written warranty should clearly explain the contractor's responsibilities if the completed work develops a covered defect.",
  },
  {
    step: "8",
    icon: MessageSquare,
    title: "Clear Communication and Professional Project Management",
    body: "Reliable contractors communicate throughout the project. They explain the work schedule, discuss potential disruptions, provide progress updates, and inform customers when unexpected conditions require changes. Professional project management also includes maintaining a clean worksite, following safety procedures, coordinating inspections, and completing agreed work within a reasonable timeframe.",
  },
];

const checklist = [
  { criteria: "Experience", check: "Previous roofing and waterproofing projects" },
  { criteria: "Licensing", check: "Applicable NYC contractor credentials" },
  { criteria: "Insurance", check: "Current insurance documentation" },
  { criteria: "Inspection", check: "Thorough assessment of water damage" },
  { criteria: "Materials", check: "Suitable products and installation methods" },
  { criteria: "Pricing", check: "Detailed written estimate" },
  { criteria: "Reputation", check: "Genuine customer reviews and references" },
  { criteria: "Warranty", check: "Written coverage and conditions" },
];

export default function ReliableWaterproofingContractorBrooklyn() {
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
                src="/blog/reliable-waterproofing-contractor-brooklyn.webp"
                alt="Professional waterproofing contractor inspecting and repairing a rooftop in Brooklyn, New York"
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
                What Makes a Waterproofing Contractor Reliable? 8 Qualities to Look For
              </h1>

              <h2 className="text-xl md:text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam">
                Choosing a reliable waterproofing contractor is essential when protecting your property from leaks, moisture damage, mold, and costly structural repairs. The right contractor does more than apply waterproofing products; they identify the source of water intrusion, recommend suitable solutions, and complete the work using appropriate materials and proven installation methods.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam mt-4">
                For homeowners and commercial property owners in Brooklyn, New York, finding an experienced{" "}
                <Link
                  href="/roofing-contractors-brooklyn"
                  className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                >
                  roofing and waterproofing professional
                </Link>{" "}
                can make a significant difference in the long-term protection of a building. But how can you distinguish a dependable contractor from one who simply promises quick results? Here are eight important qualities to look for before hiring a waterproofing company.
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
            <h2 className="text-2xl font-bold text-[#003269] mb-4">Table of Contents</h2>
            <ul className="grid gap-2 md:grid-cols-2 text-sm md:text-base font-bevietnam">
              {[
                { label: "What Does a Waterproofing Contractor Do?", href: "#what-does-a-waterproofing-contractor-do" },
                { label: "8 Qualities of a Reliable Waterproofing Contractor", href: "#eight-qualities" },
                { label: "Common Warning Signs to Avoid", href: "#warning-signs" },
                { label: "How to Choose the Right Waterproofing Company", href: "#how-to-choose" },
                { label: "Waterproofing Cost Considerations", href: "#cost-considerations" },
                { label: "Why Professional Waterproofing Matters", href: "#why-professional" },
                { label: "Frequently Asked Questions", href: "#faqs" },
                { label: "Why Choose SAS Roofing & Waterproofing?", href: "#why-sas" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 1: What Does a Waterproofing Contractor Do? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="what-does-a-waterproofing-contractor-do"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Does a Waterproofing Contractor Do?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                A waterproofing contractor specializes in preventing water from entering buildings through roofs, foundations, basement walls, exterior surfaces, and other vulnerable areas.
              </p>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Professional{" "}
              <Link
                href="/waterproofing-contractors-NY"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                waterproofing services
              </Link>{" "}
              may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              {[
                "Roof leak detection and waterproofing",
                "Basement and foundation waterproofing",
                "Exterior wall moisture protection",
                "Waterproof membrane installation",
                "Masonry repairs and sealing",
                "Drainage improvements",
                "Roof flashing and penetration repairs",
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
              A qualified contractor first evaluates the building&apos;s condition, identifies the source of moisture, and recommends a repair or waterproofing system suited to the property.
            </p>
          </motion.div>

          {/* Section 2: 8 Qualities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="eight-qualities"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              8 Qualities of a Reliable Waterproofing Contractor
            </h2>

            <div className="space-y-5 mt-4">
              {qualities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003269] text-white text-sm font-bold shrink-0">
                        {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-gray-400 shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-11">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Section 3: Warning Signs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="warning-signs"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Common Warning Signs to Avoid When Hiring a Contractor
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Not every company offering waterproofing services delivers the same level of quality. Watch for these red flags:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <ul className="space-y-3 font-bevietnam text-sm md:text-base text-gray-700">
                {[
                  "Unusually low quotes without a detailed explanation.",
                  "No proof of licensing or insurance.",
                  "Pressure to make an immediate payment.",
                  "No written contract or warranty.",
                  "Vague explanations of the proposed waterproofing method.",
                  "No references or verifiable project history.",
                  "Promises that every leak can be permanently fixed with a simple coating.",
                ].map((flag, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Taking time to verify these details can help you avoid unnecessary expenses and repeated repairs.
            </p>
          </motion.div>

          {/* Section 4: How to Choose */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="how-to-choose"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How to Choose the Right Waterproofing Company in Brooklyn
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Use this checklist before making your decision:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-4">
              <table className="w-full text-sm md:text-base font-bevietnam">
                <thead>
                  <tr className="bg-[#003269] text-white">
                    <th className="p-4 text-left font-bold">Evaluation Criteria</th>
                    <th className="p-4 text-left font-bold">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {checklist.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 font-semibold text-[#003269]">{row.criteria}</td>
                      <td className="p-4 text-gray-700">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed italic">
              A contractor who can confidently address these points is more likely to provide a professional experience.
            </p>
          </motion.div>

          {/* Section 5: Cost Considerations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="cost-considerations"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How Much Does Professional Waterproofing Cost?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                Waterproofing costs vary depending on the building, affected area, materials, accessibility, and extent of existing damage. Always request an inspection and itemized estimate.
              </p>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              The most important cost factors include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base font-bevietnam">
              <li>
                <strong className="text-[#003269]">Project size:</strong> Larger roofs, foundations, and basement areas require more materials and labor.
              </li>
              <li>
                <strong className="text-[#003269]">Existing damage:</strong> Structural deterioration and extensive water damage can increase repair costs.
              </li>
              <li>
                <strong className="text-[#003269]">Waterproofing system:</strong> Liquid membranes, sheet membranes, and foundation systems have different installation requirements.
              </li>
              <li>
                <strong className="text-[#003269]">Surface preparation:</strong> Cleaning, crack repairs, and removing failed materials add to project expenses.
              </li>
              <li>
                <strong className="text-[#003269]">Accessibility:</strong> Scaffolding, specialized equipment, and difficult working conditions can increase labor costs.
              </li>
            </ul>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Investing in proper preparation and installation can help reduce recurring water problems.
            </p>
          </motion.div>

          {/* Section 6: Why Professional Waterproofing Matters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="why-professional"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Why Professional Waterproofing Services Matter
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Professional waterproofing protects more than the visible surfaces of a building. It helps prevent moisture from affecting foundations, roofing assemblies, interior finishes, and other structural components.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              An incorrectly installed waterproofing system can fail even when expensive materials are used. Professional installation helps ensure that surfaces are prepared correctly, joints are properly treated, drainage is considered, and materials are applied according to manufacturer specifications.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              For Brooklyn property owners, professional{" "}
              <Link
                href="/services"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                roofing and waterproofing services
              </Link>{" "}
              can help address problems caused by seasonal rainfall, temperature fluctuations, and aging building materials.
            </p>
          </motion.div>

          {/* Section 7: FAQs */}
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
                        className={`w-5 h-5 text-[#003269] shrink-0 transition-transform duration-300 ${
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

          {/* Section 8: Why SAS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="why-sas"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Why Choose SAS Roofing &amp; Waterproofing?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              When selecting a reliable waterproofing contractor in Brooklyn, local experience, quality workmanship, and honest communication matter.{" "}
              <Link
                href="/"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                SAS Roofing &amp; Waterproofing
              </Link>{" "}
              is a family-owned and operated business serving the greater Brooklyn area since 2000, with services extending across Brooklyn, Manhattan, Queens, and surrounding communities.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              The company provides roofing, waterproofing, and masonry services for residential and commercial properties. Whether you are dealing with recurring roof leaks, foundation moisture, or exterior water intrusion, SAS Roofing &amp; Waterproofing can help assess your property&apos;s needs and discuss suitable solutions.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Explore its{" "}
              <Link
                href="/roofing-contractors-brooklyn"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                roofing contractor services in Brooklyn
              </Link>{" "}
              or{" "}
              <Link
                href="/services"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                complete service offerings
              </Link>
              .{" "}
              <Link
                href="/contact-us"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                Contact the team
              </Link>{" "}
              to discuss your project and request a waterproofing estimate.
            </p>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="p-8 bg-[#003269] text-white rounded-2xl shadow-xl space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Conclusion</h2>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              Hiring a reliable waterproofing contractor requires more than comparing prices. Experience, proper licensing, insurance, accurate inspections, quality materials, customer references, written warranties, and clear communication are all important qualities.
            </p>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              For Brooklyn property owners, choosing a professional who understands local building conditions can help protect your investment and prevent recurring moisture problems. Take the time to evaluate your options, ask the right questions, and choose a contractor who prioritizes long-term results over quick fixes.
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

