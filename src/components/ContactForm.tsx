"use client";

import { useState, useRef, useCallback } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
    otherService: "",
  });

  const phoneNumberErrorRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.phoneNumber.length < 10 || form.phoneNumber.length > 15) {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent =
          "Please enter a phone number between 10 and 15 digits.";
      }
      return;
    } else {
      if (phoneNumberErrorRef.current) {
        phoneNumberErrorRef.current.textContent = "";
      }
    }

    const submittedService =
      form.service === "other" ? form.otherService : form.service;

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phoneNumber,
      message: form.message,
      service: submittedService,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
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
      } else {
        throw new Error(result.error || "Failed to send email.");
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#e63a27",
        background: "#fff",
      });
    }
  };

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 15) {
        setForm((prev) => ({ ...prev, phoneNumber: value }));
      }
    },
    []
  );

  return (
    <section className="px-4 py-10 bg-white text-black">
      <div className="max-w-xl mx-auto p-6 md:p-10 border border-[#e63a27] rounded-xl shadow-md bg-white">
        <h2 className="text-2xl text-center font-bold text-[#e63a27] mb-6">
          GET A QUOTE
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={15}
            required
            className="p-3 border border-gray-300 rounded-md"
            aria-describedby="phone-number-error-message"
          />
          <span
            ref={phoneNumberErrorRef}
            id="phone-number-error-message"
            className="text-red-500 text-sm"
          />
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md"
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

          {form.service === "other" && (
            <input
              type="text"
              placeholder="Please specify other service"
              value={form.otherService}
              onChange={(e) =>
                setForm({ ...form, otherService: e.target.value })
              }
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          )}

          <textarea
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="bg-[#e63a27] text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
          >
            Book My Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
