import React from "react";

export interface TableBodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>
    );
};
