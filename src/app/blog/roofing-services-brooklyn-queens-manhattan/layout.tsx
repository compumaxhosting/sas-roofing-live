import { ReactNode } from "react";
import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Roofing Services in Brooklyn, Queens & Manhattan | 2026",
  description:
    "Explore roofing services in Brooklyn, Queens and Manhattan, including roof repair, replacement, inspections, flat roofs and emergency roofing.",
  keywords:
    "Roofing Contractor Brooklyn, Roof Repair Brooklyn, Roof Replacement Brooklyn, Emergency Roofing Brooklyn, Commercial Roofing Brooklyn, Residential Roofing Brooklyn, Roof Inspection Brooklyn, Flat Roof Repair Brooklyn, Roofing Contractor Queens, Roof Repair Queens, Roof Replacement Queens, Emergency Roofing Queens, Commercial Roofing Queens, Residential Roofing Queens, Roof Inspection Queens, Flat Roof Repair Queens, Roofing Contractor Manhattan, Roof Repair Manhattan, Roof Replacement Manhattan, Emergency Roofing Manhattan, Commercial Roofing Manhattan, Residential Roofing Manhattan, Roof Inspection Manhattan, Flat Roof Repair Manhattan, Storm Damage Roofing Manhattan",
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  alternates: {
    canonical:
      "https://www.sasroofingwaterproofing.com/blog/roofing-services-brooklyn-queens-manhattan",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Roofing Services in Brooklyn, Queens & Manhattan | 2026",
    description:
      "Complete 2026 guide to roof repair, replacement, inspections, flat roof services, storm damage and emergency roofing in NYC.",
    url: "https://www.sasroofingwaterproofing.com/blog/roofing-services-brooklyn-queens-manhattan",
    siteName: "SAS Roofing & Waterproofing",
    images: [
      {
        url: "/blog/roofing-services-brooklyn-queens-manhattan.webp",
        width: 1200,
        height: 630,
        alt: "Roofing services in Brooklyn, Queens and Manhattan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Services in Brooklyn, Queens & Manhattan | 2026",
    description:
      "Complete guide to roof repair, replacement, inspections, flat roofs and emergency roofing services across NYC.",
    images: [
      "/blog/roofing-services-brooklyn-queens-manhattan.webp",
    ],
  },
};

// Schema Markup (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  image:
    "https://www.sasroofingwaterproofing.com/images/roofing-services-brooklyn-queens-manhattan.jpg",
  description:
    "SAS Roofing & Waterproofing provides complete roofing services including roof repair, replacement, flat roof repair, and emergency roofing across Brooklyn, Manhattan, and Queens.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "552 Rugby Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11230",
    addressCountry: "US",
  },
  telephone: "+1-347-221-6549",
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: ["Brooklyn", "Queens", "Manhattan"],
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}