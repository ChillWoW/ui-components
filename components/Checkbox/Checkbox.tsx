import clsx from "clsx";
import "./Checkbox.css";

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
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
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
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="checkbox-input"
        {...props}
      />
      {label && <span className="checkbox-label">{label}</span>}
    </div>
  );
};
