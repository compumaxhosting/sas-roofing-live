"use client";

import { useState } from "react";
import Link from "next/link";
import { FiExternalLink, FiHeart, FiFolder, FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

interface Slide {
  link: string;
  title: string;
  description: string;
  date: string;
  image: string;
  // Add initialLikeCount to the Slide interface
  initialLikeCount: number;
}

// Update the component's props to include initialLikeCount
export default function BlogSlideCard({ slide }: { slide: Slide }) {
  const [liked, setLiked] = useState(false);
  // Initialize likeCount state with the prop value
  const [likeCount, setLikeCount] = useState(slide.initialLikeCount);
  const [isSharing, setIsSharing] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = async () => {
    if (isSharing) return;
    if (navigator.share) {
      setIsSharing(true);
      try {
        await navigator.share({
          title: slide.title,
          text: slide.description,
          url: `${window.location.origin}/blog/${slide.link}`,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      } finally {
        setIsSharing(false);
      }
    } else {
      alert("Your browser doesn't support sharing.");
    }
  };

  return (
    <article
      role="article"
      aria-label={`Blog post: ${slide.title}`}
      className="relative w-full h-[430px] rounded-sm shadow-md overflow-hidden flex flex-col font-inter"
    >
      {/* Image + Overlay */}
      <Link
        href={`/blog/${slide.link}`}
        className="relative flex-1 overflow-hidden group"
        aria-label={`Read more about ${slide.title}`}
      >
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
          role="img"
          aria-label={`Image representing ${slide.title}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Text over image */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-left text-white drop-shadow-md">
          <div className="flex items-center gap-2 text-[#e63a27] text-xs font-semibold uppercase tracking-wide">
            <FiFolder className="w-4 h-4" aria-hidden="true" />
            <span>{slide.description}</span>
          </div>
          <h3 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
            {slide.title}
          </h3>
        </div>
      </Link>

      {/* Card Footer */}
      <footer
        className="bg-white px-4 py-3 flex justify-between items-center border border-gray-400 text-sm"
        aria-label="Card footer with actions"
      >
        {/* More Details Link */}
        <Link
          href={`/blog/${slide.link}`}
          className="flex items-center gap-1 font-bold text-[#003269]"
          aria-label="More details about blog post"
        >
          <FiExternalLink className="w-4 h-4" aria-hidden="true" />
          <span>MORE DETAILS</span>
        </Link>

        {/* Like and Share Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-[#e63a27]"
            aria-label={liked ? "Unlike this post" : "Like this post"}
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5" aria-hidden="true" />
            ) : (
              <FiHeart
                className="w-5 h-5 hover:text-[#e63a27]"
                aria-hidden="true"
              />
            )}
            <span>{likeCount}</span>
          </button>

          <button
            onClick={handleShare}
            disabled={isSharing}
            className="hover:text-[#e63a27] transition-colors"
            aria-label="Share this post"
          >
            <FiShare2 className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </article>
  );
}
