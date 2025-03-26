import React, { cloneElement, isValidElement } from "react";
import { MenuTargetProps } from "../types";
import { useMenuContext } from "../context";
import { cn } from "../../_utils";

export const MenuTarget: React.FC<MenuTargetProps> = ({
  children,
  className,
}) => {
  const { handleToggle, targetRef, trigger, disabled, opened, classNames } =
    useMenuContext();

  // Ensure children is a valid React element
  if (!isValidElement(children)) {
    throw new Error(
      "Menu.Target requires a single valid React element as a child"
    );
  }

  const enhancedChildren = cloneElement(children, {
    // @ts-ignore
    onClick: (e: React.MouseEvent) => {
      // @ts-ignore
      if (typeof children.props.onClick === "function") {
        // @ts-ignore
        children.props.onClick(e);
      }

      if (trigger === "click" || trigger === "click-hover") {
        handleToggle();
      }
    },
    // @ts-ignore
    disabled: disabled || children.props.disabled,
    "aria-haspopup": "menu",
    "aria-expanded": opened,
    "aria-controls": "menu-dropdown",
    ref: targetRef,
  });

  return (
    <div
      className={cn(
        "inline-block cursor-pointer",
        disabled && "opacity-50 pointer-events-none",
        classNames?.target,
        className
      )}
    >
      {enhancedChildren}
    </div>
  );
};
