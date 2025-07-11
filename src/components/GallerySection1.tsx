"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = [
  "/Gallery/gallery1.jpg",
  "/Gallery/gallery2.jpg",
  "/Hero-Sec/slider-6.jpg",
  "/Hero-Sec/slider-7.png",
  "/Gallery/gallery5.jpg",
  "/Gallery/gallery6.jpg",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function GalleryItem({
  src,
  width,
  height,
  alt,
  index,
  onZoom,
  title = "SAS Roofing",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  index: number;
  onZoom: (idx: number) => void;
  title?: string;
}) {
  return (
    <motion.div
      className={`w-[${width}px] h-[${height}px] shadow-md overflow-hidden relative group`}
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      transition={fadeUp.transition}
      viewport={{ once: true }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#003269]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white">
        <span className="text-lg sm:text-xl font-semibold mb-2">{title}</span>
        <button
          onClick={() => onZoom(index)}
          className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors"
          aria-label={`Zoom in on image ${index + 1}: ${alt}`}
          type="button"
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
}

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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          tabIndex={-1}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl z-10"
            onClick={onClose}
            aria-label="Close image modal"
            type="button"
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl hidden md:block z-10"
            onClick={onPrev}
            aria-label="Previous image"
            type="button"
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
              alt={`Zoomed view of gallery image ${index + 1}`}
              width={1200}
              height={1200}
              className="object-contain max-h-[80vh]"
              id="modalDescription"
            />
          </motion.div>

          <button
            className="absolute right-4 text-white text-4xl hidden md:block z-10"
            onClick={onNext}
            aria-label="Next image"
            type="button"
          >
            &#8594;
          </button>

          <div className="absolute bottom-6 text-white text-sm hidden md:block animate-bounce opacity-70">
            Swipe left or right
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!modalOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [modalOpen]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const trackImageView = (idx: number) => {
    console.log(`Viewing gallery image #${idx + 1}`);
  };

  const handleZoom = (idx: number) => {
    setCurrentIndex(idx);
    setModalOpen(true);
    trackImageView(idx);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length;
      trackImageView(next);
      return next;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      trackImageView(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, handleNext, handlePrev]);

  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-12 w-full"
      aria-hidden={modalOpen ? "true" : "false"}
    >
      {/* Desktop Layout (Above 1080px) */}
      <div className="hidden xl:flex flex-col items-center gap-8 w-full">
        <div className="flex justify-center gap-6 w-full">
          {images.slice(0, 3).map((src, i) => (
            <GalleryItem
              key={i}
              src={src}
              width={i === 2 ? 700 : 370}
              height={370}
              alt={`Gallery image ${i + 1}`}
              index={i}
              onZoom={handleZoom}
            />
          ))}
        </div>
        <div className="flex justify-center gap-6 w-full">
          {images.slice(3).map((src, i) => (
            <GalleryItem
              key={i + 3}
              src={src}
              width={i === 0 ? 700 : 370}
              height={370}
              alt={`Gallery image ${i + 4}`}
              index={i + 3}
              onZoom={handleZoom}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swiper Slider (Below 1080px) */}
      <div className="xl:hidden w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
          }}
          className="!pb-6"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="w-full aspect-[4/3] shadow-md overflow-hidden relative group max-w-[440px] mx-auto"
                initial={fadeUp.initial}
                whileInView={fadeUp.animate}
                transition={fadeUp.transition}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#003269]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white">
                  <span className="text-lg sm:text-xl font-semibold mb-2 font-inter">
                    SAS Roofing
                  </span>
                  <button
                    onClick={() => handleZoom(idx)}
                    className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors"
                    aria-label={`Zoom in on image ${idx + 1}`}
                    type="button"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        open={modalOpen}
        index={currentIndex}
        onClose={() => setModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
