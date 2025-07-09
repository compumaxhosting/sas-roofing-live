"use client";
import { useState, useRef, useCallback } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
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

    console.log("Form submitted:", form);
    setForm({ name: "", email: "", phoneNumber: "", message: "" });
    alert("Thank you for your message! We will get back to you shortly.");
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
          GET A FREE QUOTE
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e63a27] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e63a27] outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={15}
            pattern="[0-9]{10,15}"
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e63a27] outline-none"
            aria-describedby="phone-number-error-message"
          />
          <span
            ref={phoneNumberErrorRef}
            id="phone-number-error-message"
            className="text-red-500 text-sm"
          />
          <textarea
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e63a27] outline-none"
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
