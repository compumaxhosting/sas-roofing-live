"use client";

import {
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import MobileNavItem from "./MobileNavItem";
import { usePathname } from "next/navigation";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    {
      name: "SERVICES",
      href: "/services",
      subItems: [
        { name: "Roofing", href: "/roofing-contractors-brooklyn" },
        {
          name: "Waterproofing",
          href: "/waterproofing-contractors-NY",
        },
        { name: "Masonry", href: "/masonry-services-brooklyn-ny" },
      ],
    },
    { name: "PROJECTS", href: "/projects" },
    {
      name: "TESTIMONIALS",
      href: "/reviews",
      subItems: [
        { name: "Customer Reviews", href: "/reviews" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    { name: "CONTACT US", href: "/contact-us" },
    { name: "BLOG", href: "/blog" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/sasroofingwaterproofing",
      icon: <FaFacebookF className="text-white text-lg" />,
      label: "Facebook page",
    },
    {
      href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      icon: <FaHome className="text-white text-lg" />,
      label: "Houzz profile",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      setIsOpen(false);
    } else if (e.key === "Tab" && isOpen && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      role="presentation"
      aria-hidden={!isOpen}
    >
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close menu by clicking outside"
      />
      <div
        ref={drawerRef}
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-header"
        tabIndex={-1}
      >
        <h1 id="mobile-menu-header" className="sr-only">
          Mobile Navigation
        </h1>

        <button
          ref={closeButtonRef}
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        <Link
          href="/"
          className="flex justify-center p-4"
          aria-label="Home page link"
        >
          <Image
            src="/Navbar/Logo.png"
            alt="SAS Roofing & Waterproofing Company Logo"
            width={260}
            height={130}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="mt-4 font-inter" aria-label="Main mobile navigation">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              pathname={pathname}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          ))}
        </nav>

        <div
          className="mt-auto flex justify-center gap-4 py-6"
          role="contentinfo"
          aria-label="Social media links"
        >
          {socialLinks.map(({ href, icon, label }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label={`Visit our ${label}`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
