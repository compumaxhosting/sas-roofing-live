"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BlogSlideCard from "./BlogSlideCard";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title:
      "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
    description: "Certified Roofing Contractors You Can Trust.",
    date: "10 June",
    image: "/blog/roofing-contractors.jpg",
    link: "the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    initialLikeCount: 100,
  },
  {
    title:
      "How This NYC Waterproofing Contractor is Revolutionizing Home Protection",
    description: "Trusted Roofing Expert",
    date: "29 May",
    image: "/blog/blogImage.jpg",
    link: "How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    initialLikeCount: 140,
  },
  {
    title:
      "Why SAS Roofing and Waterproofing Is Brooklyn's Most Trusted Roofing Expert?",
    description: "Trusted Roofing Expert",
    date: "21 May",
    image: "/blog/roofing.jpg",
    link: "Why-SAS-Roofing-and-Waterproofing-Is-Brooklyns-Most-Trusted-Roofing-Expert",
    initialLikeCount: 120,
  },
  {
    title: "Replacing Shingle Roof And Installing Skylight",
    description: "ROOF LEAKS",
    date: "10 APR",
    image: "/blog/leakage_roof.jpg",
    link: "/",
    initialLikeCount: 106,
  },
  {
    title: "Foundation Wall Repair And Waterproofing",
    description: "MAINTENANCE",
    date: "17 APR",
    image: "/blog/services1.png",
    link: "/",
    initialLikeCount: 170,
  },
  {
    title: "How To Weather Proof Your Roof This Winter?",
    description: "TIPS & TRICKS",
    date: "30 APR",
    image: "/blog/services1.jpg",
    link: "/",
    initialLikeCount: 180,
  },
  {
    title:
      "Expert Masonry Services Across Brooklyn, Manhattan & Queens: Quality You Can Trust",
    description: "THE MASON’S MARK",
    date: "07 MAR",
    image: "/blog/masonry_services.png",
    link: "/",
    initialLikeCount: 111,
  },
  {
    title: "Roofing Excellence Across New York’s Core Boroughs",
    description: "ROOFTOP RELIABILITY",
    date: "16 MAR",
    image: "/blog/roofing1.jpg",
    link: "/",
    initialLikeCount: 122,
  },
];

export default function BlogSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }

    return () => {
      if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);
    };
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;

    const swiper = swiperInstanceRef.current;
    swiper.autoplay?.stop();

    if (direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
        
    autoplayTimeout.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, 2000);
  };

  const navBtnClass =
    "w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center transition hover:bg-[#003269] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ef4423]";

  return (
    <section
      aria-label="Blog posts slider"
      className="w-full px-4 sm:px-6 max-w-screen-xl mx-auto"
    >
      <Swiper
        loop
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 14 },
          640: { slidesPerView: 1, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 22 },
          1024: { slidesPerView: 2, spaceBetween: 26 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
          if (swiperRef) swiperRef.current = swiper;
        }}
        className="pb-6"
      >
        {slides.slice(0, 6).map((slide, i) => (
          <SwiperSlide key={i}>
            <BlogSlideCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Navigation */}
      <div
        className="flex justify-center gap-4 pt-6"
        aria-label="Slider navigation controls"
      >
        <button
          onClick={() => handleManualSlide("prev")}
          aria-label="Slide to previous"
          className={navBtnClass}
        >
          <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          aria-label="Slide to next"
          className={navBtnClass}
        >
          <FiChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
