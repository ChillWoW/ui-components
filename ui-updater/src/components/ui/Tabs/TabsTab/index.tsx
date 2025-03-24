import React, { useRef, useEffect } from "react";
import { cn } from "../../";
import { useTabs } from "../Tabs";
import { TabsTabProps } from "../types";

export const TabsTab = ({
  value,
  label,
  leftSection,
  rightSection,
  description,
  disabled,
  className,
  registerTab,
}: TabsTabProps) => {
  const {
    value: activeValue,
    onChange,
    size,
    variant,
    grow,
    classNames,
  } = useTabs();

  const isActive = activeValue === value;
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (registerTab && tabRef.current) {
      registerTab(value, tabRef.current);
    }
  }, [value, registerTab]);

  const handleClick = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  // Size-based padding
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-3 text-base",
  };

  // Variant-based styling
  const variantClasses = {
    default: "hover:bg-[#333538]",
    outline: "border border-transparent hover:border-[#3e4249]",
    pills: "rounded-full hover:bg-[#333538]",
  };

  return (
    <div
      ref={tabRef}
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        "flex items-center gap-2 cursor-pointer transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        isActive && "bg-[#333538]",
        isActive && variant === "pills" && "bg-[#333538]",
        isActive && classNames?.tabActive,
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        grow && "flex-grow justify-center",
        classNames?.tab,
        className
      )}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {leftSection && (
        <span
          className={cn(
            "text-[#727b8e]",
            isActive && "text-white",
            classNames?.tabIcon
          )}
        >
          {leftSection}
        </span>
      )}

      <div className="flex flex-col">
        <span
          className={cn(
            "font-medium",
            isActive ? "text-white" : "text-[#727b8e]",
            classNames?.tabLabel
          )}
        >
          {label}
        </span>

        {description && (
          <span
            className={cn("text-xs text-[#727b8e]", classNames?.tabDescription)}
          >
            {description}
          </span>
        )}
      </div>

      {rightSection && (
        <span className={classNames?.tabRightSection}>{rightSection}</span>
      )}
    </div>
  );
};
