import React from "react";
import { cn } from "../..";

interface ModalBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex-1 p-4 overflow-y-auto", className)}>
            {children}
        </div>
    );
};
