"use client";

import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("📤 Sending data:", data); // Debugging log
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        reset();
      } else {
        alert("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("❌ Network error. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:ml-12">
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full border py-3 px-5"
        required
      />
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="w-full border py-3 px-5"
        required
      />
      <input
        {...register("phoneNumber")}
        placeholder="Phone"
        className="w-full border py-3 px-5"
      />
      <select
        {...register("service")}
        className="w-full border py-3 px-5 bg-white"
        required
      >
        <option value="">Select a Service</option>
        <option value="skylights">Skylights</option>
        <option value="waterproofing">Waterproofing</option>
        <option value="gutter-installation">Gutter Installation</option>
        <option value="roof-repair">Roof Repair</option>
        <option value="siding">Siding</option>
      </select>
      <textarea
        {...register("message")}
        placeholder="Message"
        rows={4}
        className="w-full border py-3 px-5"
      ></textarea>

      <button
        type="submit"
        className="bg-[#36454F] text-white py-3 px-8 hover:bg-[#2c3e50]"
      >
        Send Message
      </button>
    </form>
  );
}
