"use client";

import React from "react";

interface VideoIframeProps {
  videoId?: string;
  title?: string;
  autoplay?: boolean;
}
//Video
const VideoIframe: React.FC<VideoIframeProps> = ({
  videoId = "Z4gunD5Wbi8",
  title = "Video",
  autoplay = true,
}) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&rel=0&modestbranding=1`;

  return (
    <iframe
      src={videoUrl}
      title="Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full border-none rounded-lg"
    />
  );
};

export default VideoIframe;
