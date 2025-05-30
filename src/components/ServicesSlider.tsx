"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules"; // Import A11y module
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y"; // Import A11y module CSS if needed

import { useEffect, useRef } from "react";
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
    image: "/services1.jpg",
    icon: "/pattern-1.png",
    link: "/waterproofing-contractors-NY",
  },
  {
    title: "MASONRY",
    description:
      "If you need paving, bluestone, brickwork, cement work, etc... or any other structure then give...",
    image: "/services2.jpg",
    icon: "/masonry.png",
    link: "/masonry-services-brooklyn-ny",
  },
  {
    title: "ROOFING",
    description:
      "We service all types of roofing big or small, from repairs to new installs, residential or...",
    image: "/services3.jpg",
    icon: "/roofing.png",
    link: "/roofing-contractors-brooklyn",
  },
];

export default function ServicesSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
  }, [swiperRef]);

  // Function to handle manual slide change and reset autoplay
  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;

    // Stop autoplay when user interacts
    swiper.autoplay?.stop();

    if (direction === "next") swiper.slideNext();
    else swiper.slidePrev();

    // Clear any existing timeout and restart autoplay after a short delay
    if (autoplayTimeout.current) {
      clearTimeout(autoplayTimeout.current);
    }
    autoplayTimeout.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, 2000); // Resume autoplay after 2 seconds of inactivity
  };
  return (
    // Main container for the carousel, defines its role and label for screen readers
    <div
      className="flex flex-col items-center px-4 sm:px-6 mb-5"
      role="region" // Designates a perceivable section of content
      aria-roledescription="carousel" // Customizes the role to "carousel"
      aria-label="Our Services Carousel" // Provides an accessible name for the carousel
    >
      <div className="w-10/12 overflow-hidden">
        <Swiper
          // Swiper configuration props
          loop
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // It's generally better to allow touch move for accessibility on touch devices.
          // Reconsider `allowTouchMove={false}` unless there's a strong UX reason.
          // For now, keeping it as is per original code.
          allowTouchMove={false} // Kept as in original code, but often better to allow
          modules={[Autoplay, A11y]} // Include A11y module for enhanced accessibility
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1.2, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 2.5, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) swiperRef.current = swiper;
          }}
          // Ensure overflow is visible for partially shown slides if desired, but keep accessibility in mind
          className="!overflow-visible"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const slideData = slides[i % slides.length]; // Use a consistent name
            return (
              <SwiperSlide
                key={i}
                // Each slide is a 'group' with a 'slide' role description
                role="group"
                aria-roledescription="slide"
                // Label the slide with its title for screen readers
                aria-label={`${slideData.title} service, slide ${i + 1} of ${
                  slides.length
                }`}
              >
                <div
                  className="relative h-[380px] flex items-end bg-cover bg-center bg-no-repeat"
                  // Remove `style={{ backgroundImage: ... }}` and use `Image` component fully for better accessibility and performance
                  // For now, keeping it as is per original code, but note for future
                  style={{ backgroundImage: `url(${slideData.image})` }}
                >
                  <div className="flex w-full items-end">
                    <div className="w-[70%] bg-[#f5f5f5] shadow-md p-4 min-h-[120px] sm:min-h-[140px] md:min-h-[150px] flex flex-col">
                      <Link
                        href={slideData.link}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]" // Added focus styles
                        aria-label={`Learn more about ${slideData.title} service`} // Specific aria-label
                      >
                        <h3 className="text-[#003269] text-sm md:text-base lg:text-lg font-bold tracking-wide font-inter hover:underline">
                          {slideData.title}
                        </h3>
                      </Link>
                      {/* Description should also be clickable via the title or a dedicated button for better UX */}
                      <Link
                        href={slideData.link}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269]" // Added focus styles
                        tabIndex={-1} // Make description link focusable only via title link (or separate button)
                        aria-hidden="true" // Hide this link to avoid redundant focus stops if title is already a link
                      >
                        <p className="text-sm text-gray-600 mt-1 leading-snug line-clamp-3 font-bevietnam hover:text-[#003269]">
                          {slideData.description}
                        </p>
                      </Link>
                    </div>
                    {/* Link for the icon/read more section */}
                    <Link
                      href={slideData.link}
                      className="w-[30%] bg-gray-100 relative group overflow-hidden border border-gray-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27]" // Added focus styles
                      style={{ height: "50%" }}
                      aria-label={`Details for ${slideData.title} service`} // Specific aria-label for this interactive area
                    >
                      {/* Icon (default state) */}
                      <div className="relative w-12 sm:w-14 aspect-square transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                        <Image
                          src={slideData.icon}
                          alt="" // Icon is decorative here, info is in the link's aria-label
                          fill
                          className="object-center"
                          aria-hidden="true" // Hide from screen readers as it's decorative
                        />
                      </div>

                      {/* Hover state: Red background with arrow */}
                      <div className="absolute inset-0 bg-[#e63a27] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <FiChevronRight
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />{" "}
                        {/* Icon is decorative */}
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Navigation for the carousel */}
      <nav
        className="flex justify-center gap-4 pt-6"
        role="navigation" // Clearly defines this as a navigation landmark
        aria-label="Carousel navigation controls" // Provides an accessible name for the navigation area
      >
        {["prev", "next"].map((dir) => {
          const Icon = dir === "prev" ? FiChevronLeft : FiChevronRight;
          return (
            <button
              key={dir}
              onClick={() => handleManualSlide(dir as "prev" | "next")}
              className="w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003269] transition" // Added focus styles
              aria-label={`${
                dir === "prev" ? "Previous" : "Next"
              } service slide`} // More specific aria-label
            >
              <Icon className="w-5 h-5" aria-hidden="true" />{" "}
              {/* Icon is decorative */}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
