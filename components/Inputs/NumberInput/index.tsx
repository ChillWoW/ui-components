import React from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { cn } from "../../index";
import { NumberInputProps } from "../types";

export const NumberInput = ({
  label,
  hint,
  required,
  min,
  max,
  step = 1,
  icon,
  value,
  onChange,
  disabled,
  className,
  classNames,
  ...props
}: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && onChange) {
      const boundedValue = Math.min(
        max ?? newValue,
        Math.max(min ?? newValue, newValue)
      );
      onChange(boundedValue);
    }
  };

  const increment = () => {
    if (disabled || !onChange || value === undefined) return;
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      onChange(newValue);
    }
  };

  const decrement = () => {
    if (disabled || !onChange || value === undefined) return;
    const newValue = value - step;
    if (min === undefined || newValue >= min) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        classNames?.container
      )}
    >
      {label && (
        <label
          className={cn(
            "text-sm text-white font-semibold ml-2 flex items-center gap-1",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-600", classNames?.required)}>*</span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex items-center border border-[#3e4249] rounded-md bg-[#252627] overflow-hidden h-9",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        {icon && (
          <div
            className={cn(
              "pl-3 flex items-center justify-center text-gray-300",
              classNames?.leftSection
            )}
          >
            {icon}
          </div>
        )}

        <input
          type="number"
          className={cn(
            "flex border-none bg-transparent px-3 py-1 text-sm outline-none w-full text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.input
          )}
          value={value ?? ""}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        />

        <div className="flex flex-col border-l border-[#3e4249] h-full">
          <button
            type="button"
            onClick={increment}
            disabled={
              disabled ||
              (max !== undefined && value !== undefined && value >= max)
            }
            className={cn(
              "py-0 px-2 cursor-pointer text-gray-300 bg-transparent flex items-center justify-center h-[50%] hover:text-white hover:bg-[#333538] disabled:opacity-60 disabled:cursor-not-allowed",
              "border-b border-[#3e4249]",
              classNames?.incrementButton
            )}
          >
            <IconChevronUp size={14} />
          </button>
          <button
            type="button"
            onClick={decrement}
            disabled={
              disabled ||
              (min !== undefined && value !== undefined && value <= min)
            }
            className={cn(
              "py-0 px-2 cursor-pointer text-gray-300 bg-transparent flex items-center justify-center h-[50%] hover:text-white hover:bg-[#333538] disabled:opacity-60 disabled:cursor-not-allowed",
              classNames?.decrementButton
            )}
          >
            <IconChevronDown size={14} />
          </button>
        </div>
      </div>

      {hint && (
        <p className={cn("text-xs text-gray-300 ml-2", classNames?.hint)}>
          {hint}
        </p>
      )}
    </div>
  );
};
