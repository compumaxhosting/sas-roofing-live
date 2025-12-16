// app/site-map/page.tsx

import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
  const links = [
    { name: "Home", url: "https://www.sasroofingwaterproofing.com/" },
    {
      name: "About Us",
      url: "https://www.sasroofingwaterproofing.com/aboutus",
    },
    {
      name: "Roofing",
      url: "https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn",
    },
    {
      name: "Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY",
    },
    {
      name: "Masonry",
      url: "https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny",
    },
    {
      name: "Projects",
      url: "https://www.sasroofingwaterproofing.com/projects",
    },
    {
      name: "Testimonials",
      url: "https://www.sasroofingwaterproofing.com/reviews",
    },
    {
      name: "Contact Us",
      url: "https://www.sasroofingwaterproofing.com/contact-us",
    },
    { name: "FAQs", url: "https://www.sasroofingwaterproofing.com/faq" },
    { name: "Blog", url: "https://www.sasroofingwaterproofing.com/blog" },
    // Blog Posts
    {
      name: "Blog - Why Certified Roofing Contractors Are a Smart Choice",
      url: "https://www.sasroofingwaterproofing.com/blog/the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    },
    {
      name: "Blog - Top Roofing Contractors in NYC",
      url: "https://www.sasroofingwaterproofing.com/blog/top-roofing-contractors-brooklyn-manhattan-queens-bronx-sas-roofing-nyc",
    },
    {
      name: "Blog - How Our NYC Waterproofing Contractor Is Revolutionizing Protection",
      url: "https://www.sasroofingwaterproofing.com/blog/How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    },
    {
      name: "Blog - Why SAS Roofing Is Brooklyn’s Most Trusted Expert",
      url: "https://www.sasroofingwaterproofing.com/blog/Why-SAS-Roofing-and-Waterproofing-Is-Brooklyns-Most-Trusted-Roofing-Expert",
    },
    {
      name: "Blog - How Waterproofing Saves NYC Properties From Damage",
      url: "https://www.sasroofingwaterproofing.com/blog/how-waterproofing-can-save-your-nyc-property-from-costly-damage",
    },
    {
      name: "Blog - How to Choose the Best Roofing Contractor in Brooklyn",
      url: "https://www.sasroofingwaterproofing.com/blog/how-to-choose-the-best-roofing-contractor-in-brooklyn",
    },
    {
      name: "Blog - Best Waterproofing Contractors in NYC",
      url: "https://www.sasroofingwaterproofing.com/blog/best-waterproofing-contractors-in-new-york-protect-your-property-from-water-damage",
    },
    {
      name: "Blog - Best Roofing Company in Brooklyn",
      url: "https://www.sasroofingwaterproofing.com/blog/best-roofing-company-in-brooklyn",
    },
    {
      name: "Blog - NYC Waterproofing Challenges & Solutions",
      url: "https://www.sasroofingwaterproofing.com/blog/nyc-waterproofing-challenges-and-solutions",
    },
    {
      name: "Blog - Roofing Contractors in Brooklyn, Queens & Manhattan",
      url: "https://www.sasroofingwaterproofing.com/blog/roofing-contractors-brooklyn-queens-manhattan",
    },
    {
      name: "Blog - 10 Signs You Need Roofing Services Immediately",
      url: "https://www.sasroofingwaterproofing.com/blog/signs-you-need-roofing-services-right-now",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
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
