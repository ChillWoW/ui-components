import React, { useRef, useEffect, useState } from "react";
import {
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
} from "../..";
import { defaultLabelClass } from "../..";
import { cn } from "../../index";
import { TextAreaProps } from "../types";

export const TextArea = ({
  label,
  hint,
  required,
  leftSection,
  className,
  disabled,
  value,
  onChange,
  autoAdjust = true,
  classNames,
  ...props
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState<number | undefined>(
    undefined
  );

  const adjustHeight = () => {
    if (!autoAdjust) return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";

    const newHeight = Math.max(80, textarea.scrollHeight);
    textarea.style.height = `${newHeight}px`;
    setTextareaHeight(newHeight);
  };

  useEffect(() => {
    if (autoAdjust) {
      adjustHeight();
    }
  }, [value, autoAdjust]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
    adjustHeight();
  };

  const inputClass = cn(
    "resize-none",
    autoAdjust && "transition-height duration-200",
    autoAdjust && textareaHeight ? `h-[${textareaHeight}px]` : "min-h-[80px]"
  );

  return (
    <div
      className={cn(
        "flex flex-col items-start text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        classNames?.container
      )}
    >
      {label && (
        <label
          className={cn(
            "text-sm text-white font-semibold ml-2 flex items-center gap-1",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-600", classNames?.required)}>*</span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex items-center border border-[#3e4249] rounded-md bg-[#252627] overflow-hidden",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        {leftSection && (
          <div
            className={cn(
              "pl-3 flex items-center justify-center text-gray-300",
              classNames?.leftSection
            )}
          >
            {leftSection}
          </div>
        )}
        <textarea
          ref={textareaRef}
          className={cn(
            "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.input,
            inputClass
          )}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          rows={autoAdjust ? 1 : undefined}
          {...props}
        />
      </div>

      {hint && (
        <p className={cn("text-xs text-gray-300 ml-2", classNames?.hint)}>
          {hint}
        </p>
      )}
    </div>
  );
};
