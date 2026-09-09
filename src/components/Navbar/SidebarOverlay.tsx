"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
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
import React from "react";
import { FaTiktok } from "react-icons/fa6";

export default function SidebarOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
    otherService: "",
  });

  const asideRef = useRef<HTMLElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const phoneNumberErrorRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.phoneNumber.length < 10 || form.phoneNumber.length > 15) {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent =
          "Please enter a phone number between 10 and 15 digits.";
        phoneNumberErrorRef.current.focus();
      }
      return;
    }

    if (phoneNumberErrorRef.current) {
      phoneNumberErrorRef.current.textContent = "";
    }

    const submittedService =
      form.service === "other" ? form.otherService : form.service;

    console.log("Form submitted:", {
      ...form,
      service: submittedService,
    });

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for your message. We will get back to you shortly.",
      confirmButtonColor: "#e63a27",
      background: "#fff",
    });

    setForm({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      service: "",
      otherService: "",
    });
  };

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");

      if (value.length <= 15) {
        setForm((prevForm) => ({
          ...prevForm,
          phoneNumber: value,
        }));
      }
    },
    []
  );

  useEffect(() => {
    const currentAside = asideRef.current;

    if (!currentAside) return;

    const previousActiveElement =
      document.activeElement as HTMLElement | null;

    initialFocusRef.current?.focus();

    const focusableElements = currentAside.querySelectorAll<HTMLElement>(
      'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !firstElement || !lastElement) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    currentAside.addEventListener("keydown", handleKeyDown);

    return () => {
      currentAside.removeEventListener("keydown", handleKeyDown);

      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidebar-overlay-title"
      className="fixed inset-0 z-999 bg-black/70 flex justify-start cursor-[url('/Navbar/white_cursor.png')_0_0,auto] font-inter"
    >
      <motion.aside
        ref={asideRef}
        onClick={(e) => e.stopPropagation()}
        className="w-75 sm:w-85 md:w-90 lg:w-100 xl:w-105 bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar menu"
          className="absolute top-4 right-4 text-white text-2xl z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27]"
          ref={initialFocusRef}
        >
          <IoMdClose aria-hidden="true" focusable="false" />
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link href="/" onClick={onClose}>
            <Image
              src="/Navbar/Logo.png"
              alt="SAS Roofing Company Logo"
              width={240}
              height={240}
              className="w-45 sm:w-50 md:w-60"
              priority
            />
          </Link>
        </div>

        {/* About */}
        <section className="mb-6" aria-labelledby="sidebar-about-title">
          <h2
            id="sidebar-about-title"
            className="text-lg font-bold mb-1"
          >
            ABOUT US
          </h2>

          <div
            className="w-8 h-0.5 bg-[#e63a27] mb-3"
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed">
            With over three decades of proven success in quality Roofing
            services, Waterproofing and General contractors.
          </p>
        </section>

        {/* Free Quote Form */}
        <section
          className="mb-6"
          aria-labelledby="sidebar-overlay-title"
        >
          <h2
            id="sidebar-overlay-title"
            className="text-lg font-bold mb-1"
          >
            GET A FREE QUOTE
          </h2>

          <div
            className="w-8 h-0.5 bg-[#e63a27] mb-4"
            aria-hidden="true"
          />

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="sidebar-name"
                className="sr-only"
              >
                Name
              </label>

              <input
                id="sidebar-name"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                autoComplete="name"
                required
                className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="sidebar-email"
                className="sr-only"
              >
                Email
              </label>

              <input
                id="sidebar-email"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                autoComplete="email"
                required
                className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="sidebar-phone"
                className="sr-only"
              >
                Phone Number
              </label>

              <input
                id="sidebar-phone"
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={15}
                pattern="[0-9]{10,15}"
                title="Please enter between 10 and 15 digits"
                autoComplete="tel-national"
                aria-describedby="phone-number-error-message"
                required
                className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] w-full"
              />

              <span
                id="phone-number-error-message"
                ref={phoneNumberErrorRef}
                role="alert"
                tabIndex={-1}
                className="sr-only"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label
                htmlFor="sidebar-service"
                className="sr-only"
              >
                Service You Need
              </label>

              <select
                id="sidebar-service"
                name="service"
                value={form.service}
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value,
                    otherService: "",
                  })
                }
                required
                className="appearance-none p-3 font-semibold text-white bg-[#003269] border border-gray-300 w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
              >
                <option value="" disabled>
                  Service You Need
                </option>

                <option value="roofing">
                  Roofing
                </option>

                <option value="waterproofing">
                  Waterproofing
                </option>

                <option value="masonry">
                  Masonry
                </option>

                <option value="general-contractors">
                  General Contractors
                </option>

                <option value="other">
                  Others
                </option>
              </select>
            </div>

            {/* Other Service */}
            {form.service === "other" && (
              <div>
                <label
                  htmlFor="sidebar-other-service"
                  className="sr-only"
                >
                  Please specify other service
                </label>

                <input
                  id="sidebar-other-service"
                  type="text"
                  name="otherService"
                  placeholder="Please specify other service"
                  value={form.otherService}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      otherService: e.target.value,
                    })
                  }
                  required
                  className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] w-full"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label
                htmlFor="sidebar-message"
                className="sr-only"
              >
                Message
              </label>

              <textarea
                id="sidebar-message"
                name="message"
                rows={4}
                placeholder="Message..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                required
                className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27] w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] font-semibold py-3 hover:bg-[#e63a27] hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27]"
            >
              Book My Consultation
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section aria-labelledby="sidebar-contact-title">
          <h2
            id="sidebar-contact-title"
            className="text-lg font-bold mb-1"
          >
            CONTACT INFO
          </h2>

          <div
            className="w-8 h-0.5 bg-[#e63a27] mb-4"
            aria-hidden="true"
          />

          <ul className="text-sm space-y-3">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt
                className="text-[#e63a27] mt-1 shrink-0"
                aria-hidden="true"
                focusable="false"
              />

              <address>
                552 Rugby Rd, Brooklyn, NY 11230
              </address>
            </li>

            <li className="flex gap-3 items-center">
              <FaPhoneAlt
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />

              <Link href="tel:+13472216549">
                Office: (347) 221-6549
              </Link>
            </li>

            <li className="flex gap-3 items-center">
              <FaMobileAlt
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />

              <Link href="tel:+13473949384">
                Cell: (347) 394-9384
              </Link>
            </li>

            <li className="flex gap-3 items-center">
              <FaEnvelope
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />

              <Link href="mailto:amzadh78@gmail.com">
                amzadh78@gmail.com
              </Link>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.facebook.com/sasroofingwaterproofing",
                label: "Facebook",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                label: "Houzz",
                icon: <FaHome />,
              },
              {
                href: "https://www.tiktok.com/@sasroofingwaterproofing?lang=en",
                label: "TikTok",
                icon: <FaTiktok />,
              },
            ].map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {React.cloneElement(icon, {
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
