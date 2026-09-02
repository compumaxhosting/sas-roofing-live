import type { Metadata } from "next";
import { ReactNode } from "react";

const articleUrl = "https://www.sasroofingwaterproofing.com/blog/reliable-masonry-contractor-brooklyn-ny";
const imageUrl = "https://www.sasroofingwaterproofing.com/blog/masonry-services-brooklyn.webp";

export const metadata: Metadata = {
  title: "How to Choose a Reliable Masonry Contractor in Brooklyn",
  description: "Learn how to choose a reliable masonry contractor in Brooklyn, compare costs, services, credentials, repairs, and questions to ask before hiring.",
  keywords: "masonry contractor Brooklyn NY, reliable masonry contractor Brooklyn, masonry repair Brooklyn, brick repair Brooklyn, brownstone masonry repair Brooklyn, tuckpointing Brooklyn, repointing Brooklyn, brick facade repair Brooklyn, masonry services Brooklyn",
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  alternates: { canonical: articleUrl },
  robots: { index: true, follow: true },
  themeColor: "#ffffff",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "How to Choose a Reliable Masonry Contractor in Brooklyn",
    description: "Learn how to choose a reliable masonry contractor in Brooklyn, compare costs, services, credentials, repairs, and questions to ask before hiring.",
    url: articleUrl,
    siteName: "SAS Roofing & Waterproofing",
    images: [{ url: imageUrl, alt: "Masonry contractor repairing brickwork in Brooklyn NY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Reliable Masonry Contractor in Brooklyn",
    description: "Find a reliable masonry contractor in Brooklyn and learn about brick repair, tuckpointing, costs, inspections, and masonry services.",
    images: [imageUrl],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sasroofingwaterproofing.com/#localbusiness",
  name: "SAS Roofing & Waterproofing",
  url: "https://www.sasroofingwaterproofing.com/",
  description: "Roofing, waterproofing, masonry, brick repair, brownstone restoration, facade repair, and related exterior construction services in Brooklyn, Manhattan, Queens, and the New York City area.",
  knowsAbout: ["Masonry Repair", "Brick Repair", "Brick Repointing", "Tuckpointing", "Brownstone Masonry Repair", "Brick Facade Repair", "Chimney Masonry Repair", "Concrete Repair", "Stone Masonry", "Waterproofing"],
  areaServed: ["Brooklyn, New York", "Manhattan, New York", "Queens, New York"],
  sameAs: ["https://www.sasroofingwaterproofing.com/"],
};

export default function ReliableMasonryContractorBrooklynLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
