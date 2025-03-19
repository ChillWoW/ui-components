import React from "react";
import { TableHeadProps } from "../types";

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <thead className={className} {...props}>
            {children}
        </thead>
    );
};
