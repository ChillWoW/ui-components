import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../index";

export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconButtonVariant = "filled" | "outline";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    children,
    leftSection,
    rightSection,
    className,
    variant = "filled",
    size = "sm",
    disabled,
    ...props
}) => {
    const buttonClass =
        "w-fit h-fit inline-flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer relative whitespace-nowrap select-none";

    const sizeClasses = {
        xs: "px-2 py-1",
        sm: "px-3 py-2",
        md: "px-4 py-3",
        lg: "px-5 py-4",
        xl: "px-6 py-5"
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
        className
    );

    return (
        <button className={buttonClasses} disabled={disabled} {...props}>
            {leftSection && <span>{leftSection}</span>}
            {children}
            {rightSection && <span>{rightSection}</span>}
        </button>
    );
};
