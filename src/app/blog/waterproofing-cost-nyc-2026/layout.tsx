import type { Metadata } from "next";
import { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/waterproofing-cost-nyc-2026";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/waterproofing-cost-nyc-2026.webp";
const title =
  "Waterproofing Cost NYC: 2026 Guide for Brooklyn, Manhattan & Queens";
const description =
  "Discover waterproofing cost in NYC for 2026, including basement and foundation waterproofing prices in Brooklyn, Manhattan, and Queens.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "waterproofing cost NYC",
    "waterproofing cost in NYC",
    "waterproofing services NYC",
    "waterproofing contractors NYC",
    "waterproofing Brooklyn NY",
    "waterproofing Manhattan NY",
    "waterproofing Queens NY",
    "basement waterproofing NYC",
    "foundation waterproofing NYC",
    "basement waterproofing cost NYC",
    "foundation waterproofing cost NYC",
    "exterior waterproofing NYC",
    "interior waterproofing NYC",
    "commercial waterproofing NYC",
    "residential waterproofing NYC",
    "SAS Roofing & Waterproofing",
  ],
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  creator: "SAS Roofing & Waterproofing",
  publisher: "SAS Roofing & Waterproofing",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    siteName: "SAS Roofing & Waterproofing",
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Waterproofing cost guide for NYC homes and buildings in Brooklyn, Manhattan, and Queens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "theme-color": "#ffffff",
  },
};

const schemaGraphData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      url: url,
      headline:
        "Waterproofing Cost in NYC: 2026 Guide for Brooklyn, Manhattan & Queens",
      description:
        "Learn waterproofing cost in NYC for 2026, including basement, foundation, interior, and exterior waterproofing costs in Brooklyn, Manhattan, and Queens.",
      image: imageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      author: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
        },
      },
      datePublished: "2026-10-05",
      dateModified: "2026-10-05",
      inLanguage: "en-US",
      articleSection: "Waterproofing",
      keywords: [
        "waterproofing cost NYC",
        "waterproofing cost in NYC",
        "waterproofing services NYC",
        "waterproofing contractors NYC",
        "waterproofing Brooklyn NY",
        "waterproofing Manhattan NY",
        "waterproofing Queens NY",
        "basement waterproofing NYC",
        "foundation waterproofing NYC",
        "basement waterproofing cost NYC",
        "foundation waterproofing cost NYC",
        "exterior waterproofing NYC",
        "interior waterproofing NYC",
        "commercial waterproofing NYC",
        "residential waterproofing NYC",
      ],
      about: [
        {
          "@type": "Service",
          name: "Waterproofing Services",
        },
        {
          "@type": "Place",
          name: "New York City",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Brooklyn",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Brooklyn",
            addressRegion: "NY",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Manhattan",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Manhattan",
            addressRegion: "NY",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Queens",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Queens",
            addressRegion: "NY",
            addressCountry: "US",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does basement waterproofing cost in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many NYC residential basement waterproofing projects fall in the several-thousand-dollar range. A 2026 local estimate places typical projects around $3,485–$8,259, with an average near $5,842. Larger exterior excavation, foundation repairs, difficult access, or drainage upgrades can push costs higher.",
          },
        },
        {
          "@type": "Question",
          name: "How much does foundation waterproofing cost in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There isn't one standard foundation waterproofing price. Cost depends on foundation size, accessibility, wall condition, excavation requirements, waterproofing materials, drainage, and repairs. Exterior work is typically more labor-intensive than interior solutions. The best way to determine foundation waterproofing cost in NYC is through an on-site evaluation and written scope.",
          },
        },
        {
          "@type": "Question",
          name: "Does Brooklyn need basement waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Brooklyn property may need waterproofing when it experiences recurring seepage, damp walls, foundation cracks, standing water, or basement flooding. Older masonry buildings and below-grade spaces can be particularly vulnerable. The appropriate solution depends on the source of water, so recurring leaks should be professionally evaluated rather than treated only with surface sealants.",
          },
        },
        {
          "@type": "Question",
          name: "How long does waterproofing last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The lifespan of waterproofing depends on the system, materials, installation quality, building conditions, drainage, and maintenance. A properly designed system can provide long-term protection, but no waterproofing system eliminates every future risk. Periodic inspection is especially important after major storms, foundation movement, drainage problems, or other changes around the property.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best waterproofing solution for NYC buildings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no universal best solution. Interior drainage may make sense where exterior excavation is impractical, while exterior waterproofing can be appropriate when the foundation can be accessed and water needs to be stopped before entering. A qualified contractor should identify the source of moisture before recommending a system.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
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
          item: "https://www.sasroofingwaterproofing.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Waterproofing Cost in NYC: 2026 Guide for Brooklyn, Manhattan & Queens",
          item: url,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": url,
      url: url,
      name: "Waterproofing Cost in NYC: 2026 Guide for Brooklyn, Manhattan & Queens",
      description:
        "A 2026 guide explaining waterproofing costs, basement waterproofing, foundation waterproofing, and common waterproofing solutions in NYC.",
      isPartOf: {
        "@id": "https://www.sasroofingwaterproofing.com/#website",
      },
      mainEntity: {
        "@id": `${url}#article`,
      },
      publisher: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sasroofingwaterproofing.com/#organization",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      description:
        "Roofing, waterproofing, and masonry contractor serving properties throughout New York City, including Brooklyn, Manhattan, and Queens.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Queens",
        },
      ],
      knowsAbout: [
        "Waterproofing",
        "Basement waterproofing",
        "Foundation waterproofing",
        "Exterior waterproofing",
        "Interior waterproofing",
        "Roofing",
        "Masonry",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sasroofingwaterproofing.com/#website",
      url: "https://www.sasroofingwaterproofing.com/",
      name: "SAS Roofing & Waterproofing",
      publisher: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function WaterproofingCostNyc2026Layout({
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
