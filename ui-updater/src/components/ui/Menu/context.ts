import { createContext, useContext } from "react";

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

interface MenuContextValue {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  targetRef: React.RefObject<HTMLDivElement | null>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  position: MenuPosition;
  offset: number;
  trigger: MenuTrigger;
  disabled: boolean;
  withArrow: boolean;
  closeOnItemClick: boolean;
  shadow: boolean;
  transitionProps?: {
    transition?: string;
    duration?: number;
    timingFunction?: string;
  };
  keepMounted?: boolean;
  handleToggle: () => void;
  classNames?: MenuClassNames;
}

interface MenuClassNames {
  root?: string;
  target?: string;
  dropdown?: string;
  item?: string;
  label?: string;
  divider?: string;
  arrow?: string;
  itemSection?: string;
  itemLabel?: string;
}

export const MenuContext = createContext<MenuContextValue>({
  opened: false,
  setOpened: () => {},
  targetRef: { current: null },
  dropdownRef: { current: null },
  position: "bottom",
  offset: 4,
  trigger: "click",
  disabled: false,
  withArrow: false,
  closeOnItemClick: true,
  shadow: true,
  keepMounted: false,
  handleToggle: () => {},
  classNames: {},
});

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Menu components must be used within a Menu component");
  }
  return context;
};
