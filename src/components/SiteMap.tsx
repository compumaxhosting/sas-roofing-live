// app/site-map/page.tsx

import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
  const links = [
    { name: "Home", url: "/" },
    {
      name: "About Us",
      url: "/aboutus",
    },
    {
      name: "Roofing",
      url: "/roofing-contractors-brooklyn",
    },
    {
      name: "Waterproofing",
      url: "/waterproofing-contractors-NY",
    },
    {
      name: "Masonry",
      url: "/masonry-services-brooklyn-ny",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Testimonials",
      url: "/reviews",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
    { name: "FAQs", url: "/faq" },
    { name: "Blog", url: "/blog" },
    // Blog Posts
    {
      name: "Blog - Why Certified Roofing Contractors Are a Smart Choice",
      url: "/blog/the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    },
    {
      name: "Blog - Top Roofing Contractors in NYC",
      url: "/blog/top-roofing-contractors-brooklyn-manhattan-queens-bronx-sas-roofing-nyc",
    },
    {
      name: "Blog - How Our NYC Waterproofing Contractor Is Revolutionizing Protection",
      url: "/blog/How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    },
    {
      name: "Blog - Why SAS Roofing Is Brooklyn’s Most Trusted Expert",
      url: "/blog/Why-SAS-Roofing-and-Waterproofing-Is-Brooklyns-Most-Trusted-Roofing-Expert",
    },
    {
      name: "Blog - How Waterproofing Saves NYC Properties From Damage",
      url: "/blog/how-waterproofing-can-save-your-nyc-property-from-costly-damage",
    },
    {
      name: "Blog - How to Choose the Best Roofing Contractor in Brooklyn",
      url: "/blog/how-to-choose-the-best-roofing-contractor-in-brooklyn",
    },
    {
      name: "Blog - Best Waterproofing Contractors in NYC",
      url: "/blog/best-waterproofing-contractors-in-new-york-protect-your-property-from-water-damage",
    },
    {
      name: "Blog - Best Roofing Company in Brooklyn",
      url: "/blog/best-roofing-company-in-brooklyn",
    },
    {
      name: "Blog - NYC Waterproofing Challenges & Solutions",
      url: "/blog/nyc-waterproofing-challenges-and-solutions",
    },
    {
      name: "Blog - Roofing Contractors in Brooklyn, Queens & Manhattan",
      url: "/blog/roofing-contractors-brooklyn-queens-manhattan",
    },
    {
      name: "Blog - 10 Signs You Need Roofing Services Immediately",
      url: "/blog/signs-you-need-roofing-services-right-now",
    },
    {
      name: "Blog - Full-Spectrum Waterproofing Services in NYC",
      url: "/blog/residential-commercial-waterproofing-nyc",
    },
    {
      name: "Blog - How Brooklyn Weather Impacts Your Roof",
      url: "/blog/brooklyn-weather-roof-damage-guide",
    },
    {
      name: "Blog - How to Choose the Right Waterproofing Contractor",
      url: "/blog/how-to-choose-right-waterproofing-contractor",
    },
    {
      name: "Blog - How Long Does a Roof Last in NYC Weather Conditions",
      url: "/blog/professional-roof-inspections",
    },
    {
      name: "Blog - Terrace Waterproofing vs Roof Waterproofing",
      url: "/blog/terrace-waterproofing-vs-roof-waterproofing-difference",
    },
    {
      name: "Blog - What Makes a Great Roofing Contractor",
      url: "/blog/best-roofing-contractor-nyc",
    },
  ];

  return (
    <div className="max-w-225 mx-auto px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#003269]">Sitemap</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#003269]">Pages</h2>

      <ul className="space-y-4">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="text-[#003269]/90 hover:underline flex items-center text-lg"
            >
              <FaLink className="mr-3 text-[#003269]/90" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
