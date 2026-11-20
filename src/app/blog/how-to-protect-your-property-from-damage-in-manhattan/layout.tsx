import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/how-to-protect-your-property-from-damage-in-manhattan";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/images/manhattan-property-protection.jpg";
const title =
  "How to Protect Your Property from Damage in Manhattan | SAS Roofing";
const description =
  "Learn how to protect your property from damage in Manhattan with expert roofing, waterproofing, masonry repairs, and preventive maintenance tips.";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "how to protect your property from damage in Manhattan, property protection Manhattan, roofing contractors Manhattan, waterproofing Manhattan, roof repair NYC, basement waterproofing Manhattan, masonry repair Manhattan, property maintenance NYC, roof leak prevention NYC",
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
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "article",
    title,
    description:
      "Discover practical ways to protect your Manhattan property from roof leaks, water damage, foundation problems, and masonry deterioration.",
    url,
    siteName: "SAS Roofing & Waterproofing",
    images: [
      {
        url: imageUrl,
        alt: "Professional roofing, waterproofing, and property protection services in Manhattan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Protect your Manhattan property with expert roofing, waterproofing, masonry repairs, and preventive maintenance advice.",
    images: [imageUrl],
  },
};

const schemaGraphData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline:
        "How to Protect Your Property from Damage in Manhattan: A Complete Guide",
      description:
        "Learn how to protect your Manhattan property from roof leaks, water damage, foundation problems, and masonry deterioration with expert maintenance and repair tips.",
      image: imageUrl,
      author: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      publisher: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      articleSection: [
        "Roofing",
        "Waterproofing",
        "Masonry Repair",
        "Property Maintenance",
        "Manhattan Property Protection",
      ],
      keywords: [
        "How to protect your property from damage in Manhattan",
        "Roof repair Manhattan",
        "Waterproofing contractors Manhattan",
        "Basement waterproofing Manhattan",
        "Masonry repair Manhattan",
        "Property maintenance NYC",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.sasroofingwaterproofing.com/#organization",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      email: ["sascon09@yahoo.com", "amzadh78@gmail.com"],
      telephone: ["+1-347-221-6549", "+1-347-394-9384"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "552 Rugby Road",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11230",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Queens",
        },
        {
          "@type": "City",
          name: "The Bronx",
        },
        {
          "@type": "City",
          name: "New York City",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.sasroofingwaterproofing.com/#localbusiness",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      telephone: "+1-347-221-6549",
      email: "sascon09@yahoo.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "552 Rugby Road",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11230",
        addressCountry: "US",
      },
      areaServed: [
        "Manhattan, New York",
        "Brooklyn, New York",
        "Queens, New York",
        "The Bronx, New York",
      ],
      knowsAbout: [
        "Roofing Services",
        "Flat Roof Repair",
        "Roof Installation",
        "Basement Waterproofing",
        "Foundation Waterproofing",
        "Masonry Repair",
        "Brick Pointing",
        "Exterior Wall Waterproofing",
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
          name: "How to Protect Your Property from Damage in Manhattan",
          item: url,
        },
      ],
    },
  ],
};

export default function HowToProtectYourPropertyFromDamageInManhattanLayout({
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