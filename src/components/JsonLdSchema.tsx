// app/components/JsonLdSchema.tsx
"use client";

import { useEffect } from "react";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  logo: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
  image: "https://www.sasroofingwaterproofing.com/og-image.jpg",
  description:
    "Expert roofing, waterproofing, and masonry services in Brooklyn, Queens, and Manhattan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  telephone: "+1-347-221-6549",
  areaServed: ["Brooklyn", "Manhattan", "Queens"],
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function JsonLdSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLdSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
