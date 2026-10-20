import type { Metadata } from "next";
import { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/expert-masonry-services-brooklyn-ny";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/expert-masonry-services-brooklyn-ny.webp";
const title =
  "Expert Masonry Services in Brooklyn, NY | SAS Roofing";
const description =
  "Discover expert masonry services in Brooklyn, NY, including brick repair, repointing, brownstone restoration, and professional masonry maintenance.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "expert masonry services Brooklyn NY",
    "masonry contractors Brooklyn",
    "brick repair Brooklyn NY",
    "brick repointing Brooklyn",
    "brownstone restoration Brooklyn",
    "stone masonry Brooklyn",
    "chimney masonry repair Brooklyn",
    "masonry restoration Brooklyn",
    "SAS Roofing & Waterproofing",
  ],
  authors: [{ name: "SAS Roofing & Waterproofing" }],
  creator: "SAS Roofing & Waterproofing",
  publisher: "SAS Roofing & Waterproofing",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    siteName: "SAS Roofing & Waterproofing",
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Professional brick repair and masonry restoration services in Brooklyn, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "theme-color": "#ffffff",
  },
};

const schemaGraphData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      url: url,
      headline:
        "Expert Masonry Services in Brooklyn, NY: Brick Repair and Restoration",
      description:
        "Discover expert masonry services in Brooklyn, NY, including brick repair, repointing, brownstone restoration, and professional masonry maintenance.",
      image: imageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      author: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
        name: "SAS Roofing & Waterproofing",
        url: "https://www.sasroofingwaterproofing.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
        },
      },
      datePublished: "2026-10-20",
      dateModified: "2026-10-20",
      inLanguage: "en-US",
      articleSection: "Masonry Services",
      keywords: [
        "Expert masonry services in Brooklyn NY",
        "Masonry repair Brooklyn NY",
        "Brick repair Brooklyn NY",
        "Brick repointing Brooklyn",
        "Brownstone restoration Brooklyn",
        "Stone masonry Brooklyn NY",
        "Chimney masonry repair Brooklyn",
      ],
      about: [
        {
          "@type": "Thing",
          name: "Masonry repair",
        },
        {
          "@type": "Thing",
          name: "Brick repointing",
        },
        {
          "@type": "Thing",
          name: "Brownstone restoration",
        },
      ],
      contentLocation: {
        "@type": "City",
        name: "Brooklyn",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "New York",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What do masonry contractors in Brooklyn, NY, repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Masonry contractors commonly repair brick walls, mortar joints, chimneys, stone surfaces, stoops, and concrete masonry features. They may also provide brownstone restoration and address masonry-related water infiltration. The exact services available depend on the contractor's expertise and the condition of the property.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my brick building needs repointing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signs include missing mortar, crumbling joints, visible gaps, and loose masonry units. Interior dampness may also indicate a problem with the exterior wall. A professional inspection can determine whether repointing is appropriate or whether the damage requires a different repair.",
          },
        },
        {
          "@type": "Question",
          name: "How much does masonry repair cost in Brooklyn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Costs depend on the repair area, material condition, building height, access requirements, and labor involved. Minor localized repairs generally have a different scope from extensive facade restoration. Obtain an on-site assessment and written estimate for a reliable project-specific price.",
          },
        },
        {
          "@type": "Question",
          name: "Can damaged bricks be repaired without replacing the entire wall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When the damage is localized, a contractor may replace individual bricks, repoint deteriorated joints, or restore limited sections. However, widespread deterioration or structural movement may require more extensive work. The appropriate solution depends on the inspection findings.",
          },
        },
        {
          "@type": "Question",
          name: "Is repointing the same as tuckpointing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The terms are sometimes used interchangeably, but they can describe different techniques. Repointing generally involves removing deteriorated mortar and replacing it with new mortar. Tuckpointing can refer to a decorative technique that creates the appearance of fine, uniform mortar joints.",
          },
        },
        {
          "@type": "Question",
          name: "How often should masonry buildings be inspected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Inspection frequency depends on the building's age, exposure, previous repairs, and condition. Periodic visual checks are useful, especially after severe weather or when new damage appears. Older buildings and properties with recurring moisture problems may need more frequent professional assessments.",
          },
        },
        {
          "@type": "Question",
          name: "Can masonry repairs help prevent water damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, when repairs address the actual source of water entry. Repointing, replacing damaged bricks, repairing flashing, and correcting drainage issues can improve water management. However, masonry repairs alone may not resolve problems caused by plumbing leaks, roof defects, or other sources.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sasroofingwaterproofing.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.sasroofingwaterproofing.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Expert Masonry Services in Brooklyn, NY",
          item: url,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": url,
      url: url,
      name: "Expert Masonry Services in Brooklyn, NY | SAS Roofing",
      description:
        "Discover expert masonry services in Brooklyn, NY, including brick repair, repointing, brownstone restoration, and professional masonry maintenance.",
      isPartOf: {
        "@id": "https://www.sasroofingwaterproofing.com/#website",
      },
      mainEntity: {
        "@id": `${url}#article`,
      },
      publisher: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sasroofingwaterproofing.com/#organization",
      name: "SAS Roofing & Waterproofing",
      url: "https://www.sasroofingwaterproofing.com/",
      description:
        "Roofing, waterproofing, and masonry contractor serving properties throughout New York City, including Brooklyn, Manhattan, and Queens.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Queens",
        },
      ],
      knowsAbout: [
        "Masonry",
        "Brick repair",
        "Brick repointing",
        "Brownstone restoration",
        "Stone masonry",
        "Chimney masonry repair",
        "Waterproofing",
        "Roofing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sasroofingwaterproofing.com/#website",
      url: "https://www.sasroofingwaterproofing.com/",
      name: "SAS Roofing & Waterproofing",
      publisher: {
        "@id": "https://www.sasroofingwaterproofing.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function ExpertMasonryServicesBrooklynLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraphData) }}
      />
    </>
  );
}
