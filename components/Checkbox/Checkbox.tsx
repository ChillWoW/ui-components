import clsx from "clsx";
import "./CheckBox.css";
import { useState } from "react";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
  disabled,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!isChecked);
      setIsChecked(!isChecked);
    }
  };

  const checkboxClasses = clsx(
    "checkbox",
    disabled && "checkbox-disabled",
    className
  );

  return (
    <div className={checkboxClasses} onClick={handleChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="checkbox-input"
        {...props}
      />
      {label && <span className="checkbox-label">{label}</span>}
    </div>
  );
};
