import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "10 Signs You Need Roofing Services Right Now",
  description:
    "Spot early roof damage with these 10 urgent signs. Learn when to call professional roofing services in Brooklyn and Manhattan for fast, reliable repairs.",
  keywords:
    "roofing services, roof repair Brooklyn, Manhattan roofers, roof damage signs, emergency roofing service, roof leak repair, Brooklyn roofing contractors, roof inspection NYC, roof replacement NYC, residential roofing services",
  openGraph: {
    title: "10 Signs You Need Roofing Services Right Now",
    description:
      "Spot early roof damage with these 10 urgent signs. Learn when to call professional roofing services in Brooklyn and Manhattan for fast, reliable repairs.",
    url: "https://www.sasroofingwaterproofing.com/blog/signs-you-need-roofing-services-right-now",
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
