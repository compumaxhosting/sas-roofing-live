"use client";

import { useEffect, useState, useCallback, useRef } from "react"; // Import useRef
import { Button } from "@/components/ui/button"; // Assuming Button is a custom component
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const slides = [
  {
    title: "Protect Your Home With SAS Roofing",
    description:
      "SAS Roofing is your source for high-quality roofing of any type",
    buttonText: "Read More",
    image: "/slider1.jpg",
    link: "/services", // Add specific link if available, otherwise default to aboutus
  },
  {
    title: "Quality Roofing Solutions for Every Home",
    description:
      "We provide expert roofing installations, repairs, and inspections",
    buttonText: "Read More",
    image: "/slider-2.jpg",
    link: "/services",
  },
  {
    title: "Your Roofing Needs For A Great Repair Job",
    description: "Reliable, professional, and affordable roofing services",
    buttonText: "Read More",
    image: "/slider-3.jpg",
    link: "/services",
  },
];

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity;
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(
    null
  );
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the main carousel container

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  // Autoplay functionality with pause on interaction
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    const startInterval = () => {
      intervalId = setInterval(() => nextSlide(), 6000);
    };

    const stopInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    startInterval(); // Start on mount

    // Pause on focus or hover to allow interaction
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", stopInterval);
      carouselElement.addEventListener("mouseleave", startInterval);
      carouselElement.addEventListener("focusin", stopInterval);
      carouselElement.addEventListener("focusout", startInterval);
    }

    // Cleanup
    return () => {
      stopInterval();
      if (carouselElement) {
        carouselElement.removeEventListener("mouseenter", stopInterval);
        carouselElement.removeEventListener("mouseleave", startInterval);
        carouselElement.removeEventListener("focusin", stopInterval);
        carouselElement.removeEventListener("focusout", startInterval);
      }
    };
  }, [nextSlide]);

  const slide = slides[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const power = swipePower(info.offset.x, info.velocity.x);
    if (power < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (power > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  const imageTransition = {
    x: { type: "spring", stiffness: 200, damping: 30 },
    opacity: { duration: 0.3 },
  };

  const textTransition = {
    duration: 0.6,
    ease: "easeOut",
  };
  return (
    <section
      className="relative w-full min-h-[530px] lg:min-h-[670px] overflow-hidden bg-neutral-800"
      aria-roledescription="carousel" // Defines the role as a carousel
      aria-label="Hero Section Slider" // Provides a label for the entire carousel
      ref={carouselRef} // Assign ref to the section for event listeners
    >
      <h1 className="sr-only">SAS Roofing and Waterproofing</h1>{" "}
      {/* Visually hidden main heading */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={imageTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing font-inter"
          role="group" // Each slide is a group within the carousel
          aria-roledescription="slide" // Describes it as a slide within the carousel
          aria-label={`${slide.title}`} // Label for the current slide (content)
          aria-live="polite" // Announces changes to screen readers politely
          tabIndex={-1} // Make motion.div focusable for direct slide navigation if needed
        >
          <Image
            src={slide.image}
            alt={slide.title} // Use slide title as alt text for context
            fill
            priority={current === 0} // Prioritize loading for the first image
            className="object-cover select-none"
            draggable="false"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.title} // Key on title for content animation
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={textTransition}
            className="max-w-3xl space-y-6 pt-6 md:ml-14 xl:ml-46"
            // The content is implicitly part of the slide's aria-label and aria-live region.
            // No additional aria-label needed here to avoid redundancy.
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight pointer-events-none font-inter">
              {" "}
              {/* Changed to h2 for semantic hierarchy */}
              {slide.title}
            </h2>
            <p className="text-lg font-light tracking-wide pointer-events-none font-bevietnam">
              {slide.description}
            </p>
            <Link
              href={slide.link || "/aboutus"}
              aria-label={`Read more about ${slide.title}`}
            >
              {" "}
              {/* Use specific slide link if available, add aria-label */}
              <div className="inline-block border-4 border-[#003269] p-1">
                <Button className="Hero_hover-button text-sm sm:text-base lg:text-lg font-inter">
                  {slide.buttonText.toUpperCase()}
                </Button>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setClickedButton("prev");
          prevSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Previous Slide"
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${
          // Added focus styles
          clickedButton === "prev" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowLeft className="text-white text-2xl" aria-hidden="true" />{" "}
        {/* Icon is decorative, hide from screen readers */}
      </button>
      <button
        onClick={() => {
          setClickedButton("next");
          nextSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Next Slide"
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${
          // Added focus styles
          clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white text-2xl" aria-hidden="true" />{" "}
        {/* Icon is decorative, hide from screen readers */}
      </button>
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20"
        role="group"
        aria-label="Slide indicators"
      >
        {" "}
        {/* Group for indicator buttons */}
        {slides.map((_slide, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current) return;
              const newDirection = i > current ? 1 : -1;
              paginate(newDirection);
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${
              // Added focus styles
              i === current ? "bg-[#e63a27]" : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`} // Explicit label for each dot
            aria-current={i === current ? "true" : "false"} // Indicates the currently active slide
          />
        ))}
      </div>
    </section>
  );
}
