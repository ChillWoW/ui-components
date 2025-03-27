import React, { useContext } from "react";
import { cn } from "../_utils";
import { IconChevronDown } from "@tabler/icons-react";
import { AccordionControlProps } from "./types";
import {
  useAccordionContext,
  AccordionItemValueContext,
  AccordionItemPropsContext,
} from "./context";

export function AccordionControl({
  children,
  icon,
  className,
}: AccordionControlProps) {
  const { onChange, classNames } = useAccordionContext();
  const itemValue = useContext(AccordionItemValueContext);

  if (!itemValue) {
    throw new Error("AccordionControl must be used within an AccordionItem");
  }

  const handleClick = () => {
    if (!disabled) {
      onChange(itemValue);
    }
  };

  const parentProps = useContext(AccordionItemPropsContext);
  const isOpen = parentProps?.isOpen || false;
  const chevronPosition = parentProps?.chevronPosition || "right";
  const disableChevronRotation = parentProps?.disableChevronRotation || false;
  const order = parentProps?.order;
  const disabled = parentProps?.disabled || false;

  const renderHeading = () => {
    const buttonContent = (
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-3 font-medium text-left transition-colors",
          classNames?.itemLabel,
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <div className="flex items-center">
          {chevronPosition === "left" && (
            <div className="mr-2">
              <div
                className={cn(
                  "transform transition-transform duration-200 text-gray-400",
                  isOpen && !disableChevronRotation && "rotate-180",
                  classNames?.chevron,
                  isOpen &&
                    !disableChevronRotation &&
                    classNames?.chevronRotated
                )}
              >
                <IconChevronDown size={16} />
              </div>
            </div>
          )}

          {icon && (
            <div
              className={cn(
                "mr-2 flex-shrink-0",
                classNames?.itemIcon,
                isOpen && classNames?.itemActiveIcon
              )}
            >
              {icon}
            </div>
          )}

          <span>{children}</span>
        </div>

        {chevronPosition === "right" && (
          <div
            className={cn(
              "transform transition-transform duration-200 text-gray-400",
              isOpen && !disableChevronRotation && "rotate-180",
              classNames?.chevron,
              isOpen && !disableChevronRotation && classNames?.chevronRotated
            )}
          >
            <IconChevronDown size={16} />
          </div>
        )}
      </button>
    );

    switch (order) {
      case 1:
        return <h1 className="w-full m-0">{buttonContent}</h1>;
      case 2:
        return <h2 className="w-full m-0">{buttonContent}</h2>;
      case 3:
        return <h3 className="w-full m-0">{buttonContent}</h3>;
      case 4:
        return <h4 className="w-full m-0">{buttonContent}</h4>;
      case 5:
        return <h5 className="w-full m-0">{buttonContent}</h5>;
      case 6:
        return <h6 className="w-full m-0">{buttonContent}</h6>;
      default:
        return <div className="w-full">{buttonContent}</div>;
    }
  };

  return renderHeading();
}

export default AccordionControl;
