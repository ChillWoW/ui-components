import React, { useMemo } from "react";
import { RingProgressProps } from "./types";

export const RingProgress = ({
  value,
  size = 100,
  thickness = 8,
  color = "white",
  label,
  roundCaps = true,
  className = "",
  classNames = {},
  sections = [],
  rootColor = "#252627",
  labelClassName = "",
  animate = true,
}: RingProgressProps) => {
  const { clampedValue, radius, circumference, offset } = useMemo(() => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (clampedValue / 100) * circumference;
    return { clampedValue, radius, circumference, offset };
  }, [value, size, thickness]);

  const renderProgress = () => {
    if (sections && sections.length > 0) {
      let currentOffset = 0;
      return sections.map((section, index) => {
        const sectionSize = (section.value / 100) * circumference;
        const sectionOffset = circumference - currentOffset;
        currentOffset += sectionSize;

        return (
          <circle
            key={index}
            className={`fill-none ${animate ? "transition-[stroke-dashoffset] duration-300 ease-in-out" : ""} ${classNames.section || ""}`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={sectionOffset}
            strokeLinecap={roundCaps ? "round" : "butt"}
            style={{ stroke: section.color || color }}
          />
        );
      });
    }

    return (
      <circle
        className={`fill-none ${animate ? "transition-[stroke-dashoffset] duration-300 ease-in-out" : ""} ${classNames.progress || ""}`}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={thickness}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap={roundCaps ? "round" : "butt"}
        style={{ stroke: color }}
      />
    );
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className} ${classNames.root || ""}`}
      style={{ width: size, height: size }}
    >
      <svg
        className={`transform -rotate-90 ${classNames.svg || ""}`}
        width={size}
        height={size}
      >
        <circle
          className={`fill-none ${classNames.track || ""}`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
          style={{ stroke: rootColor }}
        />
        {renderProgress()}
      </svg>
      {label && (
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-medium ${labelClassName} ${classNames.label || ""}`}
        >
          {label}
        </div>
      )}
    </div>
  );
};
