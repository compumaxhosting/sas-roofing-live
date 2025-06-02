"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null); // Ref for the services dropdown container

  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation for the Services dropdown
  const handleServicesKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent scrolling on space
      setIsServicesOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsServicesOpen(false);
      // Optionally focus back on the services link after closing
      (event.target as HTMLElement).focus();
    }
  };

  if (!showSticky) return null;

  return (
    <div className="hidden desktop-nav-item fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269] px-8" aria-label="Go to Home Page">
        <Image src="/Logo.png" alt="Company Logo" width={210} height={160} />
      </Link>

      <nav
        className="flex gap-6 font-semibold text-sm text-[#003269] pr-6"
        aria-label="Main navigation"
      >
        {navItems.map(({ label, path, subItems }) => {
          let isActive = false;
          if (subItems) {
            isActive =
              currentPath === path ||
              subItems.some((subItem) => currentPath === subItem.path);
          } else if (path === "/") {
            isActive = currentPath === path;
          } else {
            isActive = currentPath.startsWith(path);
            if (path.length > 1 && currentPath === "/") {
              isActive = false;
            }
          }

          return subItems ? (
            <div
              key={label}
              className="relative"
              ref={servicesRef} // Attach ref here
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // Accessibility for dropdown trigger
              role="button"
              tabIndex={0} // Make the div focusable
              aria-haspopup="menu" // Indicates it triggers a menu
              aria-expanded={isServicesOpen} // Reflects current expanded state
              aria-label={`Toggle Services dropdown menu`} // More descriptive label
              onKeyDown={handleServicesKeyDown}
            >
              <Link
                href={path}
                className={`px-2 flex items-center gap-1 ${
                  isActive ? "text-[#e63a27]" : "hover:text-[#e63a27]"
                }`}
                aria-current={isActive ? "page" : undefined} // Indicate current page
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true" // Hide decorative arrow from screen readers
                >
                  ▼
                </span>
              </Link>
              <div
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-50 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                role="menu" // Indicates this div is a menu
                aria-hidden={!isServicesOpen} // Hide from screen readers when closed
              >
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    className={`block px-5 py-4 text-sm font-inter ${
                      currentPath === subPath
                        ? "bg-[#e63a27] text-white"
                        : "text-[#003269] hover:bg-[#e63a27] hover:text-white"
                    }`}
                    role="menuitem" // Indicates this is a menu item
                    aria-current={currentPath === subPath ? "page" : undefined} // Indicate current page
                  >
                    {subLabel}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={label}
              href={path}
              className={`px-2 ${
                isActive ? "text-[#e63a27]" : "hover:text-[#e63a27]"
              }`}
              aria-current={isActive ? "page" : undefined} // Indicate current page
              aria-label={
                label === "HOME" ? "Go to Home page" : `Go to ${label} page`
              } // Specific aria-label for HOME
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
