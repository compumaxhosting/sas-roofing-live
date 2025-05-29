"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:13472216549",
    label: "Call SAS Roofing main number", // More specific label
    icon: <Phone size={24} aria-hidden="true" />, // Added aria-hidden
    text: "Phone",
  },
  {
    // Ensure this URL is your correct Google Maps link for better UX
    href: "https://maps.app.goo.gl/o6jL1bE8mQvotrZX6", // Example of a valid link
    label: "View SAS Roofing location on Google Maps (opens in a new tab)", // Refined label
    icon: <MapPin size={24} aria-hidden="true" />, // Added aria-hidden
    text: "Location",
    external: true,
  },
  {
    href: "mailto:sascon09@yahoo.com?subject=Website Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    label: "Send email to SAS Roofing support", // More specific label
    icon: <Mail size={24} aria-hidden="true" />, // Added aria-hidden
    text: "Email",
  },
];
//updated for narrator
const ContactBar: React.FC = () => (
  <nav
    role="navigation" // This is already good, explicitly defining navigation landmark
    aria-label="Mobile contact actions" // More specific label for the nav landmark
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#e63a27] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, label, icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={label}
        // Conditionally apply target and rel attributes for external links
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors font-inter"
      >
        {icon}
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
