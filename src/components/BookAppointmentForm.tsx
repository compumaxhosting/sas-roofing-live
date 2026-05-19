"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type AppointmentFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  otherService?: string;
  preferredDate?: string;
  message: string;
};

export default function BookAppointmentForm() {
  const { register, handleSubmit, watch, reset } =
    useForm<AppointmentFormData>();

  const selectedService = watch("service");

  const onSubmit = async (data: AppointmentFormData) => {
    const payload = {
      ...data,
      service: data.service === "other" ? data.otherService : data.service,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Appointment Requested!",
          text: "Our team will contact you shortly to confirm your appointment.",
          confirmButtonColor: "#e63a27",
          background: "#fff",
        });

        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: "Please try again later.",
          confirmButtonColor: "#d33",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet connection and try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <section className="px-4 py-12 bg-white text-black">
      <div className="max-w-2xl mx-auto border border-[#e63a27] rounded-2xl shadow-lg p-6 md:p-10 bg-white">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#e63a27] mb-3">
            Book Appointment
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Schedule your roofing, waterproofing, or masonry consultation with
            our experienced team. Fill out the form below and we’ll contact you
            shortly.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
          />

          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
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
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
          />

          <select
            {...register("service")}
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
          >
            <option value="" disabled>
              Select Service
            </option>

            <option value="roofing">Roofing</option>
            <option value="waterproofing">Waterproofing</option>
            <option value="masonry">Masonry</option>
            <option value="general-contractors">General Contractors</option>
            <option value="other">Other Service</option>
          </select>

          {selectedService === "other" && (
            <input
              {...register("otherService")}
              type="text"
              placeholder="Enter Service Name"
              required
              className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
            />
          )}

          <input
            {...register("preferredDate")}
            type="date"
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
          />

          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us about your project or issue..."
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-[#e63a27]"
          />

          <button
            type="submit"
            className="bg-[#e63a27] hover:bg-red-700 transition-all duration-300 text-white font-semibold py-3 rounded-md"
          >
            Book My Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
