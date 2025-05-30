"use client";

import {
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react"; // Added useEffect, useRef
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import MobileNavItem from "./MobileNavItem"; // Ensure this path is correct

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);
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
      icon: <FaFacebookF className="text-white text-lg" aria-hidden="true" />,
      label: "Visit our Facebook page",
    },
    {
      href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      icon: <FaHome className="text-white text-lg" aria-hidden="true" />,
      label: "Visit our Houzz profile",
    },
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    // Allows closing the drawer with the Escape key when focus is within the drawer or on the overlay
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Focus management for modal dialog
  useEffect(() => {
    if (isOpen) {
      // Set initial focus to the close button when the drawer opens
      closeButtonRef.current?.focus();
      // Disable scroll on the body when the drawer is open
      document.body.style.overflow = "hidden";

      const handleTabKey = (e: globalThis.KeyboardEvent) => {
        if (e.key === "Tab" && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as NodeListOf<HTMLElement>;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        // Re-enable scroll when the drawer closes
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleTabKey);
      };
    } else {
      // Ensure body scroll is re-enabled if component unmounts or drawer closes unexpectedly
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    // Outer container for the drawer and its backdrop
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      // No tabIndex needed on this outer div if focus is managed within the dialog
      role="presentation" // Indicates it's a structural element for styling/positioning
    >
      {/* Clickable backdrop to close the drawer */}
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close mobile menu by clicking outside" // More specific label
      />
      {/* The actual drawer content */}
      <div
        ref={drawerRef} // Attach ref for focus management
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-header" // Links to the header of the menu
        // Initial focus handled by useEffect, no tabIndex needed here
      >
        {/* Close button for the drawer */}
        <button
          ref={closeButtonRef} // Attach ref for initial focus
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          <span aria-hidden="true">✕</span>
        </button>

        {/* Company Logo Link */}
        <Link
          href="/"
          className="flex justify-center p-4"
          aria-label="Go to home page"
        >
          <Image
            src="/Logo.png"
            alt="Company Logo, click to navigate to home page" // More descriptive alt text
            width={260}
            height={130}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="mt-4 font-inter" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              setIsOpen={setIsOpen}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              // The pathname is already available via usePathname in MobileNavItem, no need to pass it here
            />
          ))}
        </nav>

        {/* Social Media Links */}
        <div
          className="mt-auto flex justify-center gap-4 py-6"
          role="contentinfo"
        >
          {socialLinks.map(({ href, icon, label }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
