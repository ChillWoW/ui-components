import React from "react";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | number;
export type TextWeight = "bold" | "semibold" | "normal" | "light" | number;
export type TextAlign = "left" | "center" | "right";
export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  color?: string;
  weight?: TextWeight;
  align?: TextAlign;
  italic?: boolean;
  underline?: boolean;
  dimmed?: boolean;
  truncate?: boolean;
  lineClamp?: number;
  transform?: TextTransform;
  spacing?: string | number;
  component?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}
