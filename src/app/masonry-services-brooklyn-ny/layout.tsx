import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com",
  description:
    "Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today.",
  keywords:
    "Masonry Services Brooklyn, Brickwork Contractors Brooklyn, Stone Masonry Brooklyn, Masonry Repair Queens, Masonry Construction Manhattan, Best Masonry Contractors Brooklyn, Brick Masonry Manhattan, Concrete Masonry Brooklyn, Custom Masonry in Queens, Residential Masonry Services Manhattan",
  openGraph: {
    title:
      "Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com",
    description:
      "Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today.",
    url: "https://www.sasroofingwaterproofing.com/masonry-services-brooklyn-ny.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        width: 1200,
        height: 630,
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
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
    "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  description:
    "SAS Roofing & Waterproofing offers expert masonry services in Brooklyn, Queens, and Manhattan including brickwork, stone masonry, and concrete work.",
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
