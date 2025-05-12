import { ReactNode } from "react";

// Metadata for SEO (Move to layout.tsx if needed)
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

// Schema Markup (Best moved to a separate component)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAS Roofing and Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-123-456-7890",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  serviceArea: {
    "@type": "Place",
    name: "Brooklyn, Manhattan, Queens",
  },
  description:
    "SAS Roofing and Waterproofing offers high-quality roofing, waterproofing, and restoration services. Serving residential and commercial clients across Brooklyn, Manhattan, and Queens.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* No extra content like Header or Footer here */}
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
