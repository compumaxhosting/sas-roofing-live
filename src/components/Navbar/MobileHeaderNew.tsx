"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeaderNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!hasMounted) return null;

  return (
    <>
      <div className="relative flex h-[122px] w-full md:hidden bg-[#e63a27] font-inter overflow-hidden">
        {/* Blue Slanted Section */}
        <div
          className="absolute top-0 left-0 h-full blue-diagonal bg-[#003269] z-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
        />

        {/* Logo Positioned Over Diagonal Center */}
        <Link
          href="/"
          className="absolute top-1/2 logo-container transform -translate-x-1/2 -translate-y-1/2 z-10 w-45 h-45 sm:w-50 sm:h-50"
        >
          <Image
            src="/Logo.png"
            fill
            alt="Logo"
            className="object-contain drop-shadow-md"
            priority
          />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/menu4.webp"
            alt="Menu"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
        </button>
      </div>

      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
