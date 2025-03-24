import React from "react";
import { cn } from "../../index";
import { TextInputProps } from "../types";

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
  id,
  ...props
}: TextInputProps) => {
  // Generate id for input if not provided for accessibility
  const inputId =
    id || label
      ? `text-input-${label?.replace(/\s+/g, "-").toLowerCase()}`
      : undefined;

  // Consolidated class names
  const inputClass = cn(
    "flex items-center border rounded-md overflow-hidden transition-colors bg-[#252627]",
    error ? "border-red-500" : "border-[#3e4249]",
    disabled && "opacity-60 cursor-not-allowed",
    classNames?.inputWrapper
  );

  const sectionClass =
    "flex items-center justify-center bg-[#252627] text-gray-300";

  // Handle change to avoid circular references
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      const value = e.target.value;
      // Call onChange with just the value instead of the entire event
      props.onChange(value as any);
    }
  };

  // Filter out the onChange prop to prevent circular references
  const { onChange, ...otherProps } = props;

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
          htmlFor={inputId}
          className={cn(
            "text-sm font-semibold ml-1 flex items-center gap-1",
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

      <div className={inputClass}>
        {leftSection && (
          <div className={cn(sectionClass, "pl-3", classNames?.leftSection)}>
            {leftSection}
          </div>
        )}

        <input
          id={inputId}
          type={type}
          className={cn(
            "w-full border-none bg-[#252627] px-3 py-2 text-sm outline-none text-white",
            "[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            disabled && "cursor-not-allowed",
            classNames?.input
          )}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error || hint ? `${inputId}-description` : undefined
          }
          onChange={handleChange}
          {...otherProps}
        />

        {rightSection && (
          <div className={cn(sectionClass, "pr-3", classNames?.rightSection)}>
            {rightSection}
          </div>
        )}
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
