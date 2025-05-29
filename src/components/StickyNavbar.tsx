"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  {
    label: "SERVICES",
    path: "/services",
    subItems: [
      { label: "Roofing", path: "/roofing-contractors-brooklyn" },
      {
        label: "Waterproofing",
        path: "/waterproofing-contractors-NY",
      },
      { label: "Masonry", path: "/masonry-services-brooklyn-ny" },
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "TESTIMONIALS", path: "/reviews" },
  { label: "CONTACT US", path: "/contact-us" },
  { label: "BLOG", path: "/blog" },
];

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTriggerRef = useRef<HTMLAnchorElement>(null); // Ref for the 'SERVICES' link
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowSticky = window.scrollY > 400;
      if (shouldShowSticky !== showSticky) {
        setShowSticky(shouldShowSticky);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSticky]);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  // Handle keyboard events for the "SERVICES" link
  const handleServicesKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Prevent default link navigation
        setIsServicesOpen((prev) => !prev);
      } else if (event.key === "Escape" && isServicesOpen) {
        setIsServicesOpen(false);
        servicesTriggerRef.current?.focus(); // Return focus to trigger
      }
    },
    [isServicesOpen]
  );

  // Close dropdown if focus moves outside (for keyboard users)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const servicesLink = servicesTriggerRef.current;
      const dropdownContent = servicesLink?.nextElementSibling as HTMLElement;

      if (
        servicesLink &&
        dropdownContent &&
        !servicesLink.contains(event.target as Node) &&
        !dropdownContent.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    // Corrected handleFocusOut type and casting for addEventListener
    const handleFocusOut = (event: FocusEvent) => {
      const servicesLink = servicesTriggerRef.current;
      const dropdownContent = servicesLink?.nextElementSibling as HTMLElement;

      if (
        isServicesOpen &&
        servicesLink &&
        dropdownContent &&
        !servicesLink.contains(event.relatedTarget as Node) &&
        !dropdownContent.contains(event.relatedTarget as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const containingDiv = servicesTriggerRef.current?.closest("div.relative");

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      if (containingDiv) {
        // Correct casting for addEventListener to satisfy TypeScript
        containingDiv.addEventListener(
          "focusout",
          handleFocusOut as EventListener
        );
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      if (containingDiv) {
        containingDiv.removeEventListener(
          "focusout",
          handleFocusOut as EventListener
        );
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (containingDiv) {
        containingDiv.removeEventListener(
          "focusout",
          handleFocusOut as EventListener
        );
      }
    };
  }, [isServicesOpen]);

  if (!showSticky) return null;

  return (
    <div className="hidden xl:flex fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link
        href="/"
        className="bg-[#003269] px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
        aria-label="SAS Roofing and Waterproofing Home page"
      >
        <Image
          src="/Logo.png"
          alt="SAS Roofing and Waterproofing Logo"
          width={210}
          height={160}
          priority
        />
      </Link>

      <nav
        className="flex gap-6 font-semibold text-sm text-[#003269] pr-6"
        role="navigation"
        aria-label="Main Website Navigation"
      >
        {navItems.map(({ label, path, subItems }) => {
          // Determine if the current link is active
          const isActive =
            pathname === path ||
            (subItems &&
              subItems.some((subItem) => pathname.startsWith(subItem.path)));
          const linkClasses = `px-2 py-6 hover:text-[#e63a27] flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] ${
            isActive ? "text-[#e63a27]" : "" // Apply active color
          }`;

          return subItems ? (
            <div
              key={label}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={path}
                className={linkClasses} // Apply dynamic classes
                ref={servicesTriggerRef}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                aria-controls={`submenu-${label
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                onKeyDown={handleServicesKeyDown}
                aria-label={`Services menu, currently ${
                  isServicesOpen ? "expanded" : "collapsed"
                }. Press enter or space to toggle.`}
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </Link>
              <div
                id={`submenu-${label.toLowerCase().replace(/\s/g, "-")}`}
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-50 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                aria-hidden={!isServicesOpen}
                tabIndex={-1}
              >
                {subItems.map(({ label: subLabel, path: subPath }) => {
                  const isSubActive = pathname.startsWith(subPath); // Use startsWith for sub-paths
                  const subLinkClasses = `block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] ${
                    isSubActive ? "text-white bg-[#e63a27]" : "" // Apply active color to sub-items
                  }`;
                  return (
                    <Link
                      key={subLabel}
                      href={subPath}
                      className={subLinkClasses} // Apply dynamic classes
                      tabIndex={isServicesOpen ? 0 : -1}
                      aria-label={`${subLabel} service page`}
                    >
                      {subLabel}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <Link
              key={label}
              href={path}
              className={`px-2 py-6 hover:text-[#e63a27] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] ${
                isActive ? "text-[#e63a27]" : "" // Apply active color
              }`}
              aria-label={`${label} page`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
