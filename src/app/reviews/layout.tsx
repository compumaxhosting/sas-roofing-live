import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Customer Reviews | SAS Roofing & Waterproofing in Brooklyn, Manhattan & Queens",
  description:
    "Read verified customer reviews for SAS Roofing & Waterproofing, proudly serving Brooklyn, Manhattan, and Queens. Discover why clients trust us for roofing and waterproofing projects.",
  keywords:
    "roofing reviews Brooklyn, waterproofing reviews Manhattan, Queens roofing contractors, SAS Roofing testimonials, best roofing company Brooklyn, trusted waterproofing Manhattan, customer reviews SAS Roofing, roofing services Queens NY, NYC waterproofing feedback, SAS Roofing client experiences",
  openGraph: {
    title:
      "Customer Reviews | SAS Roofing & Waterproofing in Brooklyn, Manhattan & Queens",
    description:
      "Read verified customer reviews for SAS Roofing & Waterproofing, proudly serving Brooklyn, Manhattan, and Queens. Discover why clients trust us for roofing and waterproofing projects.",
    url: "https://www.sasroofingwaterproofing.com/reviews.html",
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
    "SAS Roofing & Waterproofing is highly rated for trusted roofing and waterproofing services in Brooklyn, Manhattan, and Queens.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  telephone: "+1-347-221-6549",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
  review: [
    {
      "@type": "Review",
      author: "John D.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody:
        "SAS Roofing did a great job on my roof. They were on time and professional.",
    },
    {
      "@type": "Review",
      author: "Maria S.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.5",
      },
      reviewBody:
        "Excellent waterproofing service. I haven’t had a single leak since!",
    },
  ],
  sameAs: [
    "https://www.instagram.com/SASRoofingWaterproofing",
    "https://www.yelp.com/biz/sas-roofing-waterproofing",
    "https://www.facebook.com/SASRoofingWaterproofing",
    "https://twitter.com/SASRoofing",
    "https://www.linkedin.com/company/sasroofingwaterproofing",
  ],
};

export default function ReviewsLayout({ children }: { children: ReactNode }) {
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
