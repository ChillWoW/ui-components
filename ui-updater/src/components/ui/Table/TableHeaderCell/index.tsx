import React from "react";
import { cn } from "../..";
import { TableHeaderCellProps } from "../types";
import {
  IconSortAscending,
  IconSortDescending,
  IconSelector,
} from "@tabler/icons-react";

export const TableHeaderCell = ({
  children,
  className,
  align = "left",
  sortable = false,
  sortDirection = null,
  onSort,
  ...props
}: TableHeaderCellProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const handleClick = () => {
    if (sortable && onSort) {
      onSort();
    }
  };

  const renderSortIcon = () => {
    if (!sortable) return null;

    if (sortDirection === "asc") {
      return <IconSortAscending size={16} />;
    } else if (sortDirection === "desc") {
      return <IconSortDescending size={16} />;
    }
    return <IconSelector size={16} className="opacity-50" />;
  };

  return (
    <th
      className={cn(
        "p-3 font-semibold border-[#3e4249]",
        alignClasses[align],
        sortable && "cursor-pointer hover:bg-[#2a2b30]",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="flex items-center gap-1 justify-between">
        <div>{children}</div>
        {renderSortIcon()}
      </div>
    </th>
  );
};
