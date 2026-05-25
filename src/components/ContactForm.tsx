"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  otherService?: string;
  message: string;
  captcha: string;
};

export default function ContactForm() {
  const { register, handleSubmit, watch, reset } = useForm<ContactFormData>();
  const selectedService = watch("service");
  const [captchaNumber, setCaptchaNumber] = useState<string>("");
  const [captchaInput, setCaptchaInput] = useState<string>("");

  // Generate random numeric CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomNum = Math.floor(Math.random() * 9000) + 1000; // 4-digit number
    setCaptchaNumber(randomNum.toString());
  };

  const onSubmit = async (data: ContactFormData) => {
    // Validate CAPTCHA
    if (captchaInput !== captchaNumber) {
      Swal.fire({
        icon: "error",
        title: "CAPTCHA Failed!",
        text: "The CAPTCHA code you entered is incorrect. Please try again.",
        confirmButtonColor: "#d33",
      });
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    const payload = {
      ...data,
      service: data.service === "other" ? data.otherService : data.service,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for your message. We will get back to you shortly.",
          confirmButtonColor: "#e63a27",
          background: "#fff",
        });
        reset();
        generateCaptcha();
        setCaptchaInput("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your connection and try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <section className="px-4 py-10 bg-white text-black">
      <div className="max-w-xl mx-auto p-6 md:p-10 border border-[#e63a27] rounded-xl shadow-md bg-white">
        <h1 className="text-2xl text-center font-bold text-[#e63a27] mb-6">
          GET A QUOTE
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          <input
            {...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 15,
              pattern: /^[0-9]+$/,
            })}
            type="tel"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-md"
          />

          <select
            {...register("service")}
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

          {selectedService === "other" && (
            <input
              {...register("otherService")}
              type="text"
              placeholder="Please specify other service"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          )}

          <textarea
            {...register("message")}
            rows={4}
            placeholder="Message"
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          {/* CAPTCHA Section */}
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Security Verification (CAPTCHA)
              </label>
              <div className="bg-white p-3 border-2 border-gray-400 rounded-md text-center mb-3 select-none cursor-default">
                <span className="text-2xl font-bold text-gray-800 tracking-widest">
                  {captchaNumber}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Enter the numbers above:
              </p>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter CAPTCHA"
                value={captchaInput}
                onChange={(e) =>
                  setCaptchaInput(e.target.value.replace(/[^0-9]/g, ""))
                }
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-center text-lg tracking-widest font-semibold focus:outline-none focus:border-[#e63a27]"
              />
            </div>
            <button
              type="button"
              onClick={generateCaptcha}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Generate New CAPTCHA
            </button>
          </div>

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
}
