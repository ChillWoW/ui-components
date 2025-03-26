import React from "react";
import { cn } from "../../_utils";
import { MenuDividerProps } from "../types";
import { useMenuContext } from "../context";

export const MenuDivider: React.FC<MenuDividerProps> = ({ className }) => {
  const { classNames } = useMenuContext();

  return (
    <div
      className={cn("h-px my-1 bg-[#373a40]", classNames?.divider, className)}
      role="separator"
    />
  );
};
