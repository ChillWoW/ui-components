import React from "react";
import { TableBodyProps } from "../types";

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
