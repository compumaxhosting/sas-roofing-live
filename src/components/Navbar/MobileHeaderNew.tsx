"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer"; // Assuming MobileDrawer handles its own accessibility

export default function MobileHeaderNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  useEffect(() => {
    // Control body overflow when drawer is open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!hasMounted) return null;

  return (
    <>
      <header
        className="relative flex h-[122px] w-full md:hidden bg-[#e63a27] font-inter overflow-hidden"
        role="banner" // Indicates this is the main header of the page
        aria-label="Mobile Navigation Header" // Provides a descriptive label for the header region
      >
        {/* Blue Slanted Section - Primarily decorative, so screen readers can ignore it */}
        <div
          className="absolute top-0 left-0 h-full blue-diagonal bg-[#003269] z-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
          aria-hidden="true" // Hides purely decorative elements from screen readers
        />

        {/* Logo Link */}
        <Link
          href="/"
          className="absolute top-1/2 logo-container transform -translate-x-1/2 -translate-y-1/2 z-10 w-55 h-55 sm:w-60 sm:h-60"
          aria-label="Home - SAS Roofing & Waterproofing" // Clearly states the link's destination and context
          role="link" // Explicitly defines the element's role for assistive technologies
        >
          <Image
            src="/Navbar/Logo.png"
            fill
            alt="SAS Roofing & Waterproofing Company Logo" // More descriptive alt text for the logo
            className="object-contain drop-shadow-md"
            priority
          />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu" // Improved clarity for opening the menu
          aria-haspopup="dialog" // Indicates that activating this button opens a dialog (the MobileDrawer)
          aria-expanded={isOpen} // Communicates the current state of the menu (open/closed)
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/Navbar/menu4.webp"
            alt="Menu icon" // Concise and descriptive alt text for the icon
            width={28}
            height={28}
            className="object-contain"
            priority
          />
        </button>
      </header>

      {/* MobileDrawer is assumed to handle its own accessibility concerns like role="dialog", aria-modal, focus management, and close button */}
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
