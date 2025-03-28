import React from "react";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type BadgeVariant = "filled" | "outline" | "dot" | "unstyled";
export type BadgeShape = "rounded" | "square" | "pill";
export type BadgeRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type BadgeIntent =
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success";

export interface BadgeClassNames {
    container?: string;
    leftSection?: string;
    rightSection?: string;
    dot?: string;
}

export interface BadgeProps {
    children?: React.ReactNode;
    size?: BadgeSize;
    variant?: BadgeVariant;
    intent?: BadgeIntent;
    shape?: BadgeShape;
    radius?: BadgeRadius;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    className?: string;
    color?: string;
    classNames?: BadgeClassNames;
    asLink?: boolean;
    href?: string;
    target?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
