import { useState } from "react";

const YouTubeBackground: React.FC<{ videoId: string }> = ({ videoId }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {/* Video */}
            <iframe
                className="w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
                allow="autoplay; fullscreen"
                onLoad={() => setIsLoaded(true)} // <-- akan jalan ketika iframe selesai load
            ></iframe>

            {/* Overlay gradasi */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/60"></div>

            {/* Loading spinner */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background">
                </div>
            )}
        </div>
    );
};

export default YouTubeBackground;
