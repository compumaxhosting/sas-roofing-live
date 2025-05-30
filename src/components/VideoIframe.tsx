"use client";

import React from "react";

interface VideoIframeProps {
  videoId?: string;
  title?: string;
  autoplay?: boolean;
}

// Video
const VideoIframe: React.FC<VideoIframeProps> = ({
  videoId = "Z4gunD5Wbi8",
  title = "Promotional Video",
  autoplay = true,
}) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&rel=0&modestbranding=1`;

  return (
    <div
      className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg"
      aria-label={`Embedded YouTube video: ${title}`}
      role="region"
    >
      <iframe
        src={videoUrl}
        title={title}
        aria-label={`YouTube video player for ${title}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-none"
      >
        {/* Fallback for screen readers */}
        Your browser does not support embedded videos. You can watch this video
        directly on{" "}
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        .
      </iframe>
    </div>
  );
};

export default VideoIframe;
