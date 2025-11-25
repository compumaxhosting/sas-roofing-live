import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Top Waterproofing Challenges in Brooklyn, Manhattan & Queens (Expert Solutions for NYC Homeowners)",
  description:
    "Discover the most common waterproofing problems faced by Brooklyn, Manhattan, and Queens homeowners. Learn expert solutions for foundation cracks, roof leaks, basement flooding, and moisture damage—optimized for NYC properties.",
  keywords:
    "waterproofing NYC, waterproofing Brooklyn, waterproofing Manhattan, waterproofing Queens, foundation waterproofing NYC, basement waterproofing NY, roof leak repair Manhattan, brick waterproofing Brooklyn, waterproofing contractors NY, home waterproofing solutions NYC",
  openGraph: {
    title:
      "Top Waterproofing Challenges in Brooklyn, Manhattan & Queens (Expert Solutions for NYC Homeowners)",
    description:
      "Discover the most common waterproofing problems faced by Brooklyn, Manhattan, and Queens homeowners. Learn expert solutions for foundation cracks, roof leaks, basement flooding, and moisture damage—optimized for NYC properties.",
    url: "https://www.sasroofingwaterproofing.com/blog/how-waterproofing-can-save-your-nyc-property-from-costly-damage",
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
    "Discover the most common waterproofing problems faced by Brooklyn, Manhattan, and Queens homeowners. Learn expert solutions for foundation cracks, roof leaks, basement flooding, and moisture damage—optimized for NYC properties.",
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

export default function ProjectsLayout({ children }: { children: ReactNode }) {
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
