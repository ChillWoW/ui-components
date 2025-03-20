import React from "react";
import { cn } from "..";
import { AlertProps } from "./types";
import { AlertTitle } from "./AlertTitle";
import { AlertDescription } from "./AlertDescription";

export const Alert = ({
  children,
  className,
  variant = "info",
  icon,
  onClose,
  closeable = true,
  closeIcon,
  compact = false,
  withBorder = true,
  radius = "md",
  shadow = false,
  iconPosition = "center",
  ...props
}: AlertProps) => {
  /*const variantStyles = {
    success: "border-emerald-600/20 bg-emerald-600/10 text-emerald-600",
    error: "border-red-600/20 bg-red-600/10 text-red-600",
    warning: "border-yellow-600/20 bg-yellow-600/10 text-yellow-600",
    info: "border-blue-600/20 bg-blue-600/10 text-blue-600",
  };*/

  const getVariantStyles = () => {
    const colors = {
      success: "border-emerald-600/20 bg-emerald-600/10 text-emerald-600",
      error: "border-red-600/20 bg-red-600/10 text-red-600",
      warning: "border-yellow-600/20 bg-yellow-600/10 text-yellow-600",
      info: "border-blue-600/20 bg-blue-600/10 text-blue-600",
    };

    return colors[variant as keyof typeof colors] || colors.info;
  };

  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "flex w-full px-4 py-3",
        withBorder ? "border" : "",
        shadow ? "shadow-md" : "",
        radiusStyles[radius as keyof typeof radiusStyles],
        getVariantStyles(),
        compact ? "py-1" : "py-3",
        className
      )}
      role="alert"
      {...props}
    >
      {icon && (
        <div
          className={cn(
            "flex-shrink-0 mr-3",
            iconPosition === "top" && "self-start",
            iconPosition === "center" && "self-center",
            iconPosition === "bottom" && "self-end"
          )}
        >
          {icon}
        </div>
      )}
      <div className="flex-1">{children}</div>
      {closeable && (
        <button
          onClick={onClose}
          className="flex-shrink-0 self-start ml-3 hover:opacity-70 transition-opacity"
        >
          {closeIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
