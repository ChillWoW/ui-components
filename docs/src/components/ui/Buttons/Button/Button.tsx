import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../index";
import { ButtonProps } from "./types";

export const Button = ({
    children,
    leftSection,
    rightSection,
    className,
    variant = "filled",
    size = "sm",
    disabled,
    classNames,
    ...props
}: ButtonProps) => {
    const buttonClass =
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer relative whitespace-nowrap select-none";

    const sizeClasses = {
        xs: "text-[13px] px-1.5 py-1 h-6",
        sm: "text-[13px] px-3 py-1.5 h-8",
        md: "text-[14px] px-4 py-2 h-[38px]",
        lg: "text-[15px] px-5 py-2.5 h-11",
        xl: "text-[16px] px-6 py-3 h-[52px]"
    };

    const variantClasses = {
        filled: "bg-[#252627] border border-[#3e4249] text-white hover:bg-[#333538]",
        outline:
            "bg-transparent border border-[#4a515e] text-white hover:bg-[#e9ecef]"
    };

    const buttonClasses = cn(
        buttonClass,
        sizeClasses[size],
        variantClasses[variant],
        disabled && "opacity-60 cursor-not-allowed pointer-events-none",
        classNames?.container,
        className
    );

    return (
        <button className={buttonClasses} disabled={disabled} {...props}>
            {leftSection && (
                <span className={cn(classNames?.leftSection)}>
                    {leftSection}
                </span>
            )}
            {children}
            {rightSection && (
                <span className={cn(classNames?.rightSection)}>
                    {rightSection}
                </span>
            )}
        </button>
    );
};
