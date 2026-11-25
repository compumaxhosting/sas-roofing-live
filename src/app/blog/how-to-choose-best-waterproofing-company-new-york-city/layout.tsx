import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/how-to-choose-best-waterproofing-company-new-york-city";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/basement-waterproofing-work.png";
const title =
  "How to Choose the Best Waterproofing Company in NYC | SAS Roofing & Waterproofing";
const description =
  "Learn how to choose the best waterproofing company in NYC. Compare contractors, services, materials, estimates, licensing, and professional experience.";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "best waterproofing company in NYC",
    "waterproofing contractors NYC",
    "NYC waterproofing services",
    "basement waterproofing NYC",
    "foundation waterproofing NYC",
    "waterproofing company Brooklyn",
    "roof waterproofing NYC",
  ],
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  creator: "SAS Roofing & Waterproofing",
  publisher: "SAS Roofing & Waterproofing",
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "article",
    title: "How to Choose the Best Waterproofing Company in NYC",
    description:
      "Discover how to select a reliable NYC waterproofing contractor. Learn about experience, licensing, materials, estimates, and professional services.",
    url,
    siteName: "SAS Roofing & Waterproofing",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 675,
        alt: "Professional waterproofing services for residential and commercial properties in New York City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Waterproofing Company in NYC | SAS Roofing & Waterproofing",
    description:
      "Find out how to choose a reliable waterproofing company in NYC. Compare expertise, materials, estimates, and services.",
    images: [imageUrl],
  },
};

const schemaGraphData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: "How to Choose the Best Waterproofing Company in New York City",
      description,
      url,
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 675,
      },
      author: {
        "@type": "Organization",
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
      },
      datePublished: "2026-11-25",
      dateModified: "2026-11-25",
      inLanguage: "en-US",
      articleSection: [
        "Waterproofing",
        "NYC Property Maintenance",
        "Basement Waterproofing",
        "Foundation Waterproofing",
        "Roof Waterproofing",
      ],
      keywords: [
        "best waterproofing company in NYC",
        "waterproofing contractors NYC",
        "basement waterproofing NYC",
        "foundation waterproofing NYC",
        "waterproofing services Brooklyn",
        "roof waterproofing NYC",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I choose the best waterproofing company in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare contractors based on relevant experience, licensing, insurance, waterproofing methods, customer feedback, and written estimates. Choose a company that investigates the source of moisture and explains why its proposed solution is appropriate for your building.",
          },
        },
        {
          "@type": "Question",
          name: "How much does waterproofing cost in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waterproofing costs depend on the affected area, building size, accessibility, severity of water intrusion, materials, labor, and repair requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What are the signs that my property needs waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common warning signs include damp basement walls, water stains, peeling paint, musty odors, recurring leaks, visible foundation cracks, deteriorating masonry, and standing water.",
          },
        },
        {
          "@type": "Question",
          name: "What types of waterproofing services are available in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common services include basement waterproofing, foundation sealing, exterior wall waterproofing, roof waterproofing, liquid membrane applications, and drainage improvements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does waterproofing last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Longevity depends on the materials, installation quality, building conditions, water exposure, maintenance, and environmental factors.",
          },
        },
        {
          "@type": "Question",
          name: "Is basement waterproofing worth the investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basement waterproofing can be worthwhile when recurring moisture threatens interior finishes, stored belongings, or building materials.",
          },
        },
        {
          "@type": "Question",
          name: "Should I hire a local waterproofing contractor in Brooklyn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hiring a contractor familiar with Brooklyn properties can be beneficial because older foundations, brick buildings, brownstones, and flat roofs may require specialized assessment.",
          },
        },
        {
          "@type": "Question",
          name: "Can waterproofing prevent mold growth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waterproofing can reduce moisture intrusion, which is an important step in controlling conditions that support mold growth. It does not remove existing mold or guarantee mold prevention.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sasroofingwaterproofing.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.sasroofingwaterproofing.com/blog" },
        { "@type": "ListItem", position: 3, name: "How to Choose the Best Waterproofing Company in New York City", item: url },
      ],
    },
  ],
};

export default function HowToChooseBestWaterproofingCompanyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraphData) }}
      />
    </>
  );
}
