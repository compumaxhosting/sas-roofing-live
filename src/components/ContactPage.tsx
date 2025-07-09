"use client";

import ContactForm from "./ContactForm";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <section className="px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">
        {/* Left Side: Contact Form */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Right Side: Contact Info Cards */}
        <div className="w-full lg:w-1/2">
          <Contact />
        </div>
      </div>
    </section>
  );
}
