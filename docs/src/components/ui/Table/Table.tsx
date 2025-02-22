import React from "react";
import { cn } from "..";

export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    className?: string;
}

export const Table: React.FC<TableProps> = ({
    children,
    className,
    ...props
}) => {
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
