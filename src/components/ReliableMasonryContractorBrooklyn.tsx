"use client";

import Image from "next/image";
import Link from "next/link";

const sectionClass = "space-y-4";
const headingClass = "text-2xl md:text-3xl font-bold text-[#003269] scroll-mt-24";
const bodyClass = "text-gray-700 text-base leading-7 font-bevietnam";

export default function ReliableMasonryContractorBrooklyn() {
    return (
        <main className="bg-white px-6 py-12 text-[#003269] md:px-16" aria-labelledby="masonry-article-title">
            <div className="mx-auto w-full max-w-5xl">
                <article>
                    <div className="mb-12 grid items-center gap-8 lg:grid-cols-2">
                        <Image
                            src="/blog/masonry-services-brooklyn.webp"
                            alt="Masonry contractor repairing brickwork on a Brooklyn property"
                            width={1200}
                            height={630}
                            className="h-auto w-full rounded-xl object-cover shadow-lg"
                            priority
                        />
                        <div>
                            <h1 id="masonry-article-title" className="mb-6 text-3xl font-bold md:text-4xl">
                                How to Choose a Reliable Masonry Contractor in Brooklyn, New York
                            </h1>
                            <p className={bodyClass}>
                                Finding a <Link href="/masonry-services-brooklyn-ny" className="font-semibold underline hover:text-[#e63a27]">masonry contractor in Brooklyn</Link> starts with more than comparing prices. The right contractor should have relevant masonry experience, proper licensing and insurance, knowledge of NYC requirements, and a record of quality brick, stone, concrete, and mortar work.
                            </p>
                            <p className={`${bodyClass} mt-4`}>
                                For older Brooklyn homes and brownstones, experience with existing masonry is especially important. This guide explains what to look for, what questions to ask, and when professional repair is needed.
                            </p>
                        </div>
                    </div>

                    <nav className="mb-12 border-y border-gray-200 py-6" aria-label="Article contents">
                        <h2 className="mb-3 text-xl font-bold">Table of Contents</h2>
                        <ul className="grid gap-2 text-base md:grid-cols-2">
                            {[
                                ["What Does a Masonry Contractor Do?", "what-masonry-does"],
                                ["How to Choose a Reliable Contractor", "choose-contractor"],
                                ["Common Brooklyn Masonry Problems", "common-problems"],
                                ["How Much Does Masonry Repair Cost?", "masonry-cost"],
                                ["When Should You Hire a Professional?", "when-to-hire"],
                                ["Frequently Asked Questions", "faq"],
                                ["Why Choose SAS Roofing & Waterproofing?", "why-sas"],
                            ].map(([label, id]) => (
                                <li key={id}><a href={`#${id}`} className="underline hover:text-[#e63a27]">{label}</a></li>
                            ))}
                        </ul>
                    </nav>

                    <div className="grid gap-10">
                        <section className={sectionClass}>
                            <h2 id="what-masonry-does" className={headingClass}>What Does a Masonry Contractor in Brooklyn Do?</h2>
                            <p className={bodyClass}><strong>Quick Answer:</strong> A masonry contractor repairs, restores, maintains, or builds structures made from brick, stone, concrete, block, and related materials. Brooklyn contractors may handle brick pointing and repointing, tuckpointing, facade repairs, brownstone restoration, concrete work, sidewalks, foundations, steps, and exterior masonry.</p>
                            <p className={bodyClass}>A qualified contractor should first determine <strong>why the masonry is failing</strong>, rather than simply covering visible damage. Water intrusion, aging mortar, freeze-thaw cycles, building movement, poor previous repairs, and weather exposure can all contribute to deterioration. For historic properties, compatible materials and careful repointing methods help preserve the original masonry.</p>
                        </section>

                        <section className={sectionClass}>
                            <h2 id="choose-contractor" className={headingClass}>How to Choose a Reliable Masonry Contractor in Brooklyn</h2>
                            <p className={bodyClass}>Before hiring anyone, use this checklist:</p>
                            <ol className={`${bodyClass} list-decimal space-y-3 pl-6`}>
                                <li><strong>Verify licensing and insurance.</strong> Confirm the contractor meets applicable NYC requirements for your project.</li>
                                <li><strong>Look for relevant experience.</strong> Ask about brick facades, brownstones, chimneys, concrete, stone, and similar buildings.</li>
                                <li><strong>Request a written estimate.</strong> It should identify the work, materials, preparation, labor, and additional costs.</li>
                                <li><strong>Ask about permits and NYC requirements.</strong> Registrations and permits can vary by project.</li>
                                <li><strong>Review previous work.</strong> Photos and references help you judge workmanship.</li>
                                <li><strong>Compare value, not just price.</strong> An unusually low estimate may omit necessary preparation or repairs.</li>
                            </ol>
                            <p className={bodyClass}>For buildings higher than six stories, NYC&apos;s Façade Inspection &amp; Safety Program requires exterior-wall inspections every five years by a Qualified Exterior Wall Inspector.</p>
                        </section>

                        <section className={sectionClass}>
                            <h2 className={headingClass}>What Masonry Services Are Available in Brooklyn?</h2>
                            <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
                                <ul className={`${bodyClass} list-disc space-y-2 pl-6`}>
                                    <li>Brick repair and replacement</li><li>Brick pointing, repointing, and tuckpointing</li><li>Brick facade and brownstone restoration</li><li>Stone masonry and concrete work</li><li>Sidewalk, step, and foundation repairs</li><li>Chimney masonry repair</li><li>Exterior wall and water-infiltration repairs</li>
                                </ul>
                                <Image src="/blog/masonry-services-brooklyn2.webp" alt="Completed masonry work on a Brooklyn brick facade" width={800} height={800} className="h-full max-h-72 w-full rounded-lg object-cover" />
                            </div>
                            <p className={bodyClass}><strong>Repointing</strong> means removing deteriorated mortar and replacing it with new mortar. <strong>Tuckpointing</strong> is a related technique focused on clean, visually defined mortar joints. The correct method depends on the masonry&apos;s condition, construction, and desired finish.</p>
                        </section>

                        <section id="common-problems" className={`${sectionClass} scroll-mt-24`}>
                            <h2 className={headingClass}>Common Masonry Problems in Brooklyn</h2>
                            <p className={bodyClass}>Brooklyn properties face years of exposure to rain, snow, temperature changes, moisture, and urban conditions. Warning signs include:</p>
                            <ul className={`${bodyClass} list-disc space-y-2 pl-6`}><li>Cracked or missing mortar</li><li>Loose, spalling, or crumbling bricks</li><li>Bulging or displaced brickwork</li><li>Water stains, damp walls, or recurring leaks</li><li>Cracks around windows and doors</li><li>Deteriorated brownstone, concrete, or chimney joints</li><li>Loose facade elements</li></ul>
                            <p className={bodyClass}>Do not assume cracked bricks need complete replacement. A professional should determine whether the problem is localized, related to mortar deterioration, or evidence of movement or water intrusion.</p>
                        </section>

                        <section id="masonry-cost" className={`${sectionClass} scroll-mt-24`}>
                            <h2 className={headingClass}>How Much Does Masonry Repair Cost in Brooklyn?</h2>
                            <p className={bodyClass}><strong>Quick Answer:</strong> There is no single price for masonry repair in Brooklyn. Cost depends on building size and height, accessibility, scaffolding or lift requirements, deterioration, materials, mortar matching, permits, structural repairs, and whether waterproofing is necessary.</p>
                            <p className={bodyClass}>A small mortar repair is very different from restoring an entire brick facade. Request detailed, written estimates from qualified contractors after an on-site assessment, and compare the scope of work behind each price.</p>
                        </section>

                        <section id="when-to-hire" className={`${sectionClass} scroll-mt-24`}>
                            <h2 className={headingClass}>When Should You Hire a Professional Masonry Contractor?</h2>
                            <p className={bodyClass}>Arrange an inspection when you notice cracks, deteriorated mortar, spalling, recurring moisture, visible facade movement, or loose bricks. Professional repair can protect structural integrity, reduce water penetration, preserve historic details, and prevent minor deterioration from becoming a larger project.</p>
                        </section>

                        <section id="faq" className={`${sectionClass} scroll-mt-24`}>
                            <h2 className={headingClass}>Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                {[
                                    ["Who can repair brickwork in Brooklyn?", "Look for a licensed and insured contractor with specific experience in brick masonry, repointing, facade repair, and restoration. Ask for comparable projects and a written scope of work."],
                                    ["How do I know if my Brooklyn home needs masonry repairs?", "Look for cracked mortar, missing bricks, spalling surfaces, bulging walls, water stains, deteriorated chimney joints, or recurring leaks. Interior moisture can also indicate an exterior masonry problem."],
                                    ["What should I ask a masonry contractor before hiring them?", "Ask about licensing, insurance, experience, materials and mortar selection, permits, schedule, warranties, cleanup, payment terms, and whether scaffolding or other access equipment is required."],
                                    ["How long does masonry repair take in Brooklyn?", "The timeline depends on property size and height, weather, access, repair method, materials, and permits. Small repointing jobs may be quick, while facade restoration takes longer."],
                                    ["What causes brick and mortar to crack in Brooklyn?", "Common causes include moisture, freezing and thawing, aging mortar, building movement, thermal expansion, improper previous repairs, and drainage problems."],
                                    ["Who specializes in brownstone masonry repair in Brooklyn?", "Choose a contractor experienced with historic and decorative masonry who understands existing profiles, textures, compatible materials, and careful restoration techniques."],
                                ].map(([question, answer]) => <details key={question} className="overflow-hidden rounded-md border border-gray-300"><summary className="cursor-pointer p-4 font-bold hover:bg-gray-50">{question}</summary><p className={`${bodyClass} border-t border-gray-100 px-4 pb-4 pt-3`}>{answer}</p></details>)}
                            </div>
                        </section>

                        <section id="why-sas" className={`${sectionClass} scroll-mt-24`}>
                            <h2 className={headingClass}>Why Choose SAS Roofing &amp; Waterproofing?</h2>
                            <p className={bodyClass}><Link href="/" className="font-semibold underline hover:text-[#e63a27]">SAS Roofing &amp; Waterproofing</Link> has served Brooklyn, Manhattan, Queens, and surrounding NYC communities since 2000. The company provides brick, stone, concrete, brownstone, pointing, sidewalk, foundation, roofing, and waterproofing services. Its website states that the company is licensed, bonded, and insured and identifies DCA certification #2050416-DCA.</p>
                            <p className={bodyClass}>For homeowners searching for the best masonry contractor in Brooklyn, the practical goal is a contractor who combines experience, transparent estimates, appropriate materials, safe work practices, and dependable communication. SAS offers on-site consultations and estimates for masonry projects throughout Brooklyn, Manhattan, and Queens.</p>
                        </section>

                        <section className="space-y-4 border-t border-gray-200 pt-8">
                            <h2 className="text-2xl font-bold text-[#e63a27]">Ready to Discuss Your Masonry Project?</h2>
                            <p className={bodyClass}>Contact SAS Roofing &amp; Waterproofing to arrange a consultation and request a project-specific estimate.</p>
                            <p className={bodyClass}><strong>Phone:</strong> <Link href="tel:3472216549" className="font-semibold underline">(347) 221-6549</Link><br /><strong>Address:</strong> 552 Rugby Rd, Brooklyn, NY 11230</p>
                        </section>

                        <section className="space-y-4 bg-gray-50 p-6 md:p-8">
                            <h2 className={headingClass}>Conclusion</h2>
                            <p className={bodyClass}>Choosing a <Link href="/masonry-services-brooklyn-ny" className="font-semibold hover:underline hover:text-[#e63a27]">reliable masonry contractor in Brooklyn</Link> means looking beyond a low bid. Verify credentials, examine comparable work, request a detailed estimate, and make sure the contractor understands the specific brick, stone, concrete, mortar, facade, or brownstone issues affecting your property. Professional evaluation can help you choose the right repair before deterioration becomes more extensive.</p>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
