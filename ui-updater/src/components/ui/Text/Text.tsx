import React from "react";
import { cn } from "..";
import { TextProps } from "./types";

export const Text: React.FC<TextProps> = ({
    size = "md",
    color = "white",
    weight = "normal",
    align = "left",
    italic,
    underline,
    dimmed,
    component: Component = "p",
    className,
    style,
    children,
    ...others
}) => {
    const sizeClasses = {
        xs: "text-[10px]",
        sm: "text-[14px]",
        md: "text-[16px]",
        lg: "text-[18px]",
        xl: "text-[20px]"
    };

    const weightClasses = {
        bold: "font-bold",
        semibold: "font-semibold",
        normal: "font-normal",
        light: "font-light"
    };

    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const hasColorClass = className?.includes("text-");

    return (
        <Component
            className={cn(
                "m-0 p-0 font-inherit",
                typeof size === "string" && sizeClasses[size],
                typeof weight === "string" && weightClasses[weight],
                align && alignClasses[align],
                italic && "italic",
                underline && "underline",
                dimmed && "text-[#c9b4b4]",
                className
            )}
            style={{
                ...style,
                color: hasColorClass ? undefined : color,
                fontSize: typeof size === "number" ? size : undefined,
                fontWeight: typeof weight === "number" ? weight : undefined
            }}
            {...others}
        >
            {children}
        </Component>
    );
};
