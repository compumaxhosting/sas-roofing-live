import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens",
  description:
    "Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate.",
  keywords:
    "contact roofing contractor Brooklyn, waterproofing company Manhattan, Queens roofing experts, SAS Roofing contact, roof repair Brooklyn NY, waterproofing services Queens, roofing company Manhattan NY, emergency roof repair NYC, best waterproofing contractor Brooklyn, SAS Roofing phone number",
  openGraph: {
    title:
      "(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens",
    description:
      "Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate.",
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
