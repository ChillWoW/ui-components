import React from "react";
import { cn } from "..";

interface TimelineProps {
    children: React.ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    active?: number;
    bulletSize?: number;
    color?: string;
    lineWidth?: number;
    reverseActive?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({
    children,
    className,
    align = "left",
    active,
    bulletSize = 20,
    color = "#3e4249",
    lineWidth = 2,
    reverseActive = false
}) => {
    const items = React.Children.toArray(children);
    const activeItem = active ?? items.length;

    return (
        <div className={cn("relative flex flex-col gap-4", className)}>
            <div
                className="absolute h-full"
                style={{
                    width: lineWidth,
                    backgroundColor: color,
                    left: align === "right" ? "auto" : `${bulletSize / 2}px`,
                    right: align === "right" ? `${bulletSize / 2}px` : "auto",
                    transform: "translateX(-50%)"
                }}
            />

            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const isActive = reverseActive
                        ? index >= items.length - activeItem
                        : index < activeItem;

                    return React.cloneElement(child, {
                        // @ts-ignore
                        align,
                        bulletSize: bulletSize,
                        lineColor: color,
                        active: isActive,
                        lineWidth: lineWidth
                    });
                }
                return child;
            })}
        </div>
    );
};
