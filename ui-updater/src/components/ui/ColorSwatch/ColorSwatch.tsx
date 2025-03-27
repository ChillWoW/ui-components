import React from "react";
import { cn } from "../_utils";
import { ColorSwatchProps } from "./types";

export const ColorSwatch = ({
    color,
    size = "md",
    shadow = "none",
    radius = "md",
    onClick,
    children,
    disabled,
    className,
    classNames,
    ...props
}: ColorSwatchProps) => {
    const sizeClasses = {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10"
    };

    const shadowClasses = {
        none: "",
        xs: "shadow-xs",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg"
    };

    const radiusStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
    };

    return (
        <div
            className={cn(
                "relative inline-block",
                sizeClasses[size],
                radiusStyles[radius],
                "border border-[#3e4249]",
                onClick && "cursor-pointer",
                shadowClasses[shadow as keyof typeof shadowClasses],
                disabled && "opacity-60 cursor-not-allowed",
                classNames?.container,
                className
            )}
            onClick={onClick}
            {...props}
        >
            <div
                className={cn(
                    "absolute inset-0",
                    radiusStyles[radius],
                    classNames?.color
                )}
                style={{ backgroundColor: color }}
            />
            {children && (
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center z-10",
                        classNames?.content
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
