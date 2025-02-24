import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "filled" | "outline";

export interface ButtonClassNames {
    container?: string;
    leftSection?: string;
    rightSection?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    classNames?: ButtonClassNames;
}
