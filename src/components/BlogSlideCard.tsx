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
}

export default function BlogSlideCard({ slide }: { slide: Slide }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);
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
      } catch (error) {
        console.error("Share failed:", error);
      } finally {
        setIsSharing(false);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };
  

  return (
    <div className="relative w-full h-[430px] rounded-sm shadow-md overflow-hidden flex flex-col font-inter">
      {/* Background Image */}
      <Link
        href={`/blog/${slide.link}`}
        className="relative flex-1 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Title & Description */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-left text-white">
          <div className="flex items-center gap-2 text-[#e63a27] text-xs font-semibold uppercase tracking-wide">
            <FiFolder className="w-4 h-4" />
            {slide.description}
          </div>
          <div className="font-bold text-base sm:text-lg md:text-xl leading-tight drop-shadow-md">
            {slide.title}
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border border-gray-400 text-sm">
        <Link
          href={`/blog/${slide.link}`}
          className="flex items-center gap-1 font-bold text-[#003269] text-sm"
        >
          <FiExternalLink className="w-4 h-4" />
          MORE DETAILS
        </Link>

        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-[#e63a27]"
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5" />
            ) : (
              <FiHeart className="w-5 h-5 hover:text-[#e63a27]" />
            )}
            <span>{likeCount}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="hover:text-[#e63a27] transition-colors"
          >
            <FiShare2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
