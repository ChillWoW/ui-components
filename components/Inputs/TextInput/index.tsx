import React, { InputHTMLAttributes } from "react";
import "../inputs.css";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  description,
  error,
  required,
  leftSection,
  rightSection,
  className,
  disabled,
  ...props
}) => {
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
        <input className="input-field" disabled={disabled} {...props} />
        {rightSection && <div className="input-section">{rightSection}</div>}
      </div>

      {description && <p className="input-description">{description}</p>}
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};
