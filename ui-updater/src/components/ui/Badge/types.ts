import React from "react";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";
export type BadgeVariant = "filled" | "outline" | "dot";
export type BadgeShape = "rounded" | "square" | "pill";

export interface BadgeClassNames {
  container?: string;
  leftSection?: string;
  rightSection?: string;
  dot?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  shape?: BadgeShape;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  className?: string;
  color?: string;
  classNames?: BadgeClassNames;
  asLink?: boolean;
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
