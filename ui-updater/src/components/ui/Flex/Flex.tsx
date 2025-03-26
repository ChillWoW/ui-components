import React from "react";
import { cn } from "../_utils";
import { FlexProps } from "./types";

export const Flex = ({
  children,
  orientation = "horizontal",
  justify = "start",
  align = "start",
  gap = "md",
  wrap = "nowrap",
  fullWidth = false,
  fullHeight = false,
  className,
}: FlexProps) => {
  const flexDirection = orientation === "horizontal" ? "flex-row" : "flex-col";

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const wrapMap = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const getGapClass = () => {
    if (typeof gap === "number") return `gap-[${gap}px]`;

    return gap === "none"
      ? "gap-0"
      : gap === "xs"
      ? "gap-1"
      : gap === "sm"
      ? "gap-2"
      : gap === "md"
      ? "gap-4"
      : gap === "lg"
      ? "gap-6"
      : "gap-8";
  };

  return (
    <div
      className={cn(
        "flex",
        flexDirection,
        justifyMap[justify],
        alignMap[align],
        wrapMap[wrap],
        getGapClass(),
        fullWidth && "w-full",
        fullHeight && "h-full",
        className
      )}
    >
      {children}
    </div>
  );
};
