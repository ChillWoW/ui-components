import React from "react";

interface RingProgressProps {
  value: number;
  size?: number;
  thickness?: number;
  color?: string;
  label?: React.ReactNode;
  roundCaps?: boolean;
}

export const RingProgress: React.FC<RingProgressProps> = ({
  value,
  size = 100,
  thickness = 8,
  color = "white",
  label,
  roundCaps = true,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="fill-none stroke-[#252627]"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
        />
        <circle
          className="fill-none transition-[stroke-dashoffset] duration-300 ease-in-out"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap={roundCaps ? "round" : "butt"}
          style={{ stroke: color }}
        />
      </svg>
      {label && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-medium">
          {label}
        </div>
      )}
    </div>
  );
};
