import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "SAS Roofing & Waterproofing – Complete Site Map",
  description:
    "Explore the full sitemap of SAS Roofing & Waterproofing — browse roofing, waterproofing, masonry services, projects, blogs, FAQs & contact pages.",
  keywords:
    "SAS Roofing, waterproofing services, masonry services, roofing contractors NYC, Brooklyn roofers, waterproofing NYC, roofing waterproofing company, site map page, roofing blog, contact SAS Roofing",
  openGraph: {
    title: "SAS Roofing & Waterproofing – Complete Site Map",
    description:
      "Explore the full sitemap of SAS Roofing & Waterproofing — browse roofing, waterproofing, masonry services, projects, blogs, FAQs & contact pages.",
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
    streetAddress: "552 Rugby Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11230",
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
