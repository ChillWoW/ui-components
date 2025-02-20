import React from "react";
import { cn } from "../index";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";
export type BadgeVariant = "filled" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  withDot?: boolean;
  className?: string;
  color?: string;
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
  ...props
}) => {
  const badgeClass =
    "inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider leading-none";

  const sizeClasses = {
    xs: "text-[9px] px-1.5 h-4",
    sm: "text-[10px] px-2 h-[18px]",
    md: "text-[11px] px-2.5 h-5",
    lg: "text-[13px] px-3 h-[26px]",
    xl: "text-[16px] px-4 h-8",
  };

  const variantClasses = {
    filled: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border border-current text-white hover:bg-white/5",
  };

  const badgeDotClass =
    "w-1.5 h-1.5 rounded-full bg-transparent border border-current mr-1";

  return (
    <div
      className={cn(
        badgeClass,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={{
        color: variant === "outline" ? color : undefined,
        backgroundColor: variant === "filled" ? color : undefined,
        borderColor: variant === "outline" ? color : undefined,
      }}
      {...props}
    >
      {withDot && <span className={badgeDotClass} />}
      {leftSection && (
        <span className="flex items-center justify-center mr-1">
          {leftSection}
        </span>
      )}
      <span className="truncate">{children}</span>
      {rightSection && (
        <span className="flex items-center justify-center ml-1">
          {rightSection}
        </span>
      )}
    </div>
  );
};
