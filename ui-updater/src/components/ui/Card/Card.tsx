import React from "react";
import { cn } from "../_utils";
import { CardProps } from "./types";

export const Card = ({
  withBorder = true,
  radius = "md",
  children,
  className,
  classNames,
  shadow = false,
  onClick,
  padding = "md",
  hover = false,
  ...props
}: CardProps) => {
  const paddingClass = {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
    none: "p-0",
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-[#252627] overflow-hidden",
        withBorder && "border border-[#3e4249]",
        radius && `rounded-${radius}`,
        hover &&
          "transition-all duration-200 hover:brightness-110 hover:scale-[1.01]",
        onClick && "cursor-pointer",
        classNames?.container,
        className
      )}
      {...props}
    >
      <div className={cn(paddingClass[padding], classNames?.content)}>
        {children}
      </div>
    </div>
  );
};

Card.displayName = "Card";
