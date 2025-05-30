"use client";

import React, { useState, useCallback } from "react";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceAndFaqSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  // Add state for submission status and messages for better user feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    // Made async for fetch API call
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state
    setSubmitMessage(null); // Clear previous messages
    setIsError(false); // Reset error state

    const formElement = e.target as HTMLFormElement;

    // Correctly access the value of each input by casting to the specific element type
    const nameInput = formElement.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = formElement.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const serviceSelect = formElement.elements.namedItem(
      "service"
    ) as HTMLSelectElement;
    const messageTextarea = formElement.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumber, // This one comes from state, which is correct
      service: serviceSelect.value,
      message: messageTextarea.value,
    };

    console.log("Form submitted with data:", formData);

    // --- Resend Integration ---
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message! We will get back to you shortly."
        );
        setIsError(false);
        formElement.reset(); // Reset the form fields
        setPhoneNumber(""); // Also reset phone number state
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          errorData.error || "Failed to send message. Please try again."
        );
        setIsError(true);
        console.error("Server error:", errorData);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitMessage("An unexpected error occurred. Please try again later.");
      setIsError(true);
    } finally {
      setIsSubmitting(false); // End submitting state
    }
  };

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Allow only digits
      const value = e.target.value.replace(/\D/g, "");

      // Limit to a range between 10 and 15 digits
      if (value.length <= 15) {
        // Max length is 15
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
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name" // Ensure name attribute is present
                placeholder="Name"
                required
                autoComplete="name"
                className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email" // Ensure name attribute is present
                placeholder="Email Address"
                required
                autoComplete="email"
                className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              />
            </div>

            {/* Phone Number Input Field */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phoneNumber" // Added name for consistency with form data access
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={15} // Max length is 15
                // The pattern attribute is adjusted for the 10-15 digit range
                pattern="[0-9]{10,15}" // Requires between 10 and 15 digits
                title="Please enter between 10 and 15 digits"
                required
                autoComplete="tel-national"
                className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              />
            </div>

            <div>
              <label htmlFor="service" className="sr-only">
                Service You Need
              </label>
              <select
                id="service"
                name="service" // Ensure name attribute is present
                defaultValue=""
                required
                className="appearance-none p-3 rounded-md font-semibold text-white bg-[#003269] border border-gray-300 w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              >
                <option value="" disabled>
                  Service You Need
                </option>
                <option value="roofing">Roofing</option>
                <option value="waterproofing">Waterproofing</option>
                <option value="masonry">Masonry</option>
                <option value="general-contractors">General Contractors</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Requirements
              </label>
              <textarea
                id="message"
                name="message" // Ensure name attribute is present
                placeholder="Your Requirements..."
                rows={4}
                required
                className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
              />
            </div>
          </div>

          {/* Submission Feedback */}
          {submitMessage && (
            <p
              className={`text-center font-medium ${
                isError ? "text-red-600" : "text-green-600"
              }`}
            >
              {submitMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition hover-button focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] disabled:opacity-50 disabled:cursor-not-allowed"
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
