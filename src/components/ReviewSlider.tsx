"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules"; // Added A11y module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y"; // Import Swiper A11y CSS
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  detailText: string;
  image: string;
};

const reviews: Review[] = [
  {
    name: "MD Abdul Kader",
    date: "2 days ago",
    rating: 5,
    text: "SAS construction company is best construction company",
    detailText:
      "SAS construction company is best construction company I’ve worked with. They were punctual, professional, and their work was top-notch. I’d highly recommend them for any building project.",
    image: "/avatar.png",
  },
  {
    name: "Bklyn English",
    date: "1 week ago",
    rating: 5,
    text: "I had a great experience working with this construction company. Fro...",
    detailText:
      "I had a great experience working with this construction company. From the initial consultation to project completion, everything was handled with care. Their attention to detail was impressive.",
    image: "/avatar.png",
  },
  {
    name: "Scholar Chem",
    date: "3 months ago",
    rating: 5,
    text: "SAS Roofing exceeded my expectations! Their team was professional, efficient, and...",
    detailText:
      "SAS Roofing exceeded my expectations! Their team was professional, efficient, and respectful of my property. They completed the job faster than expected and the results are excellent.",
    image: "/avatar.png",
  },
  {
    name: "Abm Hossain",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing services. They used high-quality materials and provided a detailed breakdown of all costs upfront. The service was transparent and trustworthy.",
    image: "/avatar.png",
  },
  {
    name: "Alo Nazrul",
    date: "10 days ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "This company stands out for its commitment to customer satisfaction. They answered all my questions and ensured the work site was clean after completion. Excellent service!",
    image: "/avatar.png",
  },
];

const ReviewSlider = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  // Ref to store the element that opened the modal, now typed as HTMLElement
  const triggerRef = useRef<HTMLElement | null>(null);

  // Close modal on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedReview(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    if (selectedReview) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      // Ensure focus is managed when modal opens
      // Adding a timeout can help ensure the modal is fully rendered before trying to focus
      const timeoutId = setTimeout(() => {
        modalRef.current?.focus();
      }, 0); // Focus immediately after render

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timeoutId); // Clear timeout on unmount/re-render

        // Return focus to the element that opened the modal
        if (triggerRef.current) {
          triggerRef.current.focus();
          triggerRef.current = null; // Clear the reference
        }
      };
    }

    // Cleanup for when modal is closed or not active
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  // Function to open modal and store trigger element
  // Event type is now a union of MouseEvent<HTMLButtonElement> and KeyboardEvent<HTMLDivElement>
  const openModal = (
    review: Review,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    setSelectedReview(review);
    // Cast event.currentTarget to HTMLElement which is a common ancestor for button and div
    triggerRef.current = event.currentTarget as HTMLElement;
  };

  return (
    <section className="py-8 bg-[#f9f9f9]">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="text-4xl font-bold text-gray-900 flex items-center justify-center font-inter"
          aria-label="Overall Google rating is 4.7 out of 5 stars" // Accessible rating description
        >
          4.7
          <span className="ml-2 text-[#e63a27]" aria-hidden="true">
            ★★★★★
          </span>{" "}
          {/* Stars are decorative, hidden from screen readers */}
        </div>
        <p className="text-gray-600 text-sm font-inter">(134 Google Reviews)</p>
        <Link
          href="https://www.google.com/search?sca_esv=44785faec4b38403&hl=en-IN&gl=in&sxsrf=AHTn8zqibJ4bTPvhVHIjXbIiCuri3N9dNg:1746640776320&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzRXdA7aRSP0fPCbY4r-w7Xlc_H5K-rMs-6p7czYZpZV5g8XT02WLATrugqbv9Pt2j-UXbKSxafnerU2YrHvGVWSwXaAj2lXaOtGbFRPxdNviohP_bg%3D%3D&q=SAS+Roofing+%26+Waterproofing+Reviews&sa=X&ved=2ahUKEwjZjZf495GNAxUbrVYBHaK-BfUQ0bkNegQIMxAE&biw=1600&bih=773&dpr=1#lrd=0x89c25b2dd928663d:0x5527086c2d45f8d8,3,,,,"
          target="_blank"
          rel="noopener noreferrer" // Essential for security with target="_blank"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269] rounded-full inline-block" // Focus styles for the link itself
        >
          <button className="mt-2 bg-[#003269] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e63a27] font-inter">
            Review us on Google
          </button>
        </Link>
      </motion.div>

      <div className="px-4 max-w-6xl md:mx-auto">
        <Swiper
          className="review-swiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, A11y]} // Added A11y module
          // Accessibility attributes for the carousel itself
          role="region"
          aria-roledescription="testimonial carousel"
          aria-label="Customer Testimonials"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide
              key={idx}
              className="h-full"
              // Accessibility attributes for each slide
              role="group"
              aria-roledescription="testimonial slide"
              aria-label={`Testimonial from ${review.name}, slide ${
                idx + 1
              } of ${reviews.length}`}
            >
              <motion.div
                className="bg-[#002147] text-white rounded-xl p-4 w-[250px] h-[300px] flex flex-col gap-2 items-start mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                tabIndex={0} // Make the slide card focusable
                aria-label={`Review by ${review.name}: "${review.text}"`} // Concise summary for screen readers
                onKeyDown={(e) => {
                  // Allow opening modal with Enter/Space on the slide card
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault(); // Prevent default scroll for space key
                    // Explicitly cast the event for the keyboard event scenario
                    openModal(review, e as React.KeyboardEvent<HTMLDivElement>);
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s profile picture`} // More descriptive alt text
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-base font-inter">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-300 font-inter">
                      {review.date}
                    </p>
                  </div>
                </div>
                {/* Visually hidden but accessible rating for screen readers */}
                <div
                  className="sr-only"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {/* For sighted users */}
                </div>
                <div
                  className="text-[#e63a27] text-3xl mt-2"
                  aria-hidden="true"
                >
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-sm text-left mt-2 leading-snug font-bevietnam line-clamp-3">
                  {review.text}
                </p>
                <button
                  className="text-sm text-white hover:text-[#e63a27] mt-2 cursor-pointer font-bevietnam focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]"
                  // Pass the mouse event directly, TypeScript now understands it's a button event
                  onClick={(e) => openModal(review, e)}
                  aria-label={`Read full review from ${review.name}`} // Specific label for the "Read more" button
                >
                  Read more
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-3">
                  <Image
                    src="/google.png"
                    alt="" // Decorative as text follows
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    aria-hidden="true" // Hide from screen readers
                  />
                  <span className="font-bevietnam">Posted on</span>
                  <span className="font-semibold text-white font-bevietnam">
                    Google
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // ARIA attributes for modal dialog
            role="dialog"
            aria-modal="true" // Indicates to assistive technologies that the modal is a modal
            aria-labelledby="review-modal-title" // Links to the modal's title
            // Use tabIndex="-1" and manually focus for proper modal trap if needed
            tabIndex={-1} // Make the modal container focusable for programmatic focus
            // Ensure focus is managed when modal opens
            onAnimationComplete={() => modalRef.current?.focus()}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              tabIndex={-1}
            >
              <h2 id="review-modal-title" className="sr-only">
                Full Review by {selectedReview.name}
              </h2>{" "}
              {/* Visually hidden title for accessibility */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-600"
                onClick={() => setSelectedReview(null)}
                aria-label="Close review dialog" // Accessible label for the close button
              >
                ×
              </button>
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={selectedReview.image}
                  alt={`${selectedReview.name}'s profile picture`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{selectedReview.name}</p>
                  <p className="text-sm text-gray-500">{selectedReview.date}</p>
                </div>
              </div>
              <div
                className="sr-only"
                aria-label={`${selectedReview.rating} out of 5 stars`}
              >
                {/* Visually hidden accessible rating for screen readers */}
              </div>
              <div className="text-[#e63a27] text-2xl" aria-hidden="true">
                {"★".repeat(selectedReview.rating)}
              </div>
              <p className="mt-3 text-gray-700 text-sm text-left whitespace-pre-line">
                {selectedReview.detailText}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Image
                  src="/google.png"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />{" "}
                {/* Decorative */}
                <span>Posted on</span>
                <strong>Google</strong>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewSlider;
