import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ButtonVariant = "filled" | "outline" | "subtle" | "unstyled";
export type ButtonIntent =
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface ButtonClassNames {
    container?: string;
    leftSection?: string;
    rightSection?: string;
    active?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;
    classNames?: ButtonClassNames;
    intent?: ButtonIntent;
    fullWidth?: boolean;
    isLoading?: boolean;
    active?: boolean;
    radius?: ButtonRadius;
}
