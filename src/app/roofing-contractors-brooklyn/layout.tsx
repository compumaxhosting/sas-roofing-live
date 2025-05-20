import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Expert Roofing Contractors in Brooklyn | Roof Repair & Installation",
  description:
    "Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan. Affordable and high-quality solutions for all your roofing needs.",
  keywords:
    "Best Roof Repair Brooklyn, Brooklyn Roof Installation, Commercial Roofing Brooklyn, Residential Roofing Brooklyn, Roof Replacement Queens, Roof Repair Manhattan, Affordable Roofing Manhattan, Flat Roofs Brooklyn, Roofing Contractors in Queens",
  openGraph: {
    title:
      "Expert Roofing Contractors in Brooklyn | Roof Repair & Installation",
    description:
      "Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan. Affordable and high-quality solutions for all your roofing needs.",
    url: "https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn",
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

// JSON-LD Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  image:
    "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  description:
    "Reliable roofing contractors in Brooklyn, Manhattan, and Queens providing expert roof repair, installation, and maintenance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "552 Rugby Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11230",
    addressCountry: "US",
  },
  telephone: "+1-347-221-6549",
  areaServed: ["Brooklyn", "Manhattan", "Queens"],
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
