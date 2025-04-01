import React from "react";
import { StackAlign, StackJustify, StackProps } from "./types";
import { cn } from "..";

export const Stack = ({
  children,
  align,
  justify,
  gap,
  className,
  style,
}: StackProps) => {
  const alignMap = {
    stretch: "items-stretch",
    center: "items-center",
    "flex-start": "items-start",
    "flex-end": "items-end",
  };

  const justifyMap = {
    center: "justify-center",
    "flex-start": "justify-start",
    "flex-end": "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
  };

  const getGapClass = () => {
    if (typeof gap === "number") return `gap-[${gap}px]`;

    switch (gap) {
      case "none":
        return "gap-0";
      case "xs":
        return "gap-1";
      case "sm":
        return "gap-2";
      case "md":
        return "gap-4";
      case "lg":
        return "gap-6";
      case "xl":
        return "gap-8";
      default:
        return "gap-4";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col",
        alignMap[align as StackAlign],
        justifyMap[justify as StackJustify],
        getGapClass(),
        className
      )}
    >
      {children}
    </div>
  );
};
