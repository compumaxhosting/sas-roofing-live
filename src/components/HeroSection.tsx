"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PanInfo, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Protect Your Home With SAS Roofing",
    description:
      "SAS Roofing is your source for high-quality roofing of any type",
    buttonText: "Read More",
    image: "/slider-6.png",
  },
  {
    id: 2,
    title: "Quality Roofing Solutions for Every Home",
    description:
      "We provide expert roofing installations, repairs, and inspections",
    buttonText: "Read More",
    image: "/slider-7.png",
  },
  {
    id: 3,
    title: "Your Roofing Needs For A Great Repair Job",
    description: "Reliable, professional, and affordable roofing services",
    buttonText: "Read More",
    image: "/slider-4.jpg",
  },
];

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number): number =>
  Math.abs(offset) * velocity;

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!emblaApi) return;
    const power = swipePower(info.offset.x, info.velocity.x);
    if (power < -swipeConfidenceThreshold) emblaApi.scrollNext();
    else if (power > swipeConfidenceThreshold) emblaApi.scrollPrev();
    else emblaApi.scrollTo(selectedIndex);
  };

  const currentSlide = slides[selectedIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      role="region"
      aria-label="Image carousel of roofing services"
    >
      <motion.div
        className="embla"
        ref={emblaRef}
        drag="x"
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <ul className="flex" aria-live="polite" aria-atomic="true">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              className="relative flex-[0_0_100%] w-full h-[488px] sm:h-screen overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                loading={index === selectedIndex ? "eager" : "lazy"}
                priority={index === selectedIndex}
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-20 text-white pointer-events-none">
        <div className="max-w-3xl space-y-6 pt-6 md:ml-14 xl:ml-46 pointer-events-auto">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight font-inter">
            {currentSlide.title}
          </h1>
          <p className="text-lg font-light tracking-wide font-bevietnam">
            {currentSlide.description}
          </p>
          <Link
            href="/aboutus"
            className="inline-block border-4 border-[#003269] p-1"
            aria-label={`Read more about ${currentSlide.title}`}
          >
            <Button className="Hero_hover-button text-sm sm:text-base lg:text-lg font-inter">
              {currentSlide.buttonText.toUpperCase()}
            </Button>
          </Link>
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] active:scale-95 transition-all"
      >
        <ChevronLeft className="text-white text-2xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] active:scale-95 transition-all"
      >
        <ChevronRight className="text-white text-2xl" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === selectedIndex
                ? "bg-[#e63a27]"
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
