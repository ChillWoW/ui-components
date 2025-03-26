import React, { useState, useRef, useEffect, useMemo } from "react";
import { MenuProps } from "./types";
import { MenuContext } from "./context";
import { MenuTarget } from "./MenuTarget";
import { MenuDropdown } from "./MenuDropdown";
import { MenuItem } from "./MenuItem";
import { MenuLabel } from "./MenuLabel";
import { MenuDivider } from "./MenuDivider";
import { cn } from "../_utils";

export const Menu = ({
  children,
  position = "bottom",
  offset = 4,
  opened: controlledOpened,
  onChange,
  trigger = "click",
  closeOnItemClick = true,
  closeOnEscape = true,
  closeDelay = 150,
  openDelay = 0,
  disabled = false,
  withArrow = false,
  transitionProps,
  shadow = true,
  classNames,
  keepMounted = false,
}: MenuProps) => {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<NodeJS.Timeout | null | undefined>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null | undefined>(null);

  const opened = controlledOpened ?? uncontrolledOpened;
  const setOpened = onChange ?? setUncontrolledOpened;

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Handle click outside for click-based menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpened(false);
      }
    };

    if (opened && (trigger === "click" || trigger === "click-hover")) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [opened, setOpened, trigger]);

  // Handle ESC key for accessibility
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        setOpened(false);
      }
    };

    if (opened) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [opened, closeOnEscape, setOpened]);

  const handleToggle = () => {
    if (!disabled) {
      setOpened(!opened);
    }
  };

  const handleMouseEnter = () => {
    if (disabled) return;

    if (trigger === "hover" || trigger === "click-hover") {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }

      if (!opened && openDelay > 0) {
        openTimeoutRef.current = setTimeout(() => {
          setOpened(true);
        }, openDelay);
      } else {
        setOpened(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover" || trigger === "click-hover") {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = undefined;
      }

      if (closeDelay > 0) {
        closeTimeoutRef.current = setTimeout(() => {
          setOpened(false);
        }, closeDelay);
      } else {
        setOpened(false);
      }
    }
  };

  const contextValue = useMemo(
    () => ({
      opened,
      setOpened,
      targetRef,
      dropdownRef,
      position,
      offset,
      trigger,
      disabled,
      withArrow,
      closeOnItemClick,
      shadow,
      transitionProps,
      classNames,
      keepMounted,
      handleToggle,
    }),
    [
      opened,
      setOpened,
      position,
      offset,
      trigger,
      disabled,
      withArrow,
      closeOnItemClick,
      shadow,
      transitionProps,
      classNames,
      keepMounted,
    ]
  );
  return (
    <MenuContext.Provider value={contextValue}>
      <div
        className={cn("relative inline-block", classNames?.root)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-expanded={opened}
        role="menu"
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
};

Menu.Target = MenuTarget;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Divider = MenuDivider;

export { MenuTarget, MenuDropdown, MenuItem, MenuLabel, MenuDivider };
