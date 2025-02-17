import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "filled" | "outline";

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
  const sizeClasses = {
    sm: "size-sm",
    md: "size-md",
    lg: "size-lg",
    xl: "size-xl",
  };

  const variantClasses = {
    filled: "button-filled",
    outline: "button-outline",
  };

  return (
    <button
      className={`
        button
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled && "button-disabled"}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {leftSection && <span className="mr-1">{leftSection}</span>}
      <span className="flex items-center w-full justify-inherit gap-2">
        {children}
      </span>
      {rightSection && <span className="ml-1">{rightSection}</span>}
    </button>
  );
};
