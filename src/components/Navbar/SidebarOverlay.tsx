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

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
    otherService: "", // ✅ Added
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
    } else {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent = "";
      }
    }

    const submittedService =
      form.service === "other" ? form.otherService : form.service;

    console.log("Form submitted:", {
      ...form,
      service: submittedService,
    });

    // ✅ SweetAlert success message
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
        setForm((prevForm) => ({ ...prevForm, phoneNumber: value }));
      }
    },
    []
  );

  useEffect(() => {
    const currentAside = asideRef.current;
    if (currentAside) {
      initialFocusRef.current?.focus();
      const focusableElements = currentAside.querySelectorAll(
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

      currentAside.addEventListener("keydown", handleTabKey);
      const prevActiveElement = document.activeElement as HTMLElement | null;

      return () => {
        currentAside.removeEventListener("keydown", handleTabKey);
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
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start cursor-[url('/Navbar/white_cursor.png')_0_0,auto] font-inter"
    >
      <motion.aside
        ref={asideRef}
        onClick={(e) => e.stopPropagation()}
        className="w-[300px] sm:w-[340px] md:w-[360px] lg:w-[400px] xl:w-[420px] bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar menu"
          className="absolute top-4 right-4 text-white text-2xl z-20 focus:outline-none"
          ref={initialFocusRef}
        >
          <IoMdClose />
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link href="/" onClick={onClose}>
            <Image
              src="/Navbar/Logo.png"
              alt="SAS Roofing Company Logo"
              width={240}
              height={240}
              className="w-[180px] sm:w-[200px] md:w-[240px]"
              priority
            />
          </Link>
        </div>

        {/* About */}
        <section className="mb-6">
          <h1 className="text-lg font-bold mb-1">ABOUT US</h1>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-3" />
          <p className="text-sm leading-relaxed">
            With over three decades of proven success in quality Roofing
            services, Waterproofing and General contractors.
          </p>
        </section>

        {/* Free Quote Form */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-1">GET A FREE QUOTE</h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={15}
              pattern="[0-9]{10,15}"
              required
              className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <span
              id="phone-number-error-message"
              ref={phoneNumberErrorRef}
              role="alert"
              className="sr-only text-red-400"
            />

            {/* ✅ Service Dropdown */}
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value, otherService: "" })
              }
              required
              className="appearance-none p-3 font-semibold text-white bg-[#003269] border border-gray-300 w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            >
              <option value="" disabled>
                Service You Need
              </option>
              <option value="roofing">Roofing</option>
              <option value="waterproofing">Waterproofing</option>
              <option value="masonry">Masonry</option>
              <option value="general-contractors">General Contractors</option>
              <option value="other">Others</option> {/* ✅ Added */}
            </select>
            {form.service === "other" && (
              <input
                type="text"
                placeholder="Please specify other service"
                value={form.otherService}
                onChange={(e) =>
                  setForm({ ...form, otherService: e.target.value })
                }
                required
                className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27]"
              />
            )}

            <textarea
              rows={4}
              placeholder="Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="p-3 text-black bg-white outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] font-semibold py-3 hover:bg-[#e63a27] hover:text-white transition"
            >
              Book My Consultation
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-lg font-bold mb-1">CONTACT INFO</h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <ul className="text-sm space-y-3">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-[#e63a27] mt-1 shrink-0" />
              <address>552 Rugby Rd, Brooklyn, NY 11230</address>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-[#e63a27]" />
              <Link href="tel:+13472216549">Office: (347) 221-6549</Link>
            </li>
            <li className="flex gap-3 items-center">
              <FaMobileAlt className="text-[#e63a27]" />
              <Link href="tel:+13473949384">Cell: (347) 394-9384</Link>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-[#e63a27]" />
              <Link href="mailto:amzadh78@gmail.com">amzadh78@gmail.com</Link>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.facebook.com/sasroofingwaterproofing",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                icon: <FaHome />,
              },
            ].map(({ href, icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition"
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
