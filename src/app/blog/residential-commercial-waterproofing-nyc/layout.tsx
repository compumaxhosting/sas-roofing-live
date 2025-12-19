import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Full-Spectrum Waterproofing Services in NYC | Residential & Commercial Solutions",
  description:
    "Protect your property with expert waterproofing services in NYC. We offer residential and commercial waterproofing, basement, foundation, roof, and exterior solutions across Brooklyn, Manhattan, and Queens.",
  keywords:
    "waterproofing services NYC, residential waterproofing Brooklyn, commercial waterproofing NYC, foundation waterproofing Queens, basement waterproofing NYC, roof waterproofing Manhattan, exterior waterproofing Brooklyn, affordable waterproofing services NYC, waterproofing company near me NYC",
  openGraph: {
    title:
      "Full-Spectrum Waterproofing Services in NYC | Residential & Commercial Solutions",
    description:
      "Protect your property with expert waterproofing services in NYC. We offer residential and commercial waterproofing, basement, foundation, roof, and exterior solutions across Brooklyn, Manhattan, and Queens.",
    url: "https://www.sasroofingwaterproofing.com/blog/residential-commercial-waterproofing-nyc",
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
    "Protect your property with expert waterproofing services in NYC. We offer residential and commercial waterproofing, basement, foundation, roof, and exterior solutions across Brooklyn, Manhattan, and Queens.",
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
