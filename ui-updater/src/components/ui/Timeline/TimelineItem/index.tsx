import React from "react";
import { cn } from "../../index";
import { TimelineItemProps } from "../types";

export const TimelineItem = ({
    children,
    title,
    date,
    icon,
    bulletSize = 20,
    bulletColor = "#228be6",
    className,
    active = true
}: TimelineItemProps) => {
    return (
        <div className={cn("relative flex items-start gap-4", className)}>
            <div
                className="relative flex-shrink-0"
                style={{
                    width: bulletSize,
                    height: bulletSize
                }}
            >
                <div
                    className={cn(
                        "absolute top-0 left-1/2 -translate-x-1/2",
                        "flex items-center justify-center",
                        "transition-all duration-200"
                    )}
                    style={{
                        width: bulletSize,
                        height: bulletSize,
                        backgroundColor: bulletColor,
                        borderRadius: "50%",
                        opacity: active ? 1 : 0.4
                    }}
                >
                    {icon && <div className="text-white">{icon}</div>}
                </div>
            </div>

            <div className="flex-1 pt-1">
                <div className="flex flex-col gap-1">
                    {title && (
                        <h3 className="text-sm font-medium text-white">
                            {title}
                        </h3>
                    )}
                    {date && (
                        <span className="text-xs text-[#909296]">{date}</span>
                    )}
                    <div className="text-sm text-[#c1c2c5] mt-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
