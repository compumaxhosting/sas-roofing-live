import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Best Rooﬁng Contractor Brooklyn Queens Manhattan 2026",
  description:
    "Discover what separates great rooﬁng contractors in Brooklyn, Queens & Manhattan in 2026—licensing, warranties, local expertise, and red ﬂags to avoid.",
  keywords:
    "rooﬁng contractor Brooklyn Queens Manhattan, NYC rooﬁng company 2026, licensed rooﬁng contractor New York, ﬂat roofrepair Brooklyn, rooﬁng contractor near me NYC, best roofer Queens, Manhattan roofreplacement, NYC rooﬁng license, rooﬁng contractor reviews NYC, emergency roof repair NYC, local roofer Brooklyn",
  openGraph: {
    title:
      "Best Rooﬁng Contractor Brooklyn Queens Manhattan 2026",
    description:
      "Discover what separates great rooﬁng contractors in Brooklyn, Queens & Manhattan in 2026—licensing, warranties, local expertise, and red ﬂags to avoid.",
    url: "https://www.sasroofingwaterproofing.com/blog/best-roofing-contractor-nyc",
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
