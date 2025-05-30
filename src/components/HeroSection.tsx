"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
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
  },
  {
    title: "Quality Roofing Solutions for Every Home",
    description:
      "We provide expert roofing installations, repairs, and inspections",
    buttonText: "Read More",
    image: "/slider-2.jpg",
  },
  {
    title: "Your Roofing Needs For A Great Repair Job",
    description: "Reliable, professional, and affordable roofing services",
    buttonText: "Read More",
    image: "/slider-3.jpg",
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

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    const startInterval = () => {
      // Clear any existing interval to prevent multiple intervals running
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(() => nextSlide(), 6000);
    };
    startInterval();
    // Re-start interval on user interaction to reset timer
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]); // Dependency on nextSlide to reset timer on manual navigation

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
      role="region" // Designates a perceivable section of content.
      aria-roledescription="carousel" // Identifies it as a carousel.
      aria-label="Roofing Solutions Slider" // Provides a concise, accessible label for the carousel.
    >
      <h1 className="sr-only" id="carousel-main-heading">
        SAS Roofing Hero Slider
      </h1>{" "}
      {/* Visually hidden heading for context */}
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
          // Add role and aria-label for improved screen reader experience on draggable area
          role="group"
          aria-roledescription="slide"
          aria-label={`Current slide: ${current + 1} of ${slides.length}, ${
            slide.title
          }`}
          tabIndex={0} // Make the slide content focusable to allow keyboard navigation/interaction
        >
          <Image
            src={slide.image}
            alt={slide.title} // Alt text for the main image, descriptive of the slide's content
            fill
            priority={current === 0} // Priority for the first image for LCP
            className="object-cover select-none"
            draggable="false"
            unoptimized // Consider if unoptimized is needed, can impact performance vs quality
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />{" "}
          {/* Decorative overlay */}
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={textTransition}
            className="max-w-3xl space-y-6 pt-6 md:ml-14 xl:ml-46"
          >
            <h2
              className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight pointer-events-none font-inter"
              id={`slide-title-${current}`} // Unique ID for each slide title
            >
              {slide.title}
            </h2>
            <p
              className="text-lg font-light tracking-wide pointer-events-none font-bevietnam"
              id={`slide-description-${current}`} // Unique ID for each slide description
            >
              {slide.description}
            </p>
            <Link href="/aboutus">
              <div className="inline-block border-4 border-[#003269] p-1">
                <Button
                  className="Hero_hover-button text-sm sm:text-base lg:text-lg font-inter"
                  aria-labelledby={`slide-title-${current} slide-description-${current}`} // Associates button with slide content
                  aria-label={`Learn more about ${slide.title.toLowerCase()}`} // More specific label
                >
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
        aria-controls="carousel-main-heading" // Indicates control over the carousel content
        aria-label="Previous Slide" // Descriptive label
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform ${
          clickedButton === "prev" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowLeft className="text-white text-2xl" aria-hidden="true" />{" "}
        {/* Decorative icon */}
      </button>
      <button
        onClick={() => {
          setClickedButton("next");
          nextSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-controls="carousel-main-heading" // Indicates control over the carousel content
        aria-label="Next Slide" // Descriptive label
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform ${
          clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white text-2xl" aria-hidden="true" />{" "}
        {/* Decorative icon */}
      </button>
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20"
        role="tablist" // Designates a set of tab elements.
        aria-label="Carousel slide controls" // Provides a label for the tablist.
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab" // Each button is a tab.
            aria-selected={i === current} // Indicates if the tab is currently selected.
            aria-controls={`slide-title-${i}`} // Associates tab with its corresponding slide title.
            id={`tab-${i}`} // Unique ID for each tab.
            onClick={() => {
              if (i === current) return;
              const newDirection = i > current ? 1 : -1;
              paginate(newDirection);
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-[#e63a27]" : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1} of ${slides.length}`} // More descriptive label
          >
            <span className="sr-only">Go to slide {i + 1}</span>{" "}
            {/* Visually hidden text for redundant label, good fallback */}
          </button>
        ))}
      </div>
    </section>
  );
}
