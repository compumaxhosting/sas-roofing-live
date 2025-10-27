import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Best Roofing Contractor in Brooklyn | SAS Roofing & Waterproofing",
  description:
    "Looking for the best roofing contractor in Brooklyn? SAS Roofing & Waterproofing offers expert roofing, waterproofing & masonry services across Brooklyn, Manhattan, Queens & The Bronx. 30+ years of trusted experience.",
  keywords:
    "Best roofing contractor in Brooklyn Brooklyn roofing company Roofing services Brooklyn NY Waterproofing contractors Brooklyn Flat roof repair NYC Commercial roofing Brooklyn",
  openGraph: {
    title: "Best Roofing Contractor in Brooklyn | SAS Roofing & Waterproofing",
    description:
      "Looking for the best roofing contractor in Brooklyn? SAS Roofing & Waterproofing offers expert roofing, waterproofing & masonry services across Brooklyn, Manhattan, Queens & The Bronx. 30+ years of trusted experience.",
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
