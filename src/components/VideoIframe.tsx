"use client";

import React from "react";

interface VideoIframeProps {
  videoId?: string;
  title?: string;
  autoplay?: boolean;
}
//Video Section
const VideoIframe: React.FC<VideoIframeProps> = ({
  videoId = "Z4gunD5Wbi8",
  title = "Video",
  autoplay = true,
}) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&rel=0&modestbranding=1`;

  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-none"
      />
    </div>
  );
};

export default VideoIframe;
