import React from "react";
import {
  cn,
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
  defaultLabelClass,
} from "../../index";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  description,
  required,
  leftSection,
  className,
  disabled,
  ...props
}) => {
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
          type="text"
          className={defaultInputContentClass}
          disabled={disabled}
          {...props}
        />
      </div>

      {description && <p className={defaultDescriptionClass}>{description}</p>}
    </div>
  );
};
