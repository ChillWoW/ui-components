import React from "react";
import "./RingProgress.css";

export interface RingProgressProps {
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
    <div className="ring-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="ring-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
        />
        <circle
          className="ring-value"
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
      {label && <div className="ring-label">{label}</div>}
    </div>
  );
};
