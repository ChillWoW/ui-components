import React from "react";
import { cn } from "../_utils";
import { TimelineItemProps } from "./types";
import { useTimeline } from "./context";

export const TimelineItem = ({
  children,
  className,
  title,
  bullet,
  bulletColor,
  date,
  active = true,
  index = 0,
  totalItems = 1,
  description,
  onClick,
  icon,
  ...otherProps
}: TimelineItemProps) => {
  const { align, bulletSize, lineColor, lineWidth, bulletShape, compact } =
    useTimeline();

  const getBulletStyle = () => {
    const baseStyle = {
      width: bulletSize,
      height: bulletSize,
      backgroundColor: bulletColor || (active ? lineColor : "#e0e0e0"),
      border: `${lineWidth}px solid ${lineColor}`,
    };

    if (bulletShape === "square") {
      return { ...baseStyle, borderRadius: "2px" };
    } else if (bulletShape === "diamond") {
      return { ...baseStyle, transform: "rotate(45deg)" };
    }

    return { ...baseStyle, borderRadius: "50%" };
  };

  return (
    <div
      className={cn(
        "relative flex",
        align === "left" ? "flex-row" : "flex-row-reverse",
        onClick && "cursor-pointer hover:bg-gray-50 rounded-md",
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      <div
        className="flex items-center justify-center z-10"
        style={{
          minWidth: bulletSize,
          minHeight: bulletSize,
        }}
      >
        {bullet || (
          <div
            className="flex items-center justify-center"
            style={getBulletStyle()}
          >
            {icon && (
              <span
                className="text-white"
                style={{ fontSize: bulletSize * 0.6 }}
              >
                {icon}
              </span>
            )}
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-col",
          align === "left" ? "ml-4" : "mr-4",
          compact ? "py-0" : "py-2"
        )}
      >
        {title && (
          <div
            className={cn(
              "font-semibold",
              active ? "text-gray-900" : "text-gray-500"
            )}
          >
            {title}
            {date && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                {date}
              </span>
            )}
          </div>
        )}

        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}

        <div className={cn("text-gray-700", compact ? "mt-0" : "mt-2")}>
          {children}
        </div>
      </div>
    </div>
  );
};
