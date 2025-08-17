"use client";

import React from "react";

type YouTubeEmbedProps = {
  /** YouTube video ID (e.g. "dQw4w9WgXcQ"). If `url` is provided, this can be omitted. */
  id?: string;
  /** Full YouTube URL; the component will extract the ID automatically. */
  url?: string;
  /** Accessible title for the iframe, shown to screen readers. */
  title?: string;
  /** Start time in seconds. */
  start?: number;
  /** Autoplay the video (muted by default to allow autoplay on most browsers). */
  autoplay?: boolean;
  /** Show player controls. */
  controls?: boolean;
  /** Additional Tailwind classes for the outer container. */
  className?: string;
  /** Use privacy-enhanced domain youtube-nocookie.com (default true). */
  privacyEnhanced?: boolean;
};

function extractYouTubeId(input?: string): string | null {
  if (!input) return null;
  // Handle common URL formats
  const patterns = [
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/, // standard
    /^([A-Za-z0-9_-]{11})$/ // raw ID
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1] ?? m[0];
  }
  return null;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  id,
  url,
  title = "YouTube video player",
  start = 0,
  autoplay = false,
  controls = true,
  className = "",
  privacyEnhanced = true,
}) => {
  const videoId = id ?? extractYouTubeId(url ?? "") ?? "";

  // Build embed URL
  const base = privacyEnhanced
    ? "https://www.youtube-nocookie.com/embed/"
    : "https://www.youtube.com/embed/";

  const params = new URLSearchParams({
    start: String(start || 0),
    autoplay: autoplay ? "1" : "0",
    controls: controls ? "1" : "0",
    // Improve UX
    modestbranding: "1",
    rel: "0",
    mute: autoplay ? "1" : "0",
  }).toString();

  const src = videoId ? `${base}${videoId}?${params}` : "";

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-2xl shadow ${className}`}
      aria-label={title}
    >
      {videoId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted-foreground">
          Invalid or missing YouTube video ID/URL
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;

/*
Usage examples:

<YouTubeEmbed id="dQw4w9WgXcQ" />

<YouTubeEmbed url="https://youtu.be/dQw4w9WgXcQ" start={30} autoplay />

<YouTubeEmbed
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  controls={false}
  className="mt-6"
/>
*/
