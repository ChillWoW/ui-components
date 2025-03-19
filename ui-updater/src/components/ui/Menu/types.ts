import { ReactNode } from "react";

export interface MenuProps {
    children: ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    offset?: number;
    opened?: boolean;
    onChange?: (opened: boolean) => void;
    trigger?: "click" | "hover";
    href?: string;
    target?: string;
    classNames?: {
        root?: string;
        target?: string;
        dropdown?: string;
        item?: string;
        label?: string;
        divider?: string;
    };
}

export interface MenuTargetProps {
    children: ReactNode;
    className?: string;
}

export interface MenuDropdownProps {
    children: ReactNode;
}

export interface MenuItemProps {
    children: ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
    href?: string;
    target?: string;
    className?: string;
}

export interface MenuLabelProps {
    children: ReactNode;
}

export interface MenuDividerProps {
    className?: string;
}
