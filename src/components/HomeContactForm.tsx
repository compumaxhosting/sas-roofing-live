"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Generate random number string for CAPTCHA
function generateRandomNumber(len = 6) {
  let s = "";

  for (let i = 0; i < len; i++) {
    s += Math.floor(Math.random() * 10);
  }

  return s;
}

// Create simple numeric CAPTCHA as base64 image
function createCaptchaDataUrl(text: string) {
  const canvas = document.createElement("canvas");

  canvas.width = 180;
  canvas.height = 56;

  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  // Background
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add numbers with slight random rotation
  const charSpacing = 24;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    const x = 12 + i * charSpacing + Math.random() * 4 - 2;
    const y = canvas.height / 2 + (Math.random() * 6 - 3);
    const angle = (Math.random() * 8 - 4) * (Math.PI / 180);

    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.font = `${26 + Math.floor(Math.random() * 4)}px Arial`;
    ctx.fillStyle = "#003269";
    ctx.textBaseline = "middle";

    ctx.fillText(ch, 0, 0);

    ctx.restore();
  }

  // Add noise lines
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();

    ctx.moveTo(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );

    ctx.lineTo(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );

    ctx.strokeStyle = `rgba(0,0,0,${0.08 + Math.random() * 0.12})`;
    ctx.lineWidth = 1 + Math.random() * 1.2;

    ctx.stroke();
  }

  // Random dots
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();

    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      0.9,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(0,0,0,${0.06 + Math.random() * 0.12})`;

    ctx.fill();
  }

  return canvas.toDataURL("image/png");
}

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CAPTCHA states
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const captchaLen = 6;


  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    const num = generateRandomNumber(captchaLen);

    setCaptchaValue(num);
    setCaptchaImage(createCaptchaDataUrl(num));
    setCaptchaInput("");
  };

  const handlePhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "");

    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Validate CAPTCHA
    if (captchaInput.trim() !== captchaValue) {
      setIsSubmitting(false);

      Swal.fire({
        icon: "error",
        title: "Captcha Incorrect",
        text: "Please enter the numbers shown in the captcha.",
        confirmButtonColor: "#e63a27",
      });

      setTimeout(() => regenerateCaptcha(), 300);

      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber,
      service: service === "other" ? otherService : service,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your request has been sent successfully. We'll get back to you soon!",
          confirmButtonColor: "#e63a27",
        });

        form.reset();

        setPhoneNumber("");
        setService("");
        setOtherService("");
        setCaptchaInput("");

        regenerateCaptcha();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Send",
          text:
            result.error ||
            "Something went wrong. Please try again.",
          confirmButtonColor: "#e63a27",
        });

        regenerateCaptcha();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to send your message. Please try again later.",
        confirmButtonColor: "#e63a27",
      });

      console.error(error);

      regenerateCaptcha();
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
      className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl flex flex-col gap-4 text-base mb-12 lg:mb-0"
      aria-labelledby="form-heading"
    >
      {/* Heading */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-0.75 bg-[#e63a27]" aria-hidden="true" />

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

      {/* Name */}
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          autoComplete="name"
          className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          autoComplete="email"
          className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>

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
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="sr-only">
          Service You Need
        </label>

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
      </div>

      {/* Other Service */}
      {service === "other" && (
        <div>
          <label htmlFor="other-service" className="sr-only">
            Please specify other service
          </label>

          <input
            id="other-service"
            type="text"
            name="otherService"
            placeholder="Please specify other service"
            value={otherService}
            onChange={(e) => setOtherService(e.target.value)}
            className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
            required
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">
          Your Requirements
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Your Requirements..."
          rows={4}
          required
          className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
        />
      </div>

      {/* CAPTCHA Section */}
      <div className="flex flex-col gap-3" aria-labelledby="captcha-heading">
        <h3 id="captcha-heading" className="sr-only">
          Security Verification
        </h3>

        {/* CAPTCHA image + refresh button */}
        <div
          className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-300 w-full flex-wrap gap-3"
          style={{ userSelect: "none" }}
        >
          {captchaImage ? (
            <Image
              src={captchaImage}
              alt="CAPTCHA verification code"
              width={128}
              height={48}
              className="select-none border border-gray-300 rounded-md object-cover"
            />
          ) : (
            <div
              className="w-40 h-12 flex items-center justify-center text-gray-500"
              aria-live="polite"
            >
              Loading CAPTCHA...
            </div>
          )}

          <button
            type="button"
            onClick={regenerateCaptcha}
            aria-label="Generate a new CAPTCHA"
            className="px-3 py-1 text-sm font-semibold text-[#e63a27] border border-[#e63a27] rounded-md hover:bg-[#e63a27] hover:text-white transition whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27]"
          >
            Refresh Captcha
          </button>
        </div>

        {/* CAPTCHA Input */}
        <div>
          <label htmlFor="captchaInput" className="sr-only">
            Enter CAPTCHA verification code
          </label>

          <input
            id="captchaInput"
            name="captchaInput"
            type="text"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter numbers"
            required
            maxLength={captchaLen}
            inputMode="numeric"
            pattern={`\\d{${captchaLen}}`}
            title={`Enter the ${captchaLen} digits shown`}
            autoComplete="off"
            aria-describedby="captcha-instructions"
            className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
          />

          <p id="captcha-instructions" className="sr-only">
            Enter the six numbers displayed in the CAPTCHA image.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27] disabled:opacity-50 mt-2"
      >
        {isSubmitting ? "Sending..." : "Book My Consultation"}
      </button>
    </motion.form>
  );
}