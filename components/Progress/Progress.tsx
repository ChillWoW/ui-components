import React from "react";
import "./Progress.css";

export interface ProgressProps {
  value: number;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  color = "white",
  size = "md",
  label,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`progress-root size-${size}`}>
      {label && <div className="progress-label">{label}</div>}
      <div className="progress-track">
        <div
          className="progress-bar"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};
