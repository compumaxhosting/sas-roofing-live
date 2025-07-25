"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";
import Link from "next/link";

export default function DesktopHeader({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <header className="relative z-50 hidden md:block">
      {/* Logo Section with clip-path */}
      <Link
        href="/"
        className="absolute left-0 top-0 h-full w-[410px] bg-[#003269] z-10 flex items-center justify-center [clip-path:polygon(0_0,100%_0,84%_100%,0%_100%)]"
        aria-label="Home link with company logo" // Added for screen readers
      >
        <Image
          src="/Navbar/Logo-SAS.png"
          alt="Company Logo" // Already good!
          width={326}
          height={154}
          className="object-contain cursor-pointer"
          priority
        />
      </Link>

      <TopBar />

      <nav
        className="flex justify-end items-center gap-5 px-6 bg-white shadow-md h-20"
        aria-label="Main navigation" // Added for screen readers
      >
        <NavLinks setSidebarOpen={setSidebarOpen} />
      </nav>
    </header>
  );
}
