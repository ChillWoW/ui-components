import React from "react";
import "./Loader.css";

interface LoaderProps {
  size?: number;
  color?: string;
  speed?: number;
  stroke?: number;
  strokeLength?: number;
  bgOpacity?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = "white",
  speed = 0.8,
  stroke = 5,
  strokeLength = 0.25,
  bgOpacity = 0.1,
}) => {
  const centerPoint = size / 2;
  const radius = Math.max(0, size / 2 - stroke / 2);
  const dashArray = `${strokeLength * 100} ${100 - strokeLength * 100}`;

  return (
    <div className="loader-container" style={{ width: size, height: size }}>
      <svg
        className="loader-svg"
        viewBox={`${centerPoint} ${centerPoint} ${size} ${size}`}
        width={size}
        height={size}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        <circle
          className="loader-track"
          cx={size}
          cy={size}
          r={radius}
          strokeWidth={stroke}
          style={{
            stroke: color,
            opacity: bgOpacity,
          }}
        />
        <circle
          className="loader-circle"
          cx={size}
          cy={size}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={dashArray}
          strokeLinecap="round"
          style={{ stroke: color }}
        />
      </svg>
    </div>
  );
};
