"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { FaStar } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";


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
    name: "Casey L English",
    date: "a month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "Mohammed and Riyad did a great job at my home.  My original contractor left us with roof, facade, and window leaks.  Mohammed was quick to identify all of the issues and give us a fair quote... and was able to start working very quickly.  They were courteous, clean, and best of all fast!  Thank you for helping us resolve our water issues.  I would definitely recommend them.",
    image: "/reviews/avatar.png",
  },
  {
    name: "Uzair Mughal",
    date: "a month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "We hired Mohammed and his team to remove and replace the flat roof on our newly purchased townhouse. They completed the worked in three days, were communicative throughout the entire process providing us with updates and photos, were affordable, and did a great job. His team also installed 2 brand new skylights, rebuilt the skylight frame that had rotted away, and replaced our old gutter. Throughout the job, his team was friendly, efficient and always cleaned up after themselves.",
    image: "/reviews/avatar.png",
  },
  {
    name: "Ms. Leslie Dixon",
    date: "a month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "Mohammad is great and reliable. He is very knowledgeable on roofing issues.  A pleasure to work with and listens carefully to your concerns about your roof.  I would recommend SAS roofing and waterproofing.",
    image: "/reviews/avatar.png",
  },
  {
    name: "Boktier Uddin",
    date: "a month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "SAS Roofing is hands down the best decision I made for my home renovation! Their team was communicative, responsive, and delivered exceptional results. The roof looks stunning, and I feel confident in its durability. Their professionalism and expertise are unmatched. I highly recommend SAS Roofing to anyone seeking top-quality roofing services – they truly deliver!",
    image: "/reviews/avatar.png",
  },
  {
    name: "Juan E Avendano",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "I've been working with Mohammad for over 7 years, and they’ve consistently delivered great service. From installations to repairs, his team is always prompt, professional, and thorough. I trust them completely with all my roofing needs, and they’ve earned my loyalty. Highly recommend SAS Roofing & Waterproofing!",
    image: "/reviews/avatar.png",
  },
  {
    name: "faisal khan",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "SAS Roofing & Waterproofing delivered outstanding results on my roofing project! Their team was responsive, reliable, and communicated clearly throughout the entire process. The work was completed on time, and the final product looks fantastic. I've already referred them to friends and family - their expertise and customer service are truly exceptional. If you're looking for a trustworthy and skilled roofing company, look no further than SAS Roofing & Waterproofing!",
    image: "/reviews/avatar.png",
  },
  {
    name: "Abm Hossain",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing services. They used high-quality materials and provided a detailed breakdown of all costs upfront. The service was transparent and trustworthy.",
    image: "/reviews/avatar.png",
  },
  {
    name: "giorgimdzeluri giorgimdzeluri",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "I recently hired SAS Roofing & Waterproofing to fix some leaks and repair my roof, and I'm blown away by the results! Their team was prompt, efficient, and communicated clearly throughout the entire process. The price was competitive, and the quality of work was exceptional. My roof is now leak-free and looks fantastic. I appreciate the professionalism and expertise of the SAS team and would highly recommend them to friends, family, and neighbors. Five stars isn't enough – I'd give them ten stars if I could!",
    image: "/reviews/avatar.png",
  },
  {
    name: "MD Abdul Kader",
    date: "2 months ago",
    rating: 5,
    text: "SAS construction company is best construction company",
    detailText:
      "SAS construction company is best construction company I’ve worked with. They were punctual, professional, and their work was top-notch. I’d highly recommend them for any building project.",
    image: "/reviews/avatar.png",
  },
  {
    name: "Bklyn English",
    date: "2 months ago",
    rating: 5,
    text: "I had a great experience working with this construction company. Fro...",
    detailText:
      "I had a great experience working with this construction company. From the initial consultation to project completion, everything was handled with care. Their attention to detail was impressive.",
    image: "/reviews/avatar.png",
  },
  {
    name: "Alo Nazrul",
    date: "3 months ago",
    rating: 5,
    text: "I highly recommend SAS Roofing & Waterproofing to anyone in need of roofing...",
    detailText:
      "This company stands out for its commitment to customer satisfaction. They answered all my questions and ensured the work site was clean after completion. Excellent service!",
    image: "/reviews/avatar.png",
  },
  {
    name: "Scholar Chem",
    date: "3 months ago",
    rating: 5,
    text: "SAS Roofing exceeded my expectations! Their team was professional, efficient, and...",
    detailText:
      "SAS Roofing exceeded my expectations! Their team was professional, efficient, and respectful of my property. They completed the job faster than expected and the results are excellent.",
    image: "/reviews/avatar.png",
  },
];

const ReviewSlider = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    if (selectedReview) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeydown);
      // Set focus to the modal for screen readers when it opens
      modalRef.current?.focus();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [selectedReview]);

  return (
    <section
      className="py-8 bg-[#f9f9f9]"
      aria-labelledby="overall-rating-heading" // Link section to its main heading
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1
          id="overall-rating-heading" // ID for the main heading of this section
          className="text-3xl font-bold text-[#e63a27] flex items-center justify-center font-inter"
        >
          EXCELLENT
        </h1>
        <span
          className="text-5xl ml-2 flex justify-center text-[#f6bb06]"
          aria-hidden="true"
        >
          {/* ★★★★★ */}
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </span>{" "}
        {/* Decorative stars, hidden from screen readers */}
        <span className="sr-only">out of 5 stars</span>{" "}
        {/* Screen reader only text for rating */}
        <p className="text-gray-600 text-sm font-inter">
          <span aria-hidden="true">(</span>
          Based on 126 Google Reviews
          <span aria-hidden="true">)</span>
        </p>
        <Link
          href="https://g.page/r/Cdj4RS1sCCdVEBM/review"
          target="_blank"
          rel="noopener noreferrer" // Essential for security with target="_blank"
          aria-label="Review us on Google. Opens in a new tab." // More descriptive label
        >
          <button className="mt-2 bg-[#003269] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e63a27] font-inter">
            Review us on Google
          </button>
        </Link>
      </motion.div>

      <div
        className="px-4 max-w-6xl md:mx-auto"
        role="region" // Designates a perceivable section of content
        aria-label="Customer Reviews Slider" // Provides an accessible label for the slider area
      >
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
          modules={[Autoplay, Pagination]}
          aria-live="polite" // Announce slide changes politely
          aria-atomic="true" // Announce the entire slide content
        >
          {reviews.map((review, idx) => (
            <SwiperSlide
              key={idx}
              className="h-full"
              role="group" // Indicates a group of related elements (a slide)
              aria-roledescription="slide" // Describes the role of the group (it's a slide)
              aria-label={`Review ${idx + 1} of ${reviews.length}`} // Provides context for screen readers
            >
              <motion.div
                className="bg-[#002147] text-white rounded-xl p-4 w-[250px] h-[300px] flex flex-col gap-2 items-start mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-labelledby={`review-name-${idx}`} // Links this card to the reviewer's name
                aria-describedby={`review-text-${idx}`} // Links this card to the review text
                tabIndex={0} // Make the card focusable for keyboard navigation
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s avatar`} // More descriptive alt text
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p
                      className="font-semibold text-base font-inter"
                      id={`review-name-${idx}`} // Unique ID for reviewer's name
                    >
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-300 font-inter">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div
                  className="text-[#f6bb06] text-3xl mt-2 flex"
                  aria-hidden="true"
                >
                  {Array.from({ length: review.rating }, (_, i) => (
                    <MdOutlineStar key={i} />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>{" "}
                {/* Screen reader only for rating */}
                <p
                  className="text-sm text-left mt-2 leading-snug font-bevietnam"
                  id={`review-text-${idx}`} // Unique ID for review text
                >
                  {review.text}
                </p>
                <button
                  className="text-sm text-white hover:text-[#e63a27] mt-2 cursor-pointer font-bevietnam"
                  onClick={() => setSelectedReview(review)}
                  aria-haspopup="dialog" // Indicates that clicking opens a dialog
                  aria-controls="review-modal" // Links to the ID of the modal
                  aria-expanded={selectedReview !== null} // Indicates if the dialog is open
                  aria-label={`Read full review by ${review.name}`} // Descriptive label for the button
                >
                  Read more
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-3">
                  <Image
                    src="/reviews/Google_logo.png"
                    alt="Google Logo" // More specific alt text
                    width={16}
                    height={16}
                    className="w-4 h-4"
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
            role="dialog" // Designates this as a dialog
            aria-modal="true" // Indicates that content outside the dialog is inert
            aria-labelledby="modal-title" // Links to the modal title
            aria-describedby="modal-description" // Links to the main content of the modal
            id="review-modal" // Unique ID for the modal
            tabIndex={-1} // Makes the modal programmatically focusable, but not via tab key
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              tabIndex={0} // Ensure the modal content itself is focusable
            >
              <h2 id="modal-title" className="sr-only">
                Full review by {selectedReview.name}
              </h2>{" "}
              {/* Visually hidden heading for modal */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                onClick={() => setSelectedReview(null)}
                aria-label="Close review modal" // Descriptive label for the close button
              >
                &times;
              </button>
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={selectedReview.image}
                  alt={`${selectedReview.name}'s avatar`} // More descriptive alt text
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{selectedReview.name}</p>
                  <p className="text-sm text-gray-500">{selectedReview.date}</p>
                </div>
              </div>
              <div className="text-[#f6bb06] text-2xl flex" aria-hidden="true">
                {/* CORRECT way to repeat stars based on selectedReview.rating */}
                {Array.from({ length: selectedReview.rating }, (_, i) => (
                  <MdOutlineStar key={i} />
                ))}
              </div>
              <p className="sr-only">{selectedReview.rating} out of 5 stars</p>{" "}
              {/* Screen reader only for rating */}
              <p
                id="modal-description" // ID for the main description in the modal
                className="mt-3 text-gray-700 text-sm text-left whitespace-pre-line"
              >
                {selectedReview.detailText}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Image
                  src="/reviews/Google_logo.png"
                  alt="Google Logo" // Specific alt text
                  width={16}
                  height={16}
                />
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
