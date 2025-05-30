"use client";

import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect for focus management
import { IoMdClose } from "react-icons/io";
import {
  FaFacebookF,
  FaHome,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const asideRef = useRef<HTMLElement>(null); // Ref for the sidebar content
  const initialFocusRef = useRef<HTMLButtonElement>(null); // Ref for the first focusable element (Close button)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // In a real application, you'd send this data to a server
    // For demo, we'll just log and clear the form
    setForm({ name: "", email: "", message: "" });
    alert("Thank you for your message! We will get back to you shortly."); // Provide feedback
    // onClose(); // Consider closing the sidebar after submission
  };

  useEffect(() => {
    // Focus management when the sidebar opens
    if (asideRef.current) {
      initialFocusRef.current?.focus(); // Focus the close button when sidebar opens

      const focusableElements = asideRef.current.querySelectorAll(
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        } else if (e.key === "Escape") {
          onClose(); // Allow closing with Escape key
        }
      };

      asideRef.current.addEventListener("keydown", handleTabKey);

      // Save the previously focused element to return focus when closed
      const prevActiveElement = document.activeElement as HTMLElement | null;

      return () => {
        // Cleanup event listener
        // eslint-disable-next-line react-hooks/exhaustive-deps
        asideRef.current?.removeEventListener("keydown", handleTabKey);
        // Return focus to the element that opened the sidebar
        if (prevActiveElement) {
          prevActiveElement.focus();
        }
      };
    }
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Sidebar Menu" // Added for main dialog announcement
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start cursor-[url('/white_cursor.png')_0_0,auto] font-inter"
      // Using ref for the aside directly to manage focus.
      // The overlay div (this one) handles closing when clicking outside.
    >
      <motion.aside
        ref={asideRef} // Attach ref for focus management
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, x: -50 }} // Adjusted initial position for sidebar effect
        animate={{ opacity: 1, x: 0 }} // Adjusted animation for sidebar effect
        exit={{ opacity: 0, x: -50 }} // Adjusted exit animation for sidebar effect
        transition={{ duration: 0.3, ease: "easeOut" }} // Smoother transition
        aria-label="Sidebar Content" // Optional: if you want to explicitly label this section for finer navigation
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar menu" // More specific label
          className="absolute top-4 right-4 text-white text-2xl z-20" // Increased z-index
          ref={initialFocusRef} // Set this as the initial focus point
        >
          <IoMdClose aria-hidden="true" focusable="false" />{" "}
          {/* Icon is decorative */}
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link href="/" aria-label="Go to Home page">
            <Image
              src="/Logo.png"
              alt="SAS Roofing Company Logo" // More descriptive alt text
              width={240}
              height={240}
              className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
              priority // Likely to be visible immediately
            />
          </Link>
        </div>

        {/* About Section */}
        <section aria-labelledby="about-us-heading" className="mb-6">
          <h2
            id="about-us-heading"
            className="text-base md:text-lg font-bold mb-1 font-inter"
          >
            ABOUT US
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-3" aria-hidden="true" />{" "}
          {/* Decorative element */}
          <p className="text-sm md:text-sm leading-relaxed tracking-wide font-bevietnam">
            With over three decades of proven success in quality Roofing
            services, Waterproofing and General contractors.
          </p>
        </section>

        {/* Free Quote Form */}
        <section aria-labelledby="free-quote-heading" className="mb-6">
          <h2
            id="free-quote-heading"
            className="text-base md:text-lg font-bold mb-1 font-inter"
          >
            GET A FREE QUOTE
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" aria-hidden="true" />{" "}
          {/* Decorative element */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="name-input" className="sr-only">
              Name
            </label>{" "}
            {/* Hidden label for name */}
            <input
              id="name-input" // Linked to label
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none"
            />
            <label htmlFor="email-input" className="sr-only">
              Email
            </label>{" "}
            {/* Hidden label for email */}
            <input
              id="email-input" // Linked to label
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none"
            />
            <label htmlFor="message-textarea" className="sr-only">
              Message
            </label>{" "}
            {/* Hidden label for message */}
            <textarea
              id="message-textarea" // Linked to label
              rows={4}
              placeholder="Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none"
            />
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] font-semibold text-sm md:text-base py-3 hover:bg-[#e63a27] hover:text-white transition form-hover-button font-bevietnam"
              aria-label="Submit form for a free consultation" // More explicit action
            >
              Book My Consultation
            </button>
          </form>
        </section>

        {/* Contact Info & Social */}
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="text-base md:text-lg font-bold mb-1 font-inter"
          >
            CONTACT INFO
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" aria-hidden="true" />{" "}
          {/* Decorative element */}
          <ul className="text-sm space-y-3">
            <li className="flex gap-3 items-start font-bevietnam">
              <FaMapMarkerAlt
                className="text-[#e63a27] mt-1 shrink-0"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              <address>552 Rugby Rd, Brooklyn, NY 11230</address>{" "}
              {/* Use <address> for contact info */}
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaPhoneAlt
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              <Link
                href="tel:+13472216549"
                aria-label="Call office phone number 3 4 7 2 2 1 6 5 4 9"
              >
                Office: (347) 221-6549
              </Link>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaMobileAlt
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              <Link
                href="tel:+13473949384"
                aria-label="Call cell phone number 3 4 7 3 9 4 9 3 8 4"
              >
                Cell: (347) 394-9384
              </Link>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaEnvelope
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              <Link
                href="mailto:amzadh78@gmail.com"
                aria-label="Send email to A M Z A D H 7 8 at gmail dot com" // Spelled out for clarity
              >
                amzadh78@gmail.com
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.facebook.com/sasroofingwaterproofing",
                icon: <FaFacebookF aria-hidden="true" focusable="false" />, // Directly hide the icon within the object
                label: "Facebook",
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                icon: <FaHome aria-hidden="true" focusable="false" />, // Directly hide the icon within the object
                label: "Houzz",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit us on ${label} (opens in new tab)`} // Inform about new tab
                className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition"
              >
                {icon}
              </Link>
            ))}
          </div>
        </section>
      </motion.aside>
    </div>
  );
}
