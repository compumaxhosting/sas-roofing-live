"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:13472216549",
    ariaLabel: "Call SAS Roofing at 1-347-221-6549",
    Icon: Phone,
    text: "Call Us",
  },
  {
    href: "https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw",
    ariaLabel: "View SAS Roofing's location on Google Maps (opens in new tab)",
    Icon: MapPin,
    text: "Our Location",
    external: true,
  },
  {
    href: "mailto:sascon09@yahoo.com?subject=Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    ariaLabel: "Email SAS Roofing at sascon09@yahoo.com",
    Icon: Mail,
    text: "Email Us",
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Mobile contact navigation"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#e63a27] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, ariaLabel, Icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#cc2a18] transition-colors font-inter"
      >
        <Icon size={24} aria-hidden="true" />
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
