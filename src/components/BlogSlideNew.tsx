"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";

interface Slide {
  shortTitle: string;
  link: string;
  title: string;
  description: string;
  date: string;
  image: string;
  // Add initialLikes to the Slide interface
  initialLikes: number;
}

// Update the component's props to include initialLikes
export default function BlogSlideNew({ slide }: { slide: Slide }) {
  const [liked, setLiked] = useState(false);
  // Initialize 'likes' state with the 'initialLikes' prop value
  const [likes, setLikes] = useState(slide.initialLikes);
  const router = useRouter();

  const href = slide.link === "/" ? "/" : `/blog/${slide.link}`;

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the card click handler from firing
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the card click handler from firing
    if (navigator.share) {
      const shareUrl =
        slide.link === "/"
          ? window.location.origin
          : `${window.location.origin}/blog/${slide.link}`;

      navigator
        .share({
          title: slide.title,
          text: slide.shortTitle,
          url: shareUrl,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Sharing is not supported in this browser.");
    }
  };

  const handleCardClick = () => {
    router.push(href);
  };

  return (
    <motion.section
      className="lg:w-[400px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleCardClick();
        }}
        aria-label={`Read more about ${slide.title}`}
        className="cursor-pointer h-[515px] flex flex-col justify-between rounded-md shadow-2xl overflow-hidden font-inter border border-blue-300 bg-white mt-3"
      >
        {/* Image Section */}
        <div className="relative w-full h-60">
          <Image
            src={slide.image}
            alt={slide.title} // Ensure alt text is descriptive
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
          <div className="absolute top-2 left-2 bg-[#e63a27] text-white text-xs px-2 py-1 rounded">
            {/* Short title is visual, consider if it needs to be read out with aria-hidden or a separate label if crucial for context */}
            {slide.shortTitle}
          </div>
        </div>

        {/* Like & Share */}
        <div
          className="flex justify-between items-center px-4 py-2 text-gray-600"
          // This div itself doesn't need to prevent propagation, only the buttons inside
        >
          <button
            onClick={handleLike}
            aria-label={
              liked
                ? `Unlike this post. Current likes: ${likes}`
                : `Like this post. Current likes: ${likes}`
            }
            className="flex items-center gap-1 text-[#e63a27]"
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5" aria-hidden="true" />
            ) : (
              <FiHeart
                className="w-5 h-5 hover:text-[#e63a27]"
                aria-hidden="true"
              />
            )}
            <span aria-live="polite" aria-atomic="true">
              {likes}
            </span>{" "}
            {/* Announce live updates to likes */}
          </button>
          <button
            onClick={handleShare}
            aria-label={`Share ${slide.title} on social media`}
            className="hover:text-[#e63a27] transition-colors"
          >
            <FiShare2 className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">Share</span>{" "}
            {/* Visually hidden text for screen readers */}
          </button>
        </div>

        {/* Content + Button Container */}
        <div className="flex flex-col justify-between flex-grow px-4 py-2">
          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-4">
              {slide.title}
            </h2>
            <p className="text-sm text-gray-600 font-bevietnam">
              {slide.description}
            </p>
          </div>
          <div className="mt-4 text-center">
            {/* This span acts as a button, it's better to make it a real button or an anchor tag */}
            <a
              href={href}
              className="inline-block bg-[#003269] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#00254c] transition-colors"
              aria-label={`Read more about ${slide.title}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
