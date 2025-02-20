import React, { TextareaHTMLAttributes } from "react";
import {
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
} from "../..";
import { defaultLabelClass } from "../..";
import { cn } from "../../index";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  description,
  error,
  required,
  leftSection,
  className,
  disabled,
  ...props
}) => {
  const inputClass = "resize-none min-h-[80px]";

  return (
    <div className={defaultInputContainerClass}>
      {label && (
        <label className={defaultLabelClass}>
          {label}
          {required && <span className="input-required">*</span>}
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
        <textarea
          className={cn(defaultInputContentClass, inputClass)}
          disabled={disabled}
          {...props}
        />
      </div>

      {description && <p className={defaultDescriptionClass}>{description}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
