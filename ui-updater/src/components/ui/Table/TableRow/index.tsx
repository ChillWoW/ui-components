import React from "react";
import { cn } from "../..";
import { TableRowProps } from "../types";

export const TableRow = ({
  children,
  className,
  selected = false,
  clickable = false,
  onClick,
  ...props
}: TableRowProps) => {
  return (
    <tr
      className={cn(
        selected && "bg-primary-900/30",
        clickable && "cursor-pointer hover:bg-[#2a2b30]",
        className
      )}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </tr>
  );
};
