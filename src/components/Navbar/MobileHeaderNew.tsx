"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer"; // Assuming this is your SidebarOverlay or similar drawer component

export default function MobileHeaderNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true after the component mounts
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Manage body scroll lock when the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    // Cleanup function to ensure scroll is restored even if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Optimization:
  // Instead of `if (!hasMounted) return null;`, which causes a flash of content
  // on hydration, it's generally better to render the static HTML immediately
  // and then only render the dynamic parts (like the drawer) after mounting.
  // However, given the nature of a mobile header that appears conditionally,
  // returning null on initial server render might be acceptable if the desktop
  // header is rendered instead. If this component is *always* rendered,
  // then removing `if (!hasMounted) return null;` might be better.
  // For this component, since it's `md:hidden`, it probably only renders on mobile,
  // so the `hasMounted` check might be less critical for FOUC and more for
  // avoiding hydration mismatches if it relies on client-side features immediately.
  // Let's keep it for now as it aligns with typical Next.js "use client" patterns
  // for components that strictly rely on client-side state/APIs.

  return (
    <>
      <header
        className="relative flex h-[122px] w-full md:hidden bg-[#e63a27] font-inter overflow-hidden"
        // Add a role for semantic clarity if needed, though a header is usually sufficient
        role="banner"
      >
        {/* Blue Slanted Section - Decorative background */}
        <div
          className="absolute top-0 left-0 h-full blue-diagonal bg-[#003269] z-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
          aria-hidden="true" // Hide decorative background from screen readers
        />

        {/* Logo Link */}
        <Link
          href="/"
          className="absolute top-1/2 logo-container transform -translate-x-1/2 -translate-y-1/2 z-10 w-55 h-55 sm:w-60 sm:h-60"
          aria-label="Go to Home page" // Explicit label for the logo link
        >
          <Image
            src="/Logo.png"
            fill
            alt="SAS Roofing Company Logo" // More descriptive alt text
            className="object-contain drop-shadow-md"
            priority
            sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 240px" // Add sizes for better performance
          />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile menu" // More specific label
          // aria-controls="mobile-drawer" // If your MobileDrawer has a unique ID, link it here
          // aria-expanded={isOpen} // Button will *open* the drawer, so aria-expanded would reflect the drawer's state
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/menu4.webp"
            alt="Menu icon" // More descriptive alt text for the icon
            width={28}
            height={28}
            className="object-contain"
            priority
            aria-hidden="true" // Hide the image itself if the button's aria-label is sufficient
            // If the image is the *only* content of the button, you might omit aria-hidden,
            // but the `alt` text is then what the screen reader would announce for the button.
            // With an `aria-label` on the button, it's safer to hide the image to avoid redundancy.
          />
        </button>
      </header>

      {/* Mobile Drawer (Dialog component) */}
      {hasMounted && ( // Only render the drawer on the client side after mounting
        <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}
