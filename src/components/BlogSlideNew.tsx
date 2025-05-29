"use client";
import { useState } from "react";
import Link from "next/link";
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
}

export default function BlogSlideNew({ slide }: { slide: Slide }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(10);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      // Construct share URL
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
      alert(
        "Sharing is not supported in this browser. You can manually copy the link."
      );
    }
  };

  const href = slide.link === "/" ? "/" : `/blog/${slide.link}`;

  return (
    <motion.section
      className="lg:w-[400px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="h-[515px] flex flex-col justify-between rounded-md shadow-2xl overflow-hidden font-inter border border-blue-300 bg-white mt-3">
        {/* Image Section */}
        <div className="relative w-full h-60">
          <Image
            src={slide.image}
            alt={slide.title} // `alt` attribute is crucial for `Image` components
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
          <div
            className="absolute top-2 left-2 bg-[#e63a27] text-white text-xs px-2 py-1 rounded"
            aria-label={`Category: ${slide.shortTitle}`}
          >
            {slide.shortTitle}
          </div>
        </div>

        {/* Like & Share */}
        <div className="flex justify-between items-center px-4 py-2 text-gray-600">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-[#e63a27]"
            aria-label={
              liked
                ? `Unlike this post. Current likes: ${likes}`
                : `Like this post. Current likes: ${likes}`
            }
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5" aria-hidden="true" />
            ) : (
              <FiHeart
                className="w-5 h-5 hover:text-[#e63a27]"
                aria-hidden="true"
              />
            )}
            <span>{likes}</span>
          </button>
          <button
            onClick={handleShare}
            className="hover:text-[#e63a27] transition-colors"
            aria-label={`Share the blog post: ${slide.title}`}
          >
            <FiShare2 className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">Share</span>{" "}
            {/* Added for clearer announcement on some screen readers */}
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
            <Link
              href={href}
              className="inline-block bg-[#003269] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#00254c] transition-colors"
              aria-label={`Read more about ${slide.title}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
