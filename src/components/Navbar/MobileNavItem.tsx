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
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openDropdown: string | null;
  setOpenDropdown: Dispatch<SetStateAction<string | null>>;
  pathname: string;
}

export default function MobileNavItem({
  item,
  setIsOpen,
  openDropdown,
  setOpenDropdown,
  pathname,
}: Props) {
  const isSubItemActive = item.subItems?.some(
    (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/")
  );
  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    isSubItemActive;

  const isOpenDropdown = openDropdown === item.name;
  const toggleSubmenu = () => {
    setOpenDropdown(isOpenDropdown ? null : item.name);
  };

  if (item.subItems) {
    return (
      <div
        className="border-t border-white/20 last:border-b font-inter"
        role="none"
      >
        <div className="flex items-center">
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex-1 px-6 py-4 text-left font-semibold transition-colors font-inter ${
              isActive
                ? "bg-white text-[#e63a27]"
                : "hover:bg-white hover:text-black"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={`${item.name} page link`}
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
            aria-expanded={isOpenDropdown}
            aria-controls={`submenu-${item.name
              .toLowerCase()
              .replace(/\s/g, "-")}`}
            aria-label={`Toggle ${item.name} submenu`}
          >
            <span
              className={`transform transition-transform duration-200 ${
                isOpenDropdown ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        </div>
        <div
          id={`submenu-${item.name.toLowerCase().replace(/\s/g, "-")}`}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            isOpenDropdown ? "max-h-96" : "max-h-0"
          }`}
          role="menu"
          aria-hidden={!isOpenDropdown}
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
              aria-label={`${name} page link`}
              role="menuitem"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)}
      className={`block px-6 py-4 border-t border-white/20 last:border-b transition-colors font-inter ${
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "bg-white text-[#e63a27]"
          : "hover:bg-white hover:text-black"
      }`}
      aria-current={
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "page"
          : undefined
      }
      aria-label={`${item.name} page link`}
    >
      {item.name}
    </Link>
  );
}
