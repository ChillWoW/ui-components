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
    color,
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
        xl: "text-[16px] px-6 py-3 h-[52px]"
    };

    const variantClasses = {
        filled: "bg-[#252627] border border-[#3e4249] text-white hover:bg-[#333538]",
        outline:
            "bg-transparent border border-[#4a515e] text-white hover:border-[#8e939f] hover:bg-[#3a3d42]/30",
        subtle: "bg-transparent text-white hover:bg-[#3a3d42]/30 border-transparent",
        link: "bg-transparent text-white hover:underline border-transparent p-0 h-auto"
    };

    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
    };

    const buttonClasses = cn(
        buttonClass,
        sizeClasses[size],
        variantClasses[variant],
        radiusClasses[radius],
        color && `bg-[${color}]`,
        fullWidth && "w-full",
        active && "!bg-opacity-80 ring-2 ring-opacity-30" && classNames?.active,
        (disabled || isLoading) &&
            "opacity-60 cursor-not-allowed pointer-events-none",
        disabled && "opacity-60 cursor-not-allowed pointer-events-none",
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
                <span
                    className="mr-2 inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                    role="status"
                    aria-label="loading"
                ></span>
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
