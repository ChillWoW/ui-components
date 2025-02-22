import React from "react";
import { cn } from "../..";

export interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({
    children,
    className
}) => {
    return (
        <h3 className={cn("text-base font-semibold mb-1", className)}>
            {children}
        </h3>
    );
};
