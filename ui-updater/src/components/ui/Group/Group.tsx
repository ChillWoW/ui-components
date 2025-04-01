import React from "react";
import { cn } from "../_utils";
import { GroupProps } from "./types";

export const Group = ({
  children,
  justify = "flex-start",
  align = "center",
  gap = "md",
  wrap = "wrap",
  grow = false,
  preventGrowOverflow = true,
  className,
  style,
  ...props
}: GroupProps) => {
  const gapClasses = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  const justifyClasses = {
    "flex-start": "justify-start",
    center: "justify-center",
    "flex-end": "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
  };

  const alignClasses = {
    "flex-start": "items-start",
    center: "items-center",
    "flex-end": "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const wrapClasses = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const childStyle = grow
    ? {
        flexGrow: 1,
        flexBasis: 0,
        ...(preventGrowOverflow
          ? { maxWidth: `${100 / React.Children.count(children)}%` }
          : {}),
      }
    : {};

  return (
    <div
      className={cn(
        "flex",
        justifyClasses[justify],
        alignClasses[align],
        wrapClasses[wrap],
        typeof gap === "number" ? "" : gapClasses[gap],
        className
      )}
      style={{
        ...(typeof gap === "number" ? { gap: `${gap}px` } : {}),
        ...style,
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        if (
          typeof child === "string" ||
          typeof child === "number" ||
          child.type === React.Fragment
        ) {
          return child;
        }

        return React.cloneElement(child, {
          // @ts-ignore
          style: {
            ...childStyle,
            ...((child.props as any).style || {}),
          },
        });
      })}
    </div>
  );
};
