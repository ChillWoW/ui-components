import React, { useState } from "react";
import { cn } from "../../index";
import { TextInputProps } from "../types";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface PasswordInputProps extends Omit<TextInputProps, "rightSection"> {
  eyeIcon?: {
    show?: React.ReactNode;
    hide?: React.ReactNode;
  };
}

export const PasswordInput = ({
  label,
  hint,
  required,
  leftSection,
  className,
  disabled,
  error,
  classNames,
  id,
  eyeIcon,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Generate id for input if not provided for accessibility
  const inputId =
    id || label
      ? `password-input-${label?.replace(/\s+/g, "-").toLowerCase()}`
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

  // Determine which eye icons to use
  const showIcon = eyeIcon?.show || <IconEye size={18} />;
  const hideIcon = eyeIcon?.hide || <IconEyeOff size={18} />;

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
          type={showPassword ? "text" : "password"}
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

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={cn(
            sectionClass,
            "pr-3 hover:text-gray-50 cursor-pointer focus:outline-none",
            disabled && "opacity-60 cursor-not-allowed pointer-events-none",
            classNames?.passwordToggle
          )}
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={disabled ? -1 : 0}
        >
          {showPassword ? hideIcon : showIcon}
        </button>
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
