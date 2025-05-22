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
  isOpen: boolean;
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
        <button
          onClick={toggleSubmenu}
          className={`w-full px-6 py-4 text-left flex justify-between items-center font-semibold transition-colors font-inter ${
            isActive
              ? "bg-white text-[#e63a27]"
              : "hover:bg-white hover:text-black"
          }`}
          aria-expanded={servicesOpen}
          aria-controls={`services-menu-${item.name}`}
        >
          <Link href={item.href}>{item.name}</Link>
          <span
            className={`transform transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          id={`services-menu-${item.name}`}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
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
      className={`block px-6 py-4 border-t border-white/20 last:border-b transition-colors ${
        pathname === item.href || pathname.startsWith(item.href + "/")
          ? "text-[#e63a27]"
          : "hover:bg-white hover:text-black"
      }`}
    >
      {item.name}
    </Link>
  );
}
