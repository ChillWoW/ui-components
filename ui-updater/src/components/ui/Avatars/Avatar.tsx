import React from "react";
import { cn } from "../_utils";
import { AvatarProps } from "./types";

export const Avatar = ({
    src,
    alt = "avatar",
    placeholder,
    content,
    size = "md",
    shape = "circle",
    radius = "md",
    color,
    className,
    classNames,
    badge,
    ...props
}: AvatarProps) => {
    const avatarClass =
        "inline-flex items-center justify-center text-white bg-gray-700 relative";

    const sizeClass = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl"
    };

    const badgeSizeClass = {
        xs: "h-2 w-2 min-w-2",
        sm: "h-2.5 w-2.5 min-w-2.5",
        md: "h-3 w-3 min-w-3",
        lg: "h-3.5 w-3.5 min-w-3.5",
        xl: "h-4 w-4 min-w-4",
        "2xl": "h-5 w-5 min-w-5"
    };

    const badgePositionClass = {
        "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
        "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
        "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
        "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
    };

    const roundedClass = () => {
        if (shape === "circle") return "rounded-full";

        const styles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full"
        };

        return styles[radius] || styles.md;
    };

    const shapeClass = {
        circle: "rounded-full",
        square: roundedClass()
    };

    const displayContent = placeholder || content;

    return (
        <div
            className={cn(
                avatarClass,
                sizeClass[size],
                shapeClass[shape],
                classNames?.container,
                className
            )}
            style={{ backgroundColor: color }}
            {...props}
        >
            {src ? (
                <img
                    className={cn(
                        "w-full h-full object-cover",
                        shapeClass[shape],
                        classNames?.image
                    )}
                    src={src}
                    alt={alt}
                />
            ) : (
                <span
                    className={cn(
                        "flex items-center justify-center",
                        classNames?.placeholder
                    )}
                >
                    {displayContent}
                </span>
            )}
            {badge && (
                <div
                    className={cn(
                        "absolute flex items-center justify-center rounded-full text-[10px] ring-2 ring-white overflow-hidden",
                        badgeSizeClass[size],
                        badgePositionClass[badge.position || "top-right"],
                        badge.content &&
                            "px-1.5 min-w-fit h-auto py-0.5 text-white font-bold",
                        classNames?.badge
                    )}
                    style={{
                        backgroundColor: badge.color || "#228be6",
                        transform: `${badgePositionClass[
                            badge.position || "top-right"
                        ]
                            .split(" ")
                            .slice(2)
                            .join(" ")} ${
                            shape === "circle" ? "scale(1)" : "scale(0.9)"
                        }`
                    }}
                >
                    {badge.content}
                </div>
            )}
        </div>
    );
};
