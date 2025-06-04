"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:13472216549",
    label: "Call SAS Roofing at 1-347-221-6549", // More specific label
    icon: <Phone size={24} aria-hidden="true" />, // Hide icon from screen readers
    text: "Call Us", // More action-oriented text
  },
  {
    href: "https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw",
    label: "View SAS Roofing's location on Google Maps (opens in new tab)", // Clarify new tab
    icon: <MapPin size={24} aria-hidden="true" />, // Hide icon from screen readers
    text: "Our Location", // More descriptive text
    external: true,
  },
  {
    href: "mailto:sascon09@yahoo.com?subject=Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    label: "Email SAS Roofing at sascon09@yahoo.com", // More specific label
    icon: <Mail size={24} aria-hidden="true" />, // Hide icon from screen readers
    text: "Email Us", // More action-oriented text
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Mobile contact navigation bar" // Slightly more descriptive label
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#e63a27] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, label, icon, text, external }, index) => (
      <Link
        key={index} // Using index as key is acceptable here as the list is static
        href={href}
        aria-label={label}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors font-inter"
      >
        {icon}
        {/* The span content is visible, so the aria-label on the Link is the primary announcement. */}
        {/* This text is a visual label that supports the icon for sighted users. */}
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
