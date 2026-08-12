"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Variants } from "framer-motion";
import FAQSection from "./FAQSectionBlog";
import {
  ShieldCheck,
  Building2,
  Flame,
  CheckCircle2,
  PhoneCall,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  DollarSign,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const blogPost = {
  title:
    "Masonry Contractor Brooklyn NY: 10 Expert Services Every Property Owner Should Know",
  shortTitle:
    "10 Expert Masonry Services in Brooklyn, Manhattan & Queens",
  description:
    "A comprehensive guide to masonry services in Brooklyn NY, Manhattan, and Queens. Learn about brick repair, repointing, stone masonry, brownstone restoration, facade repair, and chimney work.",
  date: "12 AUG 2026",
  image: "/blog/masonry-contractor-brooklyn-ny-expert-services.webp",
  link: "masonry-contractor-brooklyn-ny-expert-services",
  initialLikes: 185,
};

const masonryFaqs = [
  {
    question: "What are the signs that I need masonry repair?",
    answer:
      "Cracked bricks, deteriorating mortar, loose masonry, water stains, efflorescence, damaged concrete, and visible movement are common warning signs. Small problems can become more expensive when water repeatedly enters masonry walls.",
  },
  {
    question: "What is the difference between tuckpointing and repointing?",
    answer:
      "Both involve repairing mortar joints. Repointing generally means removing deteriorated mortar and replacing it with new mortar. Tuckpointing can refer to a technique involving contrasting lines of mortar to create a particular visual appearance.",
  },
  {
    question: "How often should masonry be inspected?",
    answer:
      "The timing depends on the building's age, materials, exposure, and condition. Property owners should inspect masonry periodically and after severe weather. NYC buildings over six stories have specific facade inspection requirements under FISP.",
  },
  {
    question: "Can damaged bricks be repaired instead of replaced?",
    answer:
      "Sometimes. Minor surface deterioration may be repairable, while severely cracked, loose, or spalled bricks may need replacement. A professional can determine the appropriate approach based on the brick's condition and the surrounding masonry.",
  },
  {
    question: "Is masonry waterproofing necessary?",
    answer:
      "Water management is an important part of masonry maintenance. Deteriorated mortar, cracks, failed joints, and other openings can allow moisture into walls. Repairing these conditions and addressing the source of water intrusion can help protect masonry.",
  },
  {
    question: "Can old or historic masonry be restored?",
    answer:
      "Yes. Historic masonry can often be repaired and restored while preserving its original appearance and character. Material compatibility is especially important when working on older brick, stone, and mortar.",
  },
  {
    question: "Does masonry repair improve property value?",
    answer:
      "Well-maintained masonry can improve curb appeal, protect the building envelope, and reduce the risk of progressive deterioration. For older NYC properties, appropriate restoration can also help preserve architectural character.",
  },
];

export default function MasonryContractorBrooklynNyExpertServices() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <article
        className="px-4 py-10 md:px-12 lg:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-[#003269] flex flex-col items-center scroll-smooth font-bevietnam"
        aria-labelledby="main-blog-heading"
        role="document"
      >
        <div className="w-full xl:max-w-7xl">
          {/* Header Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 flex flex-col lg:flex-row items-center gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
            role="article"
          >
            <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-xl">
              <Image
                src="/blog/masonry-contractor-brooklyn-ny-expert-services.webp"
                alt="Masonry contractor working on brick and stone repair in Brooklyn NY"
                width={650}
                height={450}
                priority
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e63a27]" /> Serving Brooklyn, Manhattan & Queens
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003269]/10 text-[#003269] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#e63a27]" />
                Expert Masonry Guide 2026
              </div>

              <h1
                id="main-blog-heading"
                className="text-2xl md:text-4xl lg:text-4xl font-extrabold font-inter text-[#003269] leading-tight mb-5"
              >
                <Link href="https://www.sasroofingwaterproofing.com/" className="hover:text-[#e63a27] transition-colors">Masonry Contractor Brooklyn NY</Link>: 10 Expert Services Every Property Owner Should Know
              </h1>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                A professional <strong><Link href="https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny" className="text-[#003269] hover:text-[#e63a27] underline transition-colors">masonry contractor in Brooklyn NY</Link></strong> provides specialized construction, repair, restoration, and ongoing maintenance for brick, natural stone, concrete, mortar, chimneys, facades, and brownstones. For property owners across <strong>Brooklyn, Manhattan, and Queens</strong>, expert masonry work is essential to defend buildings against severe water intrusion, structural damage, and costly emergency repairs.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                From historic brickwork Brooklyn homeowners rely on to custom stonework Manhattan co-ops require, choosing the right masonry solution depends on material composition, building age, current condition, and environmental exposure.
              </p>

              {/* Quick Stats / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-[#e63a27] font-bold text-xl md:text-2xl">25+ Yrs</span>
                  <span className="text-xs text-gray-600">NYC Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#003269] font-bold text-xl md:text-2xl">100%</span>
                  <span className="text-xs text-gray-600">Licensed & Insured</span>
                </div>
                <div className="flex flex-col col-span-2 sm:col-span-1">
                  <span className="text-[#003269] font-bold text-xl md:text-2xl">5-Boro</span>
                  <span className="text-xs text-gray-600">Local Support</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Quick Answer Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10 bg-gradient-to-r from-[#003269] to-[#004a99] text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm uppercase tracking-wide">
                  <ShieldCheck className="w-5 h-5" /> Quick Overview for NYC Property Owners
                </div>
                <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                  <strong>What Does a Masonry Contractor Do?</strong> Professional masonry contractors inspect, repair, rebuild, and protect load-bearing walls, facades, chimneys, stoops, and concrete surfaces. In NYC, where buildings undergo brutal freeze-thaw cycles and intense rain, timely masonry repointing and brick repair prevent moisture from decaying structural substrates.
                </p>
              </div>
              <Link
                href="tel:3472216549"
                className="inline-flex items-center gap-2 bg-[#e63a27] hover:bg-[#c92e1c] text-white font-bold px-6 py-3.5 rounded-xl transition duration-300 shadow-md whitespace-nowrap text-sm md:text-base"
              >
                <PhoneCall className="w-5 h-5" /> Call (347) 221-6549
              </Link>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <FileText className="w-6 h-6 text-[#e63a27]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#003269]">
                Table of Contents
              </h2>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 text-sm md:text-base text-gray-700">
              {[
                { id: "what-does-a-masonry-contractor-do", label: "What Does a Masonry Contractor Do?" },
                { id: "brick-repair-and-restoration", label: "1. Brick Repair and Restoration" },
                { id: "tuckpointing-and-repointing", label: "2. Tuckpointing and Repointing" },
                { id: "stone-masonry-and-repair", label: "3. Stone Masonry and Stone Repair" },
                { id: "concrete-masonry", label: "4. Concrete Masonry & Cement Work" },
                { id: "chimney-masonry", label: "5. Chimney Masonry Repair" },
                { id: "facade-masonry", label: "6. Facade Masonry & FISP Compliance" },
                { id: "brownstone-restoration", label: "7. Brownstone Masonry Restoration" },
                { id: "structural-masonry-repair", label: "8. Structural Masonry Repair" },
                { id: "residential-and-commercial-masonry", label: "9. Residential & Commercial Masonry" },
                { id: "preventive-masonry-maintenance", label: "10. Preventive Masonry Maintenance" },
                { id: "masonry-repair-cost", label: "How Much Does Masonry Repair Cost?" },
                { id: "why-hire-a-professional", label: "Why Hire a Professional Masonry Contractor?" },
                { id: "why-choose-sas-roofing", label: "Why Choose SAS Roofing & Waterproofing?" },
                { id: "frequently-asked-questions", label: "Frequently Asked Questions (FAQs)" },
                { id: "recommended-authority-references", label: "NYC DOB & FISP Regulatory Guidelines" },
              ].map((item, index) => (
                <li key={item.id} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-[#003269] text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <Link
                    href={`#${item.id}`}
                    className="text-[#003269] hover:text-[#e63a27] hover:underline font-medium transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* Section: What Does a Masonry Contractor Do? */}
          <motion.section
            id="what-does-a-masonry-contractor-do"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-50 text-[#003269]">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
                What Does a Masonry Contractor Do?
              </h2>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A licensed <strong><Link href="https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny" className="text-[#003269] hover:text-[#e63a27] underline transition-colors">local masonry contractor NYC</Link></strong> performs comprehensive inspection, construction, restoration, and waterproofing of rigid building envelopes. Masons specialize in laying and repairing brick, natural stone (such as brownstone, granite, limestone, and bluestone), concrete blocks, mortar joints, and poured cement.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Typical responsibilities include evaluating structural distress, replacing damaged or spalled bricks, grinding and repointing deteriorated mortar joints, applying moisture barriers, rebuilding compromised chimneys, restoring historic stone facades, and reinforcing load-bearing walls.
            </p>

            <div className="bg-slate-50 border-l-4 border-[#003269] p-5 rounded-r-xl">
              <h3 className="font-bold text-[#003269] text-base mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Why Masonry Protection is Crucial in New York City
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                NYC weather exposes buildings to rigorous freeze-thaw cycles during winter. Water trapped inside porous bricks or open mortar joints freezes, expands by roughly 9%, and causes severe internal pressure. This results in face spalling, interior wall leaks, bowing parapets, and compromised structural safety if left unchecked.
              </p>
            </div>
          </motion.section>

          {/* Section Title */}
          <div className="text-center my-12">
            <span className="text-[#e63a27] font-bold text-sm uppercase tracking-widest">
              Core Service Breakdown
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003269] mt-2">
              10 Expert Masonry Services Property Owners Should Know
            </h2>
            <div className="w-24 h-1 bg-[#e63a27] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* 10 Services Detailed Cards */}
          <div className="grid gap-10">
            {/* Service 1: Brick Repair and Restoration */}
            <motion.section
              id="brick-repair-and-restoration"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e63a27] font-bold text-xl flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Brick Repair and Restoration
                  </h3>
                  <span className="text-xs text-gray-500">
                    Brick Repair Manhattan | Brick Restoration Queens | Brickwork Brooklyn
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Over decades of exposure to wind-driven rain and moisture, brickwork in Brooklyn, Queens, and Manhattan can crack, spall (surface flaking), loosen, or bulge. Professional <strong>brick repair and restoration</strong> targets both cosmetic flaws and deep structural vulnerabilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#003269] text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Common Repair Methods
                  </h4>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1.5 list-disc ml-4">
                    <li><strong>Individual Brick Replacement:</strong> Carefully extracting broken bricks without damaging adjacent units.</li>
                    <li><strong>Matching Color & Compressive Strength:</strong> Sourcing replacement bricks that mirror original size, absorption, and shade.</li>
                    <li><strong>Parapet Wall Rebuilding:</strong> Dismantling bowing rooftop parapets and rebuilding with proper steel ties and flashing.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#003269] text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Material Compatibility
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Older NYC buildings used softer clay bricks. Using overly dense modern replacement bricks or excessively hard Portland cement mortar can trap moisture inside older bricks, causing accelerated spalling. Expert material matching is essential.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Service 2: Tuckpointing and Repointing */}
            <motion.section
              id="tuckpointing-and-repointing"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003269] font-bold text-xl flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Tuckpointing and Repointing
                  </h3>
                  <span className="text-xs text-gray-500">
                    Tuckpointing Manhattan | Repointing Queens | Mortar Repair Brooklyn
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Mortar joints act as the flexible cushion between rigid bricks or stones. Over time, mortar weathers away, shrinks, cracks, or washes out. <strong>Repointing</strong> removes dead mortar and injects fresh mortar into the joints, sealing the building envelope against rain penetration.
              </p>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-4">
                <h4 className="font-bold text-[#003269] text-base mb-3">
                  Step-by-Step Repointing Process:
                </h4>
                <ol className="grid gap-3 sm:grid-cols-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#e63a27]">Step 1:</span>
                    <span>Raking out old mortar to a depth of 1/2 inch to 3/4 inch using diamond tuckpoint blades.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#e63a27]">Step 2:</span>
                    <span>Thoroughly cleaning joint cavities with compressed air and water to ensure strong adhesion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#e63a27]">Step 3:</span>
                    <span>Formulating custom Type N or Type O breathable lime-based mortar to match original specs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#e63a27]">Step 4:</span>
                    <span>Tamping fresh mortar in layers and tooling profiles (concave, V-joint, or flush) for optimal water shedding.</span>
                  </li>
                </ol>
              </div>
            </motion.section>

            {/* Service 3: Stone Masonry and Stone Repair */}
            <motion.section
              id="stone-masonry-and-repair"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 font-bold text-xl flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Stone Masonry and Stone Repair
                  </h3>
                  <span className="text-xs text-gray-500">
                    Stone Mason Brooklyn | Stonework Manhattan | Stone Repair Queens
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                From limestone facades in Upper East Side Manhattan to bluestone stoops in Park Slope Brooklyn, natural stone requires delicate craftsmanship. Common issues include delamination, stone cracking, joint failure, and atmospheric staining.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700 mb-4">
                <li className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dutchman Stone Repairs (replacing damaged stone sections with matching stone inserts)</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gentle Chemical & Micro-abrasive Stone Cleaning</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Anchor Pinning for Displaced Heavy Stone Slabs</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Water-Repellent Silane Sealer Application</span>
                </li>
              </ul>
            </motion.section>

            {/* Service 4: Concrete Masonry */}
            <motion.section
              id="concrete-masonry"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 font-bold text-xl flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Concrete Masonry and Cement Work
                  </h3>
                  <span className="text-xs text-gray-500">
                    Concrete Masonry Brooklyn | Cement Repair NYC | Sidewalk & Stoop Restoration
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Concrete masonry encompasses steps, entry stoops, walkways, retaining walls, slab foundations, and decorative concrete lintels. Unaddressed surface cracks allow water to reach internal steel rebar, causing it to rust, expand, and shatter surrounding concrete (spalling).
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs md:text-sm text-gray-700">
                <strong>Property Owner Tip:</strong> Small concrete surface cracks should be chip-cleaned and sealed with polymer-modified repair mortars early. Ignoring slab cracks leads to deep water penetration under foundations and trip-and-fall DOT violations.
              </div>
            </motion.section>

            {/* Service 5: Chimney Masonry */}
            <motion.section
              id="chimney-masonry"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 font-bold text-xl flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Chimney Masonry Repair
                  </h3>
                  <span className="text-xs text-gray-500">
                    Chimney Masonry Brooklyn | Chimney Rebuilding | Crown Repair & Waterproofing
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Rooftop chimneys are vulnerable to extreme wind, rain, and thermal shocks from heating flues. Damaged chimney crowns, cracked bricks, open mortar joints, or missing caps create severe water leak pathways directly into your attic and living spaces.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Chimney Brick & Mortar Repointing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Concrete Crown Pouring & Waterproofing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Partial or Total Chimney Rebuilding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Flashing Repair & Stainless Cap Installation
                </li>
              </ul>
            </motion.section>

            {/* Service 6: Facade Masonry Repair */}
            <motion.section
              id="facade-masonry"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xl flex items-center justify-center shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Facade Masonry Repair & FISP Compliance
                  </h3>
                  <span className="text-xs text-gray-500">
                    Facade Masonry Manhattan | Local Law 11 / FISP Inspection & Repairs
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Commercial buildings, residential co-ops, condos, and multi-family structures require vigilant exterior wall maintenance. Loose cornices, cracked lintels, or failing mortar pose major safety risks to pedestrians below.
              </p>

              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-[#003269] text-base mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  NYC FISP (Facade Inspection & Safety Program) Mandate
                </h4>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Under NYC DOB regulations, all buildings exceeding <strong>6 stories</strong> must undergo an exterior facade inspection by a Qualified Exterior Wall Inspector (QEWI) every <strong>5 years</strong>. Masonry contractors execute necessary facade repairs to achieve a "Safe" filing status and clear violation notices.
                </p>
              </div>
            </motion.section>

            {/* Service 7: Brownstone Restoration */}
            <motion.section
              id="brownstone-restoration"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 font-bold text-xl flex items-center justify-center shrink-0">
                  7
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Brownstone Masonry Restoration
                  </h3>
                  <span className="text-xs text-gray-500">
                    Brownstone Masonry Queens | Historic Brownstone Repair Brooklyn
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Brooklyn and Queens brownstones are iconic, but brownstone (a soft sandstone) is vulnerable to severe scaling, face flaking, and water erosion. Restoring brownstone requires artistic precision and specialized lime-cement formulations.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <strong className="block text-[#003269] mb-1">1. Chipping & Removal</strong>
                  Removal of all loose, scaled, and rotted stone layer back to solid substrate.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <strong className="block text-[#003269] mb-1">2. Slurry & Base Coat</strong>
                  Applying bonding slurry and breathable scratch coat with stainless steel wire mesh.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <strong className="block text-[#003269] mb-1">3. Custom Stucco Finish</strong>
                  Applying pig-colored brownstone mortar and hand-tooling historic details & profiles.
                </div>
              </div>
            </motion.section>

            {/* Service 8: Structural Masonry Repair */}
            <motion.section
              id="structural-masonry-repair"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 font-bold text-xl flex items-center justify-center shrink-0">
                  8
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Structural Masonry Repair
                  </h3>
                  <span className="text-xs text-gray-500">
                    Structural Masonry Queens | Wall Stabilization & Lintel Replacement
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Diagonal stair-step cracks, wall bulging, or foundation settlement require more than superficial mortar patching. Structural masonry repairs address the underlying root causes of building movement and failure.
              </p>

              <ul className="text-xs md:text-sm text-gray-700 space-y-2 list-disc ml-5">
                <li><strong>Steel Lintel Replacement:</strong> Rusted window/door steel lintels expand and push brickwork upward; replacing lintels resolves brick cracking.</li>
                <li><strong>Helical Wall Tie Installation:</strong> Mechanical helical ties pin loose exterior brick wythes back to wooden framing or interior brick blocks.</li>
                <li><strong>Foundation Crack Injection:</strong> Epoxy and polyurethane pressure injection to seal structural foundation cracks against ground water pressure.</li>
              </ul>
            </motion.section>

            {/* Service 9: Residential and Commercial Masonry */}
            <motion.section
              id="residential-and-commercial-masonry"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 font-bold text-xl flex items-center justify-center shrink-0">
                  9
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Residential and Commercial Masonry Services
                  </h3>
                  <span className="text-xs text-gray-500">
                    Residential Masonry Queens | Commercial Masonry Manhattan
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[#003269] text-base mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-600" /> Residential Projects
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Tailored solutions for single-family homes, townhouses, and brownstones. Services include front stoop rebuilding, patio paving, garden retaining walls, fireplace hearths, decorative stone trim, and basement wall waterproofing.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[#003269] text-base mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-600" /> Commercial & Industrial
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Large-scale envelope restoration for retail storefronts, multi-family apartment complexes, office towers, and warehouses. Includes rigging, scaffolding erection, sidewalk canopy protection, DOB permitting, and FISP repairs.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Service 10: Preventive Masonry Maintenance */}
            <motion.section
              id="preventive-masonry-maintenance"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e63a27]/10 text-[#e63a27] font-bold text-xl flex items-center justify-center shrink-0">
                  10
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
                    Preventive Masonry Maintenance
                  </h3>
                  <span className="text-xs text-gray-500">
                    Early Mortar Repair Brooklyn | Brick Repointing Manhattan
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Proactive maintenance prevents minor mortar degradation from escalating into major structural failures. Property owners should perform seasonal walkthrough inspections and watch for these warning signs:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm text-gray-700 font-medium">
                {[
                  "Cracked or missing bricks",
                  "Recessed or crumbling mortar",
                  "Efflorescence (white salt residue)",
                  "Damp interior drywall stains",
                  "Spalling concrete steps",
                  "Rusted lintels & bowing walls",
                  "Cracked chimney crowns",
                  "Failing expansion joints",
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-red-50/50 rounded-lg border border-red-100 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#e63a27] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Section: How Much Does Masonry Repair Cost? */}
          <motion.section
            id="masonry-repair-cost"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="my-14 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                <DollarSign className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
                How Much Does Masonry Repair Cost in NYC?
              </h2>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              There is no universal flat rate for masonry work in NYC because every building features distinct accessibility requirements, material types, and damage levels. Key cost variables include:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm mb-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <strong className="block text-[#003269] text-base mb-1">Accessibility & Height</strong>
                Work requiring pipe scaffolding, suspended swing stages, or sidewalk shed permits involves additional setup costs compared to ground-level repairs.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <strong className="block text-[#003269] text-base mb-1">Material Selection</strong>
                Historic lime mortars, custom tinted brownstone stucco mixes, and hand-carved natural stone carry higher material costs than standard concrete.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <strong className="block text-[#003269] text-base mb-1">Labor & Prep Work</strong>
                Proper grinding, joint cleaning, dust containment, and architectural tool matching require skilled masons.
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-xs md:text-sm text-gray-800">
              <strong>Getting an Accurate Estimate:</strong> A professional onsite inspection and written line-item estimate are the only ways to confirm exact scope, timeline, DOB permitting requirements, and project costs.
            </div>
          </motion.section>

          {/* Section: Why Hire a Professional Masonry Contractor? */}
          <motion.section
            id="why-hire-a-professional"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-50 text-[#003269]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003269]">
                Why Hire a Professional Masonry Contractor?
              </h2>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              Masonry work is far more complex than filling gaps with premixed caulk or cement. DIY attempts or hiring uncertified handymen can lead to catastrophic masonry damage.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
              <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                <h4 className="font-bold text-[#e63a27] mb-1">The Dangers of DIY / Unqualified Work</h4>
                <ul className="space-y-1 list-disc ml-4">
                  <li>Using rigid cement on soft historic brick causes bricks to crack under pressure.</li>
                  <li>Inadequate joint grinding leaves shallow mortar that pops out after one freeze.</li>
                  <li>Trapping moisture inside walls accelerates interior wood rot and mold.</li>
                </ul>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-800 mb-1">The Professional Advantage</h4>
                <ul className="space-y-1 list-disc ml-4">
                  <li>Correct mortar strength (Type N, O, or K) tailored to wall hardness.</li>
                  <li>Comprehensive water drainage, weep hole, and flashing installation.</li>
                  <li>Full NYC DOB licensing, scaffolding safety certification, and liability coverage.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section: Why Choose SAS Roofing & Waterproofing? */}
          <motion.section
            id="why-choose-sas-roofing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 bg-gradient-to-br from-slate-900 via-[#003269] to-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63a27] text-white text-xs font-bold uppercase mb-4">
                <Sparkles className="w-4 h-4" /> Trusted NYC Masons Since 2000
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Why Choose SAS Roofing & Waterproofing?
              </h2>

              <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
                <strong>SAS Roofing & Waterproofing</strong> provides premier masonry, roofing, and waterproofing solutions throughout <strong>Brooklyn, Manhattan, Queens, and The Bronx</strong>. Serving the NYC tri-state area for over <strong>25 years</strong>, our team brings unmatched expertise in historic brick restoration, stone masonry, concrete repair, brownstone rebuilding, and facade waterproofing.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {[
                  { title: "25+ Years Experience", desc: "Serving NYC properties since 2000" },
                  { title: "Fully Licensed & Insured", desc: "HIC & DOB certified contractors" },
                  { title: "Comprehensive Warranty", desc: "Long-term protection guarantees" },
                  { title: "Free Onsite Estimates", desc: "Transparent, line-item pricing" },
                ].map((box, i) => (
                  <div key={i} className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                    <h4 className="font-bold text-amber-300 text-base mb-1">{box.title}</h4>
                    <p className="text-xs text-slate-200">{box.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <Link
                  href="tel:3472216549"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#e63a27] hover:bg-[#c92e1c] text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg text-base"
                >
                  <PhoneCall className="w-5 h-5" /> Call Now: (347) 221-6549
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition border border-white/20 text-base text-center"
                >
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Section: Recommended Authority References */}
          <motion.section
            id="recommended-authority-references"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-[#003269]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#003269]">
                Recommended Authority References
              </h2>
            </div>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              For official NYC building code requirements, facade safety regulations, and FISP compliance filing procedures, property owners should consult official NYC municipal resources:
            </p>

            <ul className="space-y-2 text-xs md:text-sm">
              <li className="flex items-center gap-2 text-[#003269] font-medium">
                <ExternalLink className="w-4 h-4 text-[#e63a27]" />
                <a
                  href="https://www.nyc.gov/site/buildings/safety/facade-inspection-safety-program-fisp.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#e63a27]"
                >
                  NYC Department of Buildings — Facade Inspection & Safety Program (FISP / Local Law 11)
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#003269] font-medium">
                <ExternalLink className="w-4 h-4 text-[#e63a27]" />
                <a
                  href="https://www.nyc.gov/site/buildings/codes/nyc-code.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#e63a27]"
                >
                  NYC DOB Building Construction Codes & Exterior Wall Regulations
                </a>
              </li>
            </ul>
          </motion.section>

          {/* Section: Conclusion */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#003269] mb-4">
              Protect Your NYC Property with Professional Masonry Services
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
              Masonry defects should never be dismissed as purely cosmetic. Damaged brick, crumbling mortar joints, cracked stone, deteriorating chimneys, and facade issues allow water intrusion to damage your building envelope over time. For property owners across <strong>Brooklyn, Manhattan, and Queens</strong>, partner with <strong>SAS Roofing & Waterproofing</strong> for reliable, code-compliant, and durable masonry repairs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="tel:3472216549"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e63a27] hover:bg-[#c92e1c] text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md"
              >
                <PhoneCall className="w-5 h-5" /> Schedule Masonry Inspection
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#003269] hover:bg-[#002247] text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md"
              >
                Get Free Online Estimate
              </Link>
            </div>
          </motion.section>
        </div>
      </article>

      <div id="frequently-asked-questions">
        <FAQSection faqs={masonryFaqs} />
      </div>
    </>
  );
}