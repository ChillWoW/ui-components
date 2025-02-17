import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface MenuProps {
  trigger: ReactNode;
  items: MenuItem[];
  position?: "bottom" | "top" | "left" | "right";
  offset?: number;
  width?: number;
  className?: string;
}
