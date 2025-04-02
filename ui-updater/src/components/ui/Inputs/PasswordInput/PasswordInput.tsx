import React, { useState } from "react";
import { cn } from "../../_utils";
import { PasswordInputProps } from "./types";
import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import "./style.css";

export const PasswordInput = ({
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
  eyeIcon,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = e.target.value;
      onChange(value as any);
    }
  };

  const showIcon = eyeIcon?.show || <IconEye size={18} />;
  const hideIcon = eyeIcon?.hide || <IconEyeOff size={18} />;

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
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full border-none bg-[#2c2c2c] px-3 py-2 text-sm outline-none text-white",
            "peer [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
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

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={cn(
            "flex items-center justify-center text-gray-300 pr-2 hover:text-gray-50 cursor-pointer focus:outline-none",
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

PasswordInput.displayName = "PasswordInput";
