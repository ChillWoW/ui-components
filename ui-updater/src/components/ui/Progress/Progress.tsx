import React from "react";
import "./Progress.css";
import { cn } from "../_utils";
import { ProgressProps } from "./types";

export const Progress = ({
  value,
  color = "white",
  size = "md",
  leftSideText,
  rightSideText,
  hint,
  classNames,
  showLabel = true,
  radius = "md",
  trackColor = "#252627",
  labelPosition = "top",
}: ProgressProps) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("flex flex-col w-full gap-2", classNames?.container)}>
      {showLabel && (leftSideText || rightSideText) && (
        <div
          className={cn(
            "flex w-full",
            leftSideText ? "justify-between" : "justify-end",
            labelPosition === "bottom" && "order-last"
          )}
        >
          {leftSideText && (
            <span
              className={cn("text-sm text-white", classNames?.leftSideText)}
            >
              {leftSideText}
            </span>
          )}
          {rightSideText && (
            <span
              className={cn(
                "text-sm text-white flex self-end",
                classNames?.rightSideText
              )}
            >
              {rightSideText}
            </span>
          )}
        </div>
      )}
      <div
        className={cn("relative w-full", {
          "h-1": size === "xs",
          "h-1.5": size === "sm",
          "h-2": size === "md",
          "h-3": size === "lg",
          "h-4": size === "xl",
        })}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-[2px]",
            radius && `rounded-${radius}`,
            classNames?.track
          )}
          style={{
            backgroundColor: trackColor,
          }}
        />
        <div
          className={cn(
            "absolute inset-0 rounded-[2px] transition-all duration-300",
            classNames?.activeTrack
          )}
          style={{
            width: `${clampedValue}%`,
            backgroundColor: color,
            borderRadius: `${radius}px`,
          }}
        />
      </div>
      {hint && (
        <span className={cn("text-xs text-gray-500", classNames?.hint)}>
          {hint}
        </span>
      )}
    </div>
  );
};

Progress.displayName = "Progress";
