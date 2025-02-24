import React from "react";
import { cn } from "../..";
import { TableCellProps } from "../types";

export const TableCell: React.FC<TableCellProps> = ({
    children,
    className,
    header = false,
    ...props
}) => {
    const isHeader = header ?? false;

    return (
        <td
            className={cn(
                "h-10 px-4 text-sm border-t border-l first:border-l-0",
                "border-[#3e4249] text-[#c1c2c5]",
                isHeader &&
                    "border-[#3e4249] text-white bg-[#252627] font-medium",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
};
