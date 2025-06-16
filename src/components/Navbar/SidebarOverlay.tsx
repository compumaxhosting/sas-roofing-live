"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react"; // Alias React's KeyboardEvent
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
import React from "react"; // Import React for React.cloneElement

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const asideRef = useRef<HTMLElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const phoneNumberErrorRef = useRef<HTMLSpanElement>(null); // Ref for phone number error message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side validation check for phone number length
    if (form.phoneNumber.length < 10 || form.phoneNumber.length > 15) {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent =
          "Please enter a phone number between 10 and 15 digits.";
        phoneNumberErrorRef.current.focus(); // Focus on the error message
      }
      return; // Stop form submission
    } else {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent = ""; // Clear error
      }
    }

    console.log("Form submitted:", form);
    // In a real application, you'd send this data to a server
    // For demo, we'll just log and clear the form
    setForm({ name: "", email: "", phoneNumber: "", message: "" });
    alert("Thank you for your message! We will get back to you shortly.");
    // onClose(); // Uncomment to close the sidebar after submission
  };

  // Handle phone number input changes with 10-15 digit limit
  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
      if (value.length <= 15) {
        setForm((prevForm) => ({ ...prevForm, phoneNumber: value }));
      }
    },
    []
  );

  useEffect(() => {
    const currentAside = asideRef.current;

    if (currentAside) {
      // Set initial focus when component mounts
      initialFocusRef.current?.focus();

      // Query for all focusable elements within the sidebar
      const focusableElements = currentAside.querySelectorAll(
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      // Type the event parameter as the native DOM KeyboardEvent
      const handleTabKey = (e: KeyboardEvent) => {
        // <--- CHANGE IS HERE: Use global KeyboardEvent
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // If Shift + Tab and focus is on the first element, move to the last
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            // If Tab and focus is on the last element, move to the first
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        } else if (e.key === "Escape") {
          onClose(); // Close sidebar on Escape key
        }
      };

      currentAside.addEventListener("keydown", handleTabKey);

      // Store the previously active element to return focus to it on close
      const prevActiveElement = document.activeElement as HTMLElement | null;

      return () => {
        currentAside.removeEventListener("keydown", handleTabKey);
        // Return focus to the element that triggered the sidebar opening
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
      aria-label="Sidebar Menu" // Label for the modal overlay itself
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start cursor-[url('/Navbar/white_cursor.png')_0_0,auto] font-inter"
      // Added aria-hidden and tabIndex for the overlay, which serves as a clickable backdrop
      aria-hidden={false} // This div is always visible when the component is mounted
      tabIndex={0} // Make the overlay focusable for click-to-close behavior with keyboard
    >
      <motion.aside
        ref={asideRef}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-label="Sidebar content and contact form" // A more descriptive label for the content inside
        role="document" // Indicates the main content area within the dialog
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar menu"
          className="absolute top-4 right-4 text-white text-2xl z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded-full p-1" // Added padding and rounded for better focus indication
          ref={initialFocusRef} // Set initial focus here
        >
          <IoMdClose aria-hidden="true" focusable="false" />{" "}
          {/* Icon is decorative */}
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link
            href="/"
            aria-label="Go to Home page"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
            onClick={onClose} // Close sidebar when logo is clicked
          >
            <Image
              src="/Navbar/Logo.png"
              alt="SAS Roofing Company Logo"
              width={240}
              height={240}
              className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
              priority
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
          {/* Decorative */}
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
          {/* Decorative */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="name-input" className="sr-only">
              Name
            </label>
            <input
              id="name-input"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              aria-required="true" // Explicitly indicate required field
            />

            <label htmlFor="email-input" className="sr-only">
              Email
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              aria-required="true" // Explicitly indicate required field
            />

            <label htmlFor="phone-input" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone-input"
              type="tel"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={15}
              pattern="[0-9]{10,15}"
              title="Please enter between 10 and 15 digits"
              required
              autoComplete="tel-national"
              className="p-3 text-sm md:text-base text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              aria-required="true" // Explicitly indicate required field
              aria-describedby="phone-number-format-info phone-number-error-message" // Link to format info and potential error
            />
            {/* Hidden span for accessibility to describe phone number format requirements */}
            <span id="phone-number-format-info" className="sr-only">
              Please enter between 10 and 15 digits for your phone number.
            </span>
            {/* Hidden span for accessibility to announce client-side validation errors */}
            <span
              id="phone-number-error-message"
              ref={phoneNumberErrorRef}
              role="alert"
              aria-live="polite"
              className="sr-only text-red-400"
            >
              {/* Error message will be populated here */}
            </span>

            <label htmlFor="message-textarea" className="sr-only">
              Message
            </label>
            <textarea
              id="message-textarea"
              rows={4}
              placeholder="Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              aria-required="true" // Explicitly indicate required field
            />
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] font-semibold text-sm md:text-base py-3 hover:bg-[#e63a27] hover:text-white transition form-hover-button font-bevietnam focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              aria-label="Submit form for a free consultation"
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
          {/* Decorative */}
          <ul className="text-sm space-y-3" role="list">
            {" "}
            {/* Explicitly state role="list" for clarity */}
            <li className="flex gap-3 items-start font-bevietnam">
              <FaMapMarkerAlt
                className="text-[#e63a27] mt-1 shrink-0"
                aria-hidden="true" // Icon is decorative
                focusable="false" // Ensure it's not focusable
              />
              <address>552 Rugby Rd, Brooklyn, NY 11230</address>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaPhoneAlt
                className="text-[#e63a27]"
                aria-hidden="true" // Icon is decorative
                focusable="false"
              />
              <Link
                href="tel:+13472216549"
                aria-label="Call office phone number 3 4 7 2 2 1 6 5 4 9"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
              >
                Office: (347) 221-6549
              </Link>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaMobileAlt
                className="text-[#e63a27]"
                aria-hidden="true" // Icon is decorative
                focusable="false"
              />
              <Link
                href="tel:+13473949384"
                aria-label="Call cell phone number 3 4 7 3 9 4 9 3 8 4"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
              >
                Cell: (347) 394-9384
              </Link>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaEnvelope
                className="text-[#e63a27]"
                aria-hidden="true" // Icon is decorative
                focusable="false"
              />
              <Link
                href="mailto:amzadh78@gmail.com"
                aria-label="Send email to A M Z A D H 7 8 at gmail dot com"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
              >
                amzadh78@gmail.com
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.facebook.com/sasroofingwaterproofing",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                icon: <FaHome />,
                label: "Houzz",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit us on ${label} (opens in new tab)`}
                className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                {/* The icon within the link is decorative, label is on the link */}
                {/* Clone the icon and add accessibility attributes */}
                {icon &&
                  React.cloneElement(icon, {
                    "aria-hidden": "true",
                    focusable: "false",
                  })}
              </Link>
            ))}
          </div>
        </section>
      </motion.aside>
    </div>
  );
}
