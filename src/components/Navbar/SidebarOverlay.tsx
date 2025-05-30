"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const asideRef = useRef<HTMLElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // In a real application, you'd send this data to a server
    // For demo, we'll just log and clear the form
    setForm({ name: "", email: "", phoneNumber: "", message: "" });
    alert("Thank you for your message! We will get back to you shortly.");
    // onClose();
  };

  // Handle phone number input changes with 10-15 digit limit
  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
      if (value.length <= 15) {
        // Limit to 15 digits
        setForm((prevForm) => ({ ...prevForm, phoneNumber: value }));
      }
    },
    []
  );

  useEffect(() => {
    // Capture the current ref value inside the effect
    const currentAside = asideRef.current;

    if (currentAside) {
      // Use the captured value
      initialFocusRef.current?.focus();

      const focusableElements = currentAside.querySelectorAll(
        // Use currentAside
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        } else if (e.key === "Escape") {
          onClose();
        }
      };

      currentAside.addEventListener("keydown", handleTabKey); // Use currentAside

      const prevActiveElement = document.activeElement as HTMLElement | null;

      return () => {
        currentAside.removeEventListener("keydown", handleTabKey); // Use currentAside in cleanup
        if (prevActiveElement) {
          prevActiveElement.focus();
        }
      };
    }
  }, [onClose]); // Dependency array is correct as it only needs onClose

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Sidebar Menu"
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start cursor-[url('/white_cursor.png')_0_0,auto] font-inter"
    >
      <motion.aside
        ref={asideRef}
        onClick={(e) => e.stopPropagation()}
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-label="Sidebar Content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar menu"
          className="absolute top-4 right-4 text-white text-2xl z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          ref={initialFocusRef}
        >
          <IoMdClose aria-hidden="true" focusable="false" />
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link
            href="/"
            aria-label="Go to Home page"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
          >
            <Image
              src="/Logo.png"
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
          <div className="w-8 h-[2px] bg-[#e63a27] mb-3" aria-hidden="true" />
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
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" aria-hidden="true" />
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
            />

            {/* Phone Number Input Field - Removed the extra div wrapper */}
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
            />

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
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" aria-hidden="true" />
          <ul className="text-sm space-y-3">
            <li className="flex gap-3 items-start font-bevietnam">
              <FaMapMarkerAlt
                className="text-[#e63a27] mt-1 shrink-0"
                aria-hidden="true"
                focusable="false"
              />
              <address>552 Rugby Rd, Brooklyn, NY 11230</address>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaPhoneAlt
                className="text-[#e63a27]"
                aria-hidden="true"
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
                aria-hidden="true"
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
                aria-hidden="true"
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
                icon: <FaFacebookF aria-hidden="true" focusable="false" />,
                label: "Facebook",
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                icon: <FaHome aria-hidden="true" focusable="false" />,
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
                {icon}
              </Link>
            ))}
          </div>
        </section>
      </motion.aside>
    </div>
  );
}
