"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "WATERPROOFING",
    description:
      "Highest quality single-ply membrane systems keeps us at the forefront of the business...",
    image: "/Services-Slider/services1.jpg",
    icon: "/Services-Slider/pattern-1.png",
    link: "/waterproofing-contractors-NY",
  },
  {
    title: "MASONRY",
    description:
      "If you need paving, bluestone, brickwork, cement work, etc... or any other structure then give...",
    image: "/Services-Slider/masonry.jpg",
    icon: "/Services-Slider/masonry.png",
    link: "/masonry-services-brooklyn-ny",
  },
  {
    title: "ROOFING",
    description:
      "We service all types of roofing big or small, from repairs to new installs, residential or...",
    image: "/Services-Slider/services5.jpg",
    icon: "/Services-Slider/roofing.png",
    link: "/roofing-contractors-brooklyn",
  },
];

export default function ServicesSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);
  const [currentSlideTitle, setCurrentSlideTitle] = useState(slides[0].title);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;

    swiper.autoplay?.stop();
    if (direction === "next") swiper.slideNext();
    else swiper.slidePrev();

    clearTimeout(autoplayTimeout.current!);
    autoplayTimeout.current = setTimeout(() => swiper.autoplay?.start(), 2000);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 mb-5">
      <div className="w-10/12 overflow-hidden">
        <Swiper
          loop
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 2, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            // Announce current slide for screen readers
            const idx = swiper.realIndex % slides.length;
            setCurrentSlideTitle(slides[idx].title);
          }}
          className="!overflow-visible"
          aria-roledescription="carousel"
          aria-label="Services slider"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const { title, description, image, icon, link } =
              slides[i % slides.length];
            return (
              <SwiperSlide key={i}>
                <div className="group relative h-[380px] flex items-end overflow-hidden rounded-md">
                  {/* Background image that zooms on hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                    aria-hidden="true"
                  />

                  {/* Foreground content */}
                  <div className="relative z-10 flex w-full items-end">
                    <div className="w-[70%] bg-[#f5f5f5] shadow-md p-4 min-h-[120px] sm:min-h-[140px] md:min-h-[150px] flex flex-col">
                      <Link href={link}>
                        <h1 className="text-[#003269] text-sm md:text-base lg:text-lg font-bold tracking-wide font-inter hover:underline">
                          {title}
                        </h1>
                      </Link>
                      <Link href={link}>
                        <p className="text-sm text-gray-600 mt-1 leading-snug line-clamp-3 font-bevietnam hover:text-[#003269]">
                          {description}
                        </p>
                      </Link>
                    </div>
                    <Link
                      href={link}
                      className="w-[30%] bg-gray-100 relative group overflow-hidden border border-gray-300 flex items-center justify-center"
                      style={{ height: "50%" }}
                    >
                      {/* Icon */}
                      <div className="relative w-12 sm:w-14 aspect-square transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                        <Image
                          src={icon}
                          alt={`${title} Icon`}
                          fill
                          className="object-center"
                        />
                      </div>
                      {/* Hover arrow */}
                      <div className="absolute inset-0 bg-[#e63a27] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <FiChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Live region to announce current slide for screen readers */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="additions"
      >
        {`Current slide: ${currentSlideTitle}`}
      </div>

      <nav
        className="flex justify-center gap-4 pt-6"
        role="navigation"
        aria-label="Carousel navigation"
      >
        {["prev", "next"].map((dir) => {
          const Icon = dir === "prev" ? FiChevronLeft : FiChevronRight;
          return (
            <button
              key={dir}
              onClick={() => handleManualSlide(dir as "prev" | "next")}
              className="w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003269] transition"
              aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
