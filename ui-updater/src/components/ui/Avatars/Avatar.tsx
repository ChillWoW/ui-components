import React from "react";
import { cn } from "..";
import { AvatarProps } from "./types";

export const Avatar = ({
  src,
  placeholder,
  content,
  size = "md",
  shape = "circle",
  rounded = "md",
  color,
  className,
  classNames,
  badge,
  ...props
}: AvatarProps) => {
  const avatarClass =
    "inline-flex items-center justify-center text-white bg-gray-700 relative";

  const sizeClass = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const roundedClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const shapeClass = {
    circle: "rounded-full",
    rounded: roundedClass[rounded],
  };

  const badgePositionClass = {
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
    "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  };

  const displayContent = placeholder || content;

  return (
    <div
      className={cn(
        avatarClass,
        sizeClass[size],
        shapeClass[shape],
        classNames?.container,
        className
      )}
      style={{ backgroundColor: color }}
      {...props}
    >
      {src ? (
        <img
          className={cn(
            "w-full h-full object-cover",
            shapeClass[shape],
            classNames?.image
          )}
          src={src}
          alt="avatar"
        />
      ) : (
        <span
          className={cn(
            "flex items-center justify-center",
            classNames?.placeholder
          )}
        >
          {displayContent}
        </span>
      )}
      {badge && (
        <div
          className={cn(
            "absolute flex items-center justify-center h-3 w-3 rounded-full text-[10px] px-1 ring-2 ring-white",
            badgePositionClass[badge.position || "top-right"],
            classNames?.badge
          )}
          style={{ backgroundColor: badge.color || "#228be6" }}
        />
      )}
    </div>
  );
};
