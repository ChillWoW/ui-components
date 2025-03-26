import React, { forwardRef } from "react";
import { cn } from "../../_utils";
import { MenuItemProps } from "../types";
import { useMenuContext } from "../context";

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      children,
      disabled = false,
      icon,
      rightSection,
      onClick,
      href,
      target,
      color,
      className,
      component: Component,
      ...rest
    },
    ref
  ) => {
    const { setOpened, closeOnItemClick, classNames } = useMenuContext();

    const handleClick = (e: React.MouseEvent) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick();
      }

      if (closeOnItemClick) {
        setOpened(false);
      }
    };

    const content = (
      <>
        {icon && (
          <span
            className={cn(
              "flex items-center justify-center w-4 h-4 text-[#c1c2c5]",
              classNames?.itemSection
            )}
          >
            {icon}
          </span>
        )}
        <span className={cn("flex-1", classNames?.itemLabel)}>{children}</span>
        {rightSection && (
          <span
            className={cn(
              "flex items-center ml-2 text-[#909296]",
              classNames?.itemSection
            )}
          >
            {rightSection}
          </span>
        )}
      </>
    );

    const itemClassName = cn(
      "flex items-center gap-2 px-4 py-2 text-sm text-[#c1c2c5] cursor-pointer transition-colors duration-150",
      "hover:bg-[#333538] focus:bg-[#333538] outline-none",
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      color && !disabled && `text-${color}-500 hover:bg-${color}-500/10`,
      classNames?.item,
      className
    );

    // If a custom component is provided, use it
    if (Component) {
      return (
        <Component
          className={itemClassName}
          onClick={handleClick}
          ref={ref}
          {...rest}
        >
          {content}
        </Component>
      );
    }

    // If href is provided, render an anchor
    if (href && !disabled) {
      return (
        <a
          href={href}
          target={target}
          className={itemClassName}
          onClick={handleClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          role="menuitem"
          tabIndex={0}
          {...rest}
        >
          {content}
        </a>
      );
    }

    // Default to div
    return (
      <div
        className={itemClassName}
        onClick={handleClick}
        ref={ref}
        role="menuitem"
        tabIndex={0}
        {...rest}
      >
        {content}
      </div>
    );
  }
);

MenuItem.displayName = "MenuItem";
