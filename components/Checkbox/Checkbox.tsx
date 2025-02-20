import clsx from "clsx";
import { cn } from "..";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  disabled,
  className,
  label,
  ...props
}) => {
  const checkboxClass =
    "relative inline-block w-4 h-4 border rounded-md transition-all duration-300";
  const checkboxCheckedClass =
    "bg-blue-600 border-blue-600 checked:ring-2 checked:ring-blue-500";
  const checkboxUncheckedClass = "border-white";
  const checkboxDisabledClass = "cursor-not-allowed opacity-60";

  const checkmarkClass =
    "absolute top-1/2 left-1/2 w-1.5 h-1.5 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm transition-all duration-300";

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const checkboxWrapperClass = clsx(
    "flex items-center gap-2 select-none",
    disabled && checkboxDisabledClass,
    className
  );

  return (
    <div className={checkboxWrapperClass} onClick={handleChange}>
      <div
        className={clsx(
          checkboxClass,
          checked ? checkboxCheckedClass : checkboxUncheckedClass
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="opacity-0 w-0 h-0 absolute"
          {...props}
        />
        {checked && <div className={checkmarkClass} />}
      </div>
      {label && (
        <span className="text-sm text-white font-semibold">{label}</span>
      )}
    </div>
  );
};
