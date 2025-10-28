"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function generateRandomNumber(len = 6) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10);
  return s;
}

function createCaptchaDataUrl(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 180;
  canvas.height = 56;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // Background
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add some random rotated characters for extra difficulty
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

  // Noise lines
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.strokeStyle = `rgba(0,0,0,${0.08 + Math.random() * 0.12})`;
    ctx.lineWidth = 1 + Math.random() * 1.2;
    ctx.stroke();
  }

  // Dots
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

  // Captcha states
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const captchaLen = 6;

  const mountedRef = useRef(false);

  useEffect(() => {
    // generate on mount
    regenerateCaptcha();
    mountedRef.current = true;
  }, []);

  const regenerateCaptcha = () => {
    const num = generateRandomNumber(captchaLen);
    setCaptchaValue(num);
    setCaptchaImage(createCaptchaDataUrl(num));
    setCaptchaInput("");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate captcha first (client-side)
    if (captchaInput.trim() !== captchaValue) {
      setIsSubmitting(false);
      Swal.fire({
        icon: "error",
        title: "Captcha Incorrect",
        text: "Please enter the numbers shown in the captcha.",
        confirmButtonColor: "#e63a27",
      });
      // regenerate to avoid brute-force attempts
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
        headers: { "Content-Type": "application/json" },
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
        // regenerate captcha after successful submit
        regenerateCaptcha();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Send",
          text: result.error || "Something went wrong. Please try again.",
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
      className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl grid gap-4 text-base mb-12 lg:mb-0"
      aria-labelledby="form-heading"
      // prevent copying from the form (extra measure)
      onCopy={(e) => {
        // only block copy when it's coming from the captcha area
        e.preventDefault();
      }}
    >
      {/* Heading */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-[3px] bg-[#e63a27]" aria-hidden="true" />
        <p className="uppercase text-[#e63a27] font-semibold tracking-wide">
          Book A Service
        </p>
      </div>
      <h1
        id="form-heading"
        className="text-4xl lg:text-5xl font-bold text-[#003269]"
      >
        Free Estimation
      </h1>
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

        {/* Captcha block */}
        <div className="grid gap-3">
          {/* Captcha image + refresh */}
          <div
            className="flex flex-col items-start gap-2 bg-white p-3 rounded-md border border-gray-300 w-full"
            style={{ userSelect: "none" }}
            aria-hidden
          >
            {captchaImage ? (
              <Image
                src={captchaImage}
                alt="CAPTCHA"
                width={128}
                height={48}
                className="select-none border border-gray-300 rounded-md object-cover"
              />
            ) : (
              <div className="w-40 h-12 flex items-center justify-center">
                Loading...
              </div>
            )}

            <button
              type="button"
              onClick={regenerateCaptcha}
              aria-label="Refresh Captcha"
              className="px-3 py-1 text-sm font-semibold text-[#e63a27] border border-[#e63a27] rounded-md hover:bg-[#e63a27] hover:text-white transition"
            >
              Refresh Captcha
            </button>
          </div>

          {/* Captcha input */}
          <input
            id="captchaInput"
            name="captchaInput"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter numbers"
            required
            maxLength={captchaLen}
            inputMode="numeric"
            pattern={`\\d{${captchaLen}}`}
            title={`Enter the ${captchaLen} digits shown`}
            className="p-3 border border-gray-300 bg-white rounded-md w-full focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition focus:outline-none disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Book My Consultation"}
      </button>
    </motion.form>
  );
}
