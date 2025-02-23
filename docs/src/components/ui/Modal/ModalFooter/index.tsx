import React from "react";
import { cn } from "../..";

interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
    children,
    className
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-end gap-2 p-4 border-t border-[#3e4249]",
                className
            )}
        >
            {children}
        </div>
    );
};
