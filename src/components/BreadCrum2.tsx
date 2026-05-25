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
    <div className="relative h-36 md:h-56 w-full text-white text-center">
      {/* Decorative Background Image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        loading="lazy"
        decoding="async"
        sizes="100vw"
        className="object-cover object-top brightness-60"
        quality={100}
        priority={false}
      />

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center font-inter px-4"
        aria-labelledby="breadcrumb-page-title"
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-2 flex flex-wrap justify-center text-sm gap-2"
        >
          <ol
            className="flex flex-wrap items-center m-0 p-0 list-none"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {breadcrumbItems.map((item, index) => (
              <li
                key={item.href}
                className="flex items-center"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href={item.href}
                  className={
                    index === breadcrumbItems.length - 1
                      ? "font-semibold text-white"
                      : "hover:underline text-white/80"
                  }
                  aria-current={
                    index === breadcrumbItems.length - 1 ? "page" : undefined
                  }
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>

                <meta itemProp="position" content={(index + 1).toString()} />

                {index < breadcrumbItems.length - 1 && (
                  <span className="mx-2 text-white/50" aria-hidden="true">
                    &rsaquo;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Page Title */}
        <h2
          id="breadcrumb-page-title"
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
        >
          {pageTitle}
        </h2>
      </div>
    </div>
  );
};

export default BreadCrum2;
