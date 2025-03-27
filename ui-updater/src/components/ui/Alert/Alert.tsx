import React from "react";
import { cn, CloseButton } from "../_utils";
import { AlertProps } from "./types";
import { AlertTitle } from "./AlertTitle";
import { AlertDescription } from "./AlertDescription";
import { AlertContext } from "./context";

export const Alert = ({
  children,
  intent = "info",
  variant = "filled",
  icon,
  onClose,
  closeable = false,
  closeIcon,
  compact = false,
  withBorder = true,
  radius = "md",
  shadow = "sm",
  iconPosition = "center",
  className,
  classNames,
  ...props
}: AlertProps) => {
  const getVariantStyles = () => {
    const variants = {
      filled: "",
      outline: "bg-transparent border",
      unstyled: "bg-transparent border-none text-white",
    };

    return variants[variant as keyof typeof variants] || variants.filled;
  };

  const getIntentStyles = () => {
    const colors = {
      success: "border-emerald-600/20 bg-emerald-600/10 text-emerald-600",
      error: "border-red-600/20 bg-red-600/10 text-red-600",
      warning: "border-yellow-600/20 bg-yellow-600/10 text-yellow-600",
      info: "border-blue-600/20 bg-blue-600/10 text-blue-600",
      dark: "bg-zinc-800 border-zinc-600 text-zinc-100",
      light: "bg-gray-50 text-gray-600 border-gray-300",
    };

    return colors[intent as keyof typeof colors] || colors.info;
  };

  const closeButtonStyles = () => {
    if (variant === "unstyled") return "text-gray-50 hover:text-white";

    const styles = {
      success: "text-emerald-600 hover:text-emerald-500",
      error: "text-red-600 hover:text-red-500",
      warning: "text-yellow-600 hover:text-yellow-500",
      info: "text-blue-600 hover:text-blue-500",
      dark: "text-zinc-100 hover:text-zinc-50",
      light: "text-gray-600 hover:text-gray-500",
    };

    return styles[intent as keyof typeof styles] || styles.info;
  };

  const shadowStyles = {
    none: "",
    xs: "shadow-xs",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  };

  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <AlertContext.Provider value={{ classNames }}>
      <div
        className={cn(
          "flex w-full px-4 py-3",
          withBorder ? "border" : "",
          shadowStyles[shadow as keyof typeof shadowStyles],
          radiusStyles[radius as keyof typeof radiusStyles],
          getIntentStyles(),
          getVariantStyles(),
          compact ? "py-1" : "py-3",
          classNames?.container,
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
              iconPosition === "bottom" && "self-end",
              classNames?.icon
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">{children}</div>
        {closeable && (
          <CloseButton
            onClick={() => onClose?.()}
            closeIcon={closeIcon}
            className={cn(
              "ml-auto self-start",
              closeButtonStyles(),
              classNames?.closeButton
            )}
          />
        )}
      </div>
    </AlertContext.Provider>
  );
};

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
