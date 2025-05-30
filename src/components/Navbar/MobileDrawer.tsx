"use client";

import { KeyboardEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa"; // Assuming FaHome is for Houzz or similar
import MobileNavItem from "./MobileNavItem"; // Ensure this path is correct
import { usePathname } from "next/navigation";

//updated for narrator

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active link styling

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    {
      name: "SERVICES",
      href: "/services", // This href is for the main services page, if it exists
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
      icon: <FaFacebookF className="text-white text-lg" aria-hidden="true" />, // Added aria-hidden
      label: "Visit our Facebook page", // More descriptive label
    },
    {
      href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      icon: <FaHome className="text-white text-lg" aria-hidden="true" />, // Added aria-hidden
      label: "Visit our Houzz profile", // More descriptive label
    },
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    // Allows closing the drawer with the Escape key
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    // Outer overlay for the drawer. Handles click outside to close and Escape key.
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={-1} // Makes the div focusable for keyboard events
      role="presentation" // Indicates it's a structural element, not interactive itself
    >
      {/* Clickable backdrop to close the drawer */}
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        role="button" // Indicates it's a clickable element
        tabIndex={0} // Makes it keyboard focusable
        aria-label="Close mobile menu" // Explicit label for screen readers
      />
      {/* The actual drawer content */}
      <div
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog" // Identifies this as a dialog (modal)
        aria-modal="true" // Indicates that content outside the dialog is inert
        aria-labelledby="mobile-menu-header" // Links to the header of the menu
        tabIndex={-1} // Allows programmatic focus, but not naturally tabbable
      >
        {/* Close button for the drawer */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu" // Clear label for screen readers
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          {/* Using a character for the close icon, ensure it's accessible */}
          <span aria-hidden="true">✕</span> {/* Hide character from screen readers, label on button */}
        </button>

        {/* Company Logo Link */}
        <Link href="/" className="flex justify-center p-4" aria-label="Go to home page">
          <Image
            src="/Logo.png"
            alt="Company_Logo"
            width={260}
            height={130}
            className="object-contain cursor-pointer"
            priority // Indicate high priority for loading
          />
        </Link>

        {/* Navigation Links */}
        <nav className="mt-4 font-inter" aria-label="Mobile Navigation"> {/* Added ARIA label for nav */}
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              isOpen={isOpen} // Passed for potential active states or drawer closing logic within MobileNavItem
              setIsOpen={setIsOpen} // Passed for closing the drawer from MobileNavItem
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              pathname={pathname} // Pass current path for active link styling
            />
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="mt-auto flex justify-center gap-4 py-6" role="contentinfo"> {/* role="contentinfo" for footer-like content */}
          {socialLinks.map(({ href, icon, label }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label={label} // Use the more descriptive label
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
