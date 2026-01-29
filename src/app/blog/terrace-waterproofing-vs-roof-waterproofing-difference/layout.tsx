import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Terrace Waterproofing vs Roof Waterproofing: Key Differences Explained",
  description:
    "Learn the difference between terrace waterproofing and roof waterproofing, their benefits, materials used, and which solution is best for buildings in New York’s harsh climate.",
  keywords:
    "terrace waterproofing, roof waterproofing, waterproofing contractors NY, terrace leak 	repair, roof leak protection, building waterproofing solutions, flat roof waterproofing, terrace water sealing, NYC waterproofing services, commercial roof waterproofing",
  openGraph: {
    title:
      "Terrace Waterproofing vs Roof Waterproofing: Key Differences Explained",
    description:
      "Learn the difference between terrace waterproofing and roof waterproofing, their benefits, materials used, and which solution is best for buildings in New York’s harsh climate.",
    url: "https://www.sasroofingwaterproofing.com/blog/best-roofing-company-in-brooklyn",
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
