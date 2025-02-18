import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  items?: MenuItem[];
}

export interface MenuProps {
  trigger: ReactNode;
  items: MenuItem[];
  position?: "bottom" | "top" | "left" | "right";
  offset?: number;
  width?: number;
  className?: string;
}

export interface SubMenuProps {
  item: MenuItem;
  parentCoords: { top: number; left: number; width: number; right: number };
  onClose: () => void;
}
