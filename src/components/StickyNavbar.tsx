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
      { label: "Waterproofing", path: "/waterproofing-contractors-NY" },
      { label: "Masonry", path: "/masonry-services-brooklyn-ny" },
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  {
    label: "TESTIMONIALS",
    path: "/reviews",
    subItems: [
      { label: "Customer Reviews", path: "/reviews" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isOutside = Object.entries(dropdownRefs.current).every(
        ([, ref]) => ref && !ref.contains(e.target as Node)
      );
      if (isOutside) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent, label: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown((prev) => (prev === label ? null : label));
    } else if (event.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  if (!showSticky) return null;

  return (
    <div className="hidden desktop-nav-item fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269] px-8" aria-label="Go to Home Page">
        <Image
          src="/Navbar/Logo.png"
          alt="Company Logo"
          width={210}
          height={160}
        />
      </Link>

      <nav
        className="flex gap-6 font-semibold text-sm text-[#003269] pr-6"
        aria-label="Main navigation"
      >
        {navItems.map(({ label, path, subItems }) => {
          const isActive =
            pathname === path ||
            (subItems && subItems.some((sub) => pathname === sub.path));

          return subItems ? (
            <div
              key={label}
              ref={(el) => {
                dropdownRefs.current[label] = el;
              }}
              className="relative"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              role="button"
              aria-haspopup="menu"
              aria-expanded={openDropdown === label}
              aria-label={`Toggle ${label} dropdown menu`}
              onKeyDown={(e) => handleDropdownKeyDown(e, label)}
            >
              <Link
                href={path}
                className={`px-2 flex items-center gap-1 ${
                  isActive ? "text-[#e63a27]" : "hover:text-[#e63a27]"
                }`}
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    openDropdown === label ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </Link>

              <div
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-50 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === label
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                role="menu"
                aria-hidden={openDropdown !== label}
              >
                {subItems.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.path}
                    className={`block px-5 py-4 text-sm font-inter ${
                      pathname === sub.path
                        ? "bg-[#e63a27] text-white"
                        : "text-[#003269] hover:bg-[#e63a27] hover:text-white"
                    }`}
                    role="menuitem"
                    aria-current={pathname === sub.path ? "page" : undefined}
                  >
                    {sub.label}
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
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to ${label} page`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
