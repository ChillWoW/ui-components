import React from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import "../inputs.css";

export interface NumberInputProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  icon?: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  description,
  error,
  required,
  min,
  max,
  step = 1,
  icon,
  value,
  onChange,
  disabled,
  className,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && onChange) {
      const boundedValue = Math.min(
        max ?? newValue,
        Math.max(min ?? newValue, newValue)
      );
      onChange(boundedValue);
    }
  };

  const increment = () => {
    if (disabled || !onChange || value === undefined) return;
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      onChange(newValue);
    }
  };

  const decrement = () => {
    if (disabled || !onChange || value === undefined) return;
    const newValue = value - step;
    if (min === undefined || newValue >= min) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <div
        className={`input-container ${disabled ? "input-disabled" : ""} ${
          error ? "input-error" : ""
        } ${className || ""}`}
      >
        {icon && <div className="input-section">{icon}</div>}

        <input
          type="number"
          className="input-field"
          value={value ?? ""}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        />

        <div className="number-controls">
          <button
            type="button"
            onClick={increment}
            disabled={
              disabled ||
              (max !== undefined && value !== undefined && value >= max)
            }
            className="number-button"
          >
            <IconChevronUp size={16} />
          </button>
          <button
            type="button"
            onClick={decrement}
            disabled={
              disabled ||
              (min !== undefined && value !== undefined && value <= min)
            }
            className="number-button"
          >
            <IconChevronDown size={16} />
          </button>
        </div>
      </div>

      {description && <p className="input-description">{description}</p>}
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};
