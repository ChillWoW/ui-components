import React from "react";
import { cn } from "../../_utils";
import { SelectInputOptionProps } from "./types";

export const Option = ({
  children,
  label,
  selected,
  disabled,
  onSelect,
  className,
  checkedIcon,
}: SelectInputOptionProps) => {
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect();
    }
  };

  return (
    <div
      className={cn(
        "px-3 py-2 cursor-pointer hover:bg-[#393a3b]",
        selected && "bg-[#323335]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="truncate">{children || label}</div>
        {selected && checkedIcon && (
          <div className="flex-shrink-0 text-gray-300">{checkedIcon}</div>
        )}
      </div>
    </div>
  );
};

Option.displayName = "Option";
