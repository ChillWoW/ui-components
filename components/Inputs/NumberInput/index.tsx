import React from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { cn } from "../../index";
import {
  defaultButtonClass,
  defaultButtonFirstChildClass,
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
  defaultLabelClass,
} from "../index";

export interface NumberInputProps {
  label?: string;
  description?: string;
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

  const inputClasses = cn(
    defaultInputClass,
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  return (
    <div className={defaultInputContainerClass}>
      {label && (
        <label className={defaultLabelClass}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div className={inputClasses}>
        {icon && <div className={defaultIconClass}>{icon}</div>}

        <input
          type="number"
          className={defaultInputContentClass}
          value={value ?? ""}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        />

        <div className="flex flex-col border-l border-[#3e4249] h-full">
          <button
            type="button"
            onClick={increment}
            disabled={
              disabled ||
              (max !== undefined && value !== undefined && value >= max)
            }
            className={cn(defaultButtonClass, defaultButtonFirstChildClass)}
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
            className={cn(defaultButtonClass, defaultButtonFirstChildClass)}
          >
            <IconChevronDown size={16} />
          </button>
        </div>
      </div>

      {description && <p className={defaultDescriptionClass}>{description}</p>}
    </div>
  );
};
