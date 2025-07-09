"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties, JSX } from "react";
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
  content: string | JSX.Element; // <-- Updated here
  type: "address" | "phone" | "email";
  link?: string;
  ariaLabel?: string;
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
    content: string | JSX.Element,
    type: ContactItem["type"]
  ) => {
    if (typeof content !== "string") return content;

    return content.split("\n").map((line, i) => {
      let linkedContent: ReactNode = line;

      if (type === "phone" && line.includes(":")) {
        const [label, number] = line.split(":", 2);
        const cleanedNumber = number.replace(/\D/g, "");
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
        const [label, email] = line.split(":", 2);
        linkedContent = (
          <Link
            href={`mailto:${email.trim()}?subject=Website Inquiry from ${label.trim()}`}
            className="hover:underline text-[#003269] group-hover:text-white transition-colors"
            aria-label={`${label.trim()} email address: ${email.trim()}`}
          >
            {line}
          </Link>
        );
      } else if (
        type === "address" &&
        typeof content === "string" &&
        item.link
      ) {
        linkedContent = (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#003269] group-hover:text-white transition-colors"
            aria-label={item.ariaLabel || `Get directions to ${item.content}`}
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
        <h1 className="text-[#003269] font-semibold text-xl group-hover:text-white font-inter">
          {item.title}
        </h1>

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
