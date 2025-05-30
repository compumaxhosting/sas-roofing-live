"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname for active link detection

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
  const pathname = usePathname(); // Get current path for active links

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

  // If the sticky nav isn't supposed to be shown, return null
  if (!showSticky) return null;

  return (
    <div
      className="hidden xl:flex fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all"
      role="navigation" // Semantically identifies this as a navigation landmark
      aria-label="Main sticky navigation" // Provides an accessible name for the navigation
    >
      <Link
        href="/"
        className="bg-[#003269] px-8"
        aria-label="SAS Roofing & Waterproofing Home"
      >
        <Image
          src="/Logo.png"
          alt="SAS Roofing & Waterproofing Logo"
          width={210}
          height={160}
        />
      </Link>

      <nav className="flex gap-6 font-semibold text-sm text-[#003269] pr-6">
        <ul role="menubar" className="flex">
          {" "}
          {/* Added ARIA roles for menu navigation */}
          {navItems.map(({ label, path, subItems }) => (
            <li key={label} role="none">
              {" "}
              {/* role="none" indicates this is purely structural */}
              {subItems ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  // For keyboard accessibility:
                  onFocus={handleMouseEnter}
                  onBlur={handleMouseLeave}
                >
                  <Link
                    href={path}
                    className={`px-2 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#e63a27]
                      ${
                        pathname === path ||
                        subItems.some((sub) => pathname.startsWith(sub.path))
                          ? "text-[#e63a27]"
                          : "hover:text-[#e63a27]"
                      }`}
                    aria-expanded={isServicesOpen} // Indicates if the submenu is open
                    aria-haspopup="true" // Indicates that this item has a popup (submenu)
                    id="services-menu-button" // Unique ID for ARIA reference
                    role="menuitem" // Identifies this as a menu item
                  >
                    {label}
                    <span
                      className={`text-[#e63a27] transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true" // Decorative arrow, hidden from screen readers
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
                    role="menu" // Identifies this as a menu (submenu)
                    aria-labelledby="services-menu-button" // Links the submenu to its controlling button
                  >
                    {subItems.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        href={subPath}
                        className={`block px-5 py-4 text-[#003269] text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#e63a27]
                          ${
                            pathname === subPath
                              ? "bg-[#e63a27] text-white"
                              : "hover:bg-[#e63a27] hover:text-white"
                          }`}
                        role="menuitem" // Identifies each sub-item as a menu item
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
                  className={`px-2 focus:outline-none focus:ring-2 focus:ring-[#e63a27]
                    ${
                      pathname === path
                        ? "text-[#e63a27]"
                        : "hover:text-[#e63a27]"
                    }`}
                  role="menuitem" // Identifies this as a menu item
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
