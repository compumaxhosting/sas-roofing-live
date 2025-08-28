"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber,
      service: service === "other" ? otherService : service,
      message: formData.get("message"),
    };

    console.log("Form submitted with data:", data);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        form.reset();
        setPhoneNumber("");
        setService("");
        setOtherService("");
      } else {
        setStatusMessage(
          `❌ Failed: ${result.error || "Something went wrong"}`
        );
      }
    } catch (error) {
      setStatusMessage("❌ Error: Unable to send message");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onSubmit={handleSubmit}
      className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl grid gap-4 text-base mb-12 lg:mb-0"
      aria-labelledby="form-heading"
    >
      {/* Heading */}
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

      {/* Inputs */}
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition focus:outline-none disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Book My Consultation"}
      </button>

      {/* Status Message */}
      {statusMessage && (
        <p className="text-center text-sm mt-2">{statusMessage}</p>
      )}
    </motion.form>
  );
}
