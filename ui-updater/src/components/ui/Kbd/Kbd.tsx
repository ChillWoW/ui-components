import React from "react";
import { cn } from "..";
import { KbdProps, KbdSize, KbdVariant } from "./types";

export const Kbd = ({
    children,
    classNames,
    className,
    size = "md",
    variant = "filled",
    asChild = false,
    onClick,
    ...props
}: KbdProps) => {
    const Comp = asChild ? React.Fragment : "kbd";

    const sizeClasses = {
        xs: "px-1 py-0.5 text-xs",
        sm: "px-1.5 py-1 text-xs",
        md: "px-2 py-1.5 text-sm",
        lg: "px-2.5 py-2 text-base",
        xl: "px-3 py-2.5 text-lg"
    };

    const variantClasses = {
        filled: "bg-[#252627] border border-[#3e4249] text-white hover:bg-[#333538]",
        subtle: "bg-[#1e1f20] border border-[#303236] text-gray-200 hover:bg-[#28292a]",
        outline:
            "bg-transparent border border-dark-400 text-gray-300 hover:bg-dark-800/40"
    };

    return (
        <Comp
            className={cn(
                "h-fit w-fit rounded-md font-mono",
                sizeClasses[size as KbdSize],
                variantClasses[variant as KbdVariant],
                classNames?.container,
                className,
                onClick && "cursor-pointer transition-colors duration-150"
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </Comp>
    );
};
