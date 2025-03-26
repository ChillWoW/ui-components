import React from "react";
import { MultiSelectOptionProps } from "../types";
import { cn } from "../../_utils";

export const Option = ({
  value,
  label,
  children,
  selected,
  onSelect,
  disabled,
  className,
  checkedIcon,
}: MultiSelectOptionProps & {
  selected?: boolean;
  onSelect?: () => void;
  checkedIcon?: React.ReactNode;
}) => {
  const content = label || children;

  return (
    <div
      role="option"
      aria-selected={selected}
      onClick={() => {
        if (!disabled && onSelect) {
          onSelect();
        }
      }}
      className={cn(
        "flex items-center px-3 py-2 cursor-pointer hover:bg-[#393a3b]",
        selected && "bg-[#323335]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="flex-1">{content}</div>
      {selected && <div className="ml-2">{checkedIcon}</div>}
    </div>
  );
};

Option.displayName = "Option";
