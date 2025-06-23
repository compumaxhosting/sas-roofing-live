"use client";

const VideoIframe = () => {
  const videoUrl =
    "https://www.youtube.com/embed/Z4gunD5Wbi8?autoplay=1&rel=0&modestbranding=1";

  return (
    <iframe
      src={videoUrl}
      title="Flat Roof Installation Video"
      aria-label="Flat Roof Installation Video from YouTube"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="w-full h-full border-none rounded-lg"
    />
  );
};

export default VideoIframe;
