import { ReactNode } from "react";

export const metadata = {
  title: "How Long Does a Roof Last in NYC Weather Conditions?",
  description:
    "Learn how long roofs last in NYC weather, signs of damage, and when to call local roofing experts in Brooklyn, Queens, and Manhattan.",
  keywords:
    "roof lifespan NYC, NYC weather roof damage, roofing experts Brooklyn, roofing contractors Manhattan, Queens roofing specialists, roof replacement NYC, roof repair signs, residential roofing NYC, commercial roofing NYC, professional roofing services",
  openGraph: {
    title: "How Long Does a Roof Last in NYC Weather Conditions?",
    description:
      "Learn how long roofs last in NYC weather, signs of damage, and when to call local roofing experts in Brooklyn, Queens, and Manhattan.",
    url: "https://www.sasroofingwaterproofing.com/blog/professional-roof-inspections",
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  image:
    "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  description:
    "Learn how long roofs last in NYC weather, signs of damage, and when to call local roofing experts in Brooklyn, Queens, and Manhattan.",
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
