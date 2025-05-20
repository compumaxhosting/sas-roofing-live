import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
  description:
    "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
  keywords:
    "roofing projects Brooklyn, waterproofing contractors Brooklyn, roof repair Manhattan, commercial roofing Manhattan, residential roofing Queens, waterproofing services Queens, flat roof repair Brooklyn, roof waterproofing Manhattan, Queens roofing contractors, Brooklyn Manhattan Queens roofing projects",
  openGraph: {
    title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
    description:
      "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
    url: "https://www.sasroofingwaterproofing.com/projects.html",
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
