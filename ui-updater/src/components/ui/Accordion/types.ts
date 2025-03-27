import React from "react";

export type AccordionVariant = "filled" | "outline" | "separated" | "unstyled";
export type AccordionRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type AccordionChevronPosition = "left" | "right";
export type AccordionOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface AccordionContextType {
    value: string | string[] | null;
    onChange: (value: string) => void;
    multiple: boolean;
    chevronPosition?: AccordionChevronPosition;
    disableChevronRotation?: boolean;
    order?: AccordionOrder;
    variant?: string;
    classNames?: AccordionClassNames;
}

export interface AccordionClassNames {
    container?: string;
    item?: string;
    itemIcon?: string;
    itemLabel?: string;
    itemActive?: string;
    itemActiveIcon?: string;
    itemActiveLabel?: string;
    itemActiveDescription?: string;
    chevron?: string;
    chevronRotated?: string;
}

export interface AccordionProps {
    value?: string | string[] | null;
    defaultValue?: string | string[] | null;
    onChange?: (value: string | string[]) => void;
    multiple?: boolean;
    children: React.ReactNode;
    variant?: AccordionVariant;
    radius?: AccordionRadius;
    chevronPosition?: AccordionChevronPosition;
    disableChevronRotation?: boolean;
    order?: AccordionOrder;
    className?: string;
    classNames?: AccordionClassNames;
}

export interface AccordionItemProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export interface AccordionControlProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export interface AccordionPanelProps {
    children: React.ReactNode;
    className?: string;
}
