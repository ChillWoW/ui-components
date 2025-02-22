import React from "react";
import { cn } from "..";

type CardRadius = "sm" | "md" | "lg" | "xl" | "2xl";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    withBorder?: boolean;
    radius?: CardRadius;
    children: React.ReactNode;
    className?: string;
}

export const Card = ({
    withBorder = true,
    radius = "md",
    children,
    className,
    ...props
}: CardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col bg-[#252627] overflow-hidden",
                withBorder && "border border-[#3e4249]",
                radius && `rounded-${radius}`,
                className
            )}
            {...props}
        >
            <div className="p-4">{children}</div>
        </div>
    );
};
