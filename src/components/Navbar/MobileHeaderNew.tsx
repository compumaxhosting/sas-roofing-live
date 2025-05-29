"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer"; // Ensure this path is correct

export default function MobileHeaderNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Effect to ensure component is mounted on the client before rendering,
  // preventing hydration mismatches with client-side only features like MobileDrawer.
  useEffect(() => setHasMounted(true), []);

  // Effect to control body scroll when the mobile drawer is open/closed.
  // Prevents background scrolling when the drawer is active.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    // Cleanup function to reset overflow when component unmounts or isOpen changes.
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Render null on the server to prevent hydration errors,
  // and only render the component once it's mounted on the client.
  if (!hasMounted) return null;

  return (
    <>
      {/* Main container for the mobile header.
          role="banner" semantically identifies this as the main header of the document. */}
      <div
        className="relative flex h-[122px] w-full md:hidden bg-[#e63a27] font-inter overflow-hidden"
        role="banner"
      >
        {/* Blue Slanted Section - purely decorative, no ARIA needed */}
        <div
          className="absolute top-0 left-0 h-full blue-diagonal bg-[#003269] z-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
          aria-hidden="true" // Hide from screen readers as it's visual only
        />

        {/* Logo Link - positioned over the diagonal center */}
        <Link
          href="/"
          className="absolute top-1/2 logo-container transform -translate-x-1/2 -translate-y-1/2 z-10 w-55 h-55 sm:w-60 sm:h-60"
          aria-label="Go to home page" // Clear label for screen readers
        >
          <Image
            src="/Logo.png"
            fill
            alt="SAS Roofing & Waterproofing Company Logo" // More descriptive alt text
            className="object-contain drop-shadow-md"
            priority // Prioritize loading of the logo image
          />
        </Link>

        {/* Menu Button - opens the mobile drawer */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open main navigation menu" // More specific label for screen readers
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/menu4.webp"
            // alt="" // Removed alt text as aria-label on button is sufficient
            alt="Menu icon" // If you prefer an alt, make it descriptive of the icon itself
            width={28}
            height={28}
            className="object-contain"
            priority
            aria-hidden="true" // Hide the image from screen readers as the button has an aria-label
          />
        </button>
      </div>

      {/* Mobile Drawer component - conditionally rendered and controlled by isOpen state */}
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
