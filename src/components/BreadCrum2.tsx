import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadCrumProps {
  breadcrumbItems: BreadcrumbItem[];
  pageTitle: string;
  imageSrc: string;
}
//updated for narrator
const BreadCrum2: React.FC<BreadCrumProps> = ({
  breadcrumbItems,
  pageTitle,
  imageSrc,
}) => {
  return (
    <div className="relative h-60 md:h-85 w-full text-white text-center">
      <Image
        src={imageSrc}
        // More descriptive alt text for accessibility. Describe the content/purpose of the background image.
        alt={`Background image for the ${pageTitle} page`}
        fill
        // lazy loading is appropriate for background images that might not be in the initial viewport
        loading="lazy"
        className="object-cover object-top brightness-60"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center font-inter">
        <nav
          aria-label="breadcrumb"
          className="mb-2 flex flex-wrap justify-center text-sm gap-2 font-inter"
        >
          {/* Using an ordered list for semantic breadcrumb structure */}
          <ol className="flex flex-wrap justify-center text-sm gap-2 font-inter">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className={
                      isLast
                        ? "font-semibold pointer-events-none" // Add pointer-events-none for current page to make it non-interactive
                        : "hover:underline"
                    }
                    // Crucial for accessibility: informs screen readers this is the current page
                    aria-current={isLast ? "page" : undefined}
                    // Add aria-label for clarity, especially if the link text is short
                    aria-label={
                      isLast
                        ? `Current page: ${item.label}`
                        : `Go to ${item.label} page`
                    }
                  >
                    {item.label}
                  </Link>
                  {/* Visually separate, but hide from screen readers */}
                  {!isLast && <span aria-hidden="true">›</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="text-4xl lg:text-6xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default BreadCrum2;
