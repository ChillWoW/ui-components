import React from "react";
import { cn } from "../_utils";
import { GridProps } from "./types";

export const Grid = ({
  children,
  cols = 1,
  rows,
  spacing = "md",
  verticalSpacing,
  justify = "start",
  align = "start",
  flow = "row",
  fullWidth = false,
  fullHeight = false,
  className,
}: GridProps) => {
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

  const flowMap = {
    row: "grid-flow-row",
    col: "grid-flow-col",
    dense: "grid-flow-dense",
    "row-dense": "grid-flow-row-dense",
    "col-dense": "grid-flow-col-dense",
  };

  const getGridColsClass = () => {
    if (typeof cols === "number") {
      return `grid-cols-${cols}`;
    }

    if (typeof cols === "object") {
      const classes = [];
      if (cols.xs) classes.push(`xs:grid-cols-${cols.xs}`);
      if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
      if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
      if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
      if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
      if (cols["2xl"]) classes.push(`2xl:grid-cols-${cols["2xl"]}`);
      return classes.join(" ");
    }

    return "grid-cols-1";
  };

  const getGridRowsClass = () => {
    if (!rows) return "";
    if (typeof rows === "number") return `grid-rows-${rows}`;
    return "";
  };

  const getSpacingClass = (type: "x" | "y") => {
    const value = type === "x" ? spacing : verticalSpacing || spacing;

    if (typeof value === "number") return `gap-${type}-[${value}px]`;

    return value === "none"
      ? `gap-${type}-0`
      : value === "xs"
      ? `gap-${type}-1`
      : value === "sm"
      ? `gap-${type}-2`
      : value === "md"
      ? `gap-${type}-4`
      : value === "lg"
      ? `gap-${type}-6`
      : `gap-${type}-8`;
  };

  return (
    <div
      className={cn(
        "grid",
        getGridColsClass(),
        getGridRowsClass(),
        justifyMap[justify],
        alignMap[align],
        flowMap[flow],
        getSpacingClass("x"),
        getSpacingClass("y"),
        fullWidth && "w-full",
        fullHeight && "h-full",
        className
      )}
    >
      {children}
    </div>
  );
};
