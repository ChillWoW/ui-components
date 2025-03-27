import React from "react";
import { cn } from "../_utils";
import { SkeletonProps } from "./types";
import "./Skeleton.css";

export const Skeleton = ({
  height,
  width,
  radius = "md",
  circle = false,
  animate = true,
  visible = true,
  className,
  children,
  ...props
}: SkeletonProps) => {
  const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const circleStyles = circle
    ? {
        width: height,
        height: height,
        borderRadius: "50%",
      }
    : {};

  if (children && !visible) {
    return <>{children}</>;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#3b3b3b]",
        animate && "skeleton-shimmer",
        radiusMap[radius as keyof typeof radiusMap],
        className
      )}
      style={{
        height,
        width,
        ...circleStyles,
      }}
      {...props}
    >
      {children && (
        <div className={visible ? "invisible" : "visible"}>{children}</div>
      )}
    </div>
  );
};
