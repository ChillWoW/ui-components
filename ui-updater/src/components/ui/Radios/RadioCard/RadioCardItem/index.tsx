import React, { useId } from "react";
import { Radio } from "../../Radio/Radio";
import { cn } from "../../..";
import { RadioCardItemProps } from "../types";
import { useRadioCardContext } from "../context";

export const RadioCardItem = ({
  className,
  classNames,
  label,
  description,
  icon,
  onChange,
  checked,
  disabled,
  value,
  rightElement,
  trailingIcon,
  tooltip,
  size,
  ...props
}: RadioCardItemProps) => {
  const {
    disabled: groupDisabled,
    required,
    name: groupName,
    size: groupSize,
  } = useRadioCardContext();

  const id = useId();
  const isDisabled = disabled || groupDisabled;
  const currentSize = size || groupSize || "md";
  const name = props.name || groupName;

  return (
    <label
      className={cn(
        "flex items-start gap-4",
        "border border-[#3e4249] bg-[#252627] rounded-lg cursor-pointer p-4",
        "transition-colors duration-200 relative",
        checked && "border-[#53575e] bg-[#333538]",
        !checked && "hover:border-[#53575e] hover:bg-[#2a2b2c]",
        isDisabled && "opacity-60 cursor-not-allowed",
        classNames?.container,
        className
      )}
      htmlFor={id}
      title={tooltip}
      data-checked={checked || undefined}
      data-disabled={isDisabled || undefined}
      data-size={currentSize}
    >
      <div className="flex items-start w-full">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className={cn(
                  "flex items-center justify-center text-[#727b8e]",
                  checked && "text-white",
                  classNames?.icon
                )}
              >
                {icon}
              </div>
            )}
            <div className={cn("flex-1", classNames?.content)}>
              <div
                className={cn(
                  "text-sm font-medium text-white",
                  classNames?.label
                )}
              >
                {label}
              </div>
              {description && (
                <div
                  className={cn(
                    "text-sm text-[#727b8e] mt-1",
                    classNames?.description
                  )}
                >
                  {description}
                </div>
              )}
            </div>

            {trailingIcon && (
              <div className={cn("text-[#727b8e]", checked && "text-white")}>
                {trailingIcon}
              </div>
            )}
          </div>

          {rightElement && <div className="mt-3">{rightElement}</div>}
        </div>

        <Radio
          id={id}
          checked={checked}
          disabled={isDisabled}
          onChange={onChange}
          className={cn("mt-1", classNames?.radio)}
          name={name}
          required={required}
          value={value}
          {...props}
        />
      </div>
    </label>
  );
};

RadioCardItem.displayName = "RadioCardItem";
