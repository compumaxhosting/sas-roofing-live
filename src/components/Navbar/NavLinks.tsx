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
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState<string | null>(
    null
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (label: string) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleDesktopDropdownKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    label: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === label ? null : label));
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  const handleSidebarServicesKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    label: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenSidebarDropdown((prev) => (prev === label ? null : label));
    } else if (e.key === "Escape") {
      setOpenSidebarDropdown(null);
    }
  };

  return (
    <>
      <nav className="flex items-center h-full w-full justify-end">
        <ul
          className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
          role="menubar"
        >
          {navItems.map(({ label, path, subItems }) => {
            const isActive =
              pathname === path ||
              pathname.startsWith(path + "/") ||
              (subItems && subItems.some((sub) => pathname === sub.path));

            return (
              <li
                key={label}
                className="hidden desktop-nav-item items-center relative h-full"
                onMouseEnter={
                  subItems ? () => handleMouseEnter(label) : undefined
                }
                onMouseLeave={subItems ? handleMouseLeave : undefined}
                role="none"
              >
                <Link
                  href={path}
                  className={`px-2 flex items-center gap-1 hover:text-[#e63a27] ${
                    isActive ? "text-[#e63a27]" : ""
                  }`}
                  aria-haspopup={subItems ? "menu" : undefined}
                  aria-expanded={subItems ? openDropdown === label : undefined}
                  onKeyDown={
                    subItems
                      ? (e) => handleDesktopDropdownKeyDown(e, label)
                      : undefined
                  }
                  role={subItems ? "menuitem" : "link"}
                  aria-label={subItems ? `${label} menu link` : undefined}
                >
                  {label}
                  {subItems && (
                    <span
                      className={`text-[#e63a27] transition-transform duration-200 ${
                        openDropdown === label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  )}
                </Link>

                {subItems && openDropdown === label && (
                  <div
                    className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-20 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto`}
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {subItems.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        href={subPath}
                        className={`block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm ${
                          pathname === subPath ? "bg-[#e63a27] text-white" : ""
                        }`}
                        role="menuitem"
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}

          {/* Mobile menu button */}
          <li className="flex mobile-nav-item items-center gap-2" role="none">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              className="md:hidden border-2 border-white p-2"
            >
              <Image
                src="/Navbar/menu4.png"
                alt="Open menu icon"
                width={28}
                height={28}
                className="object-contain"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              className="hidden md:block border-2 border-[#e63a27] p-2"
            >
              <Image
                src="/Navbar/menu3.png"
                alt="Open menu icon"
                width={28}
                height={28}
                className="object-contain"
                aria-hidden="true"
              />
            </button>
          </li>

          {/* Get a Quote Button */}
          <li role="none">
            <Link
              href="/contact-us"
              className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button h-full"
              aria-label="Get a free quote"
            >
              GET A QUOTE
            </Link>
          </li>

          {/* Sidebar Trigger */}
          <li
            className="hidden md:flex items-center w-8 h-8 relative mt-6"
            role="none"
          >
            <div
              onClick={() => setSidebarOpen(true)}
              onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSidebarOpen(true);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Open sidebar menu with additional information"
              className="w-full h-full relative cursor-pointer"
            >
              <Image
                src="/Navbar/menu.png"
                alt=""
                fill
                className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
                aria-hidden="true"
              />
              <Image
                src="/Navbar/menu-hover.png"
                alt=""
                fill
                className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
                aria-hidden="true"
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
          aria-hidden={!isOpen}
          tabIndex={isOpen ? 0 : -1}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main sidebar navigation"
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar menu"
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
              alt="Company Logo"
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
                  role="none"
                >
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors ${
                      isActive
                        ? "text-[#e63a27]"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() =>
                      setOpenSidebarDropdown((prev) =>
                        prev === label ? null : label
                      )
                    }
                    onKeyDown={(e) => handleSidebarServicesKeyDown(e, label)}
                    aria-expanded={openSidebarDropdown === label}
                    aria-controls={`sidebar-${label}-submenu`}
                    aria-haspopup="true"
                  >
                    <Link
                      href={path}
                      tabIndex={-1}
                      aria-label={`Go to ${label} page and toggle submenu`}
                    >
                      {label}
                    </Link>
                    <span
                      className={`transform transition-transform duration-200 ${
                        openSidebarDropdown === label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    id={`sidebar-${label}-submenu`}
                    role="group"
                    className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      openSidebarDropdown === label ? "max-h-96" : "max-h-0"
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
                        role="link"
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
                  role="link"
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
              aria-label="Visit our Facebook page (opens in new tab)"
            >
              <FaFacebookF className="text-white text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Houzz profile (opens in new tab)"
            >
              <FaHome className="text-white text-lg" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
