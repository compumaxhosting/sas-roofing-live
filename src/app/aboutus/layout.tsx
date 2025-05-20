import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Emergency Roofing Contractor Available 24/7 in Brooklyn, NY",
  description:
    "SAS Roofing & Waterproofing – Your 24/7 roofing and waterproofing contractor serving Brooklyn, Manhattan, and Queens. We offer emergency roof repair, leak repair, and flat roof services anytime.",
  keywords:
    "24/7 roofing contractor Brooklyn, emergency roof repair Manhattan, waterproofing services Queens NY, licensed roofer Brooklyn NY, flat roof waterproofing Manhattan, roof leak repair Queens, commercial roofing contractor NYC, residential roof repair Brooklyn, basement waterproofing Queens, 24/7 emergency roofing NYC",
  openGraph: {
    title: "Emergency Roofing Contractor Available 24/7 in Brooklyn, NY",
    description:
      "SAS Roofing & Waterproofing – Your 24/7 roofing and waterproofing contractor serving Brooklyn, Manhattan, and Queens. We offer emergency roof repair, leak repair, and flat roof services anytime.",
    url: "https://www.sasroofingwaterproofing.com/aboutus.html",
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
  "@type": "Organization",
  name: "SAS Roofing and Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/Logo-SAS.png",
  description:
    "SAS Roofing and Waterproofing offers high-quality roofing, waterproofing, and restoration services. Serving residential and commercial clients in City Name and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "City Name",
    addressRegion: "State/Province",
    postalCode: "12345",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-123-456-7890",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
  serviceArea: {
    "@type": "Place",
    name: "City Name, State/Province",
  },
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
