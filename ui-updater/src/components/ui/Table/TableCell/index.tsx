import React from "react";
import { cn } from "../..";
import { TableCellProps } from "../types";

export const TableCell = ({
  children,
  className,
  align = "left",
  ...props
}: TableCellProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <td
      className={cn("p-3 border-[#3e4249]", alignClasses[align], className)}
      {...props}
    >
      {children}
    </td>
  );
};
