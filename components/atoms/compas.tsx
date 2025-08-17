import React from "react";

type Props = {
  northDegrees?: number; // derajat arah utara (0 = atas)
  size?: number;         // ukuran kompas (default 200px)
};

export default function CompassPlus({ northDegrees = 0, size = 200 }: Props) {
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        transform: `rotate(${northDegrees}deg)`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Garis vertikal */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-primary transform -translate-x-1/2" />
      
      {/* Garis horizontal */}
      <div className="absolute top-1/2 left-0 h-1 w-full bg-primary transform -translate-y-1/2" />

      {/* Label arah */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-xs font-bold ">
        U
      </div>
    </div>
  );
}
