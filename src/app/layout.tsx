import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  title:
    "Trusted Roofing, Waterproofing & Masonry Services in Brooklyn,New York",
  description:
    "SAS Roofing & Waterproofing offers expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. Call for quality construction solutions today!",
  keywords:
    "roofing contractor Brooklyn, waterproofing service Brooklyn, masonry contractor Brooklyn, roofing contractor Manhattan, waterproofing service Manhattan, masonry contractor Manhattan, roofing contractor Queens, waterproofing service Queens, masonry contractor Queens, construction company Brooklyn",
  openGraph: {
    title:
      "Trusted Roofing, Waterproofing & Masonry Services in Brooklyn,New York",
    description:
      "SAS Roofing & Waterproofing offers expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. Call for quality construction solutions today!",
    url: "https://www.sasroofingwaterproofing.com/",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/og-image.jpg",
        width: 2500,
        height: 1330,
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    siteName: "SAS Roofing & Waterproofing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC",
    description:
      "SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens.",
    images: ["https://www.sasroofingwaterproofing.com/og-image.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAS Roofing & Waterproofing",
  image: "https://www.sasroofingwaterproofing.com/og-image.jpg",
  "@id": "https://www.sasroofingwaterproofing.com",
  url: "https://www.sasroofingwaterproofing.com",
  telephone: "+1-718-500-3312",
  address: {
    "@type": "PostalAddress",
    streetAddress: "552 Rugby Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11230",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.6183,
    longitude: -73.9566,
  },
  sameAs: [
    "https://www.facebook.com/SASRoofingNYC",
    "https://www.instagram.com/sasroofingnyc",
  ],
  priceRange: "$$",
  openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {children}
      </body>
    </html>
  );
}
