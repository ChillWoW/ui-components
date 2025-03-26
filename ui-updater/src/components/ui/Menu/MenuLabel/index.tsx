import React from "react";
import { cn } from "../../_utils";
import { MenuLabelProps } from "../types";
import { useMenuContext } from "../context";

export const MenuLabel: React.FC<MenuLabelProps> = ({
  children,
  className,
}) => {
  const { classNames } = useMenuContext();

  return (
    <div
      className={cn(
        "px-4 py-2 text-xs text-[#909296] font-medium",
        classNames?.label,
        className
      )}
    >
      {children}
    </div>
  );
};
