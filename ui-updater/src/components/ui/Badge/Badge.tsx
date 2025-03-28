import React from "react";
import { cn } from "../_utils";
import { BadgeProps } from "./types";

export const Badge = ({
    children,
    size = "md",
    variant = "filled",
    intent,
    shape = "rounded",
    radius,
    leftSection,
    rightSection,
    className,
    color,
    classNames,
    asLink,
    href,
    onClick,
    target,
    ...props
}: BadgeProps) => {
    const badgeClass =
        "inline-flex items-center justify-center font-semibold uppercase tracking-wider leading-none";

    const sizeClasses = () => {
        const styles = {
            xs: "text-[9px] px-1.5 h-4",
            sm: "text-[10px] px-2 h-[18px]",
            md: "text-[11px] px-2.5 h-5",
            lg: "text-[13px] px-3 h-[26px]",
            xl: "text-[16px] px-4 h-8",
            "2xl": "text-[17px] px-5 h-9"
        };

        return styles[size as keyof typeof styles] || styles.md;
    };

    const shapeClasses = () => {
        const styles = {
            square: "rounded-none",
            rounded: "rounded-md",
            pill: "rounded-full"
        };

        return styles[shape as keyof typeof styles] || styles.rounded;
    };

    const variantClasses = () => {
        if (variant === "unstyled") return "";

        const styles = {
            filled: "bg-[#2c2c2c] text-white",
            outline: "bg-transparent border border-current text-white",
            dot: "bg-transparent text-white"
        };

        return styles[variant as keyof typeof styles] || styles.filled;
    };

    const intentClasses = () => {
        if (variant === "unstyled" || !intent) return "";

        const styles = {
            primary: "bg-blue-500 text-white hover:bg-blue-600",
            secondary: "bg-gray-500 text-white hover:bg-gray-600",
            danger: "bg-red-500 text-white hover:bg-red-600",
            warning: "bg-yellow-500 text-white hover:bg-yellow-600",
            success: "bg-green-500 text-white hover:bg-green-600"
        };

        return styles[intent as keyof typeof styles];
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

        return styles[radius as keyof typeof styles] || styles.md;
    };

    const badgeDotClass = "w-1.5 h-1.5 rounded-full bg-current mr-1";

    const Component = asLink ? "a" : "div";
    const linkProps = asLink ? { href, target } : {};

    return (
        <Component
            className={cn(
                badgeClass,
                sizeClasses(),
                shapeClasses(),
                radius && radiusClasses(),
                variantClasses(),
                intent && intentClasses(),
                classNames?.container,
                className
            )}
            style={{
                color:
                    variant === "outline" || variant === "dot"
                        ? color
                        : undefined,
                backgroundColor: variant === "filled" ? color : undefined,
                borderColor: variant === "outline" ? color : undefined
            }}
            onClick={onClick}
            {...linkProps}
            {...props}
        >
            {variant === "dot" && (
                <span className={cn(badgeDotClass, classNames?.dot)} />
            )}
            {leftSection && (
                <span
                    className={cn(
                        "flex items-center justify-center mr-1",
                        classNames?.leftSection
                    )}
                >
                    {leftSection}
                </span>
            )}
            <span>{children}</span>
            {rightSection && (
                <span
                    className={cn(
                        "flex items-center justify-center ml-1",
                        classNames?.rightSection
                    )}
                >
                    {rightSection}
                </span>
            )}
        </Component>
    );
};
