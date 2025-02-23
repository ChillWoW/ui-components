import React from "react";
import { cn } from "../../..";
import { useRadioCardContext } from "../context";
import { RadioCardHeaderProps } from "../types";

export const RadioCardHeader: React.FC<RadioCardHeaderProps> = ({
    children,
    className
}) => {
    const { classNames } = useRadioCardContext();

    return (
        <div
            className={cn(
                "flex items-center justify-center text-sm font-medium text-white",
                classNames?.header,
                className
            )}
        >
            {children}
        </div>
    );
};
