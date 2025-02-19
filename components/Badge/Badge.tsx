import React from "react";
import "./Badge.css";

export type BadgeSize = "sm" | "md" | "lg" | "xl";
export type BadgeVariant = "filled" | "outline" | "light";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  withDot?: boolean;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  size = "md",
  variant = "filled",
  leftSection,
  rightSection,
  withDot = false,
  className,
  color,
  style,
  ...props
}) => {
  const rootClasses = ["root", withDot && "root--dot", className]
    .filter(Boolean)
    .join(" ");

  const dataAttributes: Record<string, boolean | string> = {
    "data-with-left-section": Boolean(leftSection),
    "data-with-right-section": Boolean(rightSection),
    "data-variant": withDot ? "dot" : false,
  };

  const sizeStyles = {
    "--badge-height": `var(--badge-height-${size})`,
    "--badge-size": `var(--badge-size-${size})`,
    "--badge-padding-x": `var(--badge-padding-x-${size})`,
  };

  const variantStyles = {
    filled: {
      "--badge-bg": color || "rgba(17, 67, 209, 0.5)",
      "--badge-color": "#fff",
    },
    outline: {
      "--badge-bg": "transparent",
      "--badge-color": color || "#d3d3d3",
      "--badge-border": "1px solid currentColor",
    },
    light: {
      "--badge-bg": color || "#e6f0ff",
      "--badge-color": "#0052cc",
    },
  };

  return (
    <div
      className={rootClasses}
      style={{
        ...sizeStyles,
        ...variantStyles[variant],
        ...style,
      }}
      {...dataAttributes}
      {...props}
    >
      {withDot && <span className="section dot" data-position="left" />}
      {leftSection && (
        <span className="section" data-position="left">
          {leftSection}
        </span>
      )}
      <span className="label">{children}</span>
      {rightSection && (
        <span className="section" data-position="right">
          {rightSection}
        </span>
      )}
    </div>
  );
};

export default Badge;
