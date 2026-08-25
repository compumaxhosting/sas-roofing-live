import { ReactNode } from "react";
import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
    title: "How to Choose a Waterproofing Contractor in NYC | SAS",
    description:
        "Learn how to choose the best waterproofing contractor in NYC. Ask 10 key questions about experience, cost, warranties, leak diagnosis, and credentials.",
    keywords:
        "how to choose a waterproofing contractor in NYC, best waterproofing contractor in NYC, waterproofing contractor NYC, waterproofing contractor near me, basement waterproofing NYC, foundation waterproofing NYC, Brooklyn waterproofing, Queens waterproofing, Manhattan waterproofing",
    authors: [{ name: "SAS Roofing & Waterproofing" }],
    alternates: {
        canonical:
            "https://www.sasroofingwaterproofing.com/blog/how-to-choose-waterproofing-contractor-nyc",
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: "#ffffff",
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
        type: "website",
        title: "How to Choose a Waterproofing Contractor in NYC | SAS",
        description:
            "Learn how to choose the best waterproofing contractor in NYC with 10 essential questions about experience, cost, warranties, and leak diagnosis.",
        url: "https://www.sasroofingwaterproofing.com/blog/how-to-choose-waterproofing-contractor-nyc",
        siteName: "SAS Roofing & Waterproofing",
        images: [
            {
                url: "https://www.sasroofingwaterproofing.com/blog/waterproofing-contractor-nyc.jpeg",
                width: 1200,
                height: 630,
                alt: "Waterproofing contractor in NYC",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Choose a Waterproofing Contractor in NYC | SAS",
        description:
            "Discover 10 questions to ask before hiring a waterproofing contractor in NYC, including pricing, experience, warranties, and leak diagnosis.",
        images: [
            "https://www.sasroofingwaterproofing.com/blog/waterproofing-contractor-nyc.jpeg",
        ],
    },
};

// Article Schema
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose the Best Waterproofing Contractor in NYC",
    description:
        "Learn how to choose the best waterproofing contractor in NYC with 10 essential questions about experience, warranties, pricing, leak diagnosis, and credentials.",
    image:
        "https://www.sasroofingwaterproofing.com/images/waterproofing-contractor-nyc.jpeg",
    author: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
    },
    publisher: {
        "@type": "Organization",
        name: "SAS Roofing & Waterproofing",
        logo: {
            "@type": "ImageObject",
            url: "https://www.sasroofingwaterproofing.com/Navbar/Logo.webp",
        },
    },
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
            "https://www.sasroofingwaterproofing.com/blog/how-to-choose-waterproofing-contractor-nyc",
    },
};


export default function BlogLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            {children}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
        </>
    );
}