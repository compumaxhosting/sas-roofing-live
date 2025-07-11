"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviewLogos = [
  {
    alt: "Facebook",
    src: "/reviews/facebook.png",
    href: "https://www.facebook.com/kalapania78",
  },
  {
    alt: "Houzz",
    src: "/reviews/houzz.png",
    href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
  },
  {
    alt: "Yellow Pages",
    src: "/reviews/yp.png",
    href: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
  },
  {
    alt: "Yelp",
    src: "/reviews/yelp.png",
    href: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
  },
  {
    alt: "Google",
    src: "/reviews/google.png",
    href: "https://www.google.com/maps/place/SAS+Roofing+&+Waterproofing/@40.6359752,-73.9646363,17z",
  },
  {
    alt: "X (formerly Twitter)",
    src: "/reviews/x.png",
    href: "https://x.com/sasroofing91254",
  },
  {
    alt: "Angi",
    src: "/reviews/angi.png",
    href: "https://www.angi.com/companylist/us/ny/brooklyn/",
  },
  {
    alt: "Better Business Bureau",
    src: "/reviews/bbb.png",
    href: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
  },
];

export default function CustomerReviews() {
  return (
    <section
      aria-labelledby="customer-reviews-heading"
      className="bg-[#f9f9f9] py-10 px-4"
    >
      <div className="text-center mb-6">
        <h2
          id="customer-reviews-heading"
          className="text-2xl sm:text-3xl font-bold text-[#003269] font-inter"
        >
          Customer Reviews
        </h2>
        <div
          className="mt-1 h-1 w-12 mx-auto bg-[#003269]"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {reviewLogos.map(({ alt, src, href }, index) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read SAS Roofing reviews on ${alt}`}
            className="border rounded-md p-3 shadow-sm hover:shadow-md transition bg-white w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`${alt} logo`}
              width={72}
              height={72}
              loading="lazy"
              className="object-contain"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
