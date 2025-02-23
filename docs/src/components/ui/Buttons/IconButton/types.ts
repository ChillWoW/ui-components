import { ButtonHTMLAttributes } from "react";

export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconButtonVariant = "filled" | "outline";

export interface IconButtonClassNames {
    container?: string;
    leftSection?: string;
    rightSection?: string;
}

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    className?: string;
    classNames?: IconButtonClassNames;
}
