"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, CheckCircle2, ShieldCheck, AlertTriangle, Home, Droplets, Wind, Building2 } from "lucide-react";
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
    question: "How can I protect my property from water damage in Manhattan?",
    answer:
      "Inspect the roof, maintain drainage systems, seal vulnerable exterior openings, and investigate leaks immediately. Check basements, terraces, windows, and parapet walls for moisture intrusion. Regular professional inspections can identify problems that are difficult to see from inside the building.",
  },
  {
    question: "How often should a Manhattan property roof be inspected?",
    answer:
      "An annual professional inspection is a practical baseline, with additional checks after significant storms or when signs of damage appear. Older roofs and buildings with recurring drainage problems may need more frequent attention based on their condition and the roofing manufacturer's recommendations.",
  },
  {
    question: "What are the first signs of a roof leak?",
    answer:
      "Common warning signs include brown ceiling stains, peeling paint, damp insulation, musty odors, bubbling plaster, and water near roof penetrations. These symptoms may appear some distance from the leak itself. Investigate the source promptly instead of simply repainting the affected area.",
  },
  {
    question: "Is waterproofing necessary for older Manhattan buildings?",
    answer:
      "Waterproofing may be particularly important where aging foundations, terraces, exterior joints, or roof membranes allow moisture to enter. However, the correct solution depends on the building's construction and the source of the water. An inspection helps determine whether targeted repairs or a broader waterproofing system is appropriate.",
  },
  {
    question: "Can roof maintenance help prevent mold?",
    answer:
      "Yes. Keeping the roof watertight and correcting leaks promptly can reduce the persistent moisture that allows mold to grow. If materials have already become wet, they may require professional drying, cleaning, or replacement. Address the water source first rather than treating visible mold alone.",
  },
  {
    question: "What should I do if my property starts leaking during a storm?",
    answer:
      "Keep people away from unsafe areas, protect belongings if it is safe, and contact a qualified emergency repair professional. Avoid electrical hazards and do not climb onto a wet roof. Document visible damage from a safe location and notify your insurer when appropriate.",
  },
  {
    question: "How do I choose a roofing and waterproofing contractor?",
    answer:
      "Look for relevant project experience, appropriate licensing and insurance, clear written estimates, references, and documented warranty terms. Ask how the contractor will locate the source of water intrusion, what materials will be used, and whether permits or additional specialists may be required.",
  },
];

const protectionSteps = [
  {
    step: "1",
    title: "Schedule Regular Roof Inspections",
    icon: Home,
    desc: "Arrange professional roof inspections at least annually and after significant storms when conditions warrant. Flat and low-slope roofs, which are common on urban buildings, need particular attention to drainage outlets, seams, flashing, and rooftop penetrations. Look for loose materials, visible cracks, standing water, damaged sealants, and signs of interior water intrusion. Never walk on a roof unless it is safe and you are qualified to do so.",
  },
  {
    step: "2",
    title: "Maintain Gutters and Roof Drains",
    icon: Droplets,
    desc: "Leaves, litter, and debris can obstruct drainage systems and allow water to accumulate. Keep accessible gutters, downspouts, and roof drains clear, and have drainage problems corrected promptly. Standing water on a flat roof may indicate a blocked drain, inadequate slope, or another underlying issue. Persistent ponding should be evaluated rather than treated as normal.",
  },
  {
    step: "3",
    title: "Repair Leaks Immediately",
    icon: AlertTriangle,
    desc: "Water stains, peeling paint, musty odors, bubbling plaster, and damp ceilings can indicate moisture intrusion. The visible stain may be far from the actual entry point, so repairing the interior surface alone will not solve the problem. Document the damage, protect belongings, and arrange a professional assessment to identify and correct the source.",
  },
  {
    step: "4",
    title: "Inspect Flashing, Seals, and Exterior Openings",
    icon: ShieldCheck,
    desc: "Pay attention to roof edges, parapet walls, skylights, vents, windows, and rooftop equipment. Damaged flashing or failed sealant can create entry points for rainwater. Use compatible repair materials and appropriate installation methods. Repeatedly applying sealant over a failing assembly may only provide temporary relief.",
  },
  {
    step: "5",
    title: "Protect Basements and Foundations",
    icon: Building2,
    desc: "Inspect basement walls for dampness, efflorescence, cracks, and recurring water intrusion. Check that exterior drainage directs water away from vulnerable areas where the property's layout permits. Waterproofing solutions vary according to the source of moisture. A professional may recommend exterior repairs, drainage improvements, crack treatment, or an appropriate waterproofing system after evaluating the conditions.",
  },
  {
    step: "6",
    title: "Prepare for Severe Weather",
    icon: Wind,
    desc: "Before forecast storms, secure accessible outdoor items, check drainage, and look for obvious exterior defects. After the storm, inspect the property from safe locations for missing roofing materials, damaged flashing, fallen debris, and signs of leaks. Avoid roof access during strong winds, lightning, or wet conditions. For immediate hazards, prioritize occupant safety and contact qualified professionals.",
  },
  {
    step: "7",
    title: "Keep a Preventive Maintenance Record",
    icon: CheckCircle2,
    desc: "Maintain a record of inspections, repairs, warranties, photographs, and recurring problem areas. For property managers, this creates a useful maintenance history and helps identify patterns before they become larger issues. A documented maintenance schedule also makes it easier to plan repairs and budget for roof replacement or waterproofing upgrades.",
  },
];

export default function ProtectPropertyManhattan() {
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
                src="/blog/manhattan-roofing-waterproofing.webp"
                alt="Roofing and waterproofing solutions to help protect Manhattan properties from water damage"
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
                How Do I Protect My Property From Damage in Manhattan?
              </h1>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam">
                To protect your property from damage in Manhattan, inspect your roof regularly, maintain{" "}
                <Link
                  href="/waterproofing-contractors-NY"
                  className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                >
                  waterproofing
                </Link>{" "}
                systems, clear drainage pathways, seal vulnerable openings, and address leaks before they become expensive repairs. Manhattan buildings face unique challenges, including heavy rain, strong winds, aging roofs, dense urban construction, and temperature changes that can worsen existing structural problems.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-bevietnam mt-4">
                Whether you own a townhouse, manage a multifamily building, or operate a commercial property, preventive maintenance is one of the most effective ways to reduce damage and protect your investment. A reliable roofing and waterproofing contractor can help identify hidden vulnerabilities and recommend repairs suited to your building.
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
                  href="#what-causes-property-damage"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  What Causes Property Damage in Manhattan?
                </a>
              </li>
              <li>
                <a
                  href="#roofing-waterproofing-protection"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  How Can Roofing and Waterproofing Protect Your Property?
                </a>
              </li>
              <li>
                <a
                  href="#essential-protection-steps"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Essential Property Protection Steps
                </a>
              </li>
              <li>
                <a
                  href="#common-problems"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Common Problems to Watch For
                </a>
              </li>
              <li>
                <a
                  href="#when-hire-professional"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  When Should You Hire a Professional?
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
                  href="#professional-services"
                  className="text-blue-700 hover:underline hover:text-[#e63a27] transition"
                >
                  Professional Roofing and Waterproofing Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Section 1: What Causes Property Damage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="what-causes-property-damage"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              What Causes Property Damage in Manhattan?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Manhattan properties experience several sources of damage, from severe weather to everyday wear and tear.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed font-semibold">
              Common causes include:
            </p>

            <div className="space-y-4 mt-2">
              {[
                {
                  title: "Roof leaks",
                  desc: "Damaged shingles, deteriorated flashing, aging membranes, and loose roof components allow water to enter.",
                },
                {
                  title: "Heavy rainfall",
                  desc: "Blocked drains, clogged gutters, and inadequate drainage can cause water to collect on roofs and around vulnerable building areas.",
                },
                {
                  title: "Wind damage",
                  desc: "Strong gusts can loosen roofing materials, damage flashing, and dislodge exterior components.",
                },
                {
                  title: "Water infiltration",
                  desc: "Cracks around windows, foundations, parapet walls, and exterior joints can allow moisture to penetrate.",
                },
                {
                  title: "Aging building materials",
                  desc: "Older roofs, deteriorated sealants, and worn waterproofing membranes may no longer provide reliable protection.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-200 transition"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#003269] mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003269] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed pl-9">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              In a densely built city like Manhattan, even a small roof leak can affect ceilings, electrical systems, insulation, interior finishes, and neighboring units. Early detection helps limit the spread of damage.
            </p>
          </motion.div>

          {/* Section 2: Roofing and Waterproofing Protection */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="roofing-waterproofing-protection"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              How Can Roofing and Waterproofing Protect Your Property?
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>Overview:</strong>{" "}
                <Link
                  href="/"
                  className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
                >
                  Roofing and waterproofing
                </Link>{" "}
                systems create barriers that help prevent rainwater and moisture from entering your building.
              </p>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              A properly maintained roof sheds water away from the structure, while flashing protects vulnerable joints around chimneys, vents, walls, and rooftop equipment. Waterproofing membranes and correctly sealed exterior openings help reduce moisture intrusion in basements, terraces, and other exposed areas.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Together, these systems help preserve building materials, reduce mold risks associated with persistent moisture, and minimize disruptive emergency repairs. Their effectiveness depends on suitable materials, correct installation, drainage, and ongoing maintenance.
            </p>
          </motion.div>

          {/* Section 3: Essential Protection Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="essential-protection-steps"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              7 Essential Ways to Protect Your Manhattan Property
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
              {protectionSteps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 hover:border-blue-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#003269] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {item.step}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-400 shrink-0" />
                      <h3 className="font-bold text-base md:text-lg text-[#003269]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm font-bevietnam leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Section 4: Common Problems to Watch For */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="common-problems"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Common Property Protection Mistakes to Avoid
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Some maintenance shortcuts can make water damage worse.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <ul className="space-y-3 font-bevietnam text-sm md:text-base text-gray-700">
                {[
                  "Ignoring small stains until a ceiling or wall deteriorates.",
                  "Painting over moisture damage without correcting the source.",
                  "Allowing roof drains to remain blocked.",
                  "Choosing repairs based only on the lowest initial quote.",
                  "Applying incompatible coatings or sealants to existing roofing systems.",
                  "Delaying professional assessment when leaks return after repairs.",
                ].map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              The best approach is to identify the source, correct the underlying problem, and verify that the repaired system drains and performs properly.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#003269] p-4 rounded-r-lg mt-4">
              <p className="text-gray-800 text-sm md:text-base font-bevietnam leading-relaxed">
                <strong>How Much Does Property Damage Prevention Cost in Manhattan?</strong> Costs depend on building size, roof type, material condition, accessibility, and repair complexity. Clearing a drain or replacing a small section of flashing generally costs less than repairing extensive water damage or replacing a roof. Waterproofing projects can also vary significantly depending on whether the issue involves a small crack, a terrace membrane, or a larger foundation area. Rather than relying on a generic price, request a written estimate that separates inspection findings, immediate repairs, recommended upgrades, and any optional work.
              </p>
            </div>
          </motion.div>

          {/* Section 5: When to Hire a Professional */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="when-hire-professional"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              When Should You Hire a Professional Roofing Contractor?
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Contact a qualified contractor if you notice recurring leaks, persistent ponding, loose roofing materials, deteriorated flashing, widespread cracking, or moisture that returns after previous repairs.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              For Manhattan buildings, access restrictions, neighboring structures, rooftop equipment, and local building requirements may complicate repairs. Experienced professionals can assess these factors, recommend suitable materials, and determine whether additional specialists are needed.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <h3 className="text-lg font-bold text-[#003269] mb-4">
                What to look for in a contractor:
              </h3>
              <ul className="space-y-3 font-bevietnam text-sm md:text-base">
                {[
                  "Provides a clear scope of work",
                  "Explains the cause of the problem",
                  "Documents recommended repairs",
                  "Offers written warranty information where applicable",
                  "Has relevant project experience and appropriate licensing and insurance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section 6: FAQs Accordion */}
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

          {/* Section 7: Professional Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id="professional-services"
            className="mb-14 space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
              Protect Your Property With SAS Roofing &amp; Waterproofing
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Protecting a Manhattan property starts with understanding where water can enter and which building components need attention.{" "}
              <Link
                href="/"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                SAS Roofing &amp; Waterproofing
              </Link>{" "}
              provides roofing-related services through its New York-area business, including the{" "}
              <Link
                href="/roofing-contractors-brooklyn"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                Brooklyn roofing contractor
              </Link>{" "}
              service featured on its website. For property owners dealing with leaks, deteriorated roof materials, or concerns about water intrusion, a professional assessment can help clarify the problem and identify suitable next steps.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-bevietnam leading-relaxed">
              Before authorizing work, ask for an inspection-based recommendation, a detailed written estimate, and an explanation of the proposed repair or replacement method. The right solution should address the cause of the damage, suit the building's roofing system, and support long-term maintenance. Visit SAS Roofing &amp; Waterproofing&apos;s website or{" "}
              <Link
                href="/contact-us"
                className="text-blue-700 font-semibold underline hover:text-[#e63a27] transition"
              >
                contact the company
              </Link>{" "}
              to discuss your roofing concerns and request a project assessment.
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
              Protecting your property from damage in Manhattan requires consistent roof maintenance, effective drainage, reliable waterproofing, and prompt attention to warning signs. Small issues such as deteriorated flashing or blocked roof drains can develop into expensive repairs when ignored.
            </p>
            <p className="text-gray-100 text-sm md:text-base font-bevietnam leading-relaxed">
              Schedule inspections, document maintenance, and choose qualified professionals who address underlying causes instead of temporary symptoms. With a practical prevention plan and timely repairs, you can reduce avoidable water damage and help preserve your property&apos;s condition and value.
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

