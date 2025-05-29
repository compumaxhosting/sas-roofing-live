"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface Props {
  item: NavItem;
  isOpen: boolean; // Keep this prop as it's passed from MobileDrawer
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  servicesOpen: boolean;
  setServicesOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string; // Ensure this is always present in the Props interface
}

export default function MobileNavItem({
  item,
  setIsOpen,
  servicesOpen,
  setServicesOpen,
  pathname,
}: Props) {
  const isSubItemActive = item.subItems?.some(
    (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/")
  );
  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    isSubItemActive;

  const toggleSubmenu = () => setServicesOpen((prev) => !prev);

  if (item.subItems) {
    return (
      <div className="border-t border-white/20 last:border-b font-inter">
        {/*
          For items with sub-menus, the button's primary role is to toggle the sub-menu.
          Nesting a <Link> inside a <button> is an accessibility violation.
          The button's aria-label should clearly describe its toggle action.
        */}
        <button
          onClick={toggleSubmenu}
          className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors font-inter ${
            isActive
              ? "bg-white text-[#e63a27]"
              : "hover:bg-white hover:text-black"
          }`}
          aria-expanded={servicesOpen} // Indicates whether the controlled region is expanded or collapsed
          aria-controls={`services-menu-${item.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`} // Link to the ID of the sub-menu div
          aria-label={`Toggle ${item.name} submenu`} // Clear label for screen readers
        >
          {item.name} {/* The text of the toggle button */}
          <span
            className={`transform transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true" // Hide the decorative arrow from screen readers
          >
            ▼
          </span>
        </button>

        <div
          id={`services-menu-${item.name.replace(/\s+/g, "-").toLowerCase()}`} // ID must match aria-controls
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
          role="region" // Identifies this as a perceivable section of content
          aria-label={`${item.name} sub-navigation`} // Label for the sub-navigation region
          aria-live={servicesOpen ? "polite" : "off"} // Announce changes when the submenu opens (polite)
        >
          {item.subItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)} // Close the entire mobile drawer on sub-item click
              className={`block px-8 py-3 transition-colors font-inter ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-white text-[#e63a27]"
                  : "hover:bg-white hover:text-black"
              }`}
              aria-current={
                pathname === href || pathname.startsWith(href + "/")
                  ? "page" // Indicate the current page for screen readers
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Regular menu item (no sub-items)
  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)} // Close the entire mobile drawer on item click
      className={`block px-6 py-4 border-t border-white/20 last:border-b font-semibold transition-colors font-inter ${
        // Added font-semibold and font-inter for consistency
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "bg-white text-[#e63a27]" // Adjusted active state colors for consistency
          : "hover:bg-white hover:text-black"
      }`}
      aria-current={
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "page" // Indicate the current page for screen readers
          : undefined
      }
    >
      {item.name}
    </Link>
  );
}
