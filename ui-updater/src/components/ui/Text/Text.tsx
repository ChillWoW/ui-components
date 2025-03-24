import React, { useMemo } from "react";
import { cn } from "..";
import { TextProps } from "./types";

export const Text: React.FC<TextProps> = ({
  size = "md",
  color = "white",
  weight = "normal",
  align = "left",
  italic,
  underline,
  dimmed,
  truncate,
  lineClamp,
  transform,
  spacing,
  component: Component = "p",
  className,
  style,
  children,
  ...others
}) => {
  const classes = useMemo(() => {
    const sizeClasses = {
      xs: "text-[10px]",
      sm: "text-[14px]",
      md: "text-[16px]",
      lg: "text-[18px]",
      xl: "text-[20px]",
      "2xl": "text-[24px]",
      "3xl": "text-[30px]",
    };

    const weightClasses = {
      bold: "font-bold",
      semibold: "font-semibold",
      normal: "font-normal",
      light: "font-light",
    };

    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    const transformClasses = {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case",
    };

    const hasColorClass = className?.includes("text-");

    return cn(
      "m-0 p-0 font-inherit",
      typeof size === "string" && sizeClasses[size],
      typeof weight === "string" && weightClasses[weight],
      align && alignClasses[align],
      italic && "italic",
      underline && "underline",
      dimmed && "text-[#c9b4b4]",
      truncate && "truncate",
      lineClamp && `line-clamp-${lineClamp}`,
      transform && transformClasses[transform],
      className
    );
  }, [
    size,
    weight,
    align,
    italic,
    underline,
    dimmed,
    truncate,
    lineClamp,
    transform,
    className,
  ]);

  const computedStyles = useMemo(
    () => ({
      ...style,
      color: className?.includes("text-") ? undefined : color,
      fontSize: typeof size === "number" ? size : undefined,
      fontWeight: typeof weight === "number" ? weight : undefined,
      letterSpacing: spacing,
    }),
    [style, color, size, weight, spacing, className]
  );

  return (
    <Component className={classes} style={computedStyles} {...others}>
      {children}
    </Component>
  );
};
