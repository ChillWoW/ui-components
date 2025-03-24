import React from "react";
import { cn } from "..";
import { TableProps } from "./types";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableHeaderCell } from "./TableHeaderCell";

export const Table = ({
  children,
  className,
  striped = false,
  hover = false,
  compact = false,
  bordered = true,
  sticky = false,
  sortable = false,
  loading = false,
  emptyText = "No data available",
  variant = "default",
  size = "md",
  ...props
}: TableProps) => {
  const contextValue = {
    striped,
    hover,
    compact,
    bordered,
    sticky,
    sortable,
    loading,
    emptyText,
    variant,
    size,
  };

  const variantClasses = {
    default: "border-[#3e4249]",
    primary: "border-primary-500",
    secondary: "border-secondary-500",
    tertiary: "border-tertiary-500",
  };

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      className={cn(
        "w-full overflow-x-auto",
        sticky && "max-h-[500px] overflow-y-auto"
      )}
    >
      <table
        className={cn(
          "w-full text-left border border-separate rounded border-spacing-0",
          variantClasses[variant],
          sizeClasses[size],
          compact && "table-compact",
          hover && "table-hover",
          striped && "table-striped",
          !bordered && "border-none",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
