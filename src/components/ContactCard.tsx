"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
// No direct Link import needed here if only external links/tel/mailto are used
// If you plan to link to internal pages dynamically, then `Link` from 'next/link' would be used.

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
  content: string; // e.g., "552 Rugby Rd\nBrooklyn NY 11230" or "OFFICE: (347) 394-9384\nCELL: (347) 221-6549"
}

interface ContactCardProps {
  item: ContactItem;
  index: number;
  cardStyle: string;
  cardShadowStyle: CSSProperties;
  iconTab: string;
}
//updated for narrator
const ContactCard: React.FC<ContactCardProps> = ({
  item,
  index,
  cardStyle,
  cardShadowStyle,
  iconTab,
}) => {
  // Function to parse the content string and render interactive links
  const renderContent = (contentString: string) => {
    const lines = contentString.split("\n");
    return lines.map((line, idx) => {
      // Check for phone numbers: (XXX) XXX-XXXX, XXX-XXX-XXXX, or XXX.XXX.XXXX
      const phoneMatch = line.match(
        /(OFFICE|CELL):\s*(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/
      );
      if (phoneMatch) {
        const type = phoneMatch[1]; // "OFFICE" or "CELL"
        const number = phoneMatch[2]; // The full matched number string
        const cleanNumber = number.replace(/\D/g, ""); // Remove non-digits for tel: link
        return (
          <p
            key={idx}
            // Apply group hover to the paragraph itself, to affect children
            className="text-gray-500 font-medium group-hover:text-gray-300 font-bevietnam"
          >
            <strong className="">
              {" "}
              {/* Apply underline on hover to strong */}
              {type}:
            </strong>{" "}
            <a
              href={`tel:${cleanNumber}`}
              aria-label={`Call ${type} at ${number}`} // Explicit label for screen readers
              className="" // Apply underline on hover to anchor
            >
              {number}
            </a>
          </p>
        );
      }

      // Check for email addresses
      const emailMatch = line.match(
        /(SUPPORT):\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
      );
      if (emailMatch) {
        const type = emailMatch[1]; // "SUPPORT"
        const email = emailMatch[2]; // The full matched email string
        return (
          <p
            key={idx}
            // Apply group hover to the paragraph itself, to affect children
            className="text-gray-500 font-medium group-hover:text-gray-300 font-bevietnam"
          >
            <strong className="">
              {" "}
              {/* Apply underline on hover to strong */}
              {type}:
            </strong>{" "}
            <a
              href={`mailto:${email}`}
              aria-label={`Send email to ${type} at ${email}`} // Explicit label for screen readers
              className="" // Apply underline on hover to anchor
            >
              {email}
            </a>
          </p>
        );
      }

      // For addresses or other text that isn't a direct tel/mailto link
      // For addresses, using <address> tag provides semantic meaning.
      if (item.title === "Visit Our Office") {
        return (
          <address
            key={idx}
            className="not-italic text-gray-500 font-medium group-hover:text-gray-300 font-bevietnam"
          >
            {line}
          </address>
        );
      }

      return <p key={idx}>{line}</p>; // Default for other text
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
      role="region"
      aria-labelledby={`contact-card-title-${index}`}
    >
      <div className={iconTab} aria-hidden="true">
        {item.icon}
      </div>

      <div className="mt-2 space-y-1">
        <h3
          id={`contact-card-title-${index}`}
          className="text-[#003269] font-semibold text-xl group-hover:text-white font-inter"
        >
          {item.title}
        </h3>

        <p className="italic text-gray-600 group-hover:text-gray-300 font-bevietnam">
          {item.desc}
        </p>

        <div className="whitespace-pre-line">{renderContent(item.content)}</div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
