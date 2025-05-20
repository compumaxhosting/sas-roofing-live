import { ReactNode } from "react";

// SEO Metadata
export const metadata = {
  title: "Waterproofing Contractors in Brooklyn, Queens & Manhattan",
  description:
    "Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions.",
  keywords:
    "Waterproofing Services Brooklyn, Basement Waterproofing Brooklyn, Exterior Waterproofing Manhattan, Waterproofing Contractors in Queens, Waterproofing Solutions Brooklyn, Foundation Waterproofing Manhattan, Waterproofing Experts Queens, Waterproof Basement Brooklyn, Roof Waterproofing Brooklyn, Commercial Waterproofing Manhattan",
  openGraph: {
    title: "Waterproofing Contractors in Brooklyn, Queens & Manhattan",
    description:
      "Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions.",
    url: "https://www.sasroofingwaterproofing.com/waterproofing-contractors-NY.html",
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

// Schema Markup for SEO
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  image:
    "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  description:
    "Trusted waterproofing experts serving Brooklyn, Manhattan, and Queens. Specializing in basement, roof, exterior, and foundation waterproofing services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "552 Rugby Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11230",
    addressCountry: "US",
  },
  telephone: "+1-347-221-6549",
  areaServed: ["Brooklyn", "Manhattan", "Queens"],
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  );
}
