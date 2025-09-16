"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties, JSX } from "react";
import Link from "next/link";
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
  content: string | JSX.Element;
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
  const renderContentWithLinks = (
    content: string | JSX.Element,
    type: ContactItem["type"]
  ) => {
    if (typeof content !== "string") return content;

    return content.split("\n").map((line, i) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      if (type === "phone" && line.includes(":")) {
        const [label, number] = line.split(":", 2);
        const telLink = number.replace(/\D/g, "");
        return (
          <React.Fragment key={i}>
            <Link
              href={`tel:+1${telLink}`}
              className="hover:underline text-[#003269] group-hover:text-white transition-colors"
              aria-label={`${label.trim()} phone number: ${number.trim()}`}
            >
              {line}
            </Link>
            <br />
          </React.Fragment>
        );
      }

      if (type === "email" && line.includes(":")) {
        const [label, email] = line.split(":", 2);
        return (
          <React.Fragment key={i}>
            <Link
              href={`mailto:${email.trim()}?subject=Website Inquiry from ${label.trim()}`}
              className="hover:underline text-[#003269] group-hover:text-white transition-colors"
              aria-label={`${label.trim()} email address: ${email.trim()}`}
            >
              {line}
            </Link>
            <br />
          </React.Fragment>
        );
      }

      if (type === "address" && item.link) {
        return (
          <React.Fragment key={i}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#003269] group-hover:text-white transition-colors"
              aria-label={item.ariaLabel || `Get directions to ${line}`}
            >
              {line}
            </Link>
            <br />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <motion.article
      className={cardStyle}
      style={cardShadowStyle}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      aria-labelledby={`contact-title-${index}`}
      role="group"
    >
      <div className={iconTab} aria-hidden="true">
        {item.icon}
      </div>

      <div className="mt-2 space-y-1">
        <h1
          id={`contact-title-${index}`}
          className="text-[#003269] font-semibold text-xl group-hover:text-white font-inter"
        >
          {item.title}
        </h1>

        <p className="italic text-gray-600 group-hover:text-gray-300 font-bevietnam">
          {item.desc}
        </p>

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
    </motion.article>
  );
};

export default ContactCard;
