import React from "react";

export type BreadcrumbSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface BreadcrumbItemProps {
    children: React.ReactNode;
    active?: boolean;
    href?: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    target?: string;
    className?: string;
}

export interface BreadcrumbClassNames {
    container?: string;
    item?: string;
    activeItem?: string;
    separator?: string;
    collapsed?: string;
    home?: string;
}

export interface BreadcrumbProps {
    items?: BreadcrumbItemProps[];
    children?: React.ReactNode;
    separator?: React.ReactNode;
    size?: BreadcrumbSize;
    maxItems?: number;
    className?: string;
    classNames?: BreadcrumbClassNames;
}
