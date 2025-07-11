"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = [
  "/Gallery/gallery1.jpg",
  "/Gallery/gallery2.jpg",
  "/Gallery/gallery5.jpg",
  "/Gallery/gallery6.jpg",
  "/Gallery/gallery7.jpg",
  "/Gallery/gallery1.jpg",
  "/Gallery/gallery10.jpg",
  "/Gallery/gallery11.jpg",
  "/Gallery/gallery12.jpg",
  "/Gallery/gallery13.jpg",
  "/Gallery/gallery14.jpg",
  "/Gallery/gallery15.jpg",
  "/Gallery/gallery16.jpg",
  "/Gallery/gallery17.jpg",
  "/Gallery/gallery18.jpg",
  "/Gallery/gallery19.jpg",
  "/Gallery/gallery20.jpg",
  "/Gallery/gallery21.jpg",
];

const getAspectClass = (src: string) => {
  if (
    [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery5.jpg",
      "/gallery6.jpg",
      "/gallery7.jpg",
      "/gallery8.jpg",
    ].includes(src)
  ) {
    return "aspect-square";
  }
  if (["/gallery19.jpg", "/gallery20.jpg", "/gallery21.jpg"].includes(src)) {
    return "aspect-[3/5]";
  }
  return "aspect-[3/4]";
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Modal({
  open,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  open: boolean;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60"
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10"
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>
      <button
        className="absolute left-4 text-white text-4xl hidden md:block z-10"
        onClick={onPrev}
        aria-label="Previous image"
      >
        &#8592;
      </button>
      <motion.div
        className="max-w-[90%] max-h-[80vh]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100) onNext();
          else if (info.offset.x > 100) onPrev();
        }}
      >
        <Image
          src={images[index]}
          alt={`Zoomed gallery image ${index + 1}`}
          width={1200}
          height={1200}
          loading="lazy"
          className="object-contain max-h-[80vh]"
        />
      </motion.div>
      <button
        className="absolute right-4 text-white text-4xl hidden md:block z-10"
        onClick={onNext}
        aria-label="Next image"
      >
        &#8594;
      </button>
    </div>
  );
}

const GalleryCard = ({
  src,
  alt,
  delay,
  onZoom,
}: {
  src: string;
  alt: string;
  delay: number;
  onZoom: () => void;
}) => {
  const aspectClass = getAspectClass(src);
  return (
    <motion.div
      className="relative group overflow-hidden shadow-lg"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={{ ...fadeIn.transition, delay }}
      viewport={{ once: true }}
      role="listitem"
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-[#003269]/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition duration-700">
        <span className="text-lg sm:text-xl font-semibold mb-4 font-inter">
          SAS Roofing
        </span>
        <button
          className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors"
          onClick={onZoom}
          aria-label={`Zoom in on ${alt}`}
        >
          <Image
            src="/Gallery/search.png"
            alt="Zoom icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default function GallerySection2() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const handleZoom = (idx: number) => {
    console.log(`Zoomed: ${idx + 1}`);
    setSelectedIndex(idx);
  };

  const closeModal = () => setSelectedIndex(null);

  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );

  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const interval = setInterval(() => showNext(), 5000);
      return () => {
        clearInterval(interval);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedIndex]);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 w-full">
      {/* Desktop layout */}
      <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(0, visibleCount).map((src, idx) => (
          <GalleryCard
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            delay={idx * 0.05}
            onZoom={() => handleZoom(idx)}
          />
        ))}
      </div>

      {/* Swiper for below 1080px */}
      <div className="xl:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
          }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <GalleryCard
                src={src}
                alt={`Gallery image ${idx + 1}`}
                delay={0}
                onZoom={() => handleZoom(idx)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {visibleCount < images.length && (
        <div className="text-center mt-10 xl:block hidden">
          <button
            className="bg-[#003269] text-white px-6 py-2 rounded-md hover:bg-[#e63a27] transition-colors text-sm font-semibold"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Load More
          </button>
        </div>
      )}

      <Modal
        open={selectedIndex !== null}
        index={selectedIndex ?? 0}
        onClose={closeModal}
        onNext={showNext}
        onPrev={showPrev}
      />
    </section>
  );
}
