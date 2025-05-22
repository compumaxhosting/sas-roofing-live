"use client";

import Link from "next/link";
import { blogPosts } from "@/data/data";

export default function BlogMainPage() {
  return (
    <div className="bg-[#003269] flex flex-col items-center justify-center space-y-4 px-4 py-10">
      {blogPosts.map(({ title, slug }) => (
        <Link
          key={slug}
          href={`/blog/${slug}`}
          className="bg-[#e63a27] text-white text-center font-semibold px-6 py-4 w-full max-w-4xl rounded-md shadow-md hover:bg-[#c22e1f] transition"
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
