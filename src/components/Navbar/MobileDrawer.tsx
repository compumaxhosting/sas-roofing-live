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
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname(); // ← GET CURRENT PATH
  const drawerRef = useRef<HTMLDivElement>(null); // Ref for the drawer content
  const closeButtonRef = useRef<HTMLButtonElement>(null); // Ref for the close button

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
    { name: "TESTIMONIALS", href: "/reviews" },
    { name: "CONTACT US", href: "/contact-us" },
    { name: "BLOG", href: "/blog" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/sasroofingwaterproofing",
      icon: <FaFacebookF className="text-white text-lg" />,
      label: "Facebook page", // Added label for social link
    },
    {
      href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      icon: <FaHome className="text-white text-lg" />,
      label: "Houzz profile", // Added label for social link
    },
  ];

  // Effect to manage body scroll and initial focus when drawer opens/closes
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      // Set focus to the close button when the drawer opens
      // Using setTimeout to ensure the element is rendered and focusable
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    }
    return () => {
      document.body.style.overflow = "";
      // Optionally, return focus to the element that opened the drawer
      // For this example, we don't have direct access to the opener,
      // but in a real app, you'd store it and restore focus here.
    };
  }, [isOpen]);

  // Handle keyboard navigation (Escape to close, Tab for focus trapping)
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation(); // Prevent escape from affecting parent elements
      setIsOpen(false);
    } else if (e.key === "Tab" && isOpen && drawerRef.current) {
      // Basic focus trapping within the drawer
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        // If Shift + Tab and focus is on the first element, move to the last
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        // If Tab and focus is on the last element, move to the first
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    // Outer div for overlay and focus trapping
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      // tabIndex={-1} // Removed tabIndex from here, as the drawer itself should manage internal focus
      role="presentation" // Indicates this div is purely for presentation, not a functional role
      aria-hidden={!isOpen} // Hides the entire overlay when drawer is closed
    >
      {/* Overlay to click outside and close */}
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close menu by clicking outside" // Explicit label for this interactive overlay
      />
      {/* Drawer content */}
      <div
        ref={drawerRef} // Attach ref for focus management
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true" // Essential for modal dialogs: indicates content outside is inert
        aria-labelledby="mobile-menu-header" // Links to the heading for the dialog title
        tabIndex={-1} // Makes the drawer focusable programmatically, but not via Tab key initially
      >
        {/* Header for the dialog, to be referenced by aria-labelledby */}
        <h2 id="mobile-menu-header" className="sr-only">
          Mobile Navigation
        </h2>{" "}
        {/* Hidden but announced as the dialog title */}
        {/* Close Button */}
        <button
          ref={closeButtonRef} // Attach ref for initial focus
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu" // More specific label
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          ✕
        </button>
        {/* Logo Link */}
        <Link
          href="/"
          className="flex justify-center p-4"
          aria-label="Home page link"
        >
          <Image
            src="/Logo.png"
            alt="SAS Roofing & Waterproofing Company Logo" // Descriptive alt text
            width={260}
            height={130}
            className="object-contain"
            priority
          />
        </Link>
        {/* Navigation Menu */}
        <nav className="mt-4 font-inter" aria-label="Main mobile navigation">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              pathname={pathname}
            />
          ))}
        </nav>
        {/* Social Links */}
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
              aria-label={`Visit our ${label}`} // More descriptive label for each social link
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
