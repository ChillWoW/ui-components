import React from "react";
import { cn } from "../_utils";
import { CardProps } from "./types";

export const Card = ({
    variant = "filled",
    radius = "md",
    children,
    className,
    classNames,
    shadow = "sm",
    onClick,
    padding = "md",
    hover = false,
    ...props
}: CardProps) => {
    const paddingClasses = () => {
        if (variant === "unstyled") return "";

        const styles = {
            xs: "p-2",
            sm: "p-3",
            md: "p-4",
            lg: "p-6",
            xl: "p-8",
            none: "p-0"
        };

        return styles[padding] || styles.md;
    };

    const radiusClasses = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full"
        };

        return styles[radius] || styles.md;
    };

    const shadowStyles = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "",
            xs: "shadow-xs",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            "2xl": "shadow-2xl"
        };

        return styles[shadow as keyof typeof styles] || styles.sm;
    };

    const variantClasses = () => {
        if (variant === "unstyled") return "";

        const styles = {
            filled: "bg-[#2c2c2c] border border-[#4a4a4a]",
            outline: "border border-[#5a5a5a]",
            unstyled: ""
        };

        return styles[variant] || styles.filled;
    };

    return (
        <div
            className={cn(
                "flex flex-col overflow-hidden",
                variantClasses(),
                radiusClasses(),
                shadowStyles(),
                hover &&
                    "transition-all duration-200 hover:brightness-110 hover:scale-[1.01]",
                onClick && "cursor-pointer",
                classNames?.container,
                className
            )}
            {...props}
        >
            <div className={cn(paddingClasses(), classNames?.content)}>
                {children}
            </div>
        </div>
    );
};

Card.displayName = "Card";
