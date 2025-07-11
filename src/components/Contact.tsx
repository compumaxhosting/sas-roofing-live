"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const ContactCard = dynamic(() => import("./ContactCard"), { ssr: false });

const Contact = () => {
  const baseClass = `
    group bg-white p-6 pt-10 text-sm w-full
    flex flex-col gap-2 relative border border-gray-100
    hover:bg-black transition-colors duration-1000 ease-in-out
  `;

  const iconTab = `
    absolute top-[-16px] w-12 h-12 bg-[#e63a27] flex items-center justify-center
    before:content-[''] before:absolute before:top-0 before:right-0
    before:w-0 before:h-0 before:border-t-[16px] before:border-t-transparent
    before:border-l-[16px] before:border-l-red-900
    before:translate-x-[16px] before:-translate-y-[1px] font-inter
  `;

  const shadowStyle = {
    boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
    backgroundImage: "url(/VideoSec/thm-pattern-5.png)",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };

  const contactItems = [
    {
      icon: <MapPin className="text-white w-6 h-6" aria-hidden="true" />,
      title: "Visit Our Office",
      desc: "You're always welcome to stop by.",
      content: (
        <address>
          <a
            href="https://www.google.com/maps/search/552+Rugby+Rd+Brooklyn+NY+11230"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-blue-900 hover:underline"
          >
            552 Rugby Rd
            <br />
            Brooklyn, NY 11230
          </a>
        </address>
      ),
      type: "address" as const,
      ariaLabel: "Get directions to our Brooklyn office",
    },
    {
      icon: <Phone className="text-white w-6 h-6" aria-hidden="true" />,
      title: "Make a Call",
      desc: "We’re just a call away.",
      content: (
        <>
          <a
            href="tel:13473949384"
            className="block text-blue-900 hover:underline"
          >
            OFFICE: (347) 394-9384
          </a>
          <a
            href="tel:13472216549"
            className="block text-blue-900 hover:underline"
          >
            CELL: (347) 221-6549
          </a>
        </>
      ),
      type: "phone" as const,
      ariaLabel: "Call our office or mobile number",
    },
    {
      icon: <Mail className="text-white w-6 h-6" aria-hidden="true" />,
      title: "Send Email",
      desc: "Drop us a message anytime.",
      content: (
        <>
          <a
            href="mailto:sascon09@yahoo.com"
            className="block text-blue-900 hover:underline"
          >
            SUPPORT: sascon09@yahoo.com
          </a>
          <a
            href="mailto:amzadh78@gmail.com"
            className="block text-blue-900 hover:underline"
          >
            SUPPORT: amzadh78@gmail.com
          </a>
        </>
      ),
      type: "email" as const,
      ariaLabel: "Email our support team",
    },
  ];

  return (
    <section
      aria-labelledby="contact-section-heading"
      className="w-full flex flex-col items-center px-4 py-10 bg-white"
    >
      <h2 id="contact-section-heading" className="sr-only">
        Contact Information
      </h2>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        {contactItems.map((item, index) => (
          <ContactCard
            key={index}
            item={item}
            index={index}
            cardStyle={baseClass}
            cardShadowStyle={shadowStyle}
            iconTab={iconTab}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
