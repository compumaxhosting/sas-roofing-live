"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Slide {
  shortTitle: string;
  link: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function BlogSlideNew({ slide }: { slide: Slide }) {
  const router = useRouter();

  const href = slide.link === "/" ? "/" : `/blog/${slide.link}`;


  const handleCardClick = () => {
    router.push(href);
  };

  return (
    <motion.article
      className="lg:w-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby={`blog-title-${slide.title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleCardClick()
        }
        aria-label={`Read full article: ${slide.title}`}
        className="cursor-pointer h-128.75 flex flex-col justify-between rounded-md shadow-2xl overflow-hidden font-inter border border-blue-300 bg-white mt-3 pb-4"
      >
        {/* Image Section */}
        <div className="relative w-full h-60">
          <Image
            src={slide.image}
            alt={`Cover image for blog post: ${slide.title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
          <div
            className="absolute top-2 left-2 bg-[#e63a27] text-white text-xs px-2 py-1 rounded"
            aria-hidden="true"
          >
            {slide.shortTitle}
          </div>
        </div>

      

        {/* Content Section */}
        <div className="flex flex-col justify-evenly grow px-4 py-2">
          <div>
            <h1
              className="text-md font-semibold text-gray-800 mb-4"
              id={`blog-title-${slide.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              {slide.title}
            </h1>
            <p className="text-sm text-gray-600 font-bevietnam text-justify">
              {slide.description}
            </p>
          </div>

          {/* Read More */}
          <div className="mt-4 text-center">
            <Link
              href={href}
              className="inline-block bg-[#003269] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#00254c] transition-colors"
              aria-label={`Read full blog post: ${slide.title}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
