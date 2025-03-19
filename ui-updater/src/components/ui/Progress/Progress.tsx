import React from "react";
import "./Progress.css";
import { cn } from "..";
import { ProgressProps } from "./types";

export const Progress = ({
    value,
    color = "white",
    size = "md",
    leftSideText,
    rightSideText,
    hint,
    classNames
}: ProgressProps) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
        <div
            className={cn("flex flex-col w-full gap-2", classNames?.container)}
        >
            {(leftSideText || rightSideText) && (
                <div
                    className={cn(
                        "flex w-full",
                        leftSideText ? "justify-between" : "justify-end"
                    )}
                >
                    {leftSideText && (
                        <span
                            className={cn(
                                "text-sm text-white",
                                classNames?.leftSideText
                            )}
                        >
                            {leftSideText}
                        </span>
                    )}
                    {rightSideText && (
                        <span
                            className={cn(
                                "text-sm text-gray-500 flex self-end",
                                classNames?.rightSideText
                            )}
                        >
                            {rightSideText}
                        </span>
                    )}
                </div>
            )}
            <div
                className={cn("relative w-full", {
                    "h-1": size === "xs",
                    "h-1.5": size === "sm",
                    "h-2": size === "md",
                    "h-3": size === "lg",
                    "h-4": size === "xl"
                })}
            >
                <div className="absolute inset-0 bg-[#252627] rounded-[2px]" />
                <div
                    className="absolute inset-0 rounded-[2px] transition-all duration-300"
                    style={{
                        width: `${clampedValue}%`,
                        backgroundColor: color
                    }}
                />
            </div>
            {hint && (
                <span className={cn("text-xs text-gray-500", classNames?.hint)}>
                    {hint}
                </span>
            )}
        </div>
    );
};
