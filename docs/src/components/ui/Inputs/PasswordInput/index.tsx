import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import {
  cn,
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
  defaultLabelClass,
} from "../../index";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  hideToggle?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  description,
  required,
  leftSection,
  hideToggle = false,
  className,
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={defaultInputContainerClass}>
      {label && (
        <label className={defaultLabelClass}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div
        className={cn(
          defaultInputClass,
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        {leftSection && <div className={defaultIconClass}>{leftSection}</div>}

        <input
          type={showPassword ? "text" : "password"}
          className={defaultInputContentClass}
          disabled={disabled}
          {...props}
        />

        {!hideToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={cn(defaultIconClass, "hover:text-gray-50")}
          >
            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        )}
      </div>

      {description && <p className={defaultDescriptionClass}>{description}</p>}
    </div>
  );
};
