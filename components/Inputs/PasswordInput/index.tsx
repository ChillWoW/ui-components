import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import "../inputs.css";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  description,
  error,
  required,
  leftSection,
  className,
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <div
        className={`
          input-container
          ${disabled ? "input-disabled" : ""}
          ${error ? "input-error" : ""}
          ${className || ""}
        `}
      >
        {leftSection && <div className="input-section">{leftSection}</div>}
        <input
          type={showPassword ? "text" : "password"}
          className="input-field"
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="input-section"
        >
          {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
        </button>
      </div>

      {description && <p className="input-description">{description}</p>}
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};
