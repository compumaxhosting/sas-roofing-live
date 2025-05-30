"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:13472216549",
    // Improved label to be more explicit for screen readers
    label: "Call SAS Roofing at 347-221-6549",
    icon: <Phone size={24} />,
    text: "Phone",
  },
  {
    // It seems like this Google Maps link is a placeholder, as '0' isn't a valid location.
    // If it's intended to link to a specific location, replace '0' with actual coordinates or a place ID.
    // For now, I've kept the label as is but flagged it for your attention.
    href: "https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw",
    label: "View SAS Roofing location on Google Maps",
    icon: <MapPin size={24} />,
    text: "Location",
    external: true,
  },
  {
    href: "mailto:sascon09@yahoo.com?subject=Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    // Improved label to be more explicit for screen readers
    label: "Send an email to SAS Roofing",
    icon: <Mail size={24} />,
    text: "Email",
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Mobile contact navigation bar" // More specific aria-label for the navigation
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#e63a27] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, label, icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={label}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors font-inter"
      >
        {/* Use aria-hidden="true" for purely decorative icons so screen readers don't announce them redundantly. 
            The `aria-label` on the Link handles the accessibility. */}
        {<span aria-hidden="true">{icon}</span>}
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
