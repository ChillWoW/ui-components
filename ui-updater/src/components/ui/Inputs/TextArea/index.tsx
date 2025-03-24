import React, { useRef, useEffect, useState, ChangeEvent } from "react";
import { cn } from "../../index";
import { TextAreaProps } from "../types";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      hint,
      required,
      leftSection,
      className,
      disabled,
      value,
      onChange,
      autoAdjust = true,
      minHeight = 80,
      maxHeight = 400,
      classNames = {},
      error,
      onHeightChange,
      ...props
    },
    forwardedRef
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState<number>(minHeight);

    const adjustHeight = React.useCallback(() => {
      if (!autoAdjust) return;

      const textarea = textareaRef.current;
      if (!textarea) return;

      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = "auto";

      // Calculate new height within bounds
      const newHeight = Math.min(
        Math.max(minHeight, textarea.scrollHeight),
        maxHeight
      );

      textarea.style.height = `${newHeight}px`;
      setTextareaHeight(newHeight);
      onHeightChange?.(newHeight);
    }, [autoAdjust, minHeight, maxHeight, onHeightChange]);

    useEffect(() => {
      if (autoAdjust) {
        adjustHeight();
      }
    }, [value, autoAdjust, adjustHeight]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      adjustHeight();
    };

    return (
      <div
        className={cn(
          "flex flex-col items-start text-white",
          classNames.container
        )}
      >
        {label && (
          <label
            className={cn(
              "text-sm text-white font-semibold ml-2 flex items-center gap-1",
              disabled && "opacity-60 cursor-not-allowed",
              classNames.label
            )}
          >
            {label}
            {required && (
              <span className={cn("text-red-600", classNames.required)}>*</span>
            )}
          </label>
        )}

        <div
          className={cn(
            "flex items-center border border-[#3e4249] rounded-md bg-[#252627] overflow-hidden w-full",
            disabled && "opacity-60 cursor-not-allowed",
            error && "border-red-500",
            className
          )}
        >
          {leftSection && (
            <div
              className={cn(
                "pl-3 flex items-center justify-center text-gray-300",
                classNames.leftSection
              )}
            >
              {leftSection}
            </div>
          )}
          <textarea
            ref={(node) => {
              // Handle both refs
              textareaRef.current = node;
              if (typeof forwardedRef === "function") {
                forwardedRef(node);
              } else if (forwardedRef) {
                forwardedRef.current = node;
              }
            }}
            className={cn(
              "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white resize-none",
              autoAdjust && "transition-height duration-200",
              disabled && "opacity-60 cursor-not-allowed",
              classNames.input
            )}
            style={{ height: textareaHeight }}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            rows={autoAdjust ? 1 : undefined}
            {...props}
          />
        </div>

        {(hint || error) && (
          <p
            className={cn(
              "text-xs ml-2",
              error ? "text-red-500" : "text-gray-300",
              classNames.hint
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
