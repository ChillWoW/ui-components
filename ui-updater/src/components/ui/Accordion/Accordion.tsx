import React, { useState, useEffect } from "react";
import { cn } from "../_utils";
import { AccordionProps } from "./types";
import { AccordionContext } from "./context";
import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";
import AccordionControl from "./AccordionControl";

export function Accordion({
  value,
  defaultValue = null,
  onChange,
  multiple = false,
  children,
  variant = "filled",
  radius = "md",
  chevronPosition = "right",
  disableChevronRotation = false,
  order,
  className,
  unstyled = false,
  classNames,
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string | string[] | null>(
    value !== undefined ? value : defaultValue
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (itemValue: string) => {
    let newValue: string | string[];

    if (multiple) {
      const currentValues = Array.isArray(internalValue) ? internalValue : [];
      newValue = currentValues.includes(itemValue)
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue];
    } else {
      newValue = internalValue === itemValue ? "" : itemValue;
    }

    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  const currentValue = value !== undefined ? value : internalValue;

  const getVariantClasses = () => {
    if (unstyled) return "";

    const variants = {
      filled: "border border-[#3e4249] divide-y divide-[#3e4249] bg-[#252627]",
      outline:
        "border border-[#3e4249] overflow-hidden divide-y divide-[#3e4249]",
      separated: "space-y-2",
      unstyled: "divide-transparent border-none bg-transparent",
    };

    return variants[variant as keyof typeof variants] || variants.filled;
  };

  const getRadiusClasses = () => {
    if (unstyled) return "";

    const radiusMap = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    };

    return radiusMap[radius as keyof typeof radiusMap] || radiusMap.md;
  };

  const baseClasses = cn(
    "w-full",
    getVariantClasses(),
    getRadiusClasses(),
    classNames?.container,
    className
  );

  return (
    <AccordionContext.Provider
      value={{
        value: currentValue,
        onChange: handleChange,
        multiple,
        chevronPosition,
        disableChevronRotation,
        order,
        variant,
        classNames,
      }}
    >
      <div className={baseClasses} role="presentation">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

export default Accordion;
