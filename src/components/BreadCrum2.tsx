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
    <div className="relative h-60 md:h-85 w-full text-white text-center">
      {/* Decorative background image */}
      <Image
        src={imageSrc}
        alt="" // Decorative image, alt="" ensures screen readers skip it
        fill
        loading="lazy"
        decoding="async"
        sizes="100vw"
        className="object-cover object-top brightness-60"
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center font-inter">
        <nav
          aria-label="Breadcrumb navigation"
          className="mb-2 flex flex-wrap justify-center text-sm gap-2"
        >
          <ol
            className="flex m-0 p-0 list-none"
            vocab="https://schema.org/"
            typeof="BreadcrumbList"
          >
            {breadcrumbItems.map((item, index) => (
              <li
                key={item.href}
                className="flex items-center"
                property="itemListElement"
                typeof="ListItem"
              >
                <Link
                  href={item.href}
                  className={
                    index === breadcrumbItems.length - 1
                      ? "font-semibold"
                      : "hover:underline"
                  }
                  aria-current={
                    index === breadcrumbItems.length - 1 ? "page" : undefined
                  }
                  property="item"
                  typeof="WebPage"
                >
                  <span property="name">{item.label}</span>
                </Link>
                {index < breadcrumbItems.length - 1 && (
                  <span className="mx-2" aria-hidden="true">
                    ›
                  </span>
                )}
                <meta property="position" content={(index + 1).toString()} />
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-4xl lg:text-6xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default BreadCrum2;
