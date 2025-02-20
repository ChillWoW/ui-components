import React from "react";
import "./Progress.css";
import { cn } from "..";

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
    <div className="flex flex-col w-full gap-2">
      {label && <div className="text-sm text-white">{label}</div>}
      <div
        className={cn("relative w-full", {
          "h-1": size === "xs",
          "h-1.5": size === "sm",
          "h-2": size === "md",
          "h-3": size === "lg",
          "h-4": size === "xl",
        })}
      >
        <div className="absolute inset-0 bg-[#252627] rounded-[2px]" />
        <div
          className="absolute inset-0 rounded-[2px] transition-all duration-300"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};
