import React from "react";
import { cn } from "..";
import { CardProps } from "./types";

export const Card = ({
    withBorder = true,
    radius = "md",
    children,
    className,
    classNames,
    ...props
}: CardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col bg-[#252627] overflow-hidden",
                withBorder && "border border-[#3e4249]",
                radius && `rounded-${radius}`,
                classNames?.container,
                className
            )}
            {...props}
        >
            <div className={cn("p-4", classNames?.content)}>{children}</div>
        </div>
    );
};
