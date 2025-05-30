"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { Inter } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavLinks({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const servicesButtonRef = useRef<HTMLAnchorElement>(null); // Ref for services link

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // delay in ms before hiding
  };

  const handleServicesToggle = () => {
    setIsServicesOpen((prev) => !prev);
  };

  // Close desktop services dropdown if main nav is closed
  const handleCloseDesktopServices = () => {
    setIsServicesOpen(false);
  };

  const pathname = usePathname();

  return (
    <ul
      className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
      // Added aria-label for the main navigation list
      aria-label="Main Navigation"
    >
      {/* Desktop Links */}
      <div className="hidden xl:flex gap-6 items-center">
        {navItems.map(({ label, path, subItems }) => {
          const isActive =
            pathname === path ||
            pathname.startsWith(path + "/") ||
            (subItems && subItems.some((sub) => pathname === sub.path));

          return subItems ? (
            <div
              key={label}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // Added role="menubar" for the dropdown container
              role="none" // Parent of a menuitem should not be a menu, handled by the link inside
            >
              <Link
                ref={servicesButtonRef} // Attach ref to the services link
                href={path}
                className={`px-2 flex items-center gap-1 hover:text-[#e63a27] ${
                  isActive ? "text-[#e63a27]" : ""
                }`}
                // Added aria-haspopup to indicate a dropdown
                // Added aria-expanded to indicate current state of dropdown
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                // Add role="menuitem" to the link that triggers the submenu
                role="menuitem"
                // Add tabIndex="0" to make it focusable
                tabIndex={0}
                onClick={handleServicesToggle} // Allow click to toggle on desktop for keyboard users
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleServicesToggle();
                  }
                }}
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true" // Decorative, hide from screen readers
                >
                  ▼
                </span>
              </Link>
              <div
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-20 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                // Added role="menu" for the submenu
                role="menu"
                // Added aria-labelledby to associate with the services link
                aria-labelledby={
                  label.toLowerCase().replace(/\s/g, "-") + "-menu-button"
                } // Unique ID for the button
              >
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    className={`block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm ${
                      pathname === subPath ? "bg-[#e63a27] text-white" : ""
                    }`}
                    role="menuitem" // Each sub-item is a menu item
                    onClick={handleCloseDesktopServices} // Close dropdown when a sub-item is clicked
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCloseDesktopServices();
                      }
                    }}
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
              className={`px-2 hover:text-[#e63a27] ${
                pathname === path || pathname.startsWith(path + "/")
                  ? "text-[#e63a27]"
                  : ""
              }`}
              role="menuitem" // Each main navigation item is a menu item
              tabIndex={0} // Make it focusable
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex xl:hidden items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile menu" // More specific aria-label
          className="md:hidden border-2 border-white p-2"
        >
          <Image
            src="/menu4.png"
            alt="Menu icon" // Added alt text for the image
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile menu" // More specific aria-label
          className="hidden md:block border-2 border-[#e63a27] p-2"
        >
          <Image
            src="/menu3.png"
            alt="Menu icon" // Added alt text for the image
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>

      {/* Quote Button */}
      <Link
        href="/"
        className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button"
        aria-label="Get a free quote" // Added aria-label for clarity
        role="button" // Indicate it acts like a button
      >
        GET A QUOTE
      </Link>

      {/* Sidebar Trigger (hover effect) */}
      <div
        className="hidden md:flex items-center w-8 h-8 cursor-pointer relative mt-5"
        onClick={() => setSidebarOpen(true)}
        // Added role="button" and aria-label for accessibility
        role="button"
        aria-label="Open sidebar menu"
        tabIndex={0} // Make it focusable
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSidebarOpen(true);
          }
        }}
      >
        <Image
          src="/menu.png"
          alt="Open sidebar icon" // Added alt text
          fill
          className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
        />
        <Image
          src="/menu-hover.png"
          alt="Open sidebar icon on hover" // Added alt text
          fill
          className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
        />
      </div>

      {/* Sidebar Panel */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu by clicking outside" // Added aria-label
          role="button" // Indicate it acts like a button
          tabIndex={0} // Make it focusable
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(false);
            }
          }}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu" // Aria-label for the dialog
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu" // Added aria-label
          >
            ✕
          </button>

          <Link
            href="/"
            className="flex justify-center p-6"
            aria-label="Home page"
          >
            <Image
              src="/Logo.png"
              alt="Company Logo - Click to go to homepage" // More descriptive alt text
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav
            className="flex flex-col mt-4"
            aria-label="Mobile menu navigation links"
          >
            {navItems.map(({ label, path, subItems }) => {
              const isSubItemActive = subItems?.some(
                (sub) => sub.path === pathname
              );
              const isActive = pathname === path || isSubItemActive;

              return subItems ? (
                <div
                  key={label}
                  className="border-t border-white/20 last:border-b"
                  role="none" // Parent of a menuitem should not be a menu, handled by the button inside
                >
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors ${
                      isActive
                        ? "text-[#e63a27]"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => setSidebarServicesOpen((prev) => !prev)}
                    aria-expanded={sidebarServicesOpen} // State of the dropdown
                    aria-controls={`${label
                      .toLowerCase()
                      .replace(/\s/g, "-")}-submenu`} // Associate with the submenu
                    aria-label={`Toggle ${label} submenu`} // More descriptive label for the button
                    role="menuitem" // It acts as a menu item that expands/collapses
                  >
                    <Link href="/services" tabIndex={-1}>
                      {label}
                    </Link>{" "}
                    {/* Add tabIndex=-1 to prevent double tabbing */}
                    <span
                      className={`transform transition-transform duration-200 ${
                        sidebarServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    id={`${label.toLowerCase().replace(/\s/g, "-")}-submenu`} // ID for association
                    className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      sidebarServicesOpen ? "max-h-96" : "max-h-0"
                    }`}
                    role="menu" // This is the actual submenu
                    aria-labelledby={`${label
                      .toLowerCase()
                      .replace(/\s/g, "-")}-menu-button`} // Associate with the button
                  >
                    {subItems.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        href={subPath}
                        className={`block px-8 py-3 transition-colors ${
                          pathname === subPath
                            ? "text-[#e63a27]"
                            : "hover:bg-white hover:text-black"
                        }`}
                        onClick={() => setIsOpen(false)}
                        role="menuitem" // Each sub-item is a menu item
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
                  className={`border-t border-white/20 last:border-b px-6 py-4 transition-colors ${
                    pathname === path || pathname.startsWith(path + "/")
                      ? "text-[#e63a27]"
                      : "hover:bg-white hover:text-black"
                  }`}
                  onClick={() => setIsOpen(false)}
                  role="menuitem" // Each main navigation item is a menu item
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex justify-center gap-4 py-6">
            <a
              href="https://www.facebook.com/sasroofingwaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Facebook page" // Added aria-label
            >
              <FaFacebookF className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Icon is decorative */}
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Houzz profile" // Added aria-label
            >
              <FaHome className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Icon is decorative */}
            </a>
          </div>
        </div>
      </div>
    </ul>
  );
}
