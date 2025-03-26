import React, { useContext, useRef, useState } from "react";
import { cn } from "../../_utils";
import { ChipProps } from "../types";
import { IconCheck } from "@tabler/icons-react";
import { ChipGroupContext } from "./context";
import { ChipGroup } from "./ChipGroup";

export const Chip = ({
  checked,
  defaultChecked = false,
  onChange,
  label,
  color = "blue",
  variant = "outline",
  size = "md",
  radius = "full",
  disabled = false,
  icon,
  wrapperProps,
  value,
  classNames,
  className,
  ...props
}: ChipProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const chipContext = useContext(ChipGroupContext);

  const isChecked =
    chipContext && value
      ? chipContext.isChipSelected(value)
      : checked !== undefined
      ? checked
      : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;

    if (chipContext && value) {
      chipContext.toggleChip(value);
    } else {
      setInternalChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  const handleWrapperClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const sizeStyles = {
    xs: "text-xs py-0.5 px-1.5",
    sm: "text-sm py-1 px-2",
    md: "text-base py-1 px-2.5",
    lg: "text-lg py-1.5 px-3",
    xl: "text-xl py-2 px-4",
  };

  const radiusStyles = {
    xs: "rounded-sm",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const getVariantStyles = () => {
    const baseColorStyle = `border border-[#3e4249]`;

    if (!isChecked) {
      return {
        filled: `bg-[#252627] text-white hover:bg-[#393a3b] ${baseColorStyle}`,
        outline: `bg-transparent text-white hover:bg-[#393a3b] ${baseColorStyle}`,
      }[variant];
    }

    return {
      filled: `bg-[#252627] text-white border border-[#3e4249] hover:bg-[#393a3b]`,
      outline: `bg-transparent text-white border border-[#3e4249] hover:bg-[#393a3b]`,
    }[variant];
  };

  return (
    <div
      {...wrapperProps}
      onClick={handleWrapperClick}
      className={cn(
        "inline-flex items-center cursor-pointer select-none transition-colors",
        disabled && "opacity-50 cursor-not-allowed",
        classNames?.root,
        wrapperProps?.className
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
        value={value}
        {...props}
      />

      <div
        className={cn(
          "relative inline-flex items-center gap-1.5 transition-colors",
          sizeStyles[size],
          radiusStyles[radius],
          getVariantStyles(),
          className,
          classNames?.input
        )}
      >
        {isChecked &&
          (icon || (
            <IconCheck
              size={16}
              className={cn("flex-shrink-0", classNames?.checkIcon)}
            />
          ))}
        {label && (
          <span className={cn("leading-none", classNames?.label)}>{label}</span>
        )}
      </div>
    </div>
  );
};

Chip.Group = ChipGroup;

Chip.displayName = "Chip";
