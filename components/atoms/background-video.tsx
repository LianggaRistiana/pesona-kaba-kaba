import React from "react";

interface BackgroundVideoProps {
  src: string;           // Link video eksternal atau lokal
  opacity?: number;      // Opacity antara 0.0 - 1.0 (default 1)
  overlayColor?: string; // Tailwind color class, contoh: "bg-black/50"
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  opacity = 1,
  overlayColor = " ",
}) => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>
    </div>
  );
};

export default BackgroundVideo;
