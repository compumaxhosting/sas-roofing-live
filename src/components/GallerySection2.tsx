"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react"; // Import useRef

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
  const modalRef = useRef<HTMLDivElement>(null); // Ref to manage focus within the modal

  useEffect(() => {
    if (open) {
      // Focus the modal container when it opens for better accessibility
      modalRef.current?.focus();
    }
  }, [open]);

  // If the modal is not open, render nothing. AnimatePresence handles unmounting.
  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Ensure exit animation works with AnimatePresence in parent
      role="dialog" // Identifies the modal as a dialog
      aria-modal="true" // Indicates that the dialog is modal and blocks content behind it
      aria-label={`Image ${index + 1} of ${images.length} in gallery`} // Label for the modal itself
      tabIndex={-1} // Makes the modal div programmatically focusable
      ref={modalRef} // Assign ref to the modal div
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" // Added focus styles
        onClick={onClose}
        aria-label="Close image gallery" // Explicit label for close button
      >
        &times;
      </button>

      {/* Arrows hidden on small screens, and add aria-labels */}
      <button
        className="absolute left-4 text-white text-4xl hidden md:block z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" // Added focus styles
        onClick={onPrev}
        aria-label="Previous image" // Explicit label for previous button
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
        aria-live="polite" // Announces changes to screen readers (e.g., when image changes)
      >
        <Image
          src={images[index]}
          alt={`Gallery image ${index + 1} of ${images.length}`} // More specific alt text for zoomed image
          width={1200}
          height={1200}
          className="object-contain max-h-[80vh]"
        />
      </motion.div>

      <button
        className="absolute right-4 text-white text-4xl hidden md:block z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" // Added focus styles
        onClick={onNext}
        aria-label="Next image" // Explicit label for next button
      >
        &#8594;
      </button>
    </motion.div>
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
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt} // Already good alt text!
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
          className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" // Added focus styles
          onClick={onZoom}
          aria-label={`View larger version of ${alt}`} // Explicit label for zoom button
        >
          <Image
            src="/search.png"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />{" "}
          {/* Icon is decorative, hide from screen readers */}
        </button>
      </div>
    </motion.div>
  );
};

export default function GallerySection2() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Memoize functions to avoid re-creating on every render
  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const showNext = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev === null ? 0 : (prev + 1) % images.length
      ),
    []
  );
  const showPrev = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev === null ? 0 : (prev - 1 + images.length) % images.length
      ),
    []
  );

  // Effect to manage body overflow when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function for when component unmounts or selectedIndex changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return; // Only active if modal is open
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, closeModal, showNext, showPrev]); // Dependencies for useEffect

  return (
    <section
      className="px-4 sm:px-6 lg:px-12 py-12 w-full"
      aria-label="Our Project Gallery"
    >
      <h2 className="sr-only">Our Project Gallery</h2>{" "}
      {/* Visually hidden heading for semantic structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <GalleryCard
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            delay={idx * 0.05}
            onZoom={() => setSelectedIndex(idx)}
          />
        ))}
      </div>
      <AnimatePresence>
        {" "}
        {/* Wrap Modal with AnimatePresence for exit animations */}
        <Modal
          open={selectedIndex !== null}
          index={selectedIndex ?? 0} // Provide a default of 0 if null, though check `open` prop first
          onClose={closeModal}
          onNext={showNext}
          onPrev={showPrev}
        />
      </AnimatePresence>
    </section>
  );
}
