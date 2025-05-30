"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react"; // Import useRef

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery16.jpg",
  "/gallery17.jpg",
  "/gallery18.jpg",
  "/gallery19.jpg",
  "/gallery20.jpg",
  "/gallery21.jpg",
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

interface ModalProps {
  open: boolean;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Modal({ open, index, onClose, onNext, onPrev }: ModalProps) {
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the image to focus on

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Focus the image when the modal opens for screen reader users
      if (imageRef.current) {
        imageRef.current.focus();
      }
    } else {
      document.body.style.overflow = "";
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (open) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60"
      role="dialog" // Indicate this is a dialog
      aria-modal="true" // Indicate it's a modal dialog
      aria-label={`Image viewer for gallery image ${index + 1}`} // Descriptive label for the modal
      tabIndex={-1} // Make the dialog itself focusable
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10"
        onClick={onClose}
        aria-label="Close image viewer" // Descriptive label for the close button
      >
        &times;
      </button>

      {/* Arrows hidden on small screens */}
      <button
        className="absolute left-4 text-white text-4xl hidden md:block z-10"
        onClick={onPrev}
        aria-label="Previous image" // Descriptive label for previous button
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
          ref={imageRef} // Assign ref to the image
          src={images[index]}
          alt={`Gallery image ${index + 1}, zoomed view`} // More descriptive alt text for zoomed image
          width={1200}
          height={1200}
          className="object-contain max-h-[80vh]"
          tabIndex={0} // Make image focusable when opened
        />
      </motion.div>

      <button
        className="absolute right-4 text-white text-4xl hidden md:block z-10"
        onClick={onNext}
        aria-label="Next image" // Descriptive label for next button
      >
        &#8594;
      </button>
    </div>
  );
}

interface GalleryCardProps {
  src: string;
  alt: string;
  delay: number;
  onZoom: () => void;
}

const GalleryCard = ({ src, alt, delay, onZoom }: GalleryCardProps) => {
  const aspectClass = getAspectClass(src);

  return (
    <motion.div
      className="relative group overflow-hidden shadow-lg"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={{ ...fadeIn.transition, delay }}
      viewport={{ once: true }}
      role="group" // Indicate this is a semantic group for an image card
      aria-label={alt} // Use the alt text as an aria-label for the group
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt} // Alt text for the thumbnail image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#003269]/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition duration-700">
        <span
          className="text-lg sm:text-xl font-semibold mb-4 font-inter"
          aria-hidden="true"
        >
          SAS Roofing
        </span>
        <button
          className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors"
          onClick={onZoom}
          aria-label={`Zoom in on ${alt}`} // Descriptive label for zoom button
        >
          <Image src="/search.png" alt="Zoom icon" width={20} height={20} />{" "}
          {/* Alt text for zoom icon */}
        </button>
      </div>
    </motion.div>
  );
};

export default function GallerySection2() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // No need for separate useEffect for body overflow, it's handled in Modal
  // No need for separate useEffect for keyboard events, it's handled in Modal

  const closeModal = () => setSelectedIndex(null);
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );

  return (
    <section
      className="px-4 sm:px-6 lg:px-12 py-12 w-full"
      aria-label="Project Gallery"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <GalleryCard
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`} // Alt text for each thumbnail
            delay={idx * 0.05}
            onZoom={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

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
