"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  otherService?: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, watch, reset } = useForm<ContactFormData>();
  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
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
        <h2 className="text-2xl text-center font-bold text-[#e63a27] mb-6">
          GET A QUOTE
        </h2>
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
