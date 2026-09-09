import { ReactNode } from "react";
import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Masonry Contractor Brooklyn NY: 10 Expert Services | SAS Roofing",
  description:
    "Need a masonry contractor in Brooklyn NY? Explore expert brickwork, stonework, concrete, repairs and restoration from SAS Roofing & Waterproofing.",
  keywords:
    "masonry contractor Brooklyn NY, masonry services Brooklyn NY, brickwork Brooklyn, brick repair Brooklyn, stone masonry Brooklyn, concrete masonry Brooklyn, masonry repair Brooklyn, masonry restoration Brooklyn, chimney masonry Brooklyn, exterior brickwork Brooklyn",
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  alternates: {
    canonical:
      "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#ffffff",
    referrer: "strict-origin-when-cross-origin",
  },
  openGraph: {
    type: "website",
    title: "Masonry Contractor Brooklyn NY: 10 Expert Services | SAS Roofing",
    description:
      "Explore expert masonry services in Brooklyn NY, including brickwork, stonework, concrete, repairs and restoration from SAS Roofing & Waterproofing.",
    url: "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services",
    siteName: "SAS Roofing & Waterproofing",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services.webp",
        width: 1200,
        height: 630,
        alt: "Masonry Contractor Brooklyn NY - SAS Roofing & Waterproofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masonry Contractor Brooklyn NY: 10 Expert Services | SAS Roofing",
    description:
      "Expert masonry services in Brooklyn NY, including brickwork, stonework, concrete, repairs and restoration from SAS Roofing & Waterproofing.",
    images: [
      "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services.webp",
    ],
  },
};

// Schema Markup (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sasroofingwaterproofing.com/#organization",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      logo: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
      image: "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services.webp",
      description:
        "SAS Roofing & Waterproofing provides professional masonry, roofing, and waterproofing services across Brooklyn, Manhattan, Queens, and The Bronx.",
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
      areaServed: ["Brooklyn", "Queens", "Manhattan", "The Bronx"],
      sameAs: [
        "https://www.instagram.com/SASRoofingWaterproofing",
        "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
        "https://www.facebook.com/SASRoofingWaterproofing",
        "https://twitter.com/SASRoofing",
        "https://www.linkedin.com/company/sasroofingwaterproofing",
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services/#article",
      headline: "Masonry Contractor Brooklyn NY: 10 Expert Services | SAS Roofing",
      description:
        "Need a masonry contractor in Brooklyn NY? Explore expert brickwork, stonework, concrete, repairs and restoration from SAS Roofing & Waterproofing.",
      image: "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services.webp",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      author: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
      },
      publisher: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
        logo: {
          "@type": "ImageObject",
          url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.sasroofingwaterproofing.com/blog/masonry-contractor-brooklyn-ny-expert-services",
      },
    },
  ],
};

export default function MasonryLayout({ children }: { children: ReactNode }) {
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
