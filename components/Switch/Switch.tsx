import React from "react";
import "./Switch.css";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  label,
  description,
  error,
  disabled,
  size = "md",
  className,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="switch-wrapper">
      <div
        className={`switch-container ${disabled ? "disabled" : ""} ${
          className || ""
        }`}
        onClick={handleChange}
      >
        <div className="switch-input-wrapper">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="switch-input"
          />
          <div className={`switch-track ${size} ${checked ? "checked" : ""}`} />
        </div>
        {label && <span className={`switch-label ${size}`}>{label}</span>}
      </div>

      {description && <p className="switch-description">{description}</p>}
      {error && <p className="switch-error">{error}</p>}
    </div>
  );
};
