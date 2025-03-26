import React from "react";
import { cn } from "../../_utils";
import { RadioProps } from "./types";

export const Radio = ({
  className,
  checked = false,
  disabled = false,
  label,
  classNames,
  onChange,
  size = "md",
  variant = "filled",
  labelPosition = "right",
  id,
  name,
  value,
  ...props
}: RadioProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  const variantClasses = {
    filled: "border border-[#3e4249]",
    outline: "border-2 border-[#3e4249] bg-transparent checked:bg-transparent",
    subtle: "bg-[#2a2b2c] border border-[#3e4249]",
    unstyled: "border-none bg-transparent",
  };

  const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div
      className={cn(
        "relative flex items-center gap-2",
        labelPosition === "right" ? "flex-row" : "flex-row-reverse",
        disabled && "opacity-70",
        classNames?.container
      )}
    >
      <input
        id={radioId}
        type="radio"
        className="sr-only peer"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
        {...props}
      />
      <div
        className={cn(
          "rounded-full transition-all duration-200",
          sizeClasses[size] || sizeClasses.md,
          variantClasses[variant] || variantClasses.filled,
          !disabled && "cursor-pointer",
          "peer-checked:border-[5px] peer-checked:border-white",
          disabled && "opacity-50 cursor-not-allowed",
          classNames?.radio,
          className
        )}
        onClick={(e) => {
          if (!disabled && onChange) {
            const syntheticEvent = {
              target: {
                checked: !checked,
                name,
                value,
              },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(syntheticEvent);
            e.preventDefault();
          }
        }}
      />
      {label && (
        <label
          htmlFor={radioId}
          className={cn(
            "text-sm text-white cursor-pointer",
            disabled && "opacity-70 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Radio.displayName = "Radio";
