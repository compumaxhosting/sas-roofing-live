"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaHome } from "react-icons/fa"; // Added FaEnvelope as it was mentioned in previous context
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

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const pathname = usePathname();

  return (
    <ul
      className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
    >
      {/* Desktop Links */}
      <div className="hidden xl:flex gap-6 items-center ">
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
            >
              <Link
                href={path}
                // Good: The visible text "SERVICES" and the dropdown indicator are clear.
                // An aria-label on this specific Link for the dropdown is probably not needed
                // if the screen reader correctly announces "SERVICES link" and then "has popup submenu".
                // However, adding aria-haspopup and aria-expanded is crucial for this dropdown.
                aria-haspopup="true" // Indicates it has a popup (a submenu)
                aria-expanded={isServicesOpen} // Indicates whether the submenu is currently expanded
                className={`px-2 flex items-center gap-1 hover:text-[#e63a27] ${
                  isActive ? "text-[#e63a27]" : ""
                }`}
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  // Role="presentation" hides this purely visual element from screen readers.
                  // The aria-expanded attribute on the Link already conveys the dropdown state.
                  role="presentation"
                  aria-hidden="true" // Explicitly hide the arrow for screen readers
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
                // Using role="menu" and aria-orientation can improve menu semantics.
                // aria-labelledby can point to the SERVICES link's ID if available.
                role="menu"
              >
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    // For menu items, role="menuitem" is appropriate
                    role="menuitem"
                    className={`block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm ${
                      pathname === subPath ? "bg-[#e63a27] text-white" : ""
                    }`}
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
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex xl:hidden items-center gap-2">
        {/*
          These two buttons are functionally identical and both open the sidebar.
          It's better to have one button with responsive styling rather than two separate elements.
          If they *must* be separate, their aria-labels are good.
          For the Image, consider an empty alt or aria-hidden if it's purely decorative
          and the button's aria-label already provides enough context.
        */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu" // More descriptive
          className="md:hidden border-2 border-white p-2"
        >
          <Image
            src="/menu4.png"
            alt="" // Decorative image, described by button's aria-label
            width={28}
            height={28}
            className="object-contain"
            aria-hidden="true" // Hide from screen readers, as the button's aria-label is sufficient
          />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu" // More descriptive
          className="hidden md:block border-2 border-[#e63a27] p-2"
        >
          <Image
            src="/menu3.png"
            alt="" // Decorative image, described by button's aria-label
            width={28}
            height={28}
            className="object-contain"
            aria-hidden="true" // Hide from screen readers
          />
        </button>
      </div>

      {/* Quote Button */}
      <Link
        href="/"
        // Good: "Get a quote button" is clear.
        aria-label="Get a free quote" // Slightly more inviting
        className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button"
      >
        GET A QUOTE
      </Link>

      {/* Sidebar Trigger (hover effect) */}
      <div
        className="hidden md:flex items-center w-8 h-8 cursor-pointer relative mt-7"
        onClick={() => setSidebarOpen(true)}
        // This div acts as a button, so it needs a role and an aria-label.
        role="button"
        aria-label="Open additional information sidebar" // Clearer purpose
        tabIndex={0} // Make div focusable so keyboard users can activate it
        onKeyDown={(e) => {
          // Enable activation with Enter/Space key
          if (e.key === "Enter" || e.key === " ") {
            setSidebarOpen(true);
          }
        }}
      >
        <Image
          src="/menu.png"
          // If this image is purely decorative and its purpose is conveyed by the parent div's aria-label,
          // then alt="" and aria-hidden="true" are appropriate.
          alt=""
          fill
          className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
          aria-hidden="true"
        />
        <Image
          src="/menu-hover.png"
          // Same as above
          alt=""
          fill
          className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
          aria-hidden="true"
        />
      </div>

      {/* Sidebar Panel */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          // This overlay acts as a close button when clicked.
          role="button"
          aria-label="Close menu" // Inform users they can click this to close
          tabIndex={0} // Make focusable
          onKeyDown={(e) => {
            // Enable keyboard activation
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(false);
            }
          }}
        />
        <div
          role="dialog"
          aria-modal="true"
          // Add aria-labelledby to the dialog if you have a visible heading inside it (e.g., the logo).
          // Otherwise, aria-label="Main navigation menu" could be used on the dialog itself.
          aria-label="Main navigation menu" // A good fallback if no visible heading
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu" // Clear label for the close button
          >
            ✕
          </button>

          <Link href="/" className="flex justify-center p-6">
            <Image
              src="/Logo.png"
              alt="SAS Roofing Company Logo" // Good alt text for the logo
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav className="flex flex-col mt-4">
            {/* It's good that nav is here */}
            {navItems.map(({ label, path, subItems }) => {
              const isSubItemActive = subItems?.some(
                (sub) => sub.path === pathname
              );
              const isActive = pathname === path || isSubItemActive;

              return subItems ? (
                <div
                  key={label}
                  className="border-t border-white/20 last:border-b"
                >
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors ${
                      isActive
                        ? "text-[#e63a27]"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => setSidebarServicesOpen((prev) => !prev)}
                    // Crucial for dropdown buttons
                    aria-expanded={sidebarServicesOpen}
                    aria-controls={`sidebar-submenu-${label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`} // Link to the submenu ID
                    aria-label={`Toggle ${label} submenu`} // Explicit label for the button
                  >
                    <Link href="/services" tabIndex={-1}>
                      {" "}
                      {/* Remove from tab flow as button handles interaction */}
                      {label}
                    </Link>
                    <span
                      className={`transform transition-transform duration-200 ${
                        sidebarServicesOpen ? "rotate-180" : ""
                      }`}
                      role="presentation" // Hide decorative arrow
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    id={`sidebar-submenu-${label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`} // ID for aria-controls
                    className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      sidebarServicesOpen ? "max-h-96" : "max-h-0"
                    }`}
                    // When the submenu is closed, it should be aria-hidden="true"
                    aria-hidden={!sidebarServicesOpen}
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
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex justify-center gap-4 py-6">
            <Link
              href="https://www.facebook.com/sasroofingwaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SAS Roofing Company on Facebook" // Excellent, specific and clear
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Hide icon as parent link has aria-label */}
            </Link>
            <Link
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View SAS Roofing Company's Projects and Reviews on Houzz" // Excellent, specific and clear
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaHome className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Hide icon as parent link has aria-label */}
            </Link>
          </div>
        </div>
      </div>
    </ul>
  );
}
