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
    classNames
}: AccordionProps) {
    const [internalValue, setInternalValue] = useState<
        string | string[] | null
    >(value !== undefined ? value : defaultValue);

    useEffect(() => {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);

    const handleChange = (itemValue: string) => {
        let newValue: string | string[];

        if (multiple) {
            const currentValues = Array.isArray(internalValue)
                ? internalValue
                : [];
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
        const variants = {
            filled: "border border-[#4a4a4a] divide-y divide-[#4a4a4a] bg-[#2c2c2c]",
            outline:
                "border border-[#5a5a5a] overflow-hidden divide-y divide-[#5a5a5a]",
            separated: "space-y-1",
            unstyled: "divide-transparent border-none bg-transparent"
        };

        return variants[variant as keyof typeof variants] || variants.filled;
    };

    const getRadiusClasses = () => {
        if (variant === "unstyled") return "";

        const radiusMap = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full"
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
                classNames
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
