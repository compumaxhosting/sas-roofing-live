import type { Metadata } from "next";
import { ReactNode } from "react";

const url =
  "https://www.sasroofingwaterproofing.com/blog/protect-property-from-damage-manhattan";
const imageUrl =
  "https://www.sasroofingwaterproofing.com/blog/manhattan-roofing-waterproofing.webp";
const title =
  "How to Protect Your Property From Damage in Manhattan";
const description =
  "Learn how to protect your Manhattan property from roof leaks, water damage, storms, and structural issues with expert roofing and waterproofing tips.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "protect property from damage Manhattan",
    "Manhattan roofing contractors",
    "roof leak repair Manhattan",
    "waterproofing Manhattan NY",
    "property water damage prevention",
    "NYC roof maintenance",
    "SAS Roofing and Waterproofing",
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
    description:
      "Discover practical ways to protect Manhattan properties from roof leaks, heavy rain, water intrusion, and structural damage with professional maintenance tips.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Roofing and waterproofing solutions to help protect Manhattan properties from water damage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Protect your Manhattan property from roof leaks, storm damage, and water intrusion with practical roofing and waterproofing advice.",
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
      headline: "How Do I Protect My Property From Damage in Manhattan?",
      description:
        "Learn how to protect your Manhattan property from roof leaks, water damage, storms, and structural issues with practical maintenance and professional roofing and waterproofing advice.",
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
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
      datePublished: "2026-10-28",
      dateModified: "2026-10-28",
      inLanguage: "en-US",
      articleSection: [
        "Causes of Property Damage in Manhattan",
        "Roofing and Waterproofing",
        "Property Protection Tips",
        "Common Property Maintenance Problems",
        "Frequently Asked Questions",
      ],
      keywords: [
        "protect property from damage Manhattan",
        "Manhattan roofing contractors",
        "roof leak repair Manhattan",
        "waterproofing Manhattan NY",
        "property water damage prevention",
        "NYC roof maintenance",
        "SAS Roofing & Waterproofing",
      ],
      about: [
        {
          "@type": "Thing",
          name: "Property damage prevention",
        },
        {
          "@type": "Thing",
          name: "Roof repair and maintenance",
        },
        {
          "@type": "Thing",
          name: "Waterproofing",
        },
        {
          "@type": "Place",
          name: "Manhattan, New York City, New York",
        },
      ],
      contentLocation: {
        "@type": "City",
        name: "Manhattan",
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
          name: "How can I protect my property from water damage in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Inspect the roof, maintain drainage systems, seal vulnerable exterior openings, and investigate leaks immediately. Check basements, terraces, windows, and parapet walls for moisture intrusion. Regular professional inspections can identify problems that are difficult to see from inside the building.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a Manhattan property roof be inspected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An annual professional inspection is a practical baseline, with additional checks after significant storms or when signs of damage appear. Older roofs and buildings with recurring drainage problems may need more frequent attention based on their condition and the roofing manufacturer's recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "What are the first signs of a roof leak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common warning signs include brown ceiling stains, peeling paint, damp insulation, musty odors, bubbling plaster, and water near roof penetrations. These symptoms may appear some distance from the leak itself. Investigate the source promptly instead of simply repainting the affected area.",
          },
        },
        {
          "@type": "Question",
          name: "Is waterproofing necessary for older Manhattan buildings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waterproofing may be particularly important where aging foundations, terraces, exterior joints, or roof membranes allow moisture to enter. However, the correct solution depends on the building's construction and the source of the water. An inspection helps determine whether targeted repairs or a broader waterproofing system is appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can roof maintenance help prevent mold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Keeping the roof watertight and correcting leaks promptly can reduce the persistent moisture that allows mold to grow. If materials have already become wet, they may require professional drying, cleaning, or replacement. Address the water source first rather than treating visible mold alone.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if my property starts leaking during a storm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keep people away from unsafe areas, protect belongings if it is safe, and contact a qualified emergency repair professional. Avoid electrical hazards and do not climb onto a wet roof. Document visible damage from a safe location and notify your insurer when appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose a roofing and waterproofing contractor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for relevant project experience, appropriate licensing and insurance, clear written estimates, references, and documented warranty terms. Ask how the contractor will locate the source of water intrusion, what materials will be used, and whether permits or additional specialists may be required.",
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
          name: "How to Protect Your Property From Damage in Manhattan",
          item: url,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": url,
      url: url,
      name: "How to Protect Your Property From Damage in Manhattan",
      description:
        "Practical guidance for protecting Manhattan properties from roof leaks, heavy rain, water intrusion, and preventable building damage.",
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
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Queens",
        },
      ],
      knowsAbout: [
        "Property damage prevention",
        "Roof repair and maintenance",
        "Waterproofing",
        "Roof leak repair",
        "Flashing repair",
        "Drainage systems",
        "Foundation waterproofing",
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

export default function ProtectPropertyManhattanLayout({
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

