import React from "react";
import {
  IconChevronUp,
  IconChevronDown,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { cn } from "../../_utils";
import { StepperInputProps } from "./types";

export const StepperInput = ({
  label,
  hint,
  required,
  min,
  max,
  step = 1,
  value = 0,
  onChange,
  disabled,
  className,
  classNames,
  error,
  orientation = "horizontal",
  size = "md",
  iconDown,
  iconUp,
  revertButtons = false,
  ...props
}: StepperInputProps) => {
  const increment = () => {
    if (disabled) return;

    const newValue = Math.round((value + step) * 1e10) / 1e10;

    if (max !== undefined && newValue > max) {
      onChange?.(max);
    } else {
      onChange?.(newValue);
    }
  };

  const decrement = () => {
    if (disabled) return;

    const newValue = Math.round((value - step) * 1e10) / 1e10;

    if (min !== undefined && newValue < min) {
      onChange?.(min);
    } else {
      onChange?.(newValue);
    }
  };

  const sizeClasses = {
    xs: "h-6 w-6",
    sm: "h-7 w-7",
    md: "h-8 w-8",
    lg: "h-9 w-9",
    xl: "h-10 w-10",
    "2xl": "h-12 w-12",
  };

  const buttonSize = sizeClasses[size] || sizeClasses.md;
  const iconSize =
    {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      "2xl": 20,
    }[size] || 14;

  const iconDownProcessed = iconDown || <IconMinus size={iconSize} />;
  const iconUpProcessed = iconUp || <IconPlus size={iconSize} />;

  return (
    <div className={cn("flex flex-col space-y-1", classNames?.container)}>
      {label && (
        <label
          className={cn(
            "text-sm ml-1 flex items-center gap-1",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-500 text-sm", classNames?.required)}>
              *
            </span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex items-center",
          className,
          classNames?.controlsWrapper
        )}
      >
        <div
          className={cn(
            "flex",
            orientation === "horizontal" ? "flex-row" : "flex-col",
            classNames?.controlsContainer
          )}
        >
          <button
            type="button"
            onClick={revertButtons ? increment : decrement}
            disabled={disabled || (min !== undefined && value <= min)}
            className={cn(
              buttonSize,
              "cursor-pointer text-gray-300 bg-[#2c2c2c] rounded-md flex items-center justify-center hover:text-white hover:bg-[#3a3a3a] disabled:opacity-60 disabled:cursor-not-allowed border border-[#4a4a4a]",
              classNames?.decrementButton
            )}
            aria-label="Decrement"
          >
            {revertButtons ? iconUpProcessed : iconDownProcessed}
          </button>

          {orientation === "horizontal" && (
            <div
              className={cn(
                "px-2 flex items-center justify-center text-white font-medium",
                classNames?.valueDisplay
              )}
            >
              {value}
            </div>
          )}

          <button
            type="button"
            onClick={revertButtons ? decrement : increment}
            disabled={disabled || (max !== undefined && value >= max)}
            className={cn(
              buttonSize,
              "cursor-pointer text-gray-300 bg-[#2c2c2c] rounded-md flex items-center justify-center hover:text-white hover:bg-[#3a3a3a] disabled:opacity-60 disabled:cursor-not-allowed border border-[#4a4a4a]",
              classNames?.incrementButton
            )}
            aria-label="Increment"
          >
            {revertButtons ? iconDownProcessed : iconUpProcessed}
          </button>
        </div>

        {orientation === "vertical" && (
          <div
            className={cn(
              "ml-2 text-white font-medium",
              classNames?.valueDisplay
            )}
          >
            {value}
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          className={cn(
            "text-xs ml-1",
            error ? "text-red-500" : "text-gray-300",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};
