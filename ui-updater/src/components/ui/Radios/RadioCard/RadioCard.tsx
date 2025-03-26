import React, { useState, useEffect, useMemo } from "react";
import { cn } from "../..";
import { RadioCardContext } from "./context";
import { RadioCardHeader } from "./RadioCardHeader";
import { RadioCardItem } from "./RadioCardItem";
import { RadioCardItemProps, RadioCardProps } from "./types";

export const RadioCard = ({
  defaultValue,
  value,
  onChange,
  children,
  className,
  classNames,
  disabled = false,
  required = false,
  name,
  size = "md",
}: RadioCardProps) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onChange?.(newValue);
  };

  const contextValue = useMemo(
    () => ({
      selectedValue,
      onChange: handleChange,
      classNames,
      disabled,
      required,
      name,
      size,
    }),
    [selectedValue, classNames, disabled, required, name, size]
  );

  const sizeClass = {
    xs: "p-3 gap-1",
    sm: "p-4 gap-2",
    md: "p-5 gap-3",
    lg: "p-6 gap-4",
    xl: "p-7 gap-5",
  };

  return (
    <RadioCardContext.Provider value={contextValue}>
      <div
        className={cn(
          "flex flex-col gap-2 p-4 rounded-lg",
          "border border-[#3e4249] bg-[#252627]",
          "transition-colors duration-200 hover:border-[#53575e]",
          disabled && "opacity-60 cursor-not-allowed",
          sizeClass[size],
          className,
          classNames?.container
        )}
        data-disabled={disabled || undefined}
        data-size={size}
      >
        <div className={cn("flex gap-2 flex-col")}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null;

            if (child.type === RadioCardHeader) return child;

            const props = child.props as RadioCardItemProps;

            return React.cloneElement(child, {
              //@ts-ignore
              checked: props.value === selectedValue,
              onChange: () => handleChange(props.value),
              disabled: disabled || props.disabled,
              name: name || props.name,
              required: required || props.required,
              size: props.size || size,
            });
          })}
        </div>
      </div>
    </RadioCardContext.Provider>
  );
};

RadioCard.Header = RadioCardHeader;
RadioCard.Item = RadioCardItem;

RadioCard.displayName = "RadioCard";
