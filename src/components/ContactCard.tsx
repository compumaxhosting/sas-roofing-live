"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import Link from "next/link"; // Import Link for Next.js routing or external links
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

interface ContactItem {
  icon: ReactNode;
  title: string;
  desc: string;
  content: string;
  type: "address" | "phone" | "email"; // Ensure this uses literal types
  link?: string; // Optional link for the primary action
  ariaLabel?: string; // Optional aria-label for the card or primary link
}

interface ContactCardProps {
  item: ContactItem;
  index: number;
  cardStyle: string;
  cardShadowStyle: CSSProperties;
  iconTab: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  item,
  index,
  cardStyle,
  cardShadowStyle,
  iconTab,
}) => {
  // Function to render content with active links based on type
  const renderContentWithLinks = (
    content: string,
    type: ContactItem["type"]
  ) => {
    // Split content by lines to process each part
    return content.split("\n").map((line, i) => {
      let linkedContent: ReactNode = line;
      // let lineAriaLabel = ""; // This variable was declared but not used, can be removed

      if (type === "phone" && line.includes(":")) {
        // Example: "OFFICE: (347) 394-9384" or "CELL: (347) 221-6549"
        const [label, number] = line.split(":", 2);
        const cleanedNumber = number.replace(/\D/g, ""); // Remove non-digits for tel: link
        linkedContent = (
          <Link
            href={`tel:+1${cleanedNumber}`}
            className="hover:underline text-[#003269] group-hover:text-white transition-colors"
            aria-label={`${label.trim()} phone number: ${number.trim()}`}
          >
            {line}
          </Link>
        );
      } else if (type === "email" && line.includes(":")) {
        // Example: "SUPPORT: sascon09@yahoo.com"
        const [label, email] = line.split(":", 2);
        linkedContent = (
          <Link
            href={`mailto:${email.trim()}?subject=Website Inquiry from ${
              item.title
            }`}
            className="hover:underline text-[#003269] group-hover:text-white transition-colors"
            aria-label={`${label.trim()} email address: ${email.trim()}`}
          >
            {line}
          </Link>
        );
      } else if (type === "address" && item.link) {
        // Check if item.link exists for address type
        // For address, if a link is provided to directions, make the whole content clickable
        // Or if you prefer, only link specific parts
        linkedContent = (
          <Link
            href={item.link}
            target="_blank" // Open in new tab for external map link
            rel="noopener noreferrer"
            className="hover:underline text-[#003269] group-hover:text-white transition-colors"
            aria-label={
              item.ariaLabel ||
              `Get directions to ${item.content.replace(/\n/g, ", ")}`
            }
          >
            {line}
          </Link>
        );
      }

      return (
        <React.Fragment key={i}>
          {linkedContent}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <motion.div
      className={cardStyle}
      style={cardShadowStyle}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      // Add aria-label if the entire card is meant to be actionable,
      // or if it provides a summary for screen readers.
      // Otherwise, the links within will handle their own labels.
      aria-label={item.ariaLabel}
    >
      <div className={iconTab} aria-hidden="true">
        {item.icon}
      </div>{" "}
      {/* Hide icon from screen readers */}
      <div className="mt-2 space-y-1">
        <h3 className="text-[#003269] font-semibold text-xl group-hover:text-white font-inter">
          {item.title}
        </h3>

        <p className="italic text-gray-600 group-hover:text-gray-300 font-bevietnam">
          {item.desc}
        </p>

        {/* Use <address> only if the content is truly an address */}
        {item.type === "address" ? (
          <address className="not-italic text-gray-500 font-medium whitespace-pre-line group-hover:text-gray-300 font-bevietnam">
            {renderContentWithLinks(item.content, item.type)}
          </address>
        ) : (
          <p className="text-gray-500 font-medium whitespace-pre-line group-hover:text-gray-300 font-bevietnam">
            {renderContentWithLinks(item.content, item.type)}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;
