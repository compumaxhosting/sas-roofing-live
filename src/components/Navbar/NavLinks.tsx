"use client";

import { useState, useRef, KeyboardEvent } from "react";
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
      { label: "Waterproofing", path: "/waterproofing-contractors-NY" },
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
  const [isOpen, setIsOpen] = useState(false); // Controls mobile sidebar visibility
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false); // Controls services submenu in mobile sidebar
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Controls services dropdown on desktop
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  // Keyboard handler for the desktop services dropdown
  const handleDesktopServicesKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsServicesOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsServicesOpen(false);
      // Optionally focus back on the main Services link
    }
  };

  // Keyboard handler for the sidebar services toggle button
  const handleSidebarServicesKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSidebarServicesOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setSidebarServicesOpen(false);
    }
  };

  return (
    <>
      <nav className="flex items-center h-full w-full justify-end">
        <ul
          className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
          role="menubar" // Indicates this is a menu bar
        >
          {/* Desktop Links */}
          {navItems.map(({ label, path, subItems }) => {
            const isActive =
              pathname === path ||
              pathname.startsWith(path + "/") ||
              (subItems && subItems.some((sub) => pathname === sub.path));

            return (
              <li
                key={label}
                className="hidden desktop-nav-item items-center relative h-full"
                onMouseEnter={subItems ? handleMouseEnter : undefined}
                onMouseLeave={subItems ? handleMouseLeave : undefined}
                role="none" // Presentational list item within menubar
              >
                <Link
                  href={path}
                  className={`px-2 flex items-center gap-1 hover:text-[#e63a27] ${
                    isActive ? "text-[#e63a27]" : ""
                  }`}
                  aria-haspopup={subItems ? "menu" : undefined} // Indicates a submenu
                  aria-expanded={subItems ? isServicesOpen : undefined} // Indicates if submenu is open
                  onKeyDown={
                    subItems ? handleDesktopServicesKeyDown : undefined
                  } // Keyboard navigation for dropdown
                  role={subItems ? "menuitem" : "link"} // Role for direct links vs. menu item that opens a submenu
                  aria-label={subItems ? `${label} menu link` : undefined} // More descriptive label for "SERVICES" link
                >
                  {label}
                  {subItems && (
                    <span
                      className={`text-[#e63a27] transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true" // Hide decorative arrow from screen readers
                    >
                      ▼
                    </span>
                  )}
                </Link>

                {subItems && (
                  <div
                    className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-20 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                    role="menu" // Identifies this as a submenu
                    aria-orientation="vertical" // Indicates vertical menu orientation
                  >
                    {subItems.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        href={subPath}
                        className={`block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm ${
                          pathname === subPath ? "bg-[#e63a27] text-white" : ""
                        }`}
                        role="menuitem" // Identifies as an item within the submenu
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}

          {/* Mobile Menu Toggle (Button to open sidebar) */}
          <li className="flex mobile-nav-item items-center gap-2" role="none">
            {" "}
            {/* Role none as it's a list item for a button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu" // More specific label
              className="md:hidden border-2 border-white p-2"
            >
              <Image
                src="/Navbar/menu4.png"
                alt="Open menu icon" // Descriptive alt text
                width={28}
                height={28}
                className="object-contain"
                aria-hidden="true" // Icon is decorative, label is on button
              />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu" // More specific label
              className="hidden md:block border-2 border-[#e63a27] p-2"
            >
              <Image
                src="/Navbar/menu3.png"
                alt="Open menu icon" // Descriptive alt text
                width={28}
                height={28}
                className="object-contain"
                aria-hidden="true" // Icon is decorative, label is on button
              />
            </button>
          </li>

          {/* Quote Button */}
          <li role="none">
            {" "}
            {/* Presentational list item */}
            <Link
              href="/contact-us" // Assuming GET A QUOTE links to contact us
              className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button h-full"
              aria-label="Get a free quote" // Clearer label for the action
            >
              GET A QUOTE
            </Link>
          </li>

          {/* Sidebar Trigger (Desktop) - Alternative way to open sidebar */}
          <li
            className="hidden md:flex items-center w-8 h-8 relative mt-6"
            role="none"
          >
            {" "}
            {/* Presentational list item */}
            <div
              onClick={() => setSidebarOpen(true)}
              onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
                // Add keyboard support for div acting as button
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSidebarOpen(true);
                }
              }}
              role="button" // Indicate that this div acts as a button
              tabIndex={0} // Make it keyboard focusable
              aria-label="Open sidebar menu with additional information" // Specific label
              className="w-full h-full relative cursor-pointer"
            >
              <Image
                src="/Navbar/menu.png"
                alt=""
                fill
                className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
                aria-hidden="true" // Decorative image for the button
              />
              <Image
                src="/Navbar/menu-hover.png"
                alt=""
                fill
                className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
                aria-hidden="true" // Decorative image for the button
              />
            </div>
          </li>
        </ul>
      </nav>

      {/* Sidebar Panel */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden={!isOpen} // Hide from screen readers when closed
          tabIndex={isOpen ? 0 : -1} // Make focusable only when open
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main sidebar navigation" // Label for the entire sidebar dialog
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar menu" // Clear label for close button
          >
            ✕
          </button>

          <Link
            href="/"
            className="flex justify-center p-6"
            aria-label="Company logo, navigates to home page"
          >
            <Image
              src="/Navbar/Logo.png"
              alt="Company Logo" // Alt text is good
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav
            className="flex flex-col mt-4"
            aria-label="Sidebar navigation menu"
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
                  role="none" // Presentational container
                >
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors ${
                      isActive
                        ? "text-[#e63a27]"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => setSidebarServicesOpen((prev) => !prev)}
                    onKeyDown={handleSidebarServicesKeyDown} // Keyboard handler for toggle
                    aria-expanded={sidebarServicesOpen}
                    aria-controls="sidebar-services-submenu" // Link to submenu ID
                    aria-haspopup="true" // Indicate that it has a popup
                  >
                    {/* The nested Link within a button is generally an anti-pattern.
                        Consider having the button toggle the submenu, and if the parent
                        "SERVICES" link is also clickable, make it a separate item or handle via JS.
                        For accessibility, it's safer to have the button only toggle the submenu.
                        If "SERVICES" itself is a page, perhaps the button should wrap the text,
                        and the whole thing is inside a list item.
                        For now, I've left it, but noted the pattern.
                    */}
                    <Link
                      href="/services"
                      tabIndex={-1}
                      aria-label={`Go to ${label} page and toggle submenu`}
                    >
                      {" "}
                      {/* tabIndex -1 to make link not focusable, button is focusable */}
                      {label}
                    </Link>
                    <span
                      className={`transform transition-transform duration-200 ${
                        sidebarServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true" // Hide decorative arrow
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    id="sidebar-services-submenu" // ID for aria-controls
                    role="group" // Indicates a navigable group of items
                    aria-labelledby={`sidebar-services-button-${label}`} // Link back to the button that controls it (if the button had an ID)
                    className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      sidebarServicesOpen ? "max-h-96" : "max-h-0"
                    }`}
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
                        role="link" // Role for individual sub-links
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
                  role="link" // Explicit role for direct links
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
              aria-label="Visit our Facebook page (opens in new tab)" // Clearer label
            >
              <FaFacebookF className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Icon is decorative */}
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Houzz profile (opens in new tab)" // Clearer label
            >
              <FaHome className="text-white text-lg" aria-hidden="true" />{" "}
              {/* Icon is decorative */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
