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

  const toggleSubmenu = () => setServicesOpen((prev) => !prev);

  if (item.subItems) {
    return (
      <div className="border-t border-white/20 last:border-b font-inter">
        {/*
          When subItems exist, the primary interaction is to toggle the submenu.
          The 'button' element is appropriate for this.
          The 'item.href' might still be a valid page, but it's often more intuitive
          for the parent in a nested menu to just be a toggle.
        */}
        <button
          onClick={toggleSubmenu}
          className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors font-inter ${
            isActive
              ? "bg-white text-[#e63a27]"
              : "hover:bg-white hover:text-black"
          }`}
          aria-expanded={servicesOpen}
          aria-controls={`services-menu-${item.name.replace(/\s+/g, "-")}`}
          aria-label={`Toggle ${item.name} submenu`}
        >
          {item.name} {/* The text of the toggle button */}
          <span
            className={`transform transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>

        <div
          id={`services-menu-${item.name.replace(/\s+/g, "-")}`}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
          role="region"
          aria-label={`${item.name} sub-navigation`}
          aria-live={servicesOpen ? "polite" : "off"}
        >
          {item.subItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
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
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Regular menu item (no sub-items), this remains unchanged
  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)}
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
    >
      {item.name}
    </Link>
  );
}
