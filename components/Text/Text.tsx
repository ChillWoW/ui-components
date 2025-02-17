import React from "react";
import "./Text.css";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  color?: string;
  weight?: "bold" | "semibold" | "normal" | "light" | number;
  align?: "left" | "center" | "right";
  italic?: boolean;
  underline?: boolean;
  dimmed?: boolean;
  component?: any;
  className?: string;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = "md",
  color,
  weight,
  align,
  italic,
  underline,
  dimmed,
  component: Component = "p",
  className,
  style,
  children,
  ...others
}) => {
  const classes = [
    "text",
    typeof size === "string" && `text-${size}`,
    typeof weight === "string" && `text-${weight}`,
    align && `text-${align}`,
    italic && "text-italic",
    underline && "text-underline",
    dimmed && "text-dimmed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      style={{
        ...style,
        color: color,
        fontWeight: typeof weight === "number" ? weight : undefined,
        fontSize: typeof size === "number" ? size : undefined,
      }}
      {...others}
    >
      {children}
    </Component>
  );
};
