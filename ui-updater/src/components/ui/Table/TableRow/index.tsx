import React from "react";
import { cn } from "../..";
import { TableRowProps } from "../types";

export const TableRow: React.FC<TableRowProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <tr
            className={cn(
                "transition-colors duration-200",
                "hover:bg-[#333538]",
                className
            )}
            {...props}
        >
            {children}
        </tr>
    );
};
