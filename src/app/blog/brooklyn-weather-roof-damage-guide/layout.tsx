import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "How Brooklyn Weather Impacts Your Roof | Roofing Services in Brooklyn NYC",
  description:
    "Learn how Brooklyn’s changing weather affects your roof year-round. Discover warning signs, seasonal tips, and when to hire professional roofing services in Brooklyn, Queens, and Manhattan.",
  keywords:
    "Roofing Services in Brooklyn Queens and Manhattan, Brooklyn roofing contractors, weather damage roof Brooklyn, flat roof repair Brooklyn, roof maintenance Brooklyn NY, roof leak repair Brooklyn, storm damage roofing NYC, residential roofing Brooklyn, commercial roofing Brooklyn, waterproofing services Brooklyn",
  openGraph: {
    title:
      "How Brooklyn Weather Impacts Your Roof | Roofing Services in Brooklyn NYC",
    description:
      "Learn how Brooklyn’s changing weather affects your roof year-round. Discover warning signs, seasonal tips, and when to hire professional roofing services in Brooklyn, Queens, and Manhattan.",
    url: "https://www.sasroofingwaterproofing.com/blog/brooklyn-weather-roof-damage-guide",
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
    "SAS Roofing & Waterproofing showcases a range of completed roofing and waterproofing projects across Brooklyn, Manhattan, and Queens.",
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
