"use client";

import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Image from "next/image";
import Link from "next/link";

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
          <div className="flex flex-col gap-6">
            <Contact />

            <Link
              href="https://g.page/r/Cdj4RS1sCCdVEBM/review"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2 border border-[#a89276]/30 bg-[#1a110b] p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#847361]">
                Review Us
              </div>

              {/* QR Code Container */}
              <div className="relative mx-auto my-4 aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-white p-2">
                <Image
                  src="/scanner-review.jpg"
                  alt="Scan to leave a review"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Yellow Call to Action Button */}
              <div className="rounded-xl border border-[#eab308]/20 bg-[#2d2312] px-3 py-3 text-center text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.1)] transition group-hover:bg-[#362a14]">
                <p className="flex items-center justify-center gap-1.5 text-sm font-bold leading-tight">
                  ★ Click or Scan
                </p>
                <p className="text-sm font-bold leading-tight">
                  to Leave a 5-Star
                </p>
                <p className="text-sm font-bold leading-tight">Review</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
