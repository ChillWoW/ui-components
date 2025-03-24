import React, { useId } from "react";
import { cn } from "..";
import { SwitchProps } from "./types";

export const Switch = ({
  checked = false,
  onChange,
  disabled,
  className,
  classNames,
  label,
  size = "md",
  required = false,
  hint,
  color = "#22c55e",
  name,
  id: propId,
  ...props
}: SwitchProps) => {
  const generatedId = useId();
  const id = propId || generatedId;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent
  ) => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };
  const sizeClasses = {
    xs: {
      wrapper: "w-6 h-[18px]",
      thumb: "w-[14px] h-[14px]",
      thumbTranslate: "translate-x-[14px]",
      label: "text-xs",
    },
    sm: {
      wrapper: "w-8 h-[18px]",
      thumb: "w-[14px] h-[14px]",
      thumbTranslate: "translate-x-[14px]",
      label: "text-xs",
    },
    md: {
      wrapper: "w-11 h-6",
      thumb: "w-5 h-5",
      thumbTranslate: "translate-x-5",
      label: "text-sm",
    },
    lg: {
      wrapper: "w-14 h-[30px]",
      thumb: "w-[26px] h-[26px]",
      thumbTranslate: "translate-x-[26px]",
      label: "text-base",
    },
    xl: {
      wrapper: "w-16 h-[36px]",
      thumb: "w-[30px] h-[30px]",
      thumbTranslate: "translate-x-[30px]",
      label: "text-lg",
    },
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          "flex items-center gap-2 select-none",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.wrapper,
          className
        )}
      >
        <div
          className={cn(
            "relative inline-flex items-center rounded-full transition-colors duration-200",
            sizeClasses[size].wrapper,
            checked
              ? color
                ? `bg-[${color}]`
                : "bg-[#22c55e]"
              : "bg-[#252627]",
            !disabled && "cursor-pointer",
            checked ? classNames?.activeTrack : classNames?.track
          )}
          onClick={!disabled ? handleChange : undefined}
          aria-checked={checked}
          role="switch"
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            id={id}
            name={name}
            required={required}
            aria-required={required}
            {...props}
          />
          <span
            className={cn(
              "absolute inline-block rounded-full bg-white transition-transform duration-200 ease-in-out",
              sizeClasses[size].thumb,
              "top-[2px] left-[2px]",
              checked && sizeClasses[size].thumbTranslate,
              classNames?.thumb,
              checked && classNames?.activeThumb
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-white font-medium",
              sizeClasses[size].label,
              !disabled && "cursor-pointer",
              classNames?.label
            )}
          >
            {label}
            {required && (
              <span
                className={cn("text-red-500 ml-1", classNames?.requiredStar)}
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}
      </div>
      {hint && (
        <p className={cn("text-gray-400 text-sm", classNames?.hint)}>{hint}</p>
      )}
    </div>
  );
};
