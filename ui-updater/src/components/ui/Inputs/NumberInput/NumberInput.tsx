import React, { useState } from "react";
import { cn } from "../../_utils";
import { NumberInputProps } from "./types";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export const NumberInput = ({
  label,
  hint,
  required,
  min,
  max,
  step = 1,
  leftSection,
  className,
  disabled,
  error,
  classNames,
  readOnly,
  placeholder,
  value,
  onChange,
  allowEmpty = false,
  ...props
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<string>(
    value !== undefined ? String(value) : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue === "" && allowEmpty) {
      setInputValue("");
      onChange?.(0);
      return;
    }

    setInputValue(newValue);

    if (newValue !== "" && newValue !== "-") {
      const numValue = parseFloat(newValue);

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
  };

  const handleIncrement = () => {
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

  const handleDecrement = () => {
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
    <div
      className={cn(
        "flex flex-col items-start text-white space-y-1",
        classNames?.container,
        className
      )}
    >
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
          "flex items-center border rounded-md overflow-hidden transition-colors bg-[#2c2c2c] border border-[#4a4a4a]",
          error && "border-red-500",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.inputContainer
        )}
      >
        {leftSection && (
          <div
            className={cn(
              "flex items-center justify-center text-gray-300 pl-2",
              classNames?.leftSection
            )}
          >
            {leftSection}
          </div>
        )}

        <input
          type="number"
          className={cn(
            "w-full border-none bg-[#2c2c2c] px-3 py-2 text-sm outline-none text-white",
            "[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            "placeholder:text-gray-500",
            disabled && "cursor-not-allowed",
            readOnly && "cursor-default",
            classNames?.input
          )}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          aria-invalid={!!error}
          onChange={handleChange}
          {...props}
        />

        <div className="flex flex-col border-l border-[#4a4a4a]">
          <button
            type="button"
            onClick={handleIncrement}
            disabled={
              disabled ||
              (max !== undefined && value !== undefined && value >= max)
            }
            className={cn(
              "py-0 px-2 cursor-pointer text-gray-300 bg-transparent flex items-center justify-center h-[50%] hover:text-white hover:bg-[#3a3a3a] disabled:opacity-60 disabled:cursor-not-allowed",
              "border-b border-[#4a4a4a]",
              classNames?.incrementButton
            )}
          >
            <IconChevronUp size={14} />
          </button>
          <button
            type="button"
            onClick={handleDecrement}
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

NumberInput.displayName = "NumberInput";
