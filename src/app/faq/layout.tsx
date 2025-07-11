import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Roofing, Waterproofing & Masonry FAQ | SAS Roofing Brooklyn NY",
  description:
    "Got questions about roofing, waterproofing, or masonry services in Brooklyn? Explore our FAQ section for expert answers from SAS Roofing & Waterproofing. Serving zip codes 11201, 11205, 11206, 11215, and 11216.",
  keywords:
    "roofing Brooklyn 11201, waterproofing contractor Brooklyn, masonry services Brooklyn, roof leak repair 11205, flat roof repair Brooklyn NY, foundation waterproofing 11206, brick pointing Brooklyn 11215, Brooklyn masonry experts 11216, commercial roofing Brooklyn NY, SAS Roofing & Waterproofing FAQ",
  openGraph: {
    title: "Roofing, Waterproofing & Masonry FAQ | SAS Roofing Brooklyn NY",
    description:
      "Got questions about roofing, waterproofing, or masonry services in Brooklyn? Explore our FAQ section for expert answers from SAS Roofing & Waterproofing. Serving zip codes 11201, 11205, 11206, 11215, and 11216.",
    url: "https://www.sasroofingwaterproofing.com/contact-us.html",
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
    "Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate.",
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
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function ContactLayout({ children }: { children: ReactNode }) {
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
