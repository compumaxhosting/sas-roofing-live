import type { Metadata } from "next";
import { ReactNode } from "react";

const articleUrl =
  "https://www.sasroofingwaterproofing.com/blog/roof-leak-repair-manhattan";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/roof-leak-repair-manhattan.webp";
const title = "Roof Leak Repair in Manhattan | Causes & Prevention";
const description =
  "Need roof leak repair in Manhattan? Learn common causes, warning signs, prevention tips, and professional roofing solutions from SAS Roofing & Waterproofing.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "roof leak repair Manhattan, roof repair Manhattan, Manhattan roof leak repair, flat roof leak repair Manhattan, roof leak detection NYC, roof waterproofing Manhattan, NYC roof repair, roof inspection Manhattan, emergency roof leak repair NYC",
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  robots: { index: true, follow: true },
  themeColor: "#ffffff",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title,
    description,
    url: articleUrl,
    siteName: "SAS Roofing & Waterproofing",
    images: [
      {
        url: imageUrl,
        alt: "Roof leak repair in Manhattan by SAS Roofing & Waterproofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const faqQuestions = [
  [
    "How quickly should a roof leak be repaired?",
    "A roof leak should be investigated as soon as possible because continued water intrusion can increase damage to roofing materials and interior building components.",
  ],
  [
    "What causes a roof to leak after heavy rain?",
    "Common causes include damaged roofing membranes, open seams, failed flashing, clogged drains, roof penetrations, deteriorated masonry, and drainage problems.",
  ],
  [
    "Can a roof leak be repaired without replacing the entire roof?",
    "Yes. If the problem is localized and the surrounding roofing system remains serviceable, a targeted repair may be possible. The appropriate solution depends on the roof's condition and the extent of the damage.",
  ],
  [
    "How do I know if water is coming from the roof?",
    "Recurring ceiling stains, damp areas, dripping after rainfall, water around rooftop penetrations, and visible roof deterioration can indicate a roofing problem. A professional inspection can help confirm the source.",
  ],
  [
    "Are flat roofs more difficult to repair?",
    "Flat roofs require careful evaluation because water can travel beneath roofing materials and drainage plays an important role in roof performance. Repair methods depend on the roofing system and damage.",
  ],
  [
    "How can I prevent roof leaks?",
    "Regular roof inspections, clear drainage systems, maintained flashing, properly sealed penetrations, prompt repairs, and post-storm inspections can help reduce the risk of roof leaks.",
  ],
  [
    "When should a Manhattan roof be replaced instead of repaired?",
    "Replacement may be considered when deterioration is widespread, repairs are repeatedly required, or the roofing system is no longer performing effectively. A professional assessment can help determine the appropriate approach.",
  ],
  [
    "Does waterproofing help prevent roof leaks?",
    "Proper waterproofing can help protect vulnerable building areas from moisture intrusion. The appropriate waterproofing method depends on the building component and source of water.",
  ],
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${articleUrl}#blogposting`,
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  headline: "Roof Leak Repair in Manhattan: Common Causes & Prevention Tips",
  description,
  url: articleUrl,
  image: imageUrl,
  author: {
    "@type": "Organization",
    name: "SAS Roofing & Waterproofing",
    url: "https://www.sasroofingwaterproofing.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "SAS Roofing & Waterproofing",
    url: "https://www.sasroofingwaterproofing.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
    },
  },
  about: [
    { "@type": "Thing", name: "Roof Leak Repair" },
    { "@type": "Thing", name: "Roof Repair" },
    { "@type": "Thing", name: "Roof Waterproofing" },
  ],
  keywords:
    "roof leak repair Manhattan, roof repair Manhattan, Manhattan roof leak repair, flat roof leak repair Manhattan, roof leak detection NYC, roof waterproofing Manhattan, NYC roof repair, roof inspection Manhattan",
  articleSection: "Roofing",
  inLanguage: "en-US",
};
const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${articleUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sasroofingwaterproofing.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.sasroofingwaterproofing.com/blog/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Roof Leak Repair in Manhattan",
      item: articleUrl,
    },
  ],
};
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${articleUrl}#faq`,
  mainEntity: faqQuestions.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

export default function RoofLeakRepairManhattanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
