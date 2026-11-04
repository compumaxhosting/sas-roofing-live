import type { Metadata } from "next";
import { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/qualities-of-a-reliable-waterproofing-contractor";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/reliable-waterproofing-contractor-brooklyn.webp";
const title =
  "Reliable Waterproofing Contractor: 8 Qualities to Look For";
const description =
  "Discover 8 qualities of a reliable waterproofing contractor in Brooklyn, NY. Compare experience, licensing, insurance, warranties, and workmanship.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "reliable waterproofing contractor",
    "waterproofing contractor Brooklyn",
    "professional waterproofing services",
    "roofing and waterproofing contractor",
    "basement waterproofing contractor",
    "licensed waterproofing contractor",
    "experienced waterproofing company",
    "residential waterproofing",
    "commercial waterproofing",
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
    description:
      "Learn how to choose a reliable waterproofing contractor in Brooklyn, NY. Explore 8 essential qualities, from experience and insurance to warranties and workmanship.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Professional waterproofing contractor inspecting and repairing a rooftop in Brooklyn, New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Discover 8 essential qualities to look for when hiring a reliable waterproofing contractor in Brooklyn, NY.",
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
        "What Makes a Waterproofing Contractor Reliable? 8 Qualities to Look For",
      description:
        "Discover 8 qualities of a reliable waterproofing contractor in Brooklyn, NY, including experience, licensing, insurance, warranties, and professional workmanship.",
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
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
        logo: {
          "@type": "ImageObject",
          url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
        },
      },
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      inLanguage: "en-US",
      articleSection: "Waterproofing",
      keywords: [
        "Reliable waterproofing contractor",
        "Waterproofing contractor Brooklyn",
        "Professional waterproofing services",
        "Roofing and waterproofing contractor",
        "Basement waterproofing contractor",
        "Licensed waterproofing contractor",
        "Experienced waterproofing company",
        "Residential waterproofing",
        "Commercial waterproofing",
      ],
      about: [
        { "@type": "Thing", name: "Waterproofing contractor qualities" },
        { "@type": "Thing", name: "Professional waterproofing services" },
        { "@type": "Thing", name: "Roofing and waterproofing" },
        { "@type": "Place", name: "Brooklyn, New York City, New York" },
      ],
      contentLocation: {
        "@type": "City",
        name: "Brooklyn",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "New York",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if a waterproofing contractor is reliable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for relevant experience, verified licensing, insurance, positive customer references, detailed estimates, and written warranties. A dependable contractor should inspect your property before recommending a solution and clearly explain the materials, installation process, and expected results.",
          },
        },
        {
          "@type": "Question",
          name: "Should a waterproofing contractor be licensed and insured in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, applicable licensing and insurance are important. NYC generally requires a Home Improvement Contractor license for qualifying residential improvement work exceeding $200. Contractors may also need additional registrations, insurance, or permits depending on the project.",
          },
        },
        {
          "@type": "Question",
          name: "How long does professional waterproofing last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The lifespan depends on the waterproofing system, material quality, installation, building conditions, and maintenance. Some systems can provide protection for many years, but no universal lifespan applies. Ask the contractor about manufacturer specifications, maintenance requirements, and warranty coverage.",
          },
        },
        {
          "@type": "Question",
          name: "What questions should I ask before hiring a waterproofing contractor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask about previous projects, licensing, insurance, inspection procedures, recommended materials, estimated completion time, pricing, and warranty terms. Also ask how the contractor plans to identify and address the original source of water intrusion rather than simply treating visible damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is professional waterproofing worth the investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Professional waterproofing can help prevent recurring leaks, moisture damage, mold-related problems, and deterioration of building materials. Addressing water intrusion early may also reduce the likelihood of more extensive repairs. The best solution depends on the building's condition and the underlying cause of moisture.",
          },
        },
        {
          "@type": "Question",
          name: "How often should waterproofing systems be inspected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Inspect roofs and other exposed waterproofing components at least annually and after significant storms when safe. Check for damaged flashing, blocked drains, deteriorated sealants, and standing water. Follow the maintenance recommendations for the specific waterproofing system.",
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
          name: "What Makes a Waterproofing Contractor Reliable?",
          item: url,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": url,
      url: url,
      name: "Reliable Waterproofing Contractor: 8 Qualities to Look For",
      description:
        "Discover 8 qualities of a reliable waterproofing contractor in Brooklyn, NY, including experience, licensing, insurance, warranties, and professional workmanship.",
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
      "@type": "RoofingContractor",
      "@id": "https://www.sasroofingwaterproofing.com/#localbusiness",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      telephone: "+1-347-221-6549",
      email: "sascon09@yahoo.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "552 Rugby Rd",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11230",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Brooklyn" },
        { "@type": "City", name: "Manhattan" },
        { "@type": "City", name: "Queens" },
        { "@type": "AdministrativeArea", name: "New York City" },
      ],
      parentOrganization: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.sasroofingwaterproofing.com/#organization",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-347-221-6549",
          email: "sascon09@yahoo.com",
          contactType: "general inquiries",
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-347-394-9384",
          email: "amzadh78@gmail.com",
          contactType: "general inquiries",
        },
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

export default function ReliableWaterproofingContractorLayout({
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

