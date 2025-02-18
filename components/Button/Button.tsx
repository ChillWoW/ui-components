import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./Button.css";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "filled" | "outline" | "custom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  leftSection,
  rightSection,
  className,
  variant = "filled",
  size = "sm",
  disabled,
  ...props
}) => {
  const buttonClasses = clsx(
    "button",
    size && `size-${size}`,
    variant !== "custom" && `button-${variant}`,
    disabled && "button-disabled",
    className
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftSection && <span className="mr-2">{leftSection}</span>}
      {children}
      {rightSection && <span className="ml-2">{rightSection}</span>}
    </button>
  );
};
