"use client";

import React, { useState, useCallback } from "react";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceAndFaqSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target as HTMLFormElement;
    const nameInput = formElement.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = formElement.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const messageTextarea = formElement.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const submittedService = service === "other" ? otherService : service;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumber,
      service: submittedService,
      message: messageTextarea.value,
    };

    console.log("Form submitted with data:", formData);

    Swal.fire({
      title: "Success!",
      text: "Thank you for your message! We will get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#e63a27",
    });

    formElement.reset();
    setPhoneNumber("");
    setService("");
    setOtherService("");
    setIsSubmitting(false);
  };

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 15) {
        setPhoneNumber(value);
      }
    },
    []
  );

  return (
    <section
      className="relative w-full lg:h-[100vh] md:pt-5 pb-24 bg-[#f9f9f9] overflow-hidden md:border-t md:border-black/40 mb-10 md:mb-15 shadow-2xl"
      aria-labelledby="main-section-heading"
    >
      <div className="absolute inset-0 hidden lg:flex z-0" aria-hidden="true">
        <div className="w-[30%] bg-[#e63a27]" />
        <div className="w-[70%] bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left">
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl grid gap-4 text-base mb-12 lg:mb-0"
          aria-labelledby="form-heading"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#e63a27]" aria-hidden="true" />
            <p className="uppercase text-[#e63a27] font-semibold tracking-wide">
              Book A Service
            </p>
          </div>
          <h2
            id="form-heading"
            className="text-4xl lg:text-5xl font-bold text-[#003269]"
          >
            Free Estimation
          </h2>
          <p className="text-gray-500">
            Please fill out the form and provide details of your request.
          </p>

          <div className="space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              autoComplete="name"
              className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
              autoComplete="email"
              className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            />
            <input
              id="phone"
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={15}
              pattern="[0-9]{10,15}"
              title="Please enter between 10 and 15 digits"
              required
              autoComplete="tel-national"
              className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            />

            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="appearance-none p-3 rounded-md font-semibold text-white bg-[#003269] border border-gray-300 w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            >
              <option value="" disabled>
                Service You Need
              </option>
              <option value="roofing">Roofing</option>
              <option value="waterproofing">Waterproofing</option>
              <option value="masonry">Masonry</option>
              <option value="general-contractors">General Contractors</option>
              <option value="other">Others</option>
            </select>

            {service === "other" && (
              <input
                type="text"
                placeholder="Please specify other service"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
                required
              />
            )}

            <textarea
              id="message"
              name="message"
              placeholder="Your Requirements..."
              rows={4}
              required
              className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition focus:outline-none disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Book My Consultation"}
          </button>
        </motion.form>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-xl"
        >
          <FaqSection />
        </motion.div>
      </div>
    </section>
  );
}
