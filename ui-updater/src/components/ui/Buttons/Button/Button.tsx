import React from "react";
import { cn, Loader } from "../../_utils";
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
    intent,
    fullWidth,
    isLoading,
    active,
    radius = "md",
    ...props
}: ButtonProps) => {
    const buttonClass =
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer relative whitespace-nowrap select-none";

    const sizeClasses = {
        xs: "text-[13px] px-1.5 py-1 h-6",
        sm: "text-[13px] px-3 py-1.5 h-8",
        md: "text-[14px] px-4 py-2 h-[38px]",
        lg: "text-[15px] px-5 py-2.5 h-11",
        xl: "text-[16px] px-6 py-3 h-[52px]",
        "2xl": "text-[17px] px-7 py-3.5 h-[56px]"
    };

    const variantClasses = {
        filled: "bg-[#2c2c2c] border border-[#4a4a4a] text-white hover:bg-[#3a3a3a]",
        outline:
            "bg-transparent border border-[#5a5a5a] text-white hover:border-[#7a7a7a] hover:bg-[#2a2a2a]/30",
        subtle: "bg-transparent text-white hover:bg-[#3a3a3a] border-transparent",
        unstyled: ""
    };

    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
    };

    const intentClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        success: "bg-green-500 text-white hover:bg-green-600"
    };

    const buttonClasses = cn(
        buttonClass,
        sizeClasses[size],
        variantClasses[variant],
        radiusClasses[radius],
        intent && intentClasses[intent],
        fullWidth && "w-full",
        active && "bg-opacity-80 ring-2 ring-opacity-30" && classNames?.active,
        (disabled || isLoading) &&
            "opacity-60 cursor-not-allowed pointer-events-none",
        classNames?.container,
        className
    );

    return (
        <button
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader />
            ) : (
                leftSection && (
                    <span className={cn(classNames?.leftSection)}>
                        {leftSection}
                    </span>
                )
            )}
            {children}
            {!isLoading && rightSection && (
                <span className={cn(classNames?.rightSection)}>
                    {rightSection}
                </span>
            )}
        </button>
    );
};
