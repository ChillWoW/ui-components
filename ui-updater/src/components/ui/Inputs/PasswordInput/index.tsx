import React, { useState } from "react";
import { cn } from "../../index";
import { TextInputProps } from "../types";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export const PasswordInput = ({
  label,
  hint,
  required,
  leftSection,
  className,
  disabled,
  classNames,
  ...props
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const defaultClass =
    "flex flex-col items-start text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  const inputClass =
    "flex items-center border border-[#3e4249] rounded-md bg-[#252627] overflow-hidden";

  const leftSectionClass =
    "pl-3 flex items-center justify-center text-gray-300";

  const inputContentClass =
    "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <div className={cn(defaultClass, classNames?.container)}>
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
          inputClass,
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        {leftSection && (
          <div className={cn(leftSectionClass, classNames?.leftSection)}>
            {leftSection}
          </div>
        )}

        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            inputContentClass,
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.input
          )}
          disabled={disabled}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={cn(
            leftSectionClass,
            "pr-3 hover:text-gray-50",
            classNames?.passwordToggle
          )}
        >
          {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
        </button>
      </div>

      {hint && (
        <p className={cn("text-xs text-gray-300 ml-2", classNames?.hint)}>
          {hint}
        </p>
      )}
    </div>
  );
};
