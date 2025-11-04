import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Best Waterproofing Contractors in New York | SAS Roofing & Waterproofing",
  description:
    "Trusted waterproofing contractors in Brooklyn, Manhattan & Queens. Basement, foundation, and roof waterproofing. Call SAS Roofing for a free estimate!",
  keywords:
    "waterproofing contractors New York, waterproofing company NYC, basement waterproofing Brooklyn, foundation waterproofing Manhattan, roof waterproofing Queens, exterior wall waterproofing NYC, waterproofing services near me, SAS Roofing & Waterproofing, waterproofing solutions New York, commercial waterproofing NYC, residential waterproofing Brooklyn, professional waterproofing contractors NY, best waterproofing contractors New York, affordable waterproofing services NYC, waterproofing experts Brooklyn, building waterproofing Manhattan, home waterproofing Queens, waterproof coating NYC, waterproof repair New York, leak repair contractors NYC",
  openGraph: {
    title:
      "Best Waterproofing Contractors in New York | SAS Roofing & Waterproofing",
    description:
      "Trusted waterproofing contractors in Brooklyn, Manhattan & Queens. Basement, foundation, and roof waterproofing. Call SAS Roofing for a free estimate!",
    url: "https://www.sasroofingwaterproofing.com/blog.html",
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
