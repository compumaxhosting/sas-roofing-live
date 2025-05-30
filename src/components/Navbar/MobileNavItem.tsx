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
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  servicesOpen: boolean;
  setServicesOpen: Dispatch<SetStateAction<boolean>>;
  // No need for 'isOpen' prop here if it's not being used directly in MobileNavItem's logic.
  // The MobileDrawer component was passing it, but it wasn't consumed here.
  // If you decide to use it in MobileNavItem for some reason (e.g., specific styling based on overall drawer state), then add it back.
}

export default function MobileNavItem({
  item,
  setIsOpen,
  servicesOpen,
  setServicesOpen,
}: Props) {
  const pathname = usePathname();

  const isSubItemActive = item.subItems?.some(
    (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/")
  );
  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    isSubItemActive;

  const toggleSubmenu = () => {
    // Only toggle if this specific item is the "SERVICES" item
    // This prevents other items from accidentally triggering the services submenu
    if (item.name === "SERVICES") {
      setServicesOpen((prev) => !prev);
    }
  };

  if (item.subItems) {
    return (
      <div
        className="border-t border-white/20 last:border-b font-inter"
        role="none"
      >
        {" "}
        {/* Added role="none" */}
        {/*
          For a mobile menu, it's often better to have the primary link (e.g., "SERVICES")
          also be clickable to its main page, AND have a separate toggle for the submenu.
          However, your current setup uses the button as the primary interaction.
          If 'item.href' for "SERVICES" leads to a valid page, consider making the button
          also a Link or adding a separate Link within the button.
          For now, keeping it as a button that toggles the submenu, and if there's
          a main services page, the link will be handled separately (as it was in your NavLinks).
        */}
        <button
          onClick={toggleSubmenu}
          className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors font-inter ${
            isActive
              ? "bg-white text-[#e63a27]"
              : "hover:bg-white hover:text-black"
          }`}
          aria-expanded={servicesOpen}
          // The button text itself (`item.name`) already provides context, so the label is good.
          // Consider adding aria-haspopup="true" for explicit indication that it has a popup.
          aria-haspopup="true"
          aria-controls={`services-menu-${item.name.replace(/\s+/g, "-")}`}
          aria-label={`Toggle ${item.name} sub-menu`} // Changed "submenu" to "sub-menu" for consistency
          role="menuitem" // Indicates it's a menu item that controls a submenu
        >
          {item.name}
          <span
            className={`transform transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true" // Decorative, hide from screen readers
          >
            ▼
          </span>
        </button>
        <div
          id={`services-menu-${item.name.replace(/\s+/g, "-")}`}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
          role="menu" // Changed from "region" to "menu" for a submenu
          aria-label={`${item.name} sub-navigation links`} // More descriptive label
          // aria-live="polite" on a menu role is generally not needed, as focus will move into it.
          // Screen readers will announce the menu opening and its items naturally.
        >
          {item.subItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => {
                setIsOpen(false); // Close the main mobile drawer
                setServicesOpen(false); // Also close the services submenu
              }}
              className={`block px-8 py-3 transition-colors font-inter ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-white text-[#e63a27]"
                  : "hover:bg-white hover:text-black"
              }`}
              aria-current={
                pathname === href || pathname.startsWith(href + "/")
                  ? "page"
                  : undefined
              }
              role="menuitem" // Each sub-item is a menu item
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
      onClick={() => setIsOpen(false)} // Close the main mobile drawer when a link is clicked
      className={`block px-6 py-4 border-t border-white/20 last:border-b transition-colors ${
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "text-[#e63a27]"
          : "hover:bg-white hover:text-black"
      }`}
      aria-current={
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "page"
          : undefined
      }
      role="menuitem" // Each main navigation item is a menu item
    >
      {item.name}
    </Link>
  );
}
