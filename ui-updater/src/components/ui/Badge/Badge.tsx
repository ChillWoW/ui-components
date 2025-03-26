import React from "react";
import { cn } from "../_utils";
import { BadgeProps } from "./types";

export const Badge = ({
  children,
  size = "md",
  variant = "filled",
  shape = "rounded",
  leftSection,
  rightSection,
  className,
  color,
  classNames,
  asLink,
  href,
  onClick,
  target,
  ...props
}: BadgeProps) => {
  const badgeClass =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wider leading-none";

  const sizeClasses = {
    xs: "text-[9px] px-1.5 h-4",
    sm: "text-[10px] px-2 h-[18px]",
    md: "text-[11px] px-2.5 h-5",
    lg: "text-[13px] px-3 h-[26px]",
    xl: "text-[16px] px-4 h-8",
  };

  const shapeClasses = {
    square: "rounded-none",
    rounded: "rounded-md",
    pill: "rounded-full",
  };

  const variantClasses = {
    filled: "bg-gray-700 text-white",
    outline: "bg-transparent border border-current text-white",
    dot: "bg-transparent text-white",
    unstyled: "",
  };

  const badgeDotClass = "w-1.5 h-1.5 rounded-full bg-current mr-1";

  const Component = asLink ? "a" : "div";
  const linkProps = asLink ? { href, target } : {};

  return (
    <Component
      className={cn(
        badgeClass,
        sizeClasses[size],
        shapeClasses[shape],
        variantClasses[variant],
        classNames?.container,
        className
      )}
      style={{
        color: variant === "outline" || variant === "dot" ? color : undefined,
        backgroundColor: variant === "filled" ? color : undefined,
        borderColor: variant === "outline" ? color : undefined,
      }}
      onClick={onClick}
      {...linkProps}
      {...props}
    >
      {variant === "dot" && (
        <span className={cn(badgeDotClass, classNames?.dot)} />
      )}
      {leftSection && (
        <span
          className={cn(
            "flex items-center justify-center mr-1",
            classNames?.leftSection
          )}
        >
          {leftSection}
        </span>
      )}
      <span className="truncate">{children}</span>
      {rightSection && (
        <span
          className={cn(
            "flex items-center justify-center ml-1",
            classNames?.rightSection
          )}
        >
          {rightSection}
        </span>
      )}
    </Component>
  );
};
