import React from "react";
import { cn } from "../_utils";
import { AccordionItemProps } from "./types";
import {
    useAccordionContext,
    AccordionItemValueContext,
    AccordionItemPropsContext
} from "./context";

export function AccordionItem({
    value,
    children,
    disabled = false,
    className
}: AccordionItemProps) {
    const {
        value: contextValue,
        multiple,
        chevronPosition,
        disableChevronRotation,
        order,
        variant,
        classNames
    } = useAccordionContext();

    const isOpen = multiple
        ? Array.isArray(contextValue) && contextValue.includes(value)
        : contextValue === value;

    const itemProps = {
        isOpen,
        chevronPosition: chevronPosition || "right",
        disableChevronRotation: disableChevronRotation || false,
        order,
        variant,
        disabled
    };

    const getVariantClasses = () => {
        if (variant === "separated") {
            return "border border-[#4a4a4a] bg-[#2c2c2c] overflow-hidden";
        }

        return "";
    };

    const classes = cn(
        "relative",
        getVariantClasses(),
        disabled && "opacity-60 cursor-not-allowed",
        classNames?.item,
        isOpen && classNames?.itemActive,
        className
    );

    return (
        <AccordionItemValueContext.Provider value={value}>
            <AccordionItemPropsContext.Provider value={itemProps}>
                <div
                    className={classes}
                    data-state={isOpen ? "open" : "closed"}
                >
                    {children}
                </div>
            </AccordionItemPropsContext.Provider>
        </AccordionItemValueContext.Provider>
    );
}

export default AccordionItem;
