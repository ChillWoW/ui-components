import React from "react";
import { cn } from "../..";
import { TableBodyProps } from "../types";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

export const TableBody = ({
  children,
  className,
  loading = false,
  emptyText = "No data available",
  data,
  renderRow,
  ...props
}: TableBodyProps) => {
  const renderContent = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={100} align="center" className="py-8">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (data && renderRow) {
      if (data.length === 0) {
        return (
          <TableRow>
            <TableCell colSpan={100} align="center" className="py-8">
              {emptyText}
            </TableCell>
          </TableRow>
        );
      }
      return data.map((item, index) => renderRow(item, index));
    }

    if (React.Children.count(children) === 0) {
      return (
        <TableRow>
          <TableCell colSpan={100} align="center" className="py-8">
            {emptyText}
          </TableCell>
        </TableRow>
      );
    }

    return children;
  };

  return (
    <tbody className={cn("divide-y divide-[#3e4249]", className)} {...props}>
      {renderContent()}
    </tbody>
  );
};
