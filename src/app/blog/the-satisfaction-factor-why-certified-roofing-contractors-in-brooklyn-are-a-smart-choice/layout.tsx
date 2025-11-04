import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
  description:
    "SAS Certified roofing contractors in Brooklyn, Manhattan, Queens, and The Bronx deliver expert service, lasting results, and peace of mind for every roofing project.",
  keywords:
    "Certified roofing contractors, Brooklyn roofing experts, trusted roofers NYC, professional roofing services, waterproofing solutions NYC, roofing peace of mind, reliable roof repair, licensed roofers Brooklyn, NYC roofing satisfaction, expert roof installation",
  openGraph: {
    title:
      "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
    description:
      "SAS Certified roofing contractors in Brooklyn, Manhattan, Queens, and The Bronx deliver expert service, lasting results, and peace of mind for every roofing project.",
    url: "https://www.sasroofingwaterproofing.com/blog/the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
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
