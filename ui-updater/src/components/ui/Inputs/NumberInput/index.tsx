import React, { useState, useEffect } from "react";
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
  leftSection,
  value,
  onChange,
  disabled,
  className,
  classNames,
  allowDecimals = false,
  allowEmpty = false,
  error,
  id,
  ...props
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<string>(
    value !== undefined ? String(value) : ""
  );

  // Generate id for input if not provided for accessibility
  const inputId =
    id || label
      ? `number-input-${label?.replace(/\s+/g, "-").toLowerCase()}`
      : undefined;

  // Update internal state when external value changes
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(String(value));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;

    // Allow empty input if allowEmpty is true
    if (newInputValue === "" && allowEmpty) {
      setInputValue("");
      onChange?.(0);
      return;
    }

    // Validate input string
    const regex = allowDecimals ? /^-?\d*\.?\d*$/ : /^-?\d*$/;
    if (regex.test(newInputValue)) {
      setInputValue(newInputValue);

      // Only call onChange when the value is actually a number
      if (newInputValue !== "" && newInputValue !== "-") {
        const numValue = parseFloat(newInputValue);

        // Check against min and max
        if (min !== undefined && numValue < min) {
          onChange?.(min);
          return;
        }
        if (max !== undefined && numValue > max) {
          onChange?.(max);
          return;
        }

        onChange?.(numValue);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow navigation keys
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab"
    ) {
      return;
    }

    // Allow decimal point if decimals are allowed
    if (e.key === "." && allowDecimals && !inputValue.includes(".")) {
      return;
    }

    // Allow minus sign if negative values are allowed
    if (
      e.key === "-" &&
      (min === undefined || min < 0) &&
      !inputValue.includes("-") &&
      e.currentTarget.selectionStart === 0
    ) {
      return;
    }

    // Prevent non-numeric input
    if (!/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  };

  const increment = () => {
    if (disabled) return;

    const currentValue = inputValue === "" ? 0 : parseFloat(inputValue);
    const newValue = Math.round((currentValue + step) * 1e10) / 1e10;

    if (max !== undefined && newValue > max) {
      onChange?.(max);
      setInputValue(String(max));
    } else {
      onChange?.(newValue);
      setInputValue(String(newValue));
    }
  };

  const decrement = () => {
    if (disabled) return;

    const currentValue = inputValue === "" ? 0 : parseFloat(inputValue);
    const newValue = Math.round((currentValue - step) * 1e10) / 1e10;

    if (min !== undefined && newValue < min) {
      onChange?.(min);
      setInputValue(String(min));
    } else {
      onChange?.(newValue);
      setInputValue(String(newValue));
    }
  };

  return (
    <div className={cn("flex flex-col space-y-1", classNames?.container)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm text-white font-semibold ml-1 flex items-center gap-1",
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
          "flex items-center border rounded-md overflow-hidden bg-[#252627] transition-colors",
          "border-[#3e4249]",
          error && "border-red-500",
          disabled && "opacity-60 cursor-not-allowed",
          className,
          classNames?.inputContainer
        )}
      >
        {leftSection && (
          <div
            className={cn(
              "pl-3 flex items-center justify-center text-gray-300",
              classNames?.leftSection
            )}
          >
            {leftSection}
          </div>
        )}

        <input
          id={inputId}
          type="text"
          inputMode={allowDecimals ? "decimal" : "numeric"}
          className={cn(
            "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white",
            "[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            disabled && "cursor-not-allowed",
            classNames?.input
          )}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={inputValue !== "" ? parseFloat(inputValue) : undefined}
          {...props}
        />

        <div
          className={cn(
            "flex flex-col border-l border-[#3e4249]",
            classNames?.controlsContainer
          )}
        >
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

      {(error || hint) && (
        <p
          id={`${inputId}-description`}
          className={cn(
            "text-xs ml-1",
            error ? "text-red-400" : "text-gray-300",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};
