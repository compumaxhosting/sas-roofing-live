"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface Props {
  item: NavItem;
  isOpen: boolean; // Not directly used in this component, but passed down, so kept for type safety
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  servicesOpen: boolean;
  setServicesOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string; // Removed this prop as usePathname is called directly
}

export default function MobileNavItem({
  item,
  setIsOpen,
  servicesOpen,
  setServicesOpen,
}: Props) {
  const pathname = usePathname();

  // Determine if the current item or any of its sub-items are active
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
      <div
        className="border-t border-white/20 last:border-b font-inter"
        role="none" // Indicate that this div is purely for styling and does not have a semantic role
      >
        <div className="flex items-center">
          {" "}
          {/* New wrapper for link and button */}
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)} // Close drawer when main link is clicked
            className={`flex-1 px-6 py-4 text-left font-semibold transition-colors font-inter ${
              isActive
                ? "bg-white text-[#e63a27]"
                : "hover:bg-white hover:text-black"
            }`}
            aria-current={isActive ? "page" : undefined} // Indicate current page for active link
            aria-label={`${item.name} page link`} // Explicit label for the link
          >
            {item.name}
          </Link>
          <button
            onClick={toggleSubmenu}
            className={`px-4 py-4 font-semibold transition-colors font-inter ${
              isActive
                ? "bg-white text-[#e63a27]"
                : "hover:bg-white hover:text-black"
            }`}
            aria-expanded={servicesOpen} // Communicates if the submenu is expanded or collapsed
            aria-controls={`submenu-${item.name
              .toLowerCase()
              .replace(/\s/g, "-")}`} // Link to the submenu div via its ID
            aria-label={`Toggle ${item.name} submenu`} // Explicit label for the toggle button
          >
            <span
              className={`transform transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true" // Decorative arrow, hidden from screen readers as button has label
            >
              ▼
            </span>
          </button>
        </div>
        <div
          id={`submenu-${item.name.toLowerCase().replace(/\s/g, "-")}`} // Unique ID for the submenu div
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
          role="menu" // Indicates this is a menu for screen readers
          aria-hidden={!servicesOpen} // Hides the submenu from screen readers when collapsed
        >
          {item.subItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)} // Close drawer when a sub-item is clicked
              className={`block px-8 py-3 transition-colors font-inter ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-white text-[#e63a27]"
                  : "hover:bg-white hover:text-black"
              }`}
              aria-current={
                pathname === href || pathname.startsWith(href + "/")
                  ? "page"
                  : undefined
              } // Indicate active sub-link
              aria-label={`${name} page link`} // Explicit label for each sub-link
              role="menuitem" // Indicates this is an item within the menu
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Regular nav item (no sub-items)
  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)} // Close drawer when a regular link is clicked
      className={`block px-6 py-4 border-t border-white/20 last:border-b transition-colors font-inter ${
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "bg-white text-[#e63a27]" // Adjusted active style for consistency
          : "hover:bg-white hover:text-black"
      }`}
      aria-current={
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "page"
          : undefined
      } // Indicate current page for active link
      aria-label={`${item.name} page link`} // Explicit label for the link
    >
      {item.name}
    </Link>
  );
}
