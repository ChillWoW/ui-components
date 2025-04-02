import React from "react";
import { cn } from "../../_utils";
import { TextInputProps } from "./types";

export const TextInput = ({
  label,
  hint,
  required,
  leftSection,
  rightSection,
  className,
  disabled,
  error,
  classNames,
  type = "text",
  readOnly,
  placeholder,
  value,
  onChange,
  ...props
}: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = e.target.value;
      onChange(value as any);
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
          type={type}
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

        {rightSection && (
          <div
            className={cn(
              "flex items-center justify-center text-gray-300 pr-2",
              classNames?.rightSection
            )}
          >
            {rightSection}
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

TextInput.displayName = "TextInput";
