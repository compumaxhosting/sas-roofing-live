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

const BreadCrum2: React.FC<BreadCrumProps> = ({
  breadcrumbItems,
  pageTitle,
  imageSrc,
}) => {
  return (
    <header
      className="relative h-60 md:h-85 w-full text-white text-center"
      role="banner"
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        loading="lazy"
        className="object-cover object-top brightness-60"
        quality={100}
        priority={false}
        aria-hidden="true"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center font-inter">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-2 flex flex-wrap justify-center text-sm gap-2"
        >
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link
                href={item.href}
                className={
                  index === breadcrumbItems.length - 1
                    ? "font-semibold text-white pointer-events-none"
                    : "hover:underline text-white"
                }
                aria-current={
                  index === breadcrumbItems.length - 1 ? "page" : undefined
                }
              >
                {item.label}
              </Link>
              {index < breadcrumbItems.length - 1 && (
                <span aria-hidden="true">›</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title */}
        <h1
          className="text-4xl lg:text-6xl font-bold"
          aria-label={`Page title: ${pageTitle}`}
        >
          {pageTitle}
        </h1>
      </div>
    </header>
  );
};

export default BreadCrum2;
