import { ReactNode, ComponentType } from "react";

export type MenuPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";
export type MenuTrigger = "click" | "hover" | "click-hover";

export interface MenuProps {
  children: ReactNode;
  position?: MenuPosition;
  offset?: number;
  opened?: boolean;
  onChange?: (opened: boolean) => void;
  trigger?: MenuTrigger;
  closeOnItemClick?: boolean;
  closeOnEscape?: boolean;
  openDelay?: number;
  closeDelay?: number;
  disabled?: boolean;
  withArrow?: boolean;
  shadow?: boolean;
  keepMounted?: boolean;
  transitionProps?: {
    transition?: string;
    duration?: number;
    timingFunction?: string;
  };
  classNames?: {
    root?: string;
    target?: string;
    dropdown?: string;
    item?: string;
    label?: string;
    divider?: string;
    arrow?: string;
    itemSection?: string;
    itemLabel?: string;
  };
}

export interface MenuTargetProps {
  children: ReactNode;
  className?: string;
}

export interface MenuDropdownProps {
  children: ReactNode;
  className?: string;
  withinPortal?: boolean;
}

export interface MenuItemProps {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  rightSection?: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  color?: string;
  className?: string;
  component?: ComponentType<any>;
  [key: string]: any;
}

export interface MenuLabelProps {
  children: ReactNode;
  className?: string;
}

export interface MenuDividerProps {
  className?: string;
}
