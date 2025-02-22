import React from "react";
import { cn } from "..";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    color?: string;
    weight?: "bold" | "semibold" | "normal" | "light" | number;
    align?: "left" | "center" | "right";
    italic?: boolean;
    underline?: boolean;
    dimmed?: boolean;
    component?: any;
    className?: string;
    children?: React.ReactNode;
}

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
                // Only apply color through style if no color class is present
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
