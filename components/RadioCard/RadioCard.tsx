import { useState } from "react";
import "./RadioCard.css";

export interface RadioCardOption {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface RadioCardProps {
  label?: string;
  indicator?: boolean;
  options: RadioCardOption[];
  value?: number;
  onChange?: (value: number) => void;
}

export const RadioCard: React.FC<RadioCardProps> = ({
  label,
  indicator = true,
  options,
  value,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<number | null>(null);

  const checkedOption = value !== undefined ? value : internalValue;

  const handleOptionClick = (index: number) => {
    if (options[index].disabled) return;

    const newValue = checkedOption === index ? null : index;

    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(index);

    options[index].onChange?.(newValue === index);
  };

  return (
    <div className="radio-card-root">
      {label && <div className="radio-card-label">{label}</div>}
      <div className="radio-card-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`radio-card-option ${
              option.disabled ? "radio-card-option-disabled" : ""
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <div className="radio-card-option-header">
              {option.icon && (
                <div className="radio-card-option-header-icon">
                  {option.icon}
                </div>
              )}
              <div className="radio-card-option-header-indicator">
                {indicator && (
                  <input
                    type="radio"
                    className="radio-card-input"
                    checked={checkedOption === index}
                    disabled={option.disabled}
                    onChange={() => handleOptionClick(index)}
                  />
                )}
              </div>
            </div>
            <div className="radio-card-option-content">
              <div className="radio-card-option-content-title">
                {option.label}
              </div>
              {option.description && (
                <div className="radio-card-option-content-description">
                  {option.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
