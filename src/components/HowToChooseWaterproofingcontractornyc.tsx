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
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function ChooseBestWaterproofingContractorNYC() {
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
                                src="/blog/waterproofing-contractor-nyc.jpeg"
                                alt="Professional waterproofing contractor inspecting moisture damage in a New York City property."
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
                                How to Choose the Best Waterproofing Contractor in NYC:
                                10 Questions to Ask Before Hiring
                            </h1>

                            <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                                Finding the{" "}
                                <Link
                                    href="/waterproofing-contractors-NY"
                                    className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                                >
                                    best waterproofing contractor in NYC
                                </Link>{" "}
                                is about more than comparing prices. A dependable contractor
                                should identify the source of water intrusion, explain the
                                recommended repair clearly, provide a detailed estimate, carry
                                appropriate insurance and credentials, and offer a written
                                warranty.
                            </p>

                            <p className="text-sm md:text-base text-gray-700 font-bevietnam mt-4">
                                For homeowners and property owners in Brooklyn, Queens, and
                                Manhattan, asking the right questions before hiring can help
                                prevent expensive repeat repairs and unnecessary waterproofing
                                work.
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
                            <li>
                                <a
                                    href="#what-to-look-for"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    What to Look for in a Waterproofing Contractor
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#questions"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    10 Questions to Ask Before Hiring
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#diagnose-leaks"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    How Waterproofing Contractors Diagnose Leaks
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#costs"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    Waterproofing Costs in NYC
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#why-matters"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    Why Professional Waterproofing Matters
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#maintenance"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    Waterproofing Maintenance Tips
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#faq"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    Frequently Asked Questions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#choose-right"
                                    className="hover:underline hover:text-[#e63a27] transition"
                                >
                                    Choosing the Right NYC Contractor
                                </a>
                            </li>
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
                            <h2
                                id="what-to-look-for"
                                className="text-3xl md:text-4xl font-bold scroll-mt-24"
                            >
                                What to Look for in a Waterproofing Contractor
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                <b>Quick Answer:</b> Choose a waterproofing company based on
                                experience, local knowledge, workmanship, transparent pricing,
                                credentials, references, warranty coverage, and its ability to
                                diagnose the actual cause of moisture. Avoid contractors who
                                promise a quick fix without inspecting the property.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Waterproofing protects a property from unwanted water entering
                                through foundations, basement walls, masonry, floors, roofs,
                                joints, cracks, or other vulnerable areas.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                NYC buildings can develop moisture problems for many reasons,
                                including heavy rainfall, groundwater pressure, deteriorated
                                mortar joints, foundation cracks, drainage issues, plumbing
                                leaks, damaged flashing, and aging building materials.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Because the visible leak is not always the actual source of the
                                problem, professional diagnosis is extremely important. The best
                                contractor should recommend a solution based on your building&apos;s
                                specific conditions rather than applying the same repair to
                                every project.
                            </p>
                        </motion.div>

                        <motion.div
                            id="questions"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4 scroll-mt-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">
                                10 Questions to Ask Before Hiring a Waterproofing Contractor
                            </h2>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                1. How Much Waterproofing Experience Do You Have?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Ask how long the contractor has performed waterproofing work and
                                what types of properties they typically handle. Experience with
                                NYC homes and buildings can be especially valuable because
                                access, construction methods, foundations, and drainage
                                conditions vary throughout the city.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                2. Have You Handled a Problem Like Mine?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Basement leaks, foundation cracks, masonry seepage, and
                                roof-related water problems are not necessarily repaired in the
                                same way. Ask for examples of projects similar to yours and how
                                those issues were addressed.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                3. How Will You Find the Source of the Water?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                This is one of the most important questions you can ask. Water
                                often travels through masonry and structural materials before
                                becoming visible. A professional contractor should investigate
                                likely entry points rather than repairing only the visible
                                symptom.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                4. What Repair Method Do You Recommend?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Ask the contractor to explain what will be repaired, how it will
                                be repaired, and why that solution is appropriate. Depending on
                                the situation, solutions may include crack repair, exterior
                                waterproofing, drainage improvements, masonry restoration,
                                sealants, or foundation waterproofing services.
                            </p>

                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                5. Are You Licensed and Insured for This Work?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Ask for current documentation and confirm that the contractor
                                meets applicable NYC and New York requirements for your
                                particular project. Depending on the scope of work, permitting,
                                insurance, and regulatory requirements may vary.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                6. Can You Provide a Detailed Written Estimate?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Never rely solely on a verbal quote. A detailed estimate should
                                explain the proposed work, materials, labor, preparation,
                                exclusions, payment terms, and other project details. This makes
                                it easier to compare waterproofing contractors fairly.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                7. What Does Your Warranty Cover?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Ask how long the warranty lasts and exactly what it covers.
                                Determine whether workmanship, materials, or specific
                                waterproofing systems are included and what happens if moisture
                                returns after the project is completed.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                8. How Long Will the Project Take?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Waterproofing timelines vary considerably. A small crack repair
                                may be completed quickly, while exterior foundation
                                waterproofing, drainage installation, excavation, or masonry
                                restoration projects may require significantly more time.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Ask whether weather, permits, access limitations, material
                                availability, or unexpected site conditions could affect the
                                projected completion date.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                9. Can You Provide References or Recent Project Examples?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Reviews can be helpful, but they should not be your only source
                                of information. Ask whether the contractor can provide examples
                                of comparable waterproofing projects involving similar
                                foundations, basements, masonry systems, or building types.
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-6">
                                10. What Happens If the Water Problem Comes Back?
                            </h3>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Before signing a contract, understand how the company handles
                                callbacks and warranty claims. A professional contractor should
                                explain who manages post-project concerns, how warranty issues
                                are evaluated, and what corrective actions may be available if
                                moisture returns.
                            </p>
                        </motion.div>

                        <motion.div
                            id="diagnose-leaks"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4 scroll-mt-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">
                                How Do Waterproofing Contractors Diagnose Leaks?
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                <b>Quick Answer:</b> Professional waterproofing inspections
                                focus on identifying the source and pathway of water rather than
                                simply treating the visible symptom.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Water intrusion can originate from multiple locations. For
                                example, water appearing on a basement wall may be caused by a
                                foundation crack, drainage issue, hydrostatic pressure,
                                deteriorated masonry, flashing failure, or another building
                                component entirely.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Proper diagnosis helps determine whether the most appropriate
                                solution involves:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 text-base font-bevietnam mt-4 space-y-2">
                                <li>Foundation waterproofing services</li>
                                <li>Exterior waterproofing systems</li>
                                <li>Basement waterproofing</li>
                                <li>Drainage improvements</li>
                                <li>Masonry restoration</li>
                                <li>Crack injection or crack repair</li>
                                <li>Sealants or moisture-control measures</li>
                            </ul>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                Correct diagnosis is often the difference between a permanent
                                repair and a recurring moisture problem.
                            </p>
                        </motion.div>

                        <motion.div
                            id="costs"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4 scroll-mt-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">
                                How Much Does Waterproofing Cost in NYC?
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                There is no fixed price for waterproofing in NYC because every
                                moisture problem is different. The final project cost depends on
                                several important factors.
                            </p>

                            <div className="overflow-x-auto mt-6">
                                <table className="w-full min-w-125 border-collapse border border-gray-300 text-left text-sm md:text-base text-gray-700 font-bevietnam">
                                    <thead className="bg-gray-100 text-[#003269]">
                                        <tr>
                                            <th className="border border-gray-300 p-3">
                                                Cost Factor
                                            </th>
                                            <th className="border border-gray-300 p-3">
                                                Impact on Project
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-3">
                                                Size of affected area
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Larger areas typically require more labor and materials
                                            </td>
                                        </tr>

                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 p-3">
                                                Severity of water intrusion
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Extensive damage may require additional repairs
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-3">
                                                Accessibility
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Difficult access can increase labor requirements
                                            </td>
                                        </tr>

                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 p-3">
                                                Interior vs exterior work
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Exterior projects are often more complex
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-3">
                                                Excavation requirements
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Additional equipment and labor may be necessary
                                            </td>
                                        </tr>

                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 p-3">
                                                Drainage improvements
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                May require supplementary work beyond waterproofing
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-3">
                                                Masonry or foundation repairs
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Structural repairs can affect pricing
                                            </td>
                                        </tr>

                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 p-3">
                                                Permits and project requirements
                                            </td>
                                            <td className="border border-gray-300 p-3">
                                                Regulatory requirements vary by project
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                Rather than choosing the lowest estimate, compare the actual
                                scope of work behind each proposal. A significantly cheaper bid
                                may exclude preparation, drainage corrections, or necessary
                                repairs that could affect long-term performance.
                            </p>
                        </motion.div>

                        <motion.div
                            id="why-matters"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4 scroll-mt-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Why Professional Waterproofing Matters
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Water intrusion should never be ignored. Continued moisture can
                                affect masonry, drywall, wood framing, flooring, stored
                                belongings, insulation, and indoor conditions.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Professional waterproofing focuses on identifying and correcting
                                the underlying moisture problem rather than simply masking the
                                visible effects. This helps reduce the likelihood of recurring
                                damage and unnecessary repeat repairs.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                For foundation repairs, drainage projects, structural concerns,
                                or large-scale waterproofing systems, professional guidance is
                                especially valuable because certain NYC projects may involve
                                permits, inspections, plans, and regulatory requirements.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Property owners seeking{" "}
                                <Link
                                    href="/waterproofing-contractors-NY"
                                    className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                                >
                                    waterproofing contractors in NYC
                                </Link>{" "}
                                should prioritize accurate diagnosis, quality workmanship,
                                durable materials, and long-term moisture protection.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-4"
                        >
                            <h2
                                id="faq"
                                className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 scroll-mt-24"
                            >
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-3">
                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        When should I hire a waterproofing contractor?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        Consider hiring a waterproofing contractor when you notice
                                        recurring basement seepage, damp foundation walls, water
                                        stains, persistent musty odors, visible cracks associated
                                        with moisture, or repeated water intrusion after storms.
                                        Identifying the source early can help prevent larger repair
                                        issues later.
                                    </p>
                                </details>

                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        How do I know if a waterproofing contractor is reliable?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        A reliable contractor should inspect the property, explain
                                        the likely source of the moisture problem, provide a
                                        detailed written estimate, carry appropriate insurance,
                                        answer questions clearly, and explain warranty terms.
                                        References and examples of similar projects can provide
                                        additional confidence.
                                    </p>
                                </details>

                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        Is waterproofing worth the investment?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        Waterproofing can be worthwhile when it addresses a genuine
                                        source of recurring moisture. The goal is to identify the
                                        cause of water intrusion and implement a repair method that
                                        is appropriate for the building rather than simply treating
                                        visible symptoms.
                                    </p>
                                </details>

                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        How long does waterproofing take?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        Project timelines vary depending on the type of repair.
                                        Localized crack repairs may be completed relatively
                                        quickly, while exterior foundation waterproofing,
                                        excavation, drainage work, or extensive masonry repairs can
                                        require additional time. Weather, permits, access, and site
                                        conditions can also affect scheduling.
                                    </p>
                                </details>

                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        What qualifications should a waterproofing contractor have?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        Look for relevant waterproofing experience, applicable
                                        licensing or registration, proper insurance coverage,
                                        knowledgeable crews, and familiarity with local building
                                        requirements. Some structural or foundation-related
                                        projects may require additional professionals or approvals.
                                    </p>
                                </details>

                                <details className="group border border-gray-400 rounded-md bg-white overflow-hidden">
                                    <summary className="cursor-pointer list-item font-bold text-slate-800 p-4 outline-none hover:bg-gray-50">
                                        Who is the best waterproofing contractor near me?
                                    </summary>
                                    <p className="px-4 pb-4 text-gray-700 text-base font-bevietnam border-t border-gray-100 pt-3 mt-1">
                                        The best contractor is the one that fits your specific
                                        project. Focus on local experience, accurate diagnosis,
                                        transparent estimates, warranty protection, quality
                                        workmanship, and responsive communication rather than price
                                        alone.
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
                            <h2
                                id="choosing-right-contractor"
                                className="text-3xl md:text-4xl font-bold mb-5 scroll-mt-24"
                            >
                                Choosing the Right NYC Waterproofing Contractor
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Choosing a waterproofing contractor should involve more than
                                comparing prices. Ask questions about experience, diagnosis,
                                insurance, references, warranties, and repair methods before
                                signing any agreement.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                The right contractor should be able to identify the cause of
                                water intrusion, explain the proposed repair clearly, and
                                recommend a solution based on the specific needs of your
                                property.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="space-y-3"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                Why Choose SAS Roofing & Waterproofing?
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                If you are looking for dependable{" "}
                                <Link
                                    href="/waterproofing-contractors-NY"
                                    className="text-[#003269] font-semibold underline hover:text-[#e63a27] transition"
                                >
                                    waterproofing contractors in NYC
                                </Link>
                                , SAS Roofing & Waterproofing provides services for property
                                owners throughout Brooklyn, Queens, and Manhattan.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                Whether your concerns involve basement moisture, foundation
                                water intrusion, masonry seepage, exterior waterproofing, or
                                broader building-envelope issues, our team focuses on careful
                                evaluation and practical repair solutions.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                Rather than choosing a contractor based solely on price,
                                property owners should prioritize clear communication,
                                professional diagnosis, quality workmanship, and long-term
                                value. Contact SAS Roofing & Waterproofing to discuss your
                                project and request a detailed estimate.
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
                                Learning how to choose a waterproofing contractor in NYC starts
                                with asking the right questions before signing a contract.
                                Verify experience, credentials, insurance, diagnosis methods,
                                warranties, references, and project timelines.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                Most importantly, avoid judging a contractor by price alone.
                                The right waterproofing professional should understand the
                                source of the moisture problem and recommend a practical
                                solution tailored to your property.
                            </p>

                            <p className="text-gray-700 text-base font-bevietnam mt-4">
                                If you are experiencing water intrusion, leaks, damp basement
                                walls, or foundation moisture concerns in Brooklyn, Queens, or
                                Manhattan, contact SAS Roofing & Waterproofing to discuss the
                                best way to protect your property.
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
                                Schedule a Waterproofing Consultation
                            </h2>

                            <p className="text-gray-700 text-base font-bevietnam">
                                Speak with SAS Roofing & Waterproofing about your waterproofing,
                                foundation, basement, masonry, or moisture-related concerns.
                                Request a consultation and receive project-specific guidance.
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