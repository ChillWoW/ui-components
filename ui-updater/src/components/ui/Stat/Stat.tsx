import React from "react";
import { cn } from "../_utils";
import { StatProps } from "./types";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { StatGroup } from "./StatGroup";
import { Skeleton } from "../Skeleton";

export const Stat = ({
  title,
  value,
  description,
  icon,
  variant = "default",
  size = "md",
  trend,
  trendLabel,
  loading = false,
  bordered = false,
  className,
  valueClassName,
  titleClassName,
  descriptionClassName,
  iconClassName,
  onClick,
}: StatProps) => {
  // Size mappings
  const sizeClasses = {
    title: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    value: {
      xs: "text-lg",
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl",
    },
    description: {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
    icon: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 40,
    },
  };

  // Variant mappings for colors
  const variantClasses = {
    default: "text-gray-900 dark:text-gray-100",
    primary: "text-primary-600 dark:text-primary-400",
    secondary: "text-secondary-600 dark:text-secondary-400",
    tertiary: "text-tertiary-600 dark:text-tertiary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    danger: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  };

  // Get trend direction and color
  const trendDirection = trend && trend > 0 ? "up" : "down";
  const trendColor = trend
    ? trend > 0
      ? "text-green-500"
      : "text-red-500"
    : "";

  return (
    <div
      className={cn(
        "flex flex-col space-y-1 p-4",
        bordered && "border rounded-lg border-gray-200 dark:border-gray-700",
        onClick &&
          "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {/* Header with title and icon */}
      <div className="flex justify-between items-center">
        {title && (
          <div
            className={cn(
              "font-medium text-gray-500 dark:text-gray-400",
              sizeClasses.title[size],
              titleClassName
            )}
          >
            {loading ? (
              // <Skeleton className="h-4 w-24" />
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700" />
            ) : (
              title
            )}
          </div>
        )}
        {icon && (
          <div className={cn("text-gray-400", iconClassName)}>
            {loading ? (
              <Skeleton className="h-6 w-6" circle />
            ) : (
              React.cloneElement(icon as React.ReactElement, {
                // @ts-ignore
                size: sizeClasses.icon[size],
                className: cn(variantClasses[variant], iconClassName),
              })
            )}
          </div>
        )}
      </div>

      {/* Main value */}
      <div
        className={cn(
          "font-bold",
          sizeClasses.value[size],
          variantClasses[variant],
          valueClassName
        )}
      >
        {loading ? <Skeleton height={12} width={32} /> : value}
      </div>

      {/* Footer with trend and description */}
      <div className="flex items-center justify-between">
        {(trend !== undefined || description) && (
          <div className="flex items-center gap-1">
            {trend !== undefined && !loading && (
              <div className={cn("flex items-center", trendColor)}>
                {trendDirection === "up" ? (
                  <IconArrowUpRight size={16} className={trendColor} />
                ) : (
                  <IconArrowDownRight size={16} className={trendColor} />
                )}
                <span className="text-sm font-medium">{Math.abs(trend)}%</span>
                {trendLabel && (
                  <span className="text-sm text-gray-500 ml-1">
                    {trendLabel}
                  </span>
                )}
              </div>
            )}
            {description && (
              <div
                className={cn(
                  "text-gray-500 dark:text-gray-400",
                  sizeClasses.description[size],
                  descriptionClassName
                )}
              >
                {loading ? <Skeleton height={4} width={40} /> : description}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Stat.Group = StatGroup;

Stat.displayName = "Stat";
