import { HTMLAttributes } from "react";

export type ColorSwatchShadow =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";
export type ColorSwatchRadius = "none" | "sm" | "md" | "lg" | "full";
export type ColorSwatchSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ColorSwatchProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    shadow?: ColorSwatchShadow;
    radius?: ColorSwatchRadius;
    size?: ColorSwatchSize;
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    classNames?: ColorSwatchClassNames;
}

export interface ColorSwatchClassNames {
    container?: string;
    color?: string;
    content?: string;
}
