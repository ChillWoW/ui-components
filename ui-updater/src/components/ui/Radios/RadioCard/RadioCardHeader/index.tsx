import React from "react";
import { cn } from "../../..";
import { useRadioCardContext } from "../context";
import { RadioCardHeaderProps } from "../types";

export const RadioCardHeader = ({
  children,
  className,
  description,
  align = "center",
  actions,
}: RadioCardHeaderProps) => {
  const { classNames, size, disabled } = useRadioCardContext();

  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full",
        "mb-2 pb-2 border-b border-[#3e4249]",
        disabled && "opacity-60",
        className,
        classNames?.header
      )}
    >
      <div
        className={cn(
          "flex items-center w-full",
          align === "left" && "justify-start",
          align === "center" && "justify-center",
          align === "right" && "justify-end",
          align === "between" && "justify-between",
          "text-sm font-medium text-white",
          sizeClass[size ?? "md"]
        )}
      >
        <div className="flex-1">{children}</div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {description && (
        <div
          className={cn(
            "text-sm text-[#727b8e] mt-1",
            sizeClass[size ?? "md"],
            align === "center" && "text-center"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};
