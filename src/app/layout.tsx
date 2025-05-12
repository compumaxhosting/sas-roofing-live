import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
    "Trusted Roofing, Waterproofing & Masonry Services in Brooklyn, New York",
  description:
    "SAS Roofing & Waterproofing offers expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. Call for quality construction solutions today!",
  keywords:
    "Roofing Contractors in Queens, Roofing Contractors Brooklyn, Roofing Contractors Manhattan, Waterproofing Services in Brooklyn, Masonry Services in Brooklyn, Roof Repair Manhattan, Roof Installation Brooklyn, Commercial Roofing in NYC, Foundation Waterproofing Manhattan",
  openGraph: {
    title: "Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC",
    description:
      "SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
