"use client"; // Tambahkan jika menggunakan Next.js App Router
import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string; // Teks yang akan ditampilkan
  speed?: number; // Kecepatan mengetik (ms per karakter)
  delay?: number; // Penundaan sebelum mulai mengetik (ms)
};

export default function Typewriter({
  text,
  speed = 100, // Default: 100ms per karakter
  delay = 0, // Default: tanpa penundaan
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mulai mengetik setelah penundaan awal
    const startTyping = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, delay);

    return () => clearTimeout(startTyping);
  }, [currentIndex, text, speed, delay]);

  return <span >{displayedText}</span>;
}