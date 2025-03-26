import React, { useRef, useEffect } from "react";
import { MenuDropdownProps } from "../types";
import { useMenuContext } from "../context";
import { cn } from "../../_utils";
import { createPortal } from "react-dom";

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  children,
  className,
  withinPortal = true,
}) => {
  const {
    opened,
    targetRef,
    dropdownRef,
    position,
    offset,
    withArrow,
    shadow,
    transitionProps,
    keepMounted,
    classNames,
  } = useMenuContext();

  // Calculate position of dropdown
  useEffect(() => {
    if (!opened || !targetRef.current || !dropdownRef.current) return;

    const updatePosition = () => {
      const targetRect = targetRef.current?.getBoundingClientRect();
      const dropdownRect = dropdownRef.current?.getBoundingClientRect();

      if (!targetRect || !dropdownRect || !dropdownRef.current) return;

      let top = 0;
      let left = 0;

      // Calculate position based on the specified position prop
      switch (position) {
        case "bottom":
          top = targetRect.bottom + offset;
          left = targetRect.left + (targetRect.width - dropdownRect.width) / 2;
          break;
        case "top":
          top = targetRect.top - dropdownRect.height - offset;
          left = targetRect.left + (targetRect.width - dropdownRect.width) / 2;
          break;
        case "right":
          top = targetRect.top + (targetRect.height - dropdownRect.height) / 2;
          left = targetRect.right + offset;
          break;
        case "left":
          top = targetRect.top + (targetRect.height - dropdownRect.height) / 2;
          left = targetRect.left - dropdownRect.width - offset;
          break;
        case "bottom-start":
          top = targetRect.bottom + offset;
          left = targetRect.left;
          break;
        case "bottom-end":
          top = targetRect.bottom + offset;
          left = targetRect.right - dropdownRect.width;
          break;
        case "top-start":
          top = targetRect.top - dropdownRect.height - offset;
          left = targetRect.left;
          break;
        case "top-end":
          top = targetRect.top - dropdownRect.height - offset;
          left = targetRect.right - dropdownRect.width;
          break;
        case "right-start":
          top = targetRect.top;
          left = targetRect.right + offset;
          break;
        case "right-end":
          top = targetRect.bottom - dropdownRect.height;
          left = targetRect.right + offset;
          break;
        case "left-start":
          top = targetRect.top;
          left = targetRect.left - dropdownRect.width - offset;
          break;
        case "left-end":
          top = targetRect.bottom - dropdownRect.height;
          left = targetRect.left - dropdownRect.width - offset;
          break;
      }

      // Boundary checking to ensure dropdown stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Adjust horizontal position if needed
      if (left < 0) left = 0;
      if (left + dropdownRect.width > viewportWidth) {
        left = viewportWidth - dropdownRect.width;
      }

      // Adjust vertical position if needed
      if (top < 0) top = 0;
      if (top + dropdownRect.height > viewportHeight) {
        top = viewportHeight - dropdownRect.height;
      }

      // Set position
      dropdownRef.current.style.top = `${top}px`;
      dropdownRef.current.style.left = `${left}px`;
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [opened, targetRef, dropdownRef, position, offset]);

  // Transition properties
  const transition = transitionProps?.transition || "fade";
  const duration = transitionProps?.duration || 150;
  const timingFunction = transitionProps?.timingFunction || "ease";

  // Determine if dropdown should be rendered
  const shouldRenderDropdown = opened || keepMounted;

  if (!shouldRenderDropdown) return null;

  const dropdownContent = (
    <div
      ref={dropdownRef}
      id="menu-dropdown"
      className={cn(
        "absolute z-50 min-w-[150px] p-1 bg-[#25262b] rounded-md",
        shadow && "shadow-lg",
        getTransitionClasses(transition, opened),
        classNames?.dropdown,
        className
      )}
      style={{
        transition: `opacity ${duration}ms ${timingFunction}, transform ${duration}ms ${timingFunction}`,
        display: opened ? "block" : "none",
      }}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      {withArrow && (
        <div
          className={cn(
            "absolute w-2 h-2 bg-[#25262b] transform rotate-45",
            getArrowPositionClass(position),
            classNames?.arrow
          )}
        />
      )}
      {children}
    </div>
  );

  // Use portal to render at body level if specified
  return withinPortal
    ? createPortal(dropdownContent, document.body)
    : dropdownContent;
};

// Helper to get transition classes
function getTransitionClasses(transition: string, isOpen: boolean): string {
  switch (transition) {
    case "fade":
      return isOpen ? "opacity-100" : "opacity-0";
    case "scale":
      return isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95";
    case "slide-down":
      return isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2";
    case "slide-up":
      return isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2";
    case "rotate-left":
      return isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-3";
    case "rotate-right":
      return isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-3";
    default:
      return isOpen ? "opacity-100" : "opacity-0";
  }
}

// Helper to get arrow position class
function getArrowPositionClass(position: string): string {
  switch (position) {
    case "top":
    case "top-start":
    case "top-end":
      return "bottom-[-4px]";
    case "bottom":
    case "bottom-start":
    case "bottom-end":
      return "top-[-4px]";
    case "left":
    case "left-start":
    case "left-end":
      return "right-[-4px]";
    case "right":
    case "right-start":
    case "right-end":
      return "left-[-4px]";
    default:
      return "top-[-4px]";
  }
}
