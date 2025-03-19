import React from "react";
import { cn } from "..";
import { TableProps } from "./types";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export const Table = ({ children, className, ...props }: TableProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <table
                className={cn(
                    "w-full text-left border border-separate rounded border-[#3e4249] border-spacing-0",
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
